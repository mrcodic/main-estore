@if(theme_option('sticky_header_enabled', 'yes') == 'yes')
    <div id="header-sticky" class="logo-area tp-sticky-one mainmenu-5">
        {!! Theme::partial('header-middle') !!}
    </div>
@endif

<div id="header-tab-sticky" class="tp-md-lg-header d-none d-md-block d-xl-none pt-30 pb-30">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-3 col-md-4 d-flex align-items-center">
                <div class="flex-auto header-canvas">
                    <button class="tp-menu-toggle">
                        <i class="far fa-bars"></i>
                    </button>
                </div>
                @if($logo = theme_option('logo'))
                    <div class="logo">
                        <a href="{{ route('public.index') }}">
                            <img src="{{ RvMedia::getImageUrl($logo) }}" alt="{{ theme_option('site_title') }}">
                        </a>
                    </div>
                @endif
            </div>
            @if (is_plugin_active('ecommerce'))
                <div class="col-lg-9 col-md-8">
                    <div class="header-meta-info d-flex align-items-center justify-content-between">
                        {!! Theme::partial('header-search-bar') !!}
                        <div class="header-meta__social d-flex align-items-center ml-25">
                            @if(EcommerceHelper::isCartEnabled())
                                <button class="header-cart p-relative tp-cart-toggle">
                                    <i class="fal fa-shopping-cart"></i>
                                    <span>{{ Cart::instance('cart')->count() }}</span>
                                </button>
                            @endif
                            @if(EcommerceHelper::isCompareEnabled())
                                <a href="{{ route('public.compare') }}" class="header-cart p-relative">
                                    <i class="fal fa-exchange"></i>
                                    <span class="tp-product-compare-count">{{ Cart::instance('compare')->count() }}</span>
                                </a>
                            @endif
                                <a href="{{ route('customer.login') }}"><i class="fal fa-user"></i></a>
                            @if(EcommerceHelper::isWishlistEnabled())
                                <a href="{{ route('public.wishlist') }}"><i class="fal fa-heart"></i></a>
                            @endif
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>

<div @if(theme_option('sticky_header_mobile_enabled', 'yes') == 'yes') id="header-mob-sticky" @endif @class(['tp-md-lg-header d-md-none pt-20 pb-20', $headerMobileStickyClass ?? null])>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-3 d-flex align-items-center">
                <div class="flex-auto header-canvas">
                    <button class="tp-menu-toggle">
                        <i class="far fa-bars"></i>
                    </button>
                </div>
            </div>
            @if($logo)
                <div class="col-6">
                    <div class="text-center logo">
                        <a href="{{ route('public.index') }}">
                            <img src="{{ RvMedia::getImageUrl($logo) }}" alt="{{ theme_option('site_title') }}">
                        </a>
                    </div>
                </div>
            @endif
            @if (is_plugin_active('ecommerce'))
                <div class="col-3">
                    <div class="header-meta-info d-flex align-items-center justify-content-end ml-25">
                        <div class="m-0 header-meta d-flex align-items-center">
                            <div class="header-meta__social d-flex align-items-center">
                                @if(EcommerceHelper::isCartEnabled())
                                    <button class="header-cart p-relative tp-cart-toggle">
                                        <i class="fal fa-shopping-cart"></i>
                                        <span>{{ Cart::instance('cart')->count() }}</span>
                                    </button>
                                @endif
                                @if(EcommerceHelper::isCompareEnabled())
                                    <a href="{{ route('public.compare') }}" class="header-cart p-relative">
                                        <i class="fal fa-exchange"></i>
                                        <span class="tp-product-compare-count">{{ Cart::instance('compare')->count() }}</span>
                                    </a>
                                @endif
                                <a href="{{ route('customer.login') }}"><i class="fal fa-user"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>

