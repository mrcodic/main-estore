<?php

namespace App\Http\Resources\Api\Customer;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"     => $this->id,
            "name"   => $this->name,
            "email"  => $this->email,
            "avatar" => $this->avatar,
            "dob"    => $this->dob,
            "phone"  => $this->phone,
            "status" => $this->status,
            "address"=> $this->addresses->where('is_default', true)->first() ?? null,
        ];
    }
}
