<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\CategoriesResource;
use Botble\Base\Enums\Http;
use Botble\Base\Helpers\MessageResponse;
use Botble\Ecommerce\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $limit = $request->integer('limit', 10) ?: 10;


        $category = ProductCategory::paginate($limit);


        if (! $category instanceof Collection) {
            return new MessageResponse(
                message: 'Not found categories',
                code: Http::NOT_FOUND
            );
        }

        return new MessageResponse(
            message: 'Get Category',
            code: Http::OK,
            body: [
                // 'category'   => CategoriesResource::collection($category),
                'pagination' => apiGetPagination($category)
            ]
        );
    }


}
