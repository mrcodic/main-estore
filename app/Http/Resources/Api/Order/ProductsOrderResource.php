<?php

namespace App\Http\Resources\Api\Order;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductsOrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            "id"    => $this->id,
            "name"  => $this->product->name(),
            "price" => $this->price,
            "image" => $this->imgs($this->product->images),
            "qry"   => $this->qty,
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
