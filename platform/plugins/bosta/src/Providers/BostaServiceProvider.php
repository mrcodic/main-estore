<?php

namespace Botble\Bosta\Providers;

use Botble\Bosta\Models\Bosta;
use Botble\Base\Facades\DashboardMenu;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use Botble\Base\Supports\ServiceProvider;
use Botble\Bosta\Http\Middleware\WebhookMiddleware;
use Illuminate\Routing\Events\RouteMatched;

class BostaServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register(): void
    {
        if (! is_plugin_active('ecommerce')) {
            return;
        }

        $this->setNamespace('plugins/bosta')->loadHelpers();
    }

    public function boot(): void
    {
        if (! is_plugin_active('ecommerce')) {
            return;
        }

        $this
            ->setNamespace('plugins/bosta')
            ->loadHelpers()
            ->loadAndPublishConfigurations(['general'])
            ->loadMigrations()
            ->loadAndPublishTranslations()
            ->loadAndPublishViews()
            ->loadRoutes()
            ->publishAssets();

        if (defined('LANGUAGE_ADVANCED_MODULE_SCREEN_NAME')) {
            \Botble\LanguageAdvanced\Supports\LanguageAdvancedManager::registerModule(Bosta::class, [
                'name',
            ]);
        }

        // $this->app['events']->listen(RouteMatched::class, function () {
        //     DashboardMenu::registerItem([
        //         'id' => 'cms-plugins-bosta',
        //         'priority' => 5,
        //         'parent_id' => null,
        //         'name' => 'plugins/bosta::bosta.name',
        //         'icon' => 'fa fa-list',
        //         'url' => route('bosta.index'),
        //         'permissions' => ['bosta.index'],
        //     ]);
        // });
        $this->app['events']->listen(RouteMatched::class, function () {
            $this->app['router']->aliasMiddleware('bosta.webhook', WebhookMiddleware::class);
        });

        $config = $this->app['config'];
        if (! $config->has('logging.channels.bosta')) {
            $config->set([
                'logging.channels.bosta' => [
                    'driver' => 'daily',
                    'path' => storage_path('logs/bosta.log'),
                ],
            ]);
        }

        $this->app->register(CommandServiceProvider::class);
        $this->app->register(HookServiceProvider::class);
    }
}