<div class="tpsideinfo">
    <button class="tpsideinfo__close">
        {{ __('Close') }}
        <i class="ml-10 fal fa-times"></i>
    </button>
    @if (is_plugin_active('ecommerce'))
        <div class="text-center tpsideinfo__search pt-35">
            <span class="mb-20 tpsideinfo__search-title">{{ __('What Are You Looking For?') }}</span>
            <form action="{{ route('public.products') }}" class="position-relative form--quick-search" data-url="{{ route('public.ajax.search-products') }}" method="GET">
                <input type="text" name="q" class="input-search-product" placeholder="{{ __('Search Products...') }}" value="{{ BaseHelper::stringify(request()->query('q')) }}" autocomplete="off">
                <button><i class="fal fa-search"></i></button>
                <div class="panel--search-result"></div>
            </form>
        </div>
    @endif

    @php
        $hasCategories = theme_option('display_product_categories_on_mobile_menu', 'yes') === 'yes' && $categories->isNotEmpty();
        $categoriesTabPosition = theme_option('product_categories_position_on_mobile_menu', 'after_menu');
    @endphp

    <div class="tpsideinfo__nabtab mb-4">
        @if($hasCategories)
            <ul class="mb-3 nav nav-pills" id="pills-tab" role="tablist">
                @if($categoriesTabPosition === 'after_menu')
                    {!! Theme::partial('mobile.menu-tab-button', compact('categoriesTabPosition')) !!}
                    {!! Theme::partial('mobile.categories-tab-button', compact('categoriesTabPosition')) !!}
                @else
                    {!! Theme::partial('mobile.categories-tab-button', compact('categoriesTabPosition')) !!}
                    {!! Theme::partial('mobile.menu-tab-button', compact('categoriesTabPosition')) !!}
                @endif
            </ul>
            <div class="tab-content" id="pills-tab-content">
                @if($categoriesTabPosition === 'after_menu')
                    {!! Theme::partial('mobile.menu-tab-content', compact('hasCategories', 'categoriesTabPosition')) !!}
                    {!! Theme::partial('mobile.categories-tab-content', compact('categories', 'categoriesTabPosition')) !!}
                @else
                    {!! Theme::partial('mobile.categories-tab-content', compact('categories', 'categoriesTabPosition')) !!}
                    {!! Theme::partial('mobile.menu-tab-content', compact('hasCategories', 'categoriesTabPosition')) !!}
                @endif
            </div>
        @else
            {!! Theme::partial('mobile.menu-tab-content', compact('categoriesTabPosition')) !!}
        @endif

        <div style="clear: both"></div>
    </div>
    @if (is_plugin_active('ecommerce'))
        <div class="tpsideinfo__account-link">
            <a href="{{ route('customer.login') }}">
                <i class="fal fa-user"></i> {{ __('Login / Register') }}
            </a>
        </div>

        @if(EcommerceHelper::isWishlistEnabled())
            <div class="tpsideinfo__wishlist-link">
                <a href="{{ route('public.wishlist') }}" target="_parent">
                    <i class="fal fa-heart"></i> {{ __('Wishlist') }}
                </a>
            </div>
        @endif
    @endif

    <div class="tpsideinfo__switcher navbar-collapse collapse show mb-4" id="navbarSupportedContent" style="">
        <ul class="mb-2 navbar-nav me-auto mb-lg-0">
            {!! Theme::partial('language-switcher', ['mobile' => true]) !!}
            {!! Theme::partial('currency-switcher', ['mobile' => true]) !!}
        </ul>
    </div>
</div>

<div class="body-overlay"></div>

<div class="tpcartinfo tp-cart-info-area p-relative">
    <button class="tpcart__close">
        <i class="fal fa-times"></i>
    </button>
    <div class="tpcart">
        <h4 class="tpcart__title">{{ __('Your Cart') }}</h4>
        <div class="tpcart__product">
            @include(Theme::getThemeNamespace('views.ecommerce.includes.mini-cart'))
        </div>
        <div class="text-center tpcart__free-shipping">
            <span>{!! BaseHelper::clean(theme_option('cart_footer_description')) !!}</span>
        </div>
    </div>
</div>

<div class="cartbody-overlay"></div>
