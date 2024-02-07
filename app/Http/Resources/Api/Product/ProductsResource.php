<?php

namespace App\Http\Resources\Api\Product;

use Botble\Ecommerce\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductsResource extends JsonResource
{

    protected $user;

    public function user($value){
        $this->user = $value;
        return $this;
    }

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $fav = false;

        if($this->user):
            $fav = Wishlist::where([
                        'customer_id'   => $this->user->id,
                        'product_id'    => $this->id
                    ])->first() ? true :false;
        endif;

        return [
            "id"        => $this->id,
            "name"      => $this->name(),
            "price"     => $this->price,
            "image"     => $this->imgs($this->images),
            "is_fav"    => $fav ,
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

    public static function collection($resource){
        return new CustomerResourceCollection($resource, get_called_class());
    }
}
