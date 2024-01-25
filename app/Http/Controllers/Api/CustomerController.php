<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Customer\AddressesResource;
use Botble\Base\Enums\Http;
use Botble\Base\Helpers\MessageResponse;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function addresses()
    {
        $user = auth()->user();
        $addresses = $user->addresses()->paginate(5);

        if (! $addresses) {
            return new MessageResponse(
                message: __('Not Found Addresses'),
                code: Http::NOT_FOUND
            );
            
        }

        return new MessageResponse(
            message: __('Show Details Order'),
            code: Http::OK,
            body:[
                'orders'=> AddressesResource::collection($addresses),
                'pagination' => apiGetPagination($addresses)
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
