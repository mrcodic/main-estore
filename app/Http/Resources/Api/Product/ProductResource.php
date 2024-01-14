<?php

namespace App\Http\Resources\Api\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"            => $this->id,
            "name"          => $this->name(),
            "price"         => $this->price,
            "images"        => $this->imgs($this->images),
            "description"   => $this->trans('description'),
            "content"       => $this->trans('content'),
            "attributes"    => AttributesResource::collection($this->productAttributeSets),
            "tags"          => TagsResource::collection($this->tags),
        ];
    }


    protected function imgs($images)
    {
        $res = [];
        foreach ($images as $img) {
            array_push($res, url('storage').'/'. $img);
        }
        return $res;
    }
}
