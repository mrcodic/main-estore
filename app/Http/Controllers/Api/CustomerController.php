<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Customer\AddressesResource;
use App\Models\User;
use Botble\Base\Enums\Http;
use Botble\Base\Helpers\MessageResponse;
use Botble\Ecommerce\Http\Requests\AddressRequest;
use Botble\Ecommerce\Http\Requests\EditAccountRequest;
use Botble\Ecommerce\Models\Address;
use Botble\Ecommerce\Models\Customer;
use Carbon\Carbon;
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
    public function update( EditAccountRequest $request )
    {
        $customer = Customer::find(auth()->id());

        /**
         * @var Customer $customer
         */
        $customer->fill($request->except('email'));
        $customer->dob = Carbon::parse($request->input('dob'));
        $customer->save();

        do_action(HANDLE_CUSTOMER_UPDATED_ECOMMERCE, $customer, $request);


        if (! $customer) {
            return new MessageResponse(
                message: __('Not Found Addresses'),
                code: Http::NOT_FOUND
            );

        }

        return new MessageResponse(
            message: __('Update profile successfully!'),
            code: Http::OK
        );
    }


    public function editAddress( AddressRequest $request )
    {
        $address = Address::query()
            ->where([
                'id' => $request->id,
                'customer_id' => auth()->id(),
            ])
            ->firstOrFail();

        if ($request->input('is_default')) {
            $address->update(['is_default' => 0]);
        }

        $address->fill($request->input());
        $address->save();

        return new MessageResponse(
            message: __('Update Address successfully!'),
            code: Http::OK
        );
    }


    public function addAddress( AddressRequest $request )
    {
        if ($request->input('is_default') == 1) {
            Address::query()
                ->where([
                    'is_default' => 1,
                    'customer_id' => auth('customer')->id(),
                ])
                ->update(['is_default' => 0]);
        }

        $request->merge([
            'customer_id' => auth()->id(),
            'is_default' => $request->input('is_default', 0),
        ]);

        $address = Address::query()->create($request->input());

        return new MessageResponse(
            message: trans('core/base::notices.create_success_message'),
            code: Http::OK
        );
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
