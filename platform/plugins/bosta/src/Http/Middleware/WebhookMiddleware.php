<?php

namespace Botble\Bosta\Http\Middleware;

use Botble\Base\Http\Responses\BaseHttpResponse;
use Closure;

class WebhookMiddleware
{
    public function handle($request, Closure $next)
    {
        if (setting('shipping_bosta_webhooks', 1) == 1 && ($token = $request->input('_token'))) {
            if (setting('shipping_bosta_sandbox', 1) == 1) {
                $apiToken = setting('shipping_bosta_test_key');
            } else {
                $apiToken = setting('shipping_bosta_production_key');
            }

            if ($apiToken && $apiToken == $token) {
                return $next($request);
            }
        }

        return (new BaseHttpResponse())->setError()->setMessage('Ops!');
    }
}
