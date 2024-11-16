<?php

namespace Botble\Bosta\Facades;

use Botble\Bosta\Supports\BostaHelper as BaseBostaHelper;
use Illuminate\Support\Facades\Facade;

class BostaHelper extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return BaseBostaHelper::class;
    }
}
