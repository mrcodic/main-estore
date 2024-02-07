<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Product\DiscountsResource;
use App\Http\Resources\Api\Product\ProductResource;
use App\Http\Resources\Api\Product\ProductsResource;
use Botble\Base\Enums\Http;
use Botble\Base\Helpers\MessageResponse;
use Botble\Ecommerce\Models\Discount;
use Botble\Ecommerce\Models\Product;
use Botble\Ecommerce\Models\ProductCategory;
use Botble\Ecommerce\Models\ProductTag;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $limit = $request->integer('limit', 10) ?: 10;

        $category_id = $request->category;
        $tag_id = $request->tag;

        $query = Product::where('stock_status', 'in_stock');
        $category_id ? $query->whereHas('categories', fn($q) => $q->where('id',$category_id)): null;
        $tag_id ? $query->whereHas('tags', fn($q) => $q->where('id',$tag_id)): null;
        $products = $query->paginate($limit);


        if (! $products instanceof LengthAwarePaginator) {
            return new MessageResponse(
                message: 'Not found products',
                code: Http::NOT_FOUND
            );
        }

        $authCustomer = $request->user('sanctum') ?? null;

        return new MessageResponse(
            message: 'Get Products',
            code: Http::OK,
            body: [
                'products'   => ProductsResource::collection($products)->user($authCustomer),
                'pagination' => apiGetPagination($products)
            ]
        );
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::find($id);

        if (! $product ) {
            return new MessageResponse(
                message: 'Not found product',
                code: Http::NOT_FOUND
            );
        }

        $query = Product::where('stock_status', 'in_stock');
        $query->whereHas('categories', fn($q) => $q->whereIn('id', $product->categories()->pluck('category_id')))
            ->orWhereHas('tags', fn($q) => $q->whereIn('id', $product->tags()->pluck('tag_id')));
        $products = $query->limit(3)->inRandomOrder()->get();

        return new MessageResponse(
            message: 'Get Products',
            code: Http::OK,
            body: [
                'product' => new ProductResource($product),
                'related_products' => ProductsResource::collection($products),
            ]
        );
    }




    /**
     * Display a listing of the resource.
     */
    public function search(Request $request)
    {

        $limit = $request->integer('limit', 10) ?: 10;


        $query = Product::where('stock_status', 'in_stock');

        $trans = DB::table('ec_products_translations')->where('name', 'LIKE', '%' . $request->name . '%')->pluck('ec_products_id')->toArray();

        if ( count($trans) >= 1) {
            $query->whereIn('id', $trans);
        }

        $query->orWhere('name', 'LIKE', '%' . $request->name . '%');

        $categories = 0;
        $tags = 0;

        if($request->category) $categories = ProductCategory::where('name', 'LIKE', '%' . $request->name . '%')->pluck('id')->toArray();
        if($request->tag) $tags = ProductTag::where('name', 'LIKE', '%' . $request->name . '%')->pluck('id')->toArray();


        $categories ? $query->whereHas('categories', fn($q) => $q->whereIn('id', $categories )): null;
        $tags ? $query->orWhereHas('tags', fn($q) => $q->whereIn('id', $tags )): null;

        $products = $query->paginate($limit);

        if (! $products instanceof LengthAwarePaginator) {
            return new MessageResponse(
                message: 'Not found products',
                code: Http::NOT_FOUND
            );
        }

        return new MessageResponse(
            message: 'Get Products',
            code: Http::OK,
            body: [
                'products'   => ProductsResource::collection($products),
                'pagination' => apiGetPagination($products)
            ]
        );
    }

    /**
     * Display a listing of the resource.
     */
    public function discount(Request $request)
    {
        $limit = $request->integer('limit', 5) ?: 5;

        $now = Carbon::now();
        $discounts = Discount::where('type', 'promotion')->where(fn($query) => $query->where('end_date' ,'>', $now )->orWhere('end_date' ,null))->paginate($limit);

        if (! $discounts instanceof LengthAwarePaginator) {
            return new MessageResponse(
                message: __('Not found discounts'),
                code: Http::NOT_FOUND
            );
        }

        return new MessageResponse(
            message: __('Get Discounts'),
            code: Http::OK,
            body: [
                'discounts'   => DiscountsResource::collection($discounts),
                'pagination' => apiGetPagination($discounts)
            ]
        );
    }

}
