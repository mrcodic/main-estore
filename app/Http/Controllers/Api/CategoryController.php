<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\CategoriesResource;
use Botble\Base\Enums\Http;
use Botble\Base\Helpers\MessageResponse;
use Botble\Ecommerce\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = $request->integer('limit', 10) ?: 10;


        $categories = ProductCategory::paginate($limit);

        if (! $categories instanceof LengthAwarePaginator) {
            return new MessageResponse(
                message: 'Not found categories',
                code: Http::NOT_FOUND
            );
        }

        return new MessageResponse(
            message: 'Get Category',
            code: Http::OK,
            body: [
                'category'   => CategoriesResource::collection($categories),
                'pagination' => apiGetPagination($categories)
            ]
        );
    }


}
