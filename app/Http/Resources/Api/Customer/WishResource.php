<?php

namespace App\Http\Resources\Api\Customer;

use App\Http\Resources\Api\Product\ProductsResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WishResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        $res = new ProductsResource($this->product);
        return $res;
    }
}
