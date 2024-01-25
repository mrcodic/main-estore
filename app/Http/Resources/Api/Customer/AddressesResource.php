<?php

namespace App\Http\Resources\Api\Customer;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AddressesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "name"       =>   $this->name,
            "email"      =>   $this->email,
            "phone"      =>   $this->phone,
            "country"    =>   $this->country,
            "state"      =>   $this->state,
            "city"       =>   $this->city,
            "address"    =>   $this->address,
            "zip_code"   =>   $this->zip_code,
            "is_default" =>   $this->is_default,
        ];
    }
}
