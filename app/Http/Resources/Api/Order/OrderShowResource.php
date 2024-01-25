<?php

namespace App\Http\Resources\Api\Order;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"       => $this->id,
            "code"     => $this->code,
            "user_id"  => $this->user_id,
            "shipping_option"   => $this->shipping_option,
            "shipping_method"   => $this->shipping_method,
            "status"     => $this->status,
            "amount"     => $this->amount,
            "tax_amount" => $this->tax_amount,
            "shipping_amount"   => $this->shipping_amount,
            "description"       => $this->description,
            "coupon_code"       => $this->coupon_code,
            "discount_amount"   => $this->discount_amount,
            "sub_total"         => $this->sub_total,
            "is_confirmed"      => $this->is_confirmed,
            "discount_description"  => $this->discount_description,
            "is_finished"    => $this->is_finished,
            "completed_at"   => $this->completed_at ? $this->completed_at->format('H:i d/m/Y') :null,
            "token"      => $this->token,
            "payment_id" => $this->payment_id,
            "created_at" => $this->created_at->format('H:i d/m/Y'),
            "updated_at" => $this->updated_at->format('H:i d/m/Y'),
        ];
    }
}
