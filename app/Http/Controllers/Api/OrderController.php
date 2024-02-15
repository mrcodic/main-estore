<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CheckoutRequest;
use App\Http\Resources\Api\Order\AddressOrderResource;
use App\Http\Resources\Api\Order\ItemsCartResource;
use App\Http\Resources\Api\Order\OrderIndexResource;
use App\Http\Resources\Api\Order\OrderShowResource;
use App\Http\Resources\Api\Order\ProductsOrderResource;
use Botble\Base\Enums\Http;
use Botble\Base\Facades\BaseHelper;
use Botble\Base\Helpers\MessageResponse;
use Botble\Ecommerce\Cart\CartItem;
use Botble\Ecommerce\Enums\OrderStatusEnum;
use Botble\Ecommerce\Enums\ShippingCodStatusEnum;
use Botble\Ecommerce\Enums\ShippingMethodEnum;
use Botble\Ecommerce\Enums\ShippingStatusEnum;
use Botble\Ecommerce\Facades\CartApi;
use Botble\Ecommerce\Facades\Discount;
use Botble\Ecommerce\Facades\EcommerceHelper;
use Botble\Ecommerce\Facades\OrderHelper;
use Botble\Ecommerce\Http\Requests\ApplyCouponRequest;
use Botble\Ecommerce\Http\Requests\CartRequest;
use Botble\Ecommerce\Models\Address;
use Botble\Ecommerce\Models\Customer;
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
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
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
        foreach (CartApi::instance('cart')->content() as $item) {
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


        $cartItems = OrderHelper::handleAddCartApi($request->token_cart ,$product, $request);

        $body = [
            'token_cart'  =>  $cartItems['token_cart'],
            'items' => ItemsCartResource::collection($cartItems['items'])
        ];

        if($session):
            return $body = OrderHelper::handleAddCart($product, $request);
        endif;

        return new MessageResponse(
            message: __('Product added to cart'),
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

        $cart = OrderHelper::getCartFromUserOrToken($request->token_cart, $request->user()->id);

        $products = CartApi::instance('cart')->products($cart['items']);

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
        $cartItems = $cart['items'];

        // dd($cartItems);
        // foreach ($products as $product) {

        //     foreach($request->products as $value){
        //         $qty = $value['id'] == $product->id ?$value['qty']: 1;
        //         if($value['id'] == $product->id)
        //             break;
        //     }
        //     $totalP = $product->price * $qty;

        //     $subTotal += $totalP;
        //     $allTax += ($totalP * $product->original_product->total_taxes_percentage)/100;
        //     $endTotal =  $subTotal + $allTax;


        //     $addToCartSession = $this->addToCart(new CartRequest(['id'=> $product->id,'qty'=> $qty]), true);

        //     if(isset($addToCartSession->message)) return $addToCartSession;

        //     array_push( $cartItems, reset($addToCartSession));
        //     $thisCartItem = new CartItem(reset($addToCartSession)['id'], reset($addToCartSession)['name'], reset($addToCartSession)['price'], reset($addToCartSession)['options']);
        //     $thisCartItem->setQuantity(reset($addToCartSession)['qty']);
        //     $product->setAttribute('cartItem', $thisCartItem);
        // }

        if (EcommerceHelper::getMinimumOrderAmount() > CartApi::instance('cart')->rawSubTotal($cartItems)) {
            return new MessageResponse(
                message: __('Minimum order amount is :amount, you need to buy more :more to place an order!', [
                    'amount' => format_price(EcommerceHelper::getMinimumOrderAmount()),
                    'more' => format_price(
                        EcommerceHelper::getMinimumOrderAmount() - CartApi::instance('cart')
                            ->rawSubTotal($cartItems)
                    ),
                ]),
                code: Http::NOT_FOUND
            );
        }

        $token = $cart['token_cart'];

        $sessionData = OrderHelper::getOrderSessionData($token);

        $sessionData = $this->processOrderData($token, $sessionData, $cartItems, $request, true);

        $countCart = 0;

        foreach ($products as $product) {
            if ($product->isOutOfStock()) {
                return new MessageResponse(
                    message: __('Product :product is out of stock!', ['product' => $product->original_product->name()]),
                    code: Http::NOT_FOUND
                );
            }
        }

        $paymentMethod = $request->input('payment_method');
        do_action('ecommerce_post_checkout', $products, $request, $token, $sessionData);

        if (is_plugin_active('marketplace')) {
            return apply_filters(
                HANDLE_PROCESS_POST_CHECKOUT_ORDER_DATA_ECOMMERCE,
                $products,
                $request,
                $token,
                $sessionData,
                null
            );
        }

        $isAvailableShipping = EcommerceHelper::isAvailableShipping($products);

        $shippingMethodInput = $request->input('shipping_method', ShippingMethodEnum::DEFAULT);

        $promotionDiscountAmount = $handleApplyPromotionsService->execute($token);
        // $promotionDiscountAmount = $handleApplyPromotionsService->getPromotionDiscountAmount([
        //                                 'rawTotal' => $endTotal,
        //                                 'cartItems' => $cartItems,
        //                                 'countCart' => $countCart,
        //                                 'productItems' => $products,
        //                             ]);

        $couponDiscountAmount = Arr::get($sessionData, 'coupon_discount_amount');
        $rawTotal = CartApi::instance('cart')->rawTotal($cartItems);
        $orderAmount = max($rawTotal - $promotionDiscountAmount - $couponDiscountAmount, 0);

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

        if ($isAvailableShipping) {
            $origin = EcommerceHelper::getOriginAddress();
            $shippingData = EcommerceHelper::getShippingData(
                $products,
                $sessionData,
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

        $request->merge([
            'amount' => $orderAmount ?: 0,
            'currency' => $request->input('currency', strtoupper(get_application_currency()->title)),
            'user_id' => $currentUserId,
            'shipping_method' => $isAvailableShipping ? $shippingMethodInput : '',
            'shipping_option' => $isAvailableShipping ? $request->input('shipping_option') : null,
            'shipping_amount' => (float)$shippingAmount,
            'tax_amount' => CartApi::instance('cart')->rawTax($cartItems),
            'sub_total' => CartApi::instance('cart')->rawSubTotal($cartItems),
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

        foreach ($cartItems as $cartItem) {
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
            OrderHelper::restoreCart($token);

            return new MessageResponse(
                message: __('Checkout successfully!'),
                code: Http::OK,
                body: [
                    'order_token' => $token
                ]
            );
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

        if ($paymentData['error'] || ! $paymentData['charge_id']) {
            return new MessageResponse(
                message: __('Checkout error!'),
                code: Http::NOT_ACCEPTABLE,
                body: [
                    'order_token' => $token
                ]
            );
        }

        OrderHelper::restoreCart($token);

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
                'address'=> new AddressOrderResource($order->address),
                'productes'=> ProductsOrderResource::collection($order->products) ,
            ]
        );
    }




    protected function processOrderData(
        string $token,
        array $sessionData,
        $content,
        Request $request,
        bool $finished = false
    ): array {
        if ($request->has('billing_address_same_as_shipping_address')) {
            $sessionData['billing_address_same_as_shipping_address'] = $request->input(
                'billing_address_same_as_shipping_address'
            );
        }

        if ($request->has('billing_address')) {
            $sessionData['billing_address'] = $request->input('billing_address');
        }

        if ($request->has('address.address_id')) {
            $sessionData['is_new_address'] = $request->input('address.address_id') == 'new';
        }

        if ($request->input('address', [])) {

            if (! isset($sessionData['created_account']) && $request->input('create_account') == 1) {
                $validator = Validator::make($request->input(), [
                    'password' => 'required|min:6',
                    'password_confirmation' => 'required|same:password',
                    'address.email' => 'required|max:60|min:6|email|unique:ec_customers,email',
                    'address.name' => 'required|min:3|max:120',
                ]);

                if (! $validator->fails()) {
                    $customer = Customer::query()->create([
                        'name' => BaseHelper::clean($request->input('address.name')),
                        'email' => BaseHelper::clean($request->input('address.email')),
                        'phone' => BaseHelper::clean($request->input('address.phone')),
                        'password' => Hash::make($request->input('password')),
                    ]);

                    auth()->attempt([
                        'email' => $request->input('address.email'),
                        'password' => $request->input('password'),
                    ], true);

                    event(new Registered($customer));

                    $sessionData['created_account'] = true;

                    $address = Address::query()
                        ->create(
                            array_merge($request->input('address'), [
                                'customer_id' => $customer->id,
                                'is_default' => true,
                            ])
                        );

                    $request->merge(['address.address_id' => $address->id]);
                    $sessionData['address_id'] = $address->id;
                }
            }

            if ($finished && auth()->check() && $request->address["save_new_address"]) {
                $customer = auth()->user();
                if ($customer->addresses->count() == 0 || $request->input('address.address_id') == 'new') {
                    $address = Address::query()
                        ->create(
                            array_merge($request->input('address', []), [
                                'customer_id' => auth()->id(),
                                'is_default' => $customer->addresses->count() == 0,
                            ])
                        );

                    $request->merge(['address.address_id' => $address->id]);
                    $sessionData['address_id'] = $address->id;
                }
            }
        }

        $address = null;

        if (($addressId = $request->input('address.address_id')) && $addressId !== 'new') {
            $address = Address::query()->find($addressId);
            if ($address) {
                $sessionData['address_id'] = $address->getKey();
            }
        } elseif (auth()->check() && ! Arr::get($sessionData, 'address_id')) {
            $address = Address::query()->where([
                'customer_id' => auth()->id(),
                'is_default' => true,
            ])->first();

            if ($address) {
                $sessionData['address_id'] = $address->id;
            }
        }

        $addressData = [
            'billing_address_same_as_shipping_address' => Arr::get(
                $sessionData,
                'billing_address_same_as_shipping_address',
                true
            ),
            'billing_address' => Arr::get($sessionData, 'billing_address', []),
        ];

        if (! empty($address)) {
            $addressData = [
                'name' => $address->name,
                'phone' => $address->phone,
                'email' => $address->email,
                'country' => $address->country,
                'state' => $address->state,
                'city' => $address->city,
                'address' => $address->address,
                'zip_code' => $address->zip_code,
                'address_id' => $address->id,
            ];
        } elseif ($addressFromInput = (array)$request->input('address', [])) {
            $addressData = $addressFromInput;
        }

        $addressData = OrderHelper::cleanData($addressData);

        $sessionData = array_merge($sessionData, $addressData);

        $products = CartApi::instance('cart')->products($content);
        if (is_plugin_active('marketplace')) {
            $sessionData = apply_filters(
                HANDLE_PROCESS_ORDER_DATA_ECOMMERCE,
                $products,
                $token,
                $sessionData,
                $request
            );

            OrderHelper::setOrderSessionData($token, $sessionData);

            return $sessionData;
        }

        if (! isset($sessionData['created_order'])) {
            $currentUserId = 0;
            if (auth()->check()) {
                $currentUserId = auth()->id();
            }

            $request->merge([
                'amount' => CartApi::instance('cart')->rawTotal(),
                'user_id' => $currentUserId,
                'shipping_method' => $request->input('shipping_method', ShippingMethodEnum::DEFAULT),
                'shipping_option' => $request->input('shipping_option'),
                'shipping_amount' => 0,
                'tax_amount' => CartApi::instance('cart')->rawTax($content),
                'sub_total' => CartApi::instance('cart')->rawSubTotal($content),
                'coupon_code' => session('applied_coupon_code'),
                'discount_amount' => 0,
                'status' => OrderStatusEnum::PENDING,
                'is_finished' => false,
                'token' => $token,
            ]);

            $order = Order::query()->where(compact('token'))->first();

            $order = $this->createOrderFromData($request->input(), $order);

            $sessionData['created_order'] = true;
            $sessionData['created_order_id'] = $order->getKey();
        }

        if (! empty($address)) {
            $addressData['order_id'] = $sessionData['created_order_id'];
        } elseif ((array)$request->input('address', [])) {
            $addressData = array_merge(
                ['order_id' => $sessionData['created_order_id']],
                (array)$request->input('address', [])
            );
        }

        $sessionData['is_save_order_shipping_address'] = $request->save_new_address ?? EcommerceHelper::isSaveOrderShippingAddress($products);

        $sessionData = OrderHelper::checkAndCreateOrderAddress($addressData, $sessionData);

        if (! isset($sessionData['created_order_product'])) {
            $weight = 0;
            foreach (CartApi::instance('cart')->content() as $cartItem) {
                $product = Product::query()->find($cartItem->id);
                if ($product && $product->weight) {
                    $weight += $product->weight * $cartItem->qty;
                }
            }

            $weight = EcommerceHelper::validateOrderWeight($weight);

            OrderProduct::query()->where(['order_id' => $sessionData['created_order_id']])->delete();

            foreach (CartApi::instance('cart')->content() as $cartItem) {
                $product = Product::query()->find($cartItem->id);

                if (! $product) {
                    continue;
                }

                $data = [
                    'order_id' => $sessionData['created_order_id'],
                    'product_id' => $cartItem->id,
                    'product_name' => $cartItem->name,
                    'product_image' => $product->original_product->image,
                    'qty' => $cartItem->qty,
                    'weight' => $weight,
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

            $sessionData['created_order_product'] = CartApi::instance('cart')->getLastUpdatedAt();
        }

        OrderHelper::setOrderSessionData($token, $sessionData);

        return $sessionData;
    }

}
