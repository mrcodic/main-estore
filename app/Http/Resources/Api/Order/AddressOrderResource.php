<?php

namespace App\Http\Resources\Api\Order;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AddressOrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "name"  => $this->name,
            "phone" => $this->phone,
            "email" => $this->email,
            "country"   => $this->country,
            "state" => $this->state,
            "city"  => $this->city,
            "address"   => $this->address,
            "order_id"  => $this->order_id,
            "zip_code"  => $this->zip_code,
        ];
    }
}
