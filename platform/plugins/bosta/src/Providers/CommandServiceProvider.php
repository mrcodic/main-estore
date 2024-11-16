<?php

namespace Botble\Bosta\Providers;

use Botble\Base\Supports\ServiceProvider;
use Botble\Bosta\Commands\MigrateBostaCommand;

class CommandServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->commands([
            MigrateBostaCommand::class,
        ]);
    }
}
