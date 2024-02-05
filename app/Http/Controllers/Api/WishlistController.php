<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Customer\WishResource;
use Botble\Base\Enums\Http;
use Botble\Base\Helpers\MessageResponse;
use Botble\Ecommerce\Models\Wishlist;
use Illuminate\Http\Request;

class WishlistController extends Controller
{

    public function create(Request $request)
    {
        if(!auth()->user() && $request->product):
            return new MessageResponse(
                message: __('Cannot Add To favourite. Please Login First!'),
                code: Http::NOT_FOUND
            );
        endif;

        $wishlist = Wishlist::where([
            'customer_id'   => auth()->id(),
            'product_id'    => $request->product
        ])->first();

        if($wishlist):
            return new MessageResponse(
                message: __('Product in favorites'),
                code: Http::NOT_FOUND
            );
        endif;

        Wishlist::create([
            'customer_id'   => auth()->id(),
            'product_id'    => $request->product,
        ]);

        return new MessageResponse(
            message: __('Done!'),
            code: Http::OK,
        );
    }


    public function index()
    {

        $wishlists = Wishlist::where([
                        'customer_id'   => auth()->id()
                    ])->paginate(10);

        if( !$wishlists ):
            return new MessageResponse(
                message: __('Not found'),
                code: Http::NOT_FOUND
            );
        endif;

        return new MessageResponse(
            message: __('Get Favorites!'),
            code: Http::OK,
            body:[
                'favourites' => WishResource::collection($wishlists),
            ]
        );
    }

    public function remove(Request $request)
    {

        $wishlist = Wishlist::where([
                        'customer_id'   => auth()->id(),
                        'product_id'    => $request->product
                    ]);

        if($wishlist->count() == 0):
            return new MessageResponse(
                message: __('Not found'),
                code: Http::NOT_FOUND
            );
        endif;

        // dd($wishlist);

        $wishlist->delete();

        return new MessageResponse(
            message: __('Done!'),
            code: Http::OK,
        );
    }


}
