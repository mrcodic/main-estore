<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CheckoutRequest;
use App\Http\Resources\Api\Order\OrderIndexResource;
use App\Http\Resources\Api\Order\OrderShowResource;
use App\Http\Resources\Api\Order\ProductsOrderResource;
use Botble\Base\Enums\Http;
use Botble\Base\Helpers\MessageResponse;
use Botble\Ecommerce\Cart\CartItem;
use Botble\Ecommerce\Enums\OrderStatusEnum;
use Botble\Ecommerce\Enums\ShippingCodStatusEnum;
use Botble\Ecommerce\Enums\ShippingMethodEnum;
use Botble\Ecommerce\Enums\ShippingStatusEnum;
use Botble\Ecommerce\Facades\Cart;
use Botble\Ecommerce\Facades\Discount;
use Botble\Ecommerce\Facades\EcommerceHelper;
use Botble\Ecommerce\Facades\OrderHelper;
use Botble\Ecommerce\Http\Requests\ApplyCouponRequest;
use Botble\Ecommerce\Http\Requests\CartRequest;
use Botble\Ecommerce\Models\Order;
use Botble\Ecommerce\Models\OrderHistory;
use Botble\Ecommerce\Models\OrderProduct;
use Botble\Ecommerce\Models\Product;
use Botble\Ecommerce\Models\Shipment;
use Botble\Ecommerce\Services\Footprints\FootprinterInterface;
use Botble\Ecommerce\Services\HandleApplyCouponService;
use Botble\Ecommerce\Services\HandleApplyPromotionsService;
use Botble\Ecommerce\Services\HandleRemoveCouponService;
use Botble\Ecommerce\Services\HandleShippingFeeService;
use Botble\Payment\Enums\PaymentStatusEnum;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Auth()->user()->orders()->paginate(9);

        if (! $orders) {
            return new MessageResponse(
                message: __('Not Found Order'),
                code: Http::NOT_FOUND
            );
        }

        return new MessageResponse(
            message: __('Show Details Order'),
            code: Http::OK,
            body:[
                'orders'=> OrderIndexResource::collection($orders),
                'pagination' => apiGetPagination($orders)
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function addToCart(CartRequest $request, $session = false)
    {
        if (! EcommerceHelper::isCartEnabled()) {
            return new MessageResponse(
                message: __('Cannot add to card'),
                code: Http::METHOD_NOT_ALLOWED
            );
        }

        $product = Product::query()->find($request->input('id'));
        $bodySession = $session ? [ 'id' => $request->input('id') ] : [];

        if (! $product) {
            return new MessageResponse(
                message: __('This product is out of stock or not exists!'),
                code: Http::NOT_ACCEPTABLE,
                body: $bodySession
            );
        }

        if ($product->variations->count() > 0 && ! $product->is_variation) {
            $product = $product->defaultVariation->product;
        }

        if ($product->isOutOfStock()) {
            return new MessageResponse(
                message: __(
                    'Product :product is out of stock!',
                    ['product' => $product->original_product->name() ?: $product->name()]
                ),
                code: Http::NOT_ACCEPTABLE,
                body: $bodySession
            );
        }

        $maxQuantity = $product->quantity;

        if (! $product->canAddToCart($request->input('qty', 1))) {
            return new MessageResponse(
                message: __('Maximum quantity is :max!', ['max' => $maxQuantity]),
                code: Http::NOT_ACCEPTABLE,
                body: $bodySession
            );
        }

        $product->quantity -= $request->input('qty', 1);

        $outOfQuantity = false;
        foreach (Cart::instance('cart')->content() as $item) {
            if ($item->id == $product->id) {
                $originalQuantity = $product->quantity;
                $product->quantity = (int)$product->quantity - $item->qty;

                if ($product->quantity < 0) {
                    $product->quantity = 0;
                }

                if ($product->isOutOfStock()) {
                    $outOfQuantity = true;

                    break;
                }

                $product->quantity = $originalQuantity;
            }
        }

        if (
            EcommerceHelper::isEnabledProductOptions() &&
            $product->original_product->options()->where('required', true)->exists()
        ) {
            if (! $request->input('options')) {
                return new MessageResponse(
                    message: __('Please select product options!'),
                    code: Http::NOT_ACCEPTABLE,
                    body: $bodySession
                );
            }

            $requiredOptions = $product->original_product->options()->where('required', true)->get();

            $message = null;

            foreach ($requiredOptions as $requiredOption) {
                if (! $request->input('options.' . $requiredOption->id . '.values')) {
                    $message .= trans(
                        'plugins/ecommerce::product-option.add_to_cart_value_required',
                        ['value' => $requiredOption->name]
                    );
                }
            }

            if ($message) {
                return new MessageResponse(
                    message: __('Please select product options!'),
                    code: Http::NOT_ACCEPTABLE,
                    body: $bodySession
                );
            }
        }

        if ($outOfQuantity) {
            return new MessageResponse(
                message:  __(
                    'Product :product is out of stock!',
                    ['product' => $product->original_product->name() ?: $product->name()]
                ),
                code: Http::NOT_ACCEPTABLE,
                body: $bodySession
            );
        }

        // $cartItems = OrderHelper::handleAddCart($product, $request);

        $taxRate = $product->original_product->total_taxes_percentage;
        $price = $product->price * $request->input('qty');

        $body = [
            'tax'   =>  ($price *  $taxRate)/100 ,
            'total' => $price
        ];

        if($session):
            return $body = OrderHelper::handleAddCart($product, $request);
        endif;

        return new MessageResponse(
            message: __('You can add to cart'),
            code: Http::OK,
            body: $body
        );
    }



    public function postCheckout(
        CheckoutRequest $request,
        HandleShippingFeeService $shippingFeeService,
        HandleApplyCouponService $applyCouponService,
        HandleRemoveCouponService $removeCouponService,
        HandleApplyPromotionsService $handleApplyPromotionsService
    ) {

        if (! EcommerceHelper::isCartEnabled()) {
            return new MessageResponse(
                message: 'Cannot add to card',
                code: Http::METHOD_NOT_ALLOWED
            );
        }

        $productsId = array_column($request->products, 'id');

        $products = Product::whereIn('id' , $productsId)->get();

        if (! count($products)) {
            return new MessageResponse(
                message: __('No products in cart'),
                code: Http::NOT_ACCEPTABLE
            );
        }

        if (
            EcommerceHelper::isEnabledSupportDigitalProducts() &&
            ! EcommerceHelper::canCheckoutForDigitalProducts($products)
        ) {
                return new MessageResponse(
                    message: __('Your shopping cart has digital product(s), so you need to sign in to continue!'),
                    code: Http::NOT_ACCEPTABLE
                );
        }

        $subTotal = 0;
        $allTax = 0;
        $endTotal = 0;
        $cartItems = [];

        foreach ($products as $product) {

            foreach($request->products as $value){
                $qty = $value['id'] == $product->id ?$value['qty']: 1;
                if($value['id'] == $product->id)
                    break;
            }
            $totalP = $product->price * $qty;

            $subTotal += $totalP;
            $allTax += ($totalP * $product->original_product->total_taxes_percentage)/100;
            $endTotal =  $subTotal + $allTax;


            $addToCartSession = $this->addToCart(new CartRequest(['id'=> $product->id,'qty'=> $qty]), true);

            if(isset($addToCartSession->message)) return $addToCartSession;

            array_push( $cartItems, reset($addToCartSession));
            $thisCartItem = new CartItem(reset($addToCartSession)['id'], reset($addToCartSession)['name'], reset($addToCartSession)['price'], reset($addToCartSession)['options']);
            $thisCartItem->setQuantity(reset($addToCartSession)['qty']);
            $product->setAttribute('cartItem', $thisCartItem);
        }

        // dd($cartItems);
        // dd($subTotal, $allTax, $endTotal);

        if (EcommerceHelper::getMinimumOrderAmount() > $subTotal) {
            return new MessageResponse(
                message: __('Minimum order amount is :amount, you need to buy more :more to place an order!', [
                    'amount' => format_price(EcommerceHelper::getMinimumOrderAmount()),
                    'more' => format_price(
                        EcommerceHelper::getMinimumOrderAmount() - Cart::instance('cart')
                            ->rawSubTotal()
                    ),
                ]),
                code: Http::NOT_FOUND
            );
        }

        $countCart = 0;
        foreach($request->products as $value){
            $countCart += $value['qty'];
        }

        $paymentMethod = $request->input('payment_method');

        $isAvailableShipping = EcommerceHelper::isAvailableShipping($products);

        $shippingMethodInput = $request->input('shipping_method', ShippingMethodEnum::DEFAULT);

        $promotionDiscountAmount = $handleApplyPromotionsService->getPromotionDiscountAmount([
                                        'rawTotal' => $endTotal,
                                        'cartItems' => $cartItems,
                                        'countCart' => $countCart,
                                        'productItems' => $products,
                                    ]);

        // $couponDiscountAmount = Arr::get($sessionData, 'coupon_discount_amount');
        $rawTotal = $endTotal;
        // $orderAmount = max($rawTotal - $promotionDiscountAmount - $couponDiscountAmount, 0);
        $orderAmount = max($rawTotal - $promotionDiscountAmount , 0);

        $shippingAmount = 0;

        $shippingData = [];

        $addresses = auth()->user()->addresses;
        $address = $addresses->where('id', $request->address_id )->first() ?? $addresses->where('is_default', true)->first();

        if(!$address && !($request->country || $request->city || $request->zip_code)):
            return new MessageResponse(
                message: __('Should add address!'),
                code: Http::NOT_FOUND
            );
        endif;

        $userData = [
            "name"      => $request->name     ?? $address ? $address->name  :auth()->user()->name,
            "email"     => $request->email    ?? $address ? $address->email :auth()->user()->email,
            "phone"     => $request->phone    ?? $address ? $address->phone :auth()->user()->phone,
            "country"   => $request->country  ?? $address ? $address->country :null,
            "state"     => $request->state    ?? $address ? $address->state :null,
            "city"      => $request->city     ?? $address ? $address->city :null,
            "address"   => $request->address  ?? $address ? $address->address :null,
            "zip_code"  => $request->zip_code ?? $address ? $address->zip_code :null
        ];

        if ($isAvailableShipping) {
            $origin = EcommerceHelper::getOriginAddress();
            $shippingData = EcommerceHelper::getShippingData(
                $products,
                $userData,
                $origin,
                $orderAmount,
                $paymentMethod
            );

            $shippingMethodData = $shippingFeeService->execute(
                $shippingData,
                $shippingMethodInput,
                $request->input('shipping_option')
            );

            $shippingMethod = Arr::first($shippingMethodData);
            if (! $shippingMethod) {
                throw ValidationException::withMessages([
                    'shipping_method' => trans(
                        'validation.exists',
                        ['attribute' => trans('plugins/ecommerce::shipping.shipping_method')]
                    ),
                ]);
            }

            $shippingAmount = Arr::get($shippingMethod, 'price', 0);

            if (get_shipping_setting('free_ship', $shippingMethodInput)) {
                $shippingAmount = 0;
            }
        }

        if ($request->applied_coupon_code) {
            $discount = $applyCouponService->getCouponData($request->applied_coupon_code, ['raw_total'=> $endTotal]);
            if (empty($discount)) {
                $removeCouponService->execute();
            } else {
                $shippingAmount = $request->is_free_shipping ? 0 : $shippingAmount;
            }
        }

        $currentUserId = 0;
        if (auth()->check()) {
            $currentUserId = auth()->id();
        }

        $orderAmount += (float)$shippingAmount;

        $token = OrderHelper::getOrderSessionToken();
        $request->merge([
            'amount' => $orderAmount ?: 0,
            'currency' => $request->input('currency', strtoupper(get_application_currency()->title)),
            'user_id' => $currentUserId,
            'shipping_method' => $isAvailableShipping ? $shippingMethodInput : '',
            'shipping_option' => $isAvailableShipping ? $request->input('shipping_option') : null,
            'shipping_amount' => (float)$shippingAmount,
            'tax_amount' => Cart::instance('cart')->rawTax(),
            'sub_total' => Cart::instance('cart')->rawSubTotal(),
            'coupon_code' => session('applied_coupon_code'),
            'discount_amount' => $promotionDiscountAmount ,//+ $couponDiscountAmount,
            'status' => OrderStatusEnum::PENDING,
            'token' => $token,
        ]);

        $order = Order::query()->where(compact('token'))->first();

        $order = $this->createOrderFromData($request->input(), $order);

        OrderHistory::query()->create([
            'action' => 'create_order_from_payment_page',
            'description' => __('Order was created from checkout page'),
            'order_id' => $order->getKey(),
        ]);

        if ($isAvailableShipping) {
            Shipment::query()->create([
                'order_id' => $order->getKey(),
                'user_id' => 0,
                'weight' => $shippingData ? Arr::get($shippingData, 'weight') : 0,
                'cod_amount' => (is_plugin_active(
                    'payment'
                ) && $order->payment->id && $order->payment->status != PaymentStatusEnum::COMPLETED) ? $order->amount : 0,
                'cod_status' => ShippingCodStatusEnum::PENDING,
                'type' => $order->shipping_method,
                'status' => ShippingStatusEnum::PENDING,
                'price' => $order->shipping_amount,
                'rate_id' => $shippingData ? Arr::get($shippingMethod, 'id', '') : '',
                'shipment_id' => $shippingData ? Arr::get($shippingMethod, 'shipment_id', '') : '',
                'shipping_company_name' => $shippingData ? Arr::get($shippingMethod, 'company_name', '') : '',
            ]);
        }

        if (
            EcommerceHelper::isDisplayTaxFieldsAtCheckoutPage() &&
            $request->boolean('with_tax_information')
        ) {
            $order->taxInformation()->create($request->input('tax_information'));
        }

        if ($appliedCouponCode = session('applied_coupon_code')) {
            Discount::getFacadeRoot()->afterOrderPlaced($appliedCouponCode);
        }

        OrderProduct::query()->where(['order_id' => $order->getKey()])->delete();

        foreach (Cart::instance('cart')->content() as $cartItem) {
            $product = Product::query()->find($cartItem->id);

            if (! $product) {
                continue;
            }

            $data = [
                'order_id' => $order->getKey(),
                'product_id' => $cartItem->id,
                'product_name' => $cartItem->name,
                'product_image' => $product->original_product->image,
                'qty' => $cartItem->qty,
                'weight' => Arr::get($cartItem->options, 'weight', 0),
                'price' => $cartItem->price,
                'tax_amount' => $cartItem->tax,
                'options' => $cartItem->options,
                'product_type' => $product?->product_type,
            ];

            if ($cartItem->options['options']) {
                $data['product_options'] = $cartItem->options['options'];
            }

            OrderProduct::query()->create($data);
        }

        $request->merge([
            'order_id' => $order->getKey(),
        ]);


        if (! is_plugin_active('payment') || ! $orderAmount) {
            OrderHelper::processOrder($order->getKey());

            return redirect()->to(route('public.checkout.success', OrderHelper::getOrderSessionToken()));
        }

        $paymentData = [
            'error' => false,
            'message' => false,
            'amount' => (float)format_price($order->amount, null, true),
            'currency' => strtoupper(get_application_currency()->title),
            'type' => $request->input('payment_method'),
            'charge_id' => null,
        ];

        $paymentData = apply_filters(FILTER_ECOMMERCE_PROCESS_PAYMENT, $paymentData, $request);

        if ($checkoutUrl = Arr::get($paymentData, 'checkoutUrl')) {
            // return $response
            //     ->setError($paymentData['error'])
            //     ->setNextUrl($checkoutUrl)
            //     ->setData(['checkoutUrl' => $checkoutUrl])
            //     ->withInput()
            //     ->setMessage($paymentData['message']);
            return new MessageResponse(
                message: $paymentData['message'],
                code: Http::NOT_ACCEPTABLE,
                body: [
                    'order_token' => $token
                ]
            );
        }

        if ($paymentData['error'] || ! $paymentData['charge_id']) {
            return new MessageResponse(
                message: __('Checkout error!'),
                code: Http::NOT_ACCEPTABLE,
                body: [
                    'order_token' => $token
                ]
            );
        }

        return new MessageResponse(
            message: __('Checkout successfully!'),
            code: Http::OK,
            body: [
                'order_token' => $token
            ]
        );
    }

    protected function createOrderFromData(array $data, ?Order $order): Order|null|false
    {
        $data['is_finished'] = false;

        if ($order) {
            $order->fill($data);
            $order->save();
        } else {
            $order = Order::query()->create($data);
        }

        if (! $order->referral()->count()) {
            $referrals = app(FootprinterInterface::class)->getFootprints();

            if ($referrals) {
                $order->referral()->create($referrals);
            }
        }

        do_action('ecommerce_create_order_from_data', $data, $order);

        return $order;
    }


    public function postApplyCoupon(
        ApplyCouponRequest $request,
        HandleApplyCouponService $handleApplyCouponService,
    ) {
        if (! EcommerceHelper::isCartEnabled()) {
            return new MessageResponse(
                message: __('No products in cart'),
                code: Http::NOT_ACCEPTABLE
            );
        }
        $result = [
            'error' => false,
            'message' => '',
        ];
        if (is_plugin_active('marketplace')) {
            $result = apply_filters(HANDLE_POST_APPLY_COUPON_CODE_ECOMMERCE, $result, $request);
        } else {
            $result = $handleApplyCouponService->execute($request->input('coupon_code'), [], ['rawTotal' => (float)$request->total]);
        }

        if ($result['error']) {
            return new MessageResponse(
                message: $result['message'],
                code: Http::NOT_ACCEPTABLE
            );
        }

        $couponCode = $request->input('coupon_code');

        return new MessageResponse(
            message: __('Applied coupon ":code" successfully!', ['code' => $couponCode]),
            code: Http::OK,
            body: [
                'discount_amount' => $result['data']['discount_amount']
            ]
        );
    }




    public function getCheckoutSuccess(Request $request)
    {
        if (! EcommerceHelper::isCartEnabled()) {
            return new MessageResponse(
                message: __('No products in cart'),
                code: Http::NOT_ACCEPTABLE
            );
        }

        $order = Order::query()
            ->where('token', $request->order_token)
            ->with(['address', 'products', 'taxInformation'])
            ->orderByDesc('id')
            ->first();


        if (! $order) {
            return new MessageResponse(
                message: __('Not Found Order'),
                code: Http::NOT_FOUND
            );
        }

        if (is_plugin_active('payment') && (float)$order->amount && ! $order->payment_id) {
            return new MessageResponse(
                message: __('Payment failed!'),
                code: Http::NOT_ACCEPTABLE
            );
        }

        if (is_plugin_active('marketplace')) {
            return apply_filters(PROCESS_GET_CHECKOUT_SUCCESS_IN_ORDER, $request->order_token);
        }

        OrderHelper::clearSessions($request->order_token);

        // $products = collect();

        // $productsIds = $order->products->pluck('product_id')->all();

        // if (! empty($productsIds)) {
        //     $products = get_products([
        //         'condition' => [
        //             ['ec_products.id', 'IN', $productsIds],
        //         ],
        //         'select' => [
        //             'ec_products.id',
        //             'ec_products.images',
        //             'ec_products.name',
        //             'ec_products.price',
        //             'ec_products.sale_price',
        //             'ec_products.sale_type',
        //             'ec_products.start_date',
        //             'ec_products.end_date',
        //             'ec_products.sku',
        //             'ec_products.order',
        //             'ec_products.created_at',
        //             'ec_products.is_variation',
        //         ],
        //         'with' => [
        //             'variationProductAttributes',
        //         ],
        //     ]);
        // }

        // dd($products);
        return new MessageResponse(
            message: __('Show Details Order'),
            code: Http::OK,
            body:[
                'order'=> new OrderShowResource($order),
                'productes'=> ProductsOrderResource::collection($order->products) ,
            ]
        );
    }


}
