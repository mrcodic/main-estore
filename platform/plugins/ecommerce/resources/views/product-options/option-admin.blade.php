@php
    $value = count($values) ? $values[0] ?? [] : [];
    $isDefaultLanguage = !defined('LANGUAGE_ADVANCED_MODULE_SCREEN_NAME') || !request()->input('ref_lang') || request()->input('ref_lang') == Language::getDefaultLocaleCode();
@endphp

<div
    class="col-md-12 option-setting-tab"
    id="option-setting-multiple"
    @if ($isDefaultLanguage) style="display: none" @endif
>
    <table class="table table-bordered setting-option">
        <thead>
            <tr>
                @if ($isDefaultLanguage)
                    <th scope="col">#</th>
                @endif
                <th scope="col">{{ trans('plugins/ecommerce::product-option.label') }}</th>
                @if ($isDefaultLanguage)
                    <th scope="col">{{ trans('plugins/ecommerce::product-option.price') }}</th>
                    <th
                        scope="col"
                        colspan="2"
                    >{{ trans('plugins/ecommerce::product-option.price_type') }}</th>
                @endif
            </tr>
        </thead>
        <tbody class="option-sortable">
            @if ($values->count())
                @foreach ($values as $key => $value)
                    <tr
                        class="option-row ui-state-default"
                        data-index="{{ $key }}"
                    >
                        <input
                            name="options[{{ $key }}][id]"
                            type="hidden"
                            value="{{ $value->id }}"
                        >
                        <input
                            name="options[{{ $key }}][order]"
                            type="hidden"
                            value="{{ $value->order !== 9999 ? $value->order : $key }}"
                        >
                        @if ($isDefaultLanguage)
                            <td class="text-center">
                                <i class="fa fa-sort"></i>
                            </td>
                        @endif
                        <td>
                            <input
                                class="form-control option-label"
                                name="options[{{ $key }}][option_value]"
                                type="text"
                                value="{{ $value->option_value }}"
                                placeholder="{{ trans('plugins/ecommerce::product-option.label_placeholder') }}"
                            />
                        </td>
                        @if ($isDefaultLanguage)
                            <td>
                                <input
                                    class="form-control affect_price"
                                    name="options[{{ $key }}][affect_price]"
                                    type="number"
                                    value="{{ $value->affect_price }}"
                                    placeholder="{{ trans('plugins/ecommerce::product-option.affect_price_label') }}"
                                />
                            </td>
                            <td>
                                <select
                                    class="form-select affect_type"
                                    name="options[{{ $key }}][affect_type]"
                                >
                                    <option
                                        value="0"
                                        {{ $value->affect_type == 0 ? 'selected' : '' }}
                                    >{{ trans('plugins/ecommerce::product-option.fixed') }}</option>
                                    <option
                                        value="1"
                                        {{ $value->affect_type == 1 ? 'selected' : '' }}
                                    >{{ trans('plugins/ecommerce::product-option.percent') }}</option>
                                </select>
                            </td>
                            <td style="width: 50px">
                                <button
                                    class="btn btn-default remove-row"
                                    data-index="0"
                                ><i class="fa fa-trash"></i></button>
                            </td>
                        @endif
                    </tr>
                @endforeach
            @else
                <tr
                    class="option-row"
                    data-index="0"
                >
                    @if ($isDefaultLanguage)
                        <td class="text-center">
                            <i class="fa fa-sort"></i>
                        </td>
                    @endif
                    <td>
                        <input
                            class="form-control option-label"
                            name="options[0][option_value]"
                            type="text"
                            value=""
                            placeholder="{{ trans('plugins/ecommerce::product-option.label_placeholder') }}"
                        />
                    </td>
                    @if ($isDefaultLanguage)
                        <td>
                            <input
                                class="form-control affect_price"
                                name="options[0][affect_price]"
                                type="number"
                                value=""
                                placeholder="{{ trans('plugins/ecommerce::product-option.affect_price_label') }}"
                            />
                        </td>
                        <td>
                            <select
                                class="form-select affect_type"
                                name="options[0][affect_type]"
                            >
                                <option value="0">{{ trans('plugins/ecommerce::product-option.fixed') }}</option>
                                <option value="1">{{ trans('plugins/ecommerce::product-option.percent') }}
                                </option>
                            </select>
                        </td>
                        <td style="width: 50px">
                            <button
                                class="btn btn-default remove-row"
                                data-index="0"
                            ><i class="fa fa-trash"></i></button>
                        </td>
                    @endif
                </tr>
            @endif
        </tbody>
    </table>
    @if ($isDefaultLanguage)
        <button
            class="btn btn-info mt-3 add-new-row"
            id="add-new-row"
            type="button"
        >{{ trans('plugins/ecommerce::product-option.add_new_row') }}</button>
    @endif
</div>

@if ($isDefaultLanguage)
    <div class="empty">{{ trans('plugins/ecommerce::product-option.please_choose_option_type') }}</div>
@endif
