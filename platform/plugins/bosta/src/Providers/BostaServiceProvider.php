<?php

namespace Botble\Bosta\Providers;

use Botble\Bosta\Models\Bosta;
use Botble\Base\Facades\DashboardMenu;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use Botble\Base\Supports\ServiceProvider;
use Illuminate\Routing\Events\RouteMatched;

class BostaServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function boot(): void
    {
        $this
            ->setNamespace('plugins/bosta')
            ->loadHelpers()
            ->loadAndPublishConfigurations(['general'])
            ->loadMigrations()
            ->loadAndPublishTranslations()
            ->loadAndPublishViews()
            ->loadRoutes();

        if (defined('LANGUAGE_ADVANCED_MODULE_SCREEN_NAME')) {
            \Botble\LanguageAdvanced\Supports\LanguageAdvancedManager::registerModule(Bosta::class, [
                'name',
            ]);
        }

        $this->app['events']->listen(RouteMatched::class, function () {
            DashboardMenu::registerItem([
                'id' => 'cms-plugins-bosta',
                'priority' => 5,
                'parent_id' => null,
                'name' => 'plugins/bosta::bosta.name',
                'icon' => 'fa fa-list',
                'url' => route('bosta.index'),
                'permissions' => ['bosta.index'],
            ]);
        });
    }
}
