<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Customer\AddressesResource;
use App\Models\User;
use App\Http\Requests\Api\Customer\AvatarRequest;
use App\Http\Resources\Api\Customer\UserResource;
use Botble\Base\Enums\Http;
use Botble\Base\Helpers\MessageResponse;
use Botble\Ecommerce\Http\Requests\AddressRequest;
use Botble\Ecommerce\Http\Requests\EditAccountRequest;
use Botble\Ecommerce\Models\Address;
use Botble\Ecommerce\Models\Customer;
use Botble\Media\Facades\RvMedia;
use Botble\Media\Services\ThumbnailService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Exception;

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

    public function postAvatar(AvatarRequest $request, ThumbnailService $thumbnailService, )
    {
        try {
            $account = auth()->user();

            $result = RvMedia::handleUpload($request->file('avatar_file'), 0, $account->upload_folder);

            if ($result['error']) {
                return new MessageResponse(
                    message: $result['message'],
                    code: Http::NOT_FOUND
                );
            }

            $avatarData = json_decode($request->input('avatar_data'));

            $file = $result['data'];

            $thumbnailService
                ->setImage(RvMedia::getRealPath($file->url))
                ->setSize((int)$avatarData->width, (int)$avatarData->height)
                ->setCoordinates((int)$avatarData->x, (int)$avatarData->y)
                ->setDestinationPath(File::dirname($file->url))
                ->setFileName(File::name($file->url) . '.' . File::extension($file->url))
                ->save('crop');

            $account->avatar = $file->url;
            $account->save();

            return new MessageResponse(
                message: trans('plugins/customer::dashboard.update_avatar_success'),
                code: Http::OK,
                body:[
                    'url' => RvMedia::url($file->url)
                ]
            );
        } catch (Exception $exception) {
            return new MessageResponse(
                message: $exception->getMessage(),
                code: Http::NOT_FOUND
            );
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $id = $request->id ?? auth()->id();

        $customer = Customer::find($id);

        if (!$customer):
            return new MessageResponse(
                message: __('Not Found Profile'),
                code: Http::NOT_FOUND
            );
        endif;

        return new MessageResponse(
            message: 'Get Token',
            code: Http::OK,
            body: [
                'user' => new UserResource($customer)
            ]
        );
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


}
