<?php

namespace Botble\Bosta;

use Illuminate\Support\Facades\Schema;
use Botble\PluginManagement\Abstracts\PluginOperationAbstract;

class Plugin extends PluginOperationAbstract
{
    public static function remove(): void
    {
        Schema::dropIfExists('bostas');
        Schema::dropIfExists('bostas_translations');
    }
}
