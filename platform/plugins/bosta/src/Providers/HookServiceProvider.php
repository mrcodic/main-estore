<?php

namespace Botble\Bosta\Providers;

use Botble\Base\Facades\Assets;
use Botble\Base\Facades\BaseHelper;
use Botble\Ecommerce\Enums\ShippingMethodEnum;
use Botble\Ecommerce\Models\Shipment;
use Botble\Payment\Enums\PaymentMethodEnum;
use Botble\Bosta\Bosta;
use Illuminate\Support\Arr;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;

class HookServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        add_filter('handle_shipping_fee', [$this, 'handleShippingFee'], 11, 2);

        add_filter('handle_shipping_order', [$this, 'handleShippingOrder'], 11, 2);

        add_filter(SHIPPING_METHODS_SETTINGS_PAGE, [$this, 'addSettings'], 2);

        add_filter(BASE_FILTER_ENUM_ARRAY, function ($values, $class) {
            if ($class == ShippingMethodEnum::class) {
                $values['BOSTA'] = BOSTA_SHIPPING_METHOD_NAME;
            }

            return $values;
        }, 2, 2);

        add_filter(BASE_FILTER_ENUM_LABEL, function ($value, $class) {
            if ($class == ShippingMethodEnum::class && $value == BOSTA_SHIPPING_METHOD_NAME) {
                return 'Bosta';
            }

            return $value;
        }, 2, 2);

        add_filter('shipment_buttons_detail_order', function (?string $content, Shipment $shipment) {
            Assets::addScriptsDirectly('vendor/core/plugins/bosta/js/bosta.js');

            return $content . view('plugins/bosta::buttons', compact('shipment'))->render();
        }, 1, 2);
    }

    public function handleShippingFee(array $result, array $data): array
    {
        if (! $this->app->runningInConsole() && setting('shipping_bosta_status') == 1) {
            $results = app(Bosta::class)->getRates($data);

            if (Arr::get($data, 'payment_method') == PaymentMethodEnum::COD) {
                $rates = Arr::get($results, 'shipment.rates') ?: [];
                // foreach ($rates as &$rate) {
                //     $rate['disabled'] = true;
                //     $rate['error_message'] = __('Not available in COD payment option.');
                // }

                Arr::set($results, 'shipment.rates', $rates);
            }

            $result['bosta'] = Arr::get($results, 'shipment.rates') ?: [];
        }
        // dd('getRates');

        return $result;
    }

    public function handleShippingOrder(array $result, array $data): array
    {
        // dd($data);
        $result = app(Bosta::class)->getRates($data, true, true);
        // if (! $this->app->runningInConsole() && setting('shipping_bosta_status') == 1) {
        //     $results = app(Bosta::class)->getRates($data, true, true);

        //     // dd($result);
        //     if (Arr::get($data, 'payment_method') == PaymentMethodEnum::COD) {
        //         $rates = Arr::get($results, 'shipment.rates') ?: [];

        //         Arr::set($results, 'shipment.rates', $rates);
        //     }

        //     $result['bosta'] = Arr::get($results, 'shipment.rates') ?: [];
        // }

        return $result;
    }

    public function addSettings(string|null $settings): string
    {
        $logFiles = [];

        if (setting('shipping_bosta_logging')) {
            foreach (BaseHelper::scanFolder(storage_path('logs')) as $file) {
                if (Str::startsWith($file, 'bosta-')) {
                    $logFiles[] = $file;
                }
            }
        }

        return $settings . view('plugins/bosta::settings', compact('logFiles'))->render();
    }
}
