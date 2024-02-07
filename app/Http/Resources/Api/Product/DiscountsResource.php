<?php

namespace App\Http\Resources\Api\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DiscountsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'            => $this->id,
            'title'         => $this->title,
            'value_discount'=> $this->value,
            'type_discount' => $this->type_option,
            'product_qty'   => $this->product_quantity,
            'start_date'    => $this->start_date->format('d/m/Y') ?? null,
            'target'        => $this->target,
            'image'         => $this->imgs(),
        ];
    }


    protected function imgs()
    {
        $img = null;

        if ($this->target == 'products-by-category'){
            $img = $this->productCategories->first()->image;
        }else if($this->target == 'specific-product'){
            $imgs = $this->products->first()->images;
            $img = $imgs[0];
        }else if($this->target == 'group-products'){
            $img = $this->productCollections->first()->image;
        }

        $res = $img ? url('storage').'/'. $img : null;

        return $res;
    }
}
