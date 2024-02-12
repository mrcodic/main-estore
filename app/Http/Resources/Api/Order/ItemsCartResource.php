<?php

namespace App\Http\Resources\Api\Order;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemsCartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "rowId"     => $this->rowId,
            "product_id"=> $this->id,
            "qty"       => $this->qty,
            "tax"       => $this->taxRate,
            "price"     => $this->price,
            "total"     => $this->subtotal,
            "item_name" => $this->name,
            "options"   => $this->options
        ];
    }
}
