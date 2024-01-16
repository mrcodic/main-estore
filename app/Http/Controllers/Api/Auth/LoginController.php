<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Customer\UserResource;
use Botble\ACL\Traits\AuthenticatesUsers;
use Botble\ACL\Traits\LogoutGuardTrait;
use Botble\Base\Enums\Http;
use Botble\Base\Helpers\MessageResponse;
use Botble\Ecommerce\Enums\CustomerStatusEnum;
use Botble\Ecommerce\Facades\EcommerceHelper;
use Botble\Ecommerce\Http\Requests\LoginRequest;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

use function Laravel\Prompts\error;

class LoginController extends Controller
{
    use AuthenticatesUsers, LogoutGuardTrait {
        AuthenticatesUsers::attemptLogin as baseAttemptLogin;
    }

    public string $redirectTo = '/';

    public function __construct()
    {
        $this->middleware('customer.guest', ['except' => 'logout']);
    }


    protected function guard()
    {
        return auth('customer');
    }

    protected function validator(array $data)
    {
        return Validator::make($data, (new LoginRequest())->rules());
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);


        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            $this->sendLockoutResponse($request);
        }

        if ($this->attemptLogin($request)) {

            $customer = $this->guard()->getLastAttempted();
            $token = $customer->createToken('authToken', ['login-token'])->plainTextToken;

            return new MessageResponse(
                message: 'Get Token',
                code: Http::OK,
                body: [
                    'user' => new UserResource($customer),
                    'access_token' => $token,
                ]
            );
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to log in and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        return $this->sendFailedLoginApiResponse();
    }

    public function logout(Request $request):Responsable
    {
        $request->user()->currentAccessToken()->delete();

        return new MessageResponse(
            message: 'Logout Successfully',
            code: Http::OK,
        );
    }

    protected function attemptLogin(Request $request)
    {
        if ($this->guard()->validate($this->credentials($request))) {
            $customer = $this->guard()->getLastAttempted();

            if (EcommerceHelper::isEnableEmailVerification() && empty($customer->confirmed_at)) {
                throw ValidationException::withMessages([
                    'confirmation' => [
                        __(
                            'The given email address has not been confirmed. <a href=":resend_link">Resend confirmation link.</a>',
                            [
                                'resend_link' => route('customer.resend_confirmation', ['email' => $customer->email]),
                            ]
                        ),
                    ],
                ]);
            }

            if ($customer->status->getValue() !== CustomerStatusEnum::ACTIVATED) {
                throw ValidationException::withMessages([
                    'email' => [
                        __('Your account has been locked, please contact the administrator.'),
                    ],
                ]);
            }

            return $this->baseAttemptLogin($request);
        }

        return false;
    }

    protected function sendFailedLoginApiResponse()
    {

        return new MessageResponse(
            message: 'Login Error',
            code: Http::NOT_FOUND,
            errors:[
                $this->username() => [trans('auth.failed')]
            ]

        );
    }

}
