@php
    $status = setting('shipping_bosta_status', 0);
    $testKey = setting('shipping_bosta_test_key') ?: '';
    $prodKey = setting('shipping_bosta_production_key') ?: '';
    $test = setting('shipping_bosta_sandbox', 1) ?: 0;
    $logging = setting('shipping_bosta_logging', 1) ?: 0;
    $cacheResponse = setting('shipping_bosta_cache_response', 1) ?: 0;
    $webhook = setting('shipping_bosta_webhooks', 1) ?: 0;
@endphp

<table class="table mt-4 bg-white">
    <tbody>
        <tr class="border-pay-row">
            <td class="border-pay-col">
                <i class="fas fa-shipping-fast"></i>
            </td>
            <td style="width: 20%;">
                <img
                    class="filter-black"
                    src="https://docs.bosta.co/img/logo.svg"
                    alt="Bosta"
                >
            </td>
            <td class="border-right">
                <ul>
                    <li>
                        <a
                            href="https://bosta.co"
                            target="_blank"
                        >Bosta</a>
                        <p>{{ trans('plugins/bosta::bosta.description') }}</p>
                    </li>
                </ul>
            </td>
        </tr>
        <tr class="bg-white">
            <td colspan="3">
                <div
                    class="float-start"
                    style="margin-top: 5px;"
                >
                    <div class="payment-name-label-group  @if ($status == 0) d-none @endif">
                        <span class="payment-note v-a-t">{{ trans('plugins/payment::payment.use') }}:</span>
                        <label class="ws-nm inline-display method-name-label">Bosta</label>
                    </div>
                </div>
                <div class="float-end">
                    <a
                        class="btn btn-secondary"
                        data-bs-toggle="collapse"
                        href="#collapse-shipping-method-bosta"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapse-shipping-method-bosta"
                    >
                        @if ($status == 0)
                            {{ trans('core/base::forms.edit') }}
                        @else
                            {{ trans('core/base::layouts.settings') }}
                        @endif
                    </a>
                </div>
            </td>
        </tr>
        <tr
            class="collapse"
            id="collapse-shipping-method-bosta"
        >
            <td
                class="border-left"
                colspan="3"
            >
                {!! Form::open(['route' => 'ecommerce.shipments.bosta.settings.update']) !!}
                <div class="row">
                    <div class="col-sm-6">
                        <ul>

                            <li>
                                <div class="alert alert-warning">
                                    <h5 class="text-danger">{{ trans('plugins/bosta::bosta.note_0') }}</h5>
                                    <ul class="ps-3">
                                        <li style="list-style-type: circle;">
                                            <span>{!! BaseHelper::clean(
                                                trans('plugins/bosta::bosta.note_1', ['link' => 'https://docs.botble.com/farmart/usage-location.html']),
                                            ) !!}</span>
                                        </li>
                                        <li style="list-style-type: circle;">
                                            <span>{{ trans('plugins/bosta::bosta.note_2') }}</span>
                                        </li>
                                        <li style="list-style-type: circle;">
                                            <span>{!! BaseHelper::clean(trans('plugins/bosta::bosta.note_3', ['link' => route('ecommerce.settings')])) !!}</span>
                                        </li>
                                        <li style="list-style-type: circle;">
                                            <span>{!! BaseHelper::clean(
                                                trans('plugins/bosta::bosta.note_6', ['link' => 'https://docs.bosta.co/docs/how-to/create-your-first-delivery?_highlight=parcels#order-specifications']),
                                            ) !!}</span>
                                        </li>
                                        @if (is_plugin_active('marketplace'))
                                            <li style="list-style-type: circle;">
                                                <span>{{ trans('plugins/bosta::bosta.note_4') }}</span>
                                            </li>
                                        @endif
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <label>{{ trans('plugins/bosta::bosta.configuration_instruction', ['name' => 'Bosta']) }}</label>
                            </li>
                            <li class="text-secondary">
                                <p>{{ trans('plugins/bosta::bosta.configuration_requirement', ['name' => 'Bosta']) }}:
                                </p>
                                <ul class="ms-3 ps-2">
                                    <li style="list-style-type: decimal">
                                        <p>
                                            <a
                                                href="https://business.bosta.co/settings/api-integration"
                                                target="_blank"
                                            >
                                                {{ trans('plugins/bosta::bosta.service_registration', ['name' => 'Bosta']) }}
                                            </a>
                                        </p>
                                    </li>
                                    <li style="list-style-type: decimal">
                                        <p>{{ trans('plugins/bosta::bosta.after_service_registration_msg', ['name' => 'Bosta']) }}
                                        </p>
                                    </li>
                                    <li style="list-style-type: decimal">
                                        <p>{{ trans('plugins/bosta::bosta.enter_api_key') }}</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-6">
                        <div class="well">
                            <p class="text-secondary">
                                {{ trans('plugins/bosta::bosta.please_provide_information') }}
                                <a
                                    href="https://bosta.co/"
                                    target="_blank"
                                >Bosta</a>:
                            </p>
                            {{-- <x-core-setting::text-input
                                name="shipping_bosta_test_key"
                                :label="trans('plugins/bosta::bosta.test_api_token')"
                                placeholder="<API-KEY>"
                                :disabled="BaseHelper::hasDemoModeEnabled()"
                                :value="BaseHelper::hasDemoModeEnabled() ? Str::mask($testKey, '*', 10) : $testKey"
                            /> --}}

                            <x-core-setting::text-input
                                name="shipping_bosta_production_key"
                                :label="trans('plugins/bosta::bosta.live_api_token')"
                                placeholder="<API-KEY>"
                                :disabled="BaseHelper::hasDemoModeEnabled()"
                                :value="BaseHelper::hasDemoModeEnabled() ? Str::mask($prodKey, '*', 10) : $prodKey"
                            />

                            {{-- <div class="form-group mb-3">
                                <label
                                    class="control-label"
                                    for="shipping_bosta_sandbox"
                                >
                                    {!! Form::onOff('shipping_bosta_sandbox', $test) !!}
                                    {{ trans('plugins/bosta::bosta.sandbox_mode') }}
                                </label>
                            </div> --}}
                            <div class="form-group mb-3">
                                <label
                                    class="control-label"
                                    for="shipping_bosta_status"
                                >
                                    {!! Form::onOff('shipping_bosta_status', $status) !!}
                                    {{ trans('plugins/bosta::bosta.activate') }}
                                </label>
                            </div>
                            <div class="form-group mb-3">
                                <label
                                    class="control-label"
                                    for="shipping_bosta_logging"
                                >
                                    {!! Form::onOff('shipping_bosta_logging', $logging) !!}
                                    {{ trans('plugins/bosta::bosta.logging') }}
                                </label>
                            </div>
                            <div class="form-group mb-3">
                                <label
                                    class="control-label"
                                    for="shipping_bosta_cache_response"
                                >
                                    {!! Form::onOff('shipping_bosta_cache_response', $cacheResponse) !!}
                                    {{ trans('plugins/bosta::bosta.cache_response') }}
                                </label>
                            </div>
                            <div class="form-group mb-3">
                                <label
                                    class="control-label"
                                    for="shipping_bosta_webhooks"
                                >
                                    {!! Form::onOff('shipping_bosta_webhooks', $webhook) !!}
                                    {{ trans('plugins/bosta::bosta.webhooks') }}
                                </label>
                                <div class="help-block">
                                    <a
                                        class="text-warning fw-bold"
                                        href="https://docs.bosta.co/docs/how-to/get-delivery-status-via-webhook?_highlight=webhooks"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>Webhooks</span>
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                    <div>URL: <i>{{ route('bosta.webhooks', ['_token' => '__API_TOKEN__']) }}</i>
                                    </div>
                                </div>
                            </div>

                            <x-core-setting::checkbox
                                name="shipping_bosta_validate"
                                :label="trans('plugins/bosta::bosta.check_validate_token')"
                                :checked="setting('shipping_bosta_validate')"
                            />

                            @if (count($logFiles))
                                <div class="form-group mb-3">
                                    <p class="mb-0">{{ __('Log files') }}: </p>
                                    <ul>
                                        @foreach ($logFiles as $logFile)
                                            <li><a
                                                    href="{{ route('ecommerce.shipments.bosta.view-log', $logFile) }}"
                                                    target="_blank"
                                                ><strong>- {{ $logFile }} <i
                                                            class="fa fa-external-link"></i></strong></a></li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                        </div>
                        {{-- <div class="col-12 mb-3">
                            <div class="note note-warning">
                                <strong>{{ trans('plugins/bosta::bosta.not_available_in_cod_payment_method') }}</strong>
                            </div>
                        </div> --}}
                        <div class="col-12 mb-3">
                            @env('demo')
                            <div class="note note-danger">
                                <strong>{{ trans('plugins/bosta::bosta.disabled_in_demo_mode') }}</strong>
                            </div>
                        @else
                            <div class="text-end">
                                <button
                                    class="btn btn-info"
                                    type="submit"
                                >{{ trans('core/base::forms.update') }}</button>
                            </div>
                            @endenv
                        </div>
                    </div>
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    </tbody>
</table>
