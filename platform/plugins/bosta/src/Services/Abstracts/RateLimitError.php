<?php
namespace Botble\Bosta\Services\Abstracts;
// use Botble\Bosta\Services\Abstracts\ApiResource as Bosta_ApiResource;
class Bosta_RateLimitError extends Bosta_InvalidRequestError
{
    public function __construct($message, $param, $httpStatus = null, $httpBody = null, $jsonBody = null)
    {
        parent::__construct($message, $httpStatus, $httpBody, $jsonBody);
    }
}
