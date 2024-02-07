<?php

namespace App\Http\Resources\Api\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CustomerResourceCollection extends AnonymousResourceCollection
{
    protected $user;

    public function user($value){
        $this->user = $value;
        return $this;
    }

    public function toArray($request){

        return $this->collection->map(function(ProductsResource $resource) use($request){
                return $resource->user($this->user)->toArray($request);
        })->all();

    }
}
