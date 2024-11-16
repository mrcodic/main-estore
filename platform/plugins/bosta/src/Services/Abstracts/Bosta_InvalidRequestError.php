<?php
namespace Botble\Bosta\Services\Abstracts;
class Bosta_InvalidRequestError extends Bosta_Error
{
    public function __construct($message, $param, $httpStatus = null, $httpBody = null, $jsonBody = null)
    {
        parent::__construct($message, $httpStatus, $httpBody, $jsonBody);
        $this->param = $param;
    }
}
