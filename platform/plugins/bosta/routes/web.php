<?php

Route::group(['namespace' => 'Botble\Bosta\Http\Controllers', 'middleware' => ['web', 'core']], function () {
    Route::group(['prefix' => BaseHelper::getAdminPrefix(), 'middleware' => 'auth'], function () {
        Route::group([
            'prefix' => 'shipments/bosta',
            'as' => 'ecommerce.shipments.bosta.',
            'permission' => 'ecommerce.shipments.index',
        ], function () {
            Route::controller('BostaController')->group(function () {
                Route::get('show/{id}', [
                    'as' => 'show',
                    'uses' => 'show',
                ]);

                Route::post('transactions/create/{id}', [
                    'as' => 'transactions.create',
                    'uses' => 'createTransaction',
                    'permission' => 'ecommerce.shipments.edit',
                ]);

                Route::get('rates/{id}', [
                    'as' => 'rates',
                    'uses' => 'getRates',
                ]);

                Route::post('update-rate/{id}', [
                    'as' => 'update-rate',
                    'uses' => 'updateRate',
                    'permission' => 'ecommerce.shipments.edit',
                ]);

                Route::get('view-logs/{file}', [
                    'as' => 'view-log',
                    'uses' => 'viewLog',
                ]);
            });

            Route::group(['prefix' => 'settings', 'as' => 'settings.'], function () {
                Route::post('update', [
                    'as' => 'update',
                    'uses' => 'BostaSettingController@update',
                    'middleware' => 'preventDemo',
                    'permission' => 'shipping_methods.index',
                ]);
            });
        });
    });

    if (is_plugin_active('marketplace')) {
        Route::group(apply_filters(BASE_FILTER_GROUP_PUBLIC_ROUTE, []), function () {
            Route::group([
                'prefix' => 'vendor',
                'as' => 'marketplace.vendor.',
                'middleware' => ['vendor'],
            ], function () {
                Route::group(['prefix' => 'orders', 'as' => 'orders.'], function () {
                    Route::group(['prefix' => 'bosta', 'as' => 'bosta.'], function () {
                        Route::controller('BostaController')->group(function () {
                            Route::get('show/{id}', [
                                'as' => 'show',
                                'uses' => 'show',
                            ]);

                            Route::post('transactions/create/{id}', [
                                'as' => 'transactions.create',
                                'uses' => 'createTransaction',
                            ]);

                            Route::get('rates/{id}', [
                                'as' => 'rates',
                                'uses' => 'getRates',
                            ]);

                            Route::post('update-rate/{id}', [
                                'as' => 'update-rate',
                                'uses' => 'updateRate',
                            ]);
                        });
                    });
                });
            });
        });
    }
});

Route::group([
    'namespace' => 'Botble\Bosta\Http\Controllers',
    'prefix' => 'bosta',
    'middleware' => ['api', 'bosta.webhook'],
    'as' => 'bosta.',
], function () {
    Route::controller('BostaWebhookController')->group(function () {
        Route::post('webhooks', [
            'uses' => 'index',
            'as' => 'webhooks',
        ]);
    });
});
