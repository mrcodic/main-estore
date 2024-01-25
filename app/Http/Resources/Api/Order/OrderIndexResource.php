<?php

namespace App\Http\Resources\Api\Order;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderIndexResource extends JsonResource
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
            "code"          => $this->code,
            "status"        => $this->status,
            "amount"        => $this->amount,
            "token"         => $this->token,
            "is_finished"   => $this->is_finished,
            "completed_at"  => $this->completed_at ? $this->completed_at->format('H:i d/m/Y') :null,
            "created_at"    => $this->created_at->format('H:i d/m/Y'),
            "updated_at"    => $this->updated_at->format('H:i d/m/Y'),
        ];
    }
}
