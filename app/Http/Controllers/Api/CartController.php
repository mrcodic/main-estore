<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Order\ItemsCartResource;
use Botble\Base\Enums\Http;
use Botble\Base\Helpers\MessageResponse;
use Botble\Ecommerce\Facades\CartApi;
use Botble\Ecommerce\Facades\EcommerceHelper;
use Botble\Ecommerce\Facades\OrderHelper;
use Botble\Ecommerce\Http\Requests\CartRequest;
use Botble\Ecommerce\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{

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
            'items' => array_values(ItemsCartResource::collection($cartItems['items'])->resolve())
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


    /**
     * Show the form for creating a new resource.
     */
    public function show(Request $request)
    {

        $customer =  $request->user('sanctum')?->id ??null;
        $cartItems = OrderHelper::getCartFromUserOrToken($request->token_cart, $customer);

        if(!$cartItems):
            return new MessageResponse(
                message: __('Not found cart'),
                code: Http::NOT_FOUND
            );
        endif;

        $body = [
            'token_cart'  =>  $cartItems['token_cart'],
            'items' => array_values(ItemsCartResource::collection($cartItems['items'])->resolve())
        ];

        return new MessageResponse(
            message: __('Show cart'),
            code: Http::OK,
            body: $body
        );
    }


    /**
     * Show the form for creating a new resource.
     */
    public function linkCartToCustomer(Request $request)
    {

        if(!$request->token_cart):
            return new MessageResponse(
                message: __('Should send "token_cart"'),
                code: Http::NOT_FOUND
            );
        endif;


        $customer =  $request->user('sanctum')?->id ??null;
        $cartFromToken = OrderHelper::getCartFromUserOrToken($request->token_cart, null);

        $cartFromCustomer = OrderHelper::getCartFromUserOrToken(null, $customer);

        if(!$cartFromCustomer):

            OrderHelper::addItemToCartWithContent($cartFromToken['token_cart'] ,$cartFromToken['items'], $customer);

            return new MessageResponse(
                message: __('Linked cart by customer'),
                code: Http::OK,
                body:[
                    'token_cart' =>$cartFromToken['token_cart']
                ]
            );
        endif;

        $content = $cartFromCustomer['items'];
        foreach ($cartFromToken['items'] as $item) {
            $content->put($item->rowId, $item);
        }

        OrderHelper::addItemToCartWithContent($cartFromCustomer['token_cart'] ,$content, $customer);
        OrderHelper::restoreCart($cartFromToken['token_cart']);


        return new MessageResponse(
            message: __('Linked cart by customer'),
            code: Http::OK,
            body:[
                'token_cart' =>$cartFromCustomer['token_cart']
            ]
        );
    }


    public function restoreCart(Request $request)
    {

        if(!$request->token_cart && ! $request->user('sanctum')?->id):
            return new MessageResponse(
                message: __('Should send "token_cart"'),
                code: Http::NOT_FOUND
            );
        endif;

        $customer =  $request->user('sanctum')?->id ??null;

        OrderHelper::restoreCart($request->token_cart, $customer);

        return new MessageResponse(
            message: __('Restore cart'),
            code: Http::OK
        );
    }

    public function removeRow(Request $request)
    {

        if(!$request->token_cart && ! $request->user('sanctum')?->id):
            return new MessageResponse(
                message: __('Should send "token_cart"'),
                code: Http::NOT_FOUND
            );
        endif;

        if(!$request->row_id):
            return new MessageResponse(
                message: __('Should send "row_id"'),
                code: Http::NOT_FOUND
            );
        endif;

        $customer =  $request->user('sanctum')?->id ??null;

        $cart = OrderHelper::getCartFromUserOrToken($request->token_cart, $customer);

        if(!$cart):
            return new MessageResponse(
                message: __('Not Found Cart'),
                code: Http::NOT_FOUND
            );
        endif;

        $content = $cart['items'];

        if(!$content->has($request->row_id)):
            return new MessageResponse(
                message: __('Not Found Cart'),
                code: Http::NOT_FOUND
            );
        endif;
        $content->pull($request->row_id);

        OrderHelper::addItemToCartWithContent($cart['token_cart'] ,$content, $customer);

        return new MessageResponse(
            message: __('Restore cart'),
            code: Http::OK
        );
    }

    public function EditRow(Request $request)
    {

        if(!$request->token_cart && ! $request->user('sanctum')?->id):
            return new MessageResponse(
                message: __('Should send "token_cart"'),
                code: Http::NOT_FOUND
            );
        endif;

        if(!$request->row_id):
            return new MessageResponse(
                message: __('Should send "row_id"'),
                code: Http::NOT_FOUND
            );
        endif;

        $customer =  $request->user('sanctum')?->id ??null;

        $cart = OrderHelper::getCartFromUserOrToken($request->token_cart, $customer);

        if(!$cart):
            return new MessageResponse(
                message: __('Not Found Cart'),
                code: Http::NOT_FOUND
            );
        endif;

        $content = $cart['items'];

        if(!$content->has($request->row_id)):
            return new MessageResponse(
                message: __('Not Found Cart'),
                code: Http::NOT_FOUND
            );
        endif;

        $request->qty     ? $content->get($request->row_id)->qty = $request->qty :null;
        $request->options ? $content->get($request->row_id)->options = $request->options :null;

        OrderHelper::addItemToCartWithContent($cart['token_cart'] ,$content, $customer);

        return new MessageResponse(
            message: __('Edit cart'),
            code: Http::OK
        );
    }


}
