<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Customer\UserResource;
use Botble\ACL\Traits\RegistersUsers;
use Botble\Base\Enums\Http;
use Botble\Base\Facades\BaseHelper;
use Botble\Base\Helpers\MessageResponse;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Facades\EcommerceHelper;
use Botble\Ecommerce\Http\Requests\RegisterRequest;
use Botble\Ecommerce\Models\Customer;
use Botble\JsValidation\Facades\JsValidator;
use Botble\SeoHelper\Facades\SeoHelper;
use Botble\Theme\Facades\Theme;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    use RegistersUsers;


    public function __construct()
    {
        $this->middleware('customer.guest');
    }

    public function register(Request $request)
    {
        $this->validator($request->input())->validate();

        do_action('customer_register_validation', $request);

        $customer = $this->create($request->input());

        event(new Registered($customer));

        if (EcommerceHelper::isEnableEmailVerification()) {
            $this->registered($request, $customer);

            return new MessageResponse(
                message: 'We have sent you an email to verify your email. Please check and confirm your email address!',
                code: Http::OK
            );
        }

        $customer->confirmed_at = Carbon::now();
        $customer->save();

        $token = $customer->createToken('authToken', ['login-token'])->plainTextToken;

        return new MessageResponse(
            message: 'Registered successfully!',
            code: Http::OK,
            body: [
                'user' => new UserResource($customer),
                'access_token' => $token,
            ]
        );
    }

    protected function validator(array $data)
    {
        $err = Validator::make($data, (new RegisterRequest())->rules());
        return $err;
    }

    protected function create(array $data)
    {
        return Customer::query()->create([
            'name' => BaseHelper::clean($data['name']),
            'email' => BaseHelper::clean($data['email']),
            'password' => Hash::make($data['password']),
        ]);
    }

    protected function guard()
    {
        return auth('customer');
    }

    public function confirm(int|string $id, Request $request, BaseHttpResponse $response)
    {
        if (! URL::hasValidSignature($request)) {
            return new MessageResponse(
                message: 'Login Error',
                code: Http::NOT_FOUND,
            );
        }

        $customer = Customer::query()->findOrFail($id);

        $customer->confirmed_at = Carbon::now();
        $customer->save();


        $token = $customer->createToken('authToken', ['login-token'])->plainTextToken;

        return new MessageResponse(
            message: 'You successfully confirmed your email address.',
            code: Http::OK,
            body: [
                'user' => new UserResource($customer),
                'access_token' => $token,
            ]
        );
    }

    public function resendConfirmation(
        Request $request
    ) {
        $customer =Customer::query()->where('email', $request->input('email'))->first();

        if (! $customer) {
            return new MessageResponse(
                message: 'Cannot find this customer!',
                code: Http::NOT_FOUND,

            );
        }

        $customer->sendEmailVerificationNotification();

        return new MessageResponse(
            message: 'We sent you another confirmation email. You should receive it shortly.',
            code: Http::OK,
        );
    }
}
