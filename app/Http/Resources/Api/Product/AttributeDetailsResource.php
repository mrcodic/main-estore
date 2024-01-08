<?php

namespace App\Http\Resources\Api\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AttributeDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"        => $this->id,
            "title"     => $this->title,
            "slug"      => $this->slug,
            "color"     => $this->color,
            "image"     => $this->image,
            "is_default"=> $this->is_default,
            "order"     => $this->order,
        ];
    }
}
