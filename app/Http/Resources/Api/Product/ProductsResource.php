<?php

namespace App\Http\Resources\Api\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"    => $this->id,
            "name"  => $this->name,
            "price" => $this->price,
            "image" => $this->imgs($this->images),
        ];
    }


    protected function imgs($images)
    {
        $res = null;
        foreach ($images as $img) {
            $res = url('storage').'/'. $img;
            break;
        }
        return $res;
    }
}
