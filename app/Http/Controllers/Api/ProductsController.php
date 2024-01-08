<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Product\ProductResource;
use App\Http\Resources\Api\Product\ProductsResource;
use Botble\Base\Enums\Http;
use Botble\Base\Helpers\MessageResponse;
use Botble\Ecommerce\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;


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


        if (! $products instanceof Collection) {
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


}
