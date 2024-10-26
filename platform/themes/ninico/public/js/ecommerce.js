/******/ (() => { // webpackBootstrap
/*!*******************************************************!*\
  !*** ./platform/themes/ninico/assets/js/ecommerce.js ***!
  \*******************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Ecommerce = /*#__PURE__*/function () {
  function Ecommerce() {
    _classCallCheck(this, Ecommerce);
    _defineProperty(this, "$body", $(document.body));
    _defineProperty(this, "$productsFilter", this.$body.find('#products-filter'));
  }
  return _createClass(Ecommerce, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.$body.on('click', '.add-to-cart:not(.cart-form button[type=submit])', function (event) {
        _this2.addToCart(event);
      }).on('click', '.remove-cart-item', function (event) {
        _this2.removeFromCart(event);
      }).on('click', '.btn-apply-coupon-code', function (event) {
        _this2.applyCouponCode(event);
      }).on('click', '.btn-remove-coupon-code', function (event) {
        _this2.removeCouponCode(event);
      }).on('click', '.product-quantity span', function (event) {
        _this2.changeCartQuantity(event);
      }).on('keyup', '.product-quantity input', function (event) {
        _this2.onChangeQuantityInput(event);
      }).on('click', '.add-to-compare', function (event) {
        _this2.addToCompare(event);
      }).on('click', '.js-sale-popup-quick-view-button', function (event) {
        _this2.quickView(event);
      }).on('click', '.tpproduct .quickview', function (event) {
        _this2.quickView(event);
      }).on('click', '.tpproduct .button-quick-shop', function (event) {
        _this2.quickShop(event);
      }).on('click', '.remove-compare-item', function (event) {
        _this2.removeFromCompare(event);
      }).on('click', '.add-to-wishlist', function (event) {
        _this2.addToWishlist(event);
      }).on('click', '.remove-wishlist-item', function (event) {
        _this2.removeFromWishlist(event);
      }).on('submit', '#products-filter', function (event) {
        event.preventDefault();
        _this2.filterProducts($(event.currentTarget), 1);
      }).on('click', '.product-area .basic-pagination ul li a', function (event) {
        _this2.handleProductsPagination(event);
      }).on('change', '.product-area .tp-shop-selector select[name="sort-by"]', function (event) {
        _this2.handleProductsSorting(event);
      }).on('change', '.product-area .tp-shop-selector select[name="per-page"]', function (event) {
        _this2.handleProductsPerPage(event);
      }).on('click', '.product-area .product-filter-nav button', function (event) {
        _this2.handleProductsLayout(event);
      }).on('change', '#products-filter select, input', function () {
        _this2.$productsFilter.trigger('submit');
      }).on('click', '.product-filter-button', function () {
        _this2.$body.find('.product-filter-mobile').addClass('active');
      }).on('click', '.product-filter-mobile .backdrop, .close-product-filter-mobile', function () {
        _this2.$body.find('.product-filter-mobile').removeClass('active');
      }).on('click', 'form.cart-form button[type=submit]', function (event) {
        _this2.addProductToCart(event);
      }).on('click', '.tpproduct-details__reviewers', function () {
        _this2.$body.find('.tpproduct-details__nav #reviews-tab').trigger('click');
        $('html, body').animate({
          scrollTop: $('.tpproduct-details__navtab').offset().top - 100
        });
      }).on('click', '.product-sidebar__list .f-right', function (event) {
        event.preventDefault();
        $(event.currentTarget).closest('.category-filter').find('.product-sidebar__list').slideToggle();
      });
      this.reviewSection();
      this.priceFilter();
      this.productGallery($('.product-gallery'));
      this.quickSearchProducts();
      var _this = this;
      window.onBeforeChangeSwatches = function (data, $attrs) {
        var $product = $attrs.closest('.tpproduct-details__content');
        var $form = $product.find('.cart-form');
        $product.find('.error-message').hide();
        $product.find('.success-message').hide();
        $product.find('.number-items-available').html('').hide();
        var $submit = $form.find('button[type=submit]');
        if (data) {
          $submit.prop('disabled', true);
        }
      };
      window.onChangeSwatchesSuccess = function (response, $attrs) {
        var $product = $attrs.closest('.tpproduct-details__content');
        var $form = $product.find('.cart-form');
        var $footerCartForm = $('.footer-cart-form');
        if (!response) {
          return;
        }
        var $submit = $form.find('button[type=submit]');
        if (response.error) {
          $submit.prop('disabled', true);
          $product.find('.number-items-available').html("<span class='text-danger'>(".concat(response.message, ")</span>")).show();
          $form.find('.hidden-product-id').val('');
          $footerCartForm.find('.hidden-product-id').val('');
        } else {
          var data = response.data;
          var $price = $(document).find('.tpproduct-details__price');
          var $salePrice = $price.find('.product-price-sale');
          var $originalPrice = $price.find('.product-price-original');
          if (data.sale_price !== data.price) {
            $salePrice.removeClass('d-none');
            $originalPrice.addClass('d-none');
          } else {
            $salePrice.addClass('d-none');
            $originalPrice.removeClass('d-none');
          }
          $salePrice.find('ins .amount').text(data.display_sale_price);
          $salePrice.find('span .amount').text(data.display_price);
          $originalPrice.find('.amount').text(data.display_sale_price);
          if (data.sku) {
            $product.find('.meta-sku .meta-value').text(data.sku);
            $product.find('.meta-sku').removeClass('d-none');
          } else {
            $product.find('.meta-sku').addClass('d-none');
          }
          $form.find('.hidden-product-id').val(data.id);
          $footerCartForm.find('.hidden-product-id').val(data.id);
          $submit.prop('disabled', false);
          if (data.error_message) {
            $submit.prop('disabled', true);
            $product.find('.number-items-available').html("<span class='text-danger'>(".concat(data.error_message, ")</span>")).show();
          } else if (data.success_message) {
            $product.find('.number-items-available').html(response.data.stock_status_html).show();
          } else {
            $product.find('.number-items-available').html('').hide();
          }
          var unavailableAttributeIds = data.unavailable_attribute_ids || [];
          $product.find('.attribute-swatch-item').removeClass('pe-none');
          $product.find('.product-filter-item option').prop('disabled', false);
          if (unavailableAttributeIds && unavailableAttributeIds.length) {
            unavailableAttributeIds.map(function (id) {
              var $item = $product.find(".attribute-swatch-item[data-id=\"".concat(id, "\"]"));
              if ($item.length) {
                $item.addClass('pe-none');
                $item.find('input').prop('checked', false);
              } else {
                $item = $product.find(".product-filter-item option[data-id=\"".concat(id, "\"]"));
                if ($item.length) {
                  $item.prop('disabled', 'disabled').prop('selected', false);
                }
              }
            });
          }
          var $gallery = $product.closest('.product-area').find('.product-gallery');
          var imageHtml = '';
          data.image_with_sizes.origin.forEach(function (item) {
            imageHtml += "<a href='".concat(item, "'>\n                        <img title='").concat(data.name, "' title='").concat(data.name, "' src='").concat(siteConfig.img_placeholder ? siteConfig.img_placeholder : item, "' data-lazy='").concat(item, "'>\n                    </a>");
          });
          $gallery.find('.product-gallery__wrapper').slick('unslick').html(imageHtml);
          var thumbHtml = '';
          data.image_with_sizes.thumb.forEach(function (item) {
            thumbHtml += "<img alt='".concat(data.name, "' title='").concat(data.name, "' src='").concat(siteConfig.img_placeholder ? siteConfig.img_placeholder : item, "' data-src='").concat(item, "' data-lazy='").concat(item, "'>");
          });
          $gallery.find('.product-thumbnails').slick('unslick').html(thumbHtml);
          _this.productGallery($gallery);
        }
      };
    }
  }, {
    key: "productGallery",
    value: function productGallery($gallery) {
      if (!$gallery.length) {
        return;
      }
      var first = $gallery.find('.product-gallery__wrapper');
      var thumbnails = $gallery.find('.product-thumbnails');
      if (first.length) {
        if (first.hasClass('slick-initialized')) {
          first.slick('unslick');
        }
        first.slick({
          rtl: PixbyteApp.isRtl(),
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
          lazyLoad: 'ondemand'
        });
      }
      if (thumbnails.length) {
        if (thumbnails.hasClass('slick-initialized')) {
          thumbnails.slick('unslick');
        }
        thumbnails.slick({
          rtl: PixbyteApp.isRtl(),
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: false,
          focusOnSelect: true,
          asNavFor: first,
          vertical: thumbnails.data('vertical') ? thumbnails.data('vertical') : true,
          nextArrow: '<button class="slick-next slick-arrow"><i class="fas fa-chevron-down"></i></button>',
          prevArrow: '<button class="slick-prev slick-arrow"><i class="fas fa-chevron-up"></i></button>',
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 6,
              vertical: false
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              vertical: false
            }
          }]
        });
      }
      this.lightGallery($gallery);
    }
  }, {
    key: "quickSearchProducts",
    value: function quickSearchProducts() {
      var quickSearch = '.form--quick-search';
      var $quickSearch = $('.form--quick-search');
      $('body').on('click', function (e) {
        if (!$(e.target).closest(quickSearch).length) {
          $('.panel--search-result').removeClass('active');
        }
      });
      var currentRequest = null;
      $quickSearch.on('keyup', '.input-search-product', function () {
        var $form = $(this).closest('form');
        ajaxSearchProduct($form);
      });
      $quickSearch.on('change', '.product-category-select', function () {
        var $form = $(this).closest('form');
        ajaxSearchProduct($form);
      });
      $quickSearch.on('click', '.loadmore', function (e) {
        e.preventDefault();
        var $form = $(this).closest('form');
        $(this).addClass('loading');
        ajaxSearchProduct($form, $(this).attr('href'));
      });
      function ajaxSearchProduct($form) {
        var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var $panel = $form.find('.panel--search-result');
        var k = $form.find('.input-search-product').val();
        if (!k) {
          $panel.html('').removeClass('active');
          return;
        }
        $quickSearch.find('.input-search-product').val(k);
        var $button = $form.find('button[type=submit]');
        currentRequest = $.ajax({
          type: 'GET',
          url: url || $form.data('url'),
          dataType: 'json',
          data: url ? [] : $form.serialize(),
          beforeSend: function beforeSend() {
            $button.addClass('loading');
            if (currentRequest !== null) {
              currentRequest.abort();
            }
          },
          success: function success(_ref) {
            var error = _ref.error,
              data = _ref.data;
            if (!error) {
              if (url) {
                var $content = $("<div>".concat(data, "</div>"));
                $panel.find('.panel__content').find('.loadmore-container').remove();
                $panel.find('.panel__content').append($content.find('.panel__content p-3').contents());
              } else {
                $panel.html(data).addClass('active');
              }
              return;
            }
            $panel.html('').removeClass('active');
          },
          complete: function complete() {
            $button.removeClass('loading');
          }
        });
      }
    }
  }, {
    key: "addToCart",
    value: function addToCart(event) {
      var _this3 = this;
      event.preventDefault();
      var $currentTarget = $(event.currentTarget);
      $.ajax({
        url: $currentTarget.prop('href'),
        method: 'POST',
        data: {
          id: $currentTarget.data('id')
        },
        dataType: 'json',
        beforeSend: function beforeSend() {
          $currentTarget.addClass('loading');
        },
        success: function success(_ref2) {
          var error = _ref2.error,
            message = _ref2.message;
          if (error) {
            PixbyteApp.showError(message);
            return;
          }
          _this3.loadAjaxCart();
          _this3.$body.find('.tp-cart-toggle').trigger('click');
        },
        error: function error(_error) {
          return PixbyteApp.handleError(_error);
        },
        complete: function complete() {
          $currentTarget.removeClass('loading');
        }
      });
    }
  }, {
    key: "addProductToCart",
    value: function addProductToCart(event) {
      var _this4 = this;
      event.preventDefault();
      var $button = $(event.currentTarget);
      var $form = $button.closest('form.cart-form');
      var data = $form.serializeArray();
      data.push({
        name: 'checkout',
        value: $button.prop('name') === 'checkout' ? 1 : 0
      });
      $.ajax({
        type: 'POST',
        url: $form.prop('action'),
        data: $.param(data),
        beforeSend: function beforeSend() {
          $button.addClass('button-loading');
        },
        success: function success(_ref3) {
          var error = _ref3.error,
            message = _ref3.message,
            data = _ref3.data;
          if (error) {
            PixbyteApp.showError(message);
            if ((data === null || data === void 0 ? void 0 : data.next_url) !== undefined) {
              window.location.href = data.next_url;
            }
            return;
          }
          if ((data === null || data === void 0 ? void 0 : data.next_url) !== undefined) {
            window.location.href = data.next_url;
            return;
          }
          _this4.$body.find('.tp-cart-toggle').trigger('click');
          _this4.loadAjaxCart();
        },
        error: function error(_error2) {
          PixbyteApp.handleError(_error2);
        },
        complete: function complete() {
          $button.removeClass('button-loading');
        }
      });
    }
  }, {
    key: "addToCompare",
    value: function addToCompare(event) {
      event.preventDefault();
      var $currentTarget = $(event.currentTarget);
      $.ajax({
        url: $currentTarget.prop('href'),
        method: 'POST',
        beforeSend: function beforeSend() {
          $currentTarget.addClass('loading');
        },
        success: function success(response) {
          var error = response.error,
            data = response.data,
            message = response.message;
          if (error) {
            PixbyteApp.showError(message);
          } else {
            PixbyteApp.showSuccess(message);
            $('.header-cart .tp-product-compare-count').text(data.count);
          }
        },
        error: function error(_error3) {
          PixbyteApp.handleError(_error3);
        },
        complete: function complete() {
          $currentTarget.removeClass('loading');
        }
      });
    }
  }, {
    key: "removeFromCompare",
    value: function removeFromCompare(event) {
      event.preventDefault();
      var $currentTarget = $(event.currentTarget);
      $.ajax({
        url: $currentTarget.prop('href'),
        method: 'POST',
        data: {
          _method: 'DELETE'
        },
        success: function success(response) {
          var error = response.error,
            data = response.data,
            message = response.message;
          if (error) {
            PixbyteApp.showError(message);
          } else {
            PixbyteApp.showSuccess(message);
            $('.header-cart .tp-product-compare-count').text(data.count);
            $('.compare-area').load(window.location.href + ' .compare-area > *');
          }
        },
        error: function error(_error4) {
          PixbyteApp.handleError(_error4);
        }
      });
    }
  }, {
    key: "removeFromCart",
    value: function removeFromCart(event) {
      var _this5 = this;
      event.preventDefault();
      var $currentTarget = $(event.currentTarget);
      $.ajax({
        url: $currentTarget.data('url'),
        method: 'GET',
        beforeSend: function beforeSend() {
          $currentTarget.addClass('loading');
        },
        success: function success(response) {
          var _window$siteConfig;
          if (response.error) {
            PixbyteApp.showError(response.message);
            return;
          }
          var $cartArea = $('.cart-area');
          if ($cartArea.length && (_window$siteConfig = window.siteConfig) !== null && _window$siteConfig !== void 0 && _window$siteConfig.cartUrl) {
            $cartArea.load(window.siteConfig.cartUrl + ' .cart-area > *');
          }
          _this5.loadAjaxCart();
        },
        error: function error(res) {
          PixbyteApp.showError(res.message);
        },
        complete: function complete() {
          $currentTarget.removeClass('loading');
        }
      });
    }
  }, {
    key: "addToWishlist",
    value: function addToWishlist(event) {
      event.preventDefault();
      var $currentTarget = $(event.currentTarget);
      $.ajax({
        url: $currentTarget.prop('href'),
        method: 'POST',
        beforeSend: function beforeSend() {
          $currentTarget.addClass('loading');
        },
        success: function success(response) {
          var error = response.error,
            message = response.message,
            data = response.data;
          if (error) {
            PixbyteApp.showError(message);
          } else {
            PixbyteApp.showSuccess(message);
            $('.header-cart .tp-product-wishlist-count').text(data.count);
            if (data.added) {
              $currentTarget.find('i').removeClass('fal').addClass('fas');
            } else {
              $currentTarget.find('i').removeClass('fas').addClass('fal');
            }
          }
        },
        error: function error(_error5) {
          PixbyteApp.handleError(_error5);
        },
        complete: function complete() {
          $currentTarget.removeClass('loading');
        }
      });
    }
  }, {
    key: "removeFromWishlist",
    value: function removeFromWishlist(event) {
      event.preventDefault();
      var $currentTarget = $(event.currentTarget);
      $.ajax({
        url: $currentTarget.prop('href'),
        method: 'POST',
        data: {
          _method: 'DELETE'
        },
        success: function success(response) {
          if (response.error) {
            PixbyteApp.showError(response.message);
          } else {
            PixbyteApp.showSuccess(response.message);
            $('.header-cart .tp-product-wishlist-count').text(response.data.count);
            $('.wishlist-area').load(window.location.href + ' .wishlist-area > *');
          }
        },
        error: function error(_error6) {
          PixbyteApp.handleError(_error6);
        }
      });
    }
  }, {
    key: "loadAjaxCart",
    value: function loadAjaxCart() {
      var _window$siteConfig2,
        _this6 = this;
      if ((_window$siteConfig2 = window.siteConfig) !== null && _window$siteConfig2 !== void 0 && _window$siteConfig2.ajaxCart) {
        $.ajax({
          url: window.siteConfig.ajaxCart,
          method: 'GET',
          success: function success(response) {
            var data = response.data,
              error = response.error;
            if (!error) {
              _this6.$body.find('.tpcartinfo .tpcart__product').html(data.html);
              _this6.$body.find('.header-cart .tp-product-count').text(data.count);
            }
          }
        });
      }
    }
  }, {
    key: "applyCouponCode",
    value: function applyCouponCode(event) {
      event.preventDefault();
      var $currentTarget = $(event.currentTarget);
      var couponCode = $currentTarget.closest('.coupon').find('#coupon_code').val();
      $.ajax({
        url: $currentTarget.data('url'),
        type: 'POST',
        data: {
          coupon_code: couponCode
        },
        beforeSend: function beforeSend() {
          $currentTarget.prop('disabled', true).addClass('loading');
        },
        success: function success(response) {
          if (!response.error) {
            $('.cart-area').load(window.location.href + '?applied_coupon=1 .cart-area > *', function () {
              $currentTarget.prop('disabled', false).removeClass('loading');
              PixbyteApp.showSuccess(response.message);
            });
          } else {
            PixbyteApp.showError(response.message);
          }
        },
        error: function error(_error7) {
          PixbyteApp.handleError(_error7);
        },
        complete: function complete(response) {
          var _response$responseJSO;
          if (!(response.status === 200 && !(response !== null && response !== void 0 && (_response$responseJSO = response.responseJSON) !== null && _response$responseJSO !== void 0 && _response$responseJSO.error))) {
            $currentTarget.prop('disabled', false).removeClass('loading');
          }
        }
      });
    }
  }, {
    key: "removeCouponCode",
    value: function removeCouponCode(event) {
      event.preventDefault();
      var $currentTarget = $(event.currentTarget);
      var buttonText = $currentTarget.text();
      $currentTarget.text($currentTarget.data('loading-text'));
      $.ajax({
        url: $currentTarget.prop('href'),
        type: 'POST',
        success: function success(response) {
          if (!response.error) {
            $('.cart-area').load(window.location.href + ' .cart-area > *', function () {
              $currentTarget.text(buttonText);
            });
          } else {
            PixbyteApp.showError(response.message);
          }
        },
        error: function error(_error8) {
          PixbyteApp.handleError(_error8);
        },
        complete: function complete(response) {
          var _response$responseJSO2;
          if (!(response.status === 200 && !(response !== null && response !== void 0 && (_response$responseJSO2 = response.responseJSON) !== null && _response$responseJSO2 !== void 0 && _response$responseJSO2.error))) {
            $currentTarget.text(buttonText);
          }
        }
      });
    }
  }, {
    key: "changeCartQuantity",
    value: function changeCartQuantity(event) {
      var $target = $(event.target);
      var $quantity = $target.parent().find('input');
      var step = parseInt($quantity.attr('step'), 10);
      var min = parseInt($quantity.attr('min'), 10);
      var max = parseInt($quantity.attr('max'), 10);
      var current = parseInt($quantity.val(), 10);
      if ($target.hasClass('cart-minus') && current > min) {
        $quantity.val(current - step);
        $quantity.change();
      }
      if ($target.hasClass('cart-plus') && current < max) {
        $quantity.val(current + step);
        $quantity.change();
      }
      this.updateCart(event);
    }
  }, {
    key: "onChangeQuantityInput",
    value: function onChangeQuantityInput(event) {
      var $target = $(event.target);
      var min = parseInt($target.attr('min'), 10);
      var max = parseInt($target.attr('max'), 10);
      var current = parseInt($target.val(), 10);
      if (current < min) {
        $target.val(min);
      }
      if (current > max) {
        $target.val(max);
      }
      this.updateCart(event);
    }
  }, {
    key: "updateCart",
    value: function updateCart(event) {
      var _this7 = this;
      event.preventDefault();
      var $form = this.$body.find('.cart-form');
      if (!$form.length) {
        return;
      }
      $.ajax({
        type: 'POST',
        cache: false,
        url: $form.prop('action'),
        data: new FormData($form[0]),
        contentType: false,
        processData: false,
        success: function success(response) {
          var error = response.error,
            message = response.message;
          if (error) {
            PixbyteApp.showError(message);
          } else {
            $('.cart-area').load(window.siteConfig.cartUrl + ' .cart-area > *');
            _this7.loadAjaxCart();
            PixbyteApp.showSuccess(message);
          }
        },
        error: function error(_error9) {
          PixbyteApp.handleError(_error9);
        }
      });
    }
  }, {
    key: "handleProductsPagination",
    value: function handleProductsPagination(event) {
      event.preventDefault();
      var url = new URL($(event.currentTarget).attr('href'));
      var page = url.searchParams.get('page');
      this.$productsFilter.find('input[name="page"]').val(page);
      this.filterProducts(this.$productsFilter, page);
    }
  }, {
    key: "handleProductsSorting",
    value: function handleProductsSorting(event) {
      var $currentTarget = $(event.currentTarget);
      this.$productsFilter.find('input[name="sort-by"]').val($currentTarget.val()).change();
    }
  }, {
    key: "handleProductsPerPage",
    value: function handleProductsPerPage(event) {
      var $currentTarget = $(event.currentTarget);
      this.$productsFilter.find('input[name="per-page"]').val($currentTarget.val()).change();
    }
  }, {
    key: "handleProductsLayout",
    value: function handleProductsLayout(event) {
      var $currentTarget = $(event.currentTarget);
      $currentTarget.addClass('active');
      $currentTarget.siblings().removeClass('active');
      this.$productsFilter.find('input[name="layout"]').val($currentTarget.data('type')).change();
    }
  }, {
    key: "filterProducts",
    value: function filterProducts($form) {
      var _this8 = this;
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (page) {
        $form.find('input[name=page]').val(page);
      }
      $.ajax({
        url: "".concat($form.prop('action'), "?").concat($form.serialize()),
        type: 'GET',
        beforeSend: function beforeSend() {
          _this8.$body.find('.product-filter-mobile').removeClass('active');
          _this8.$body.find('.loading-spinner').removeClass('d-none');
          $('html, body').animate({
            scrollTop: $('.product-area').offset().top - 100
          });
        },
        success: function success(_ref4) {
          var error = _ref4.error,
            message = _ref4.message,
            data = _ref4.data,
            additional = _ref4.additional;
          _this8.$body.find('.product-list').html(data);
          _this8.$body.find('.product-item-count span').text(message);
          if (additional !== null && additional !== void 0 && additional.breadcrumb) {
            $('.page-breadcrumbs div').html(additional.breadcrumb);
          }
          if (additional !== null && additional !== void 0 && additional.filters_html) {
            var $categoriesFilter = $form.find('.product-categories-filter-widget .product-sidebar__widget').clone();
            $form.html(additional.filters_html);
            $form.find('.product-categories-filter-widget .product-sidebar__widget').replaceWith($categoriesFilter);
            _this8.priceFilter();
          }
          if (!error) {
            window.history.pushState({}, '', "".concat(window.location.pathname, "?").concat($form.serialize()));
          } else {
            PixbyteApp.showError(message || 'Opp!');
          }
        },
        error: function error(_error10) {
          PixbyteApp.handleError(_error10);
        },
        complete: function complete() {
          _this8.$body.find('.loading-spinner').addClass('d-none');
        }
      });
    }
  }, {
    key: "priceFilter",
    value: function priceFilter() {
      var $sliderRange = $(document).find('#slider-range');
      if ($sliderRange.length) {
        var min = $sliderRange.data('min');
        var max = $sliderRange.data('max');
        var $priceFilter = $(document).find('.price-filter');
        $sliderRange.slider({
          range: true,
          min: min,
          max: max,
          values: [$priceFilter.find('input[name="min_price"]').val(), $priceFilter.find('input[name="max_price"]').val()],
          slide: function slide(event, ui) {
            $priceFilter.find('#amount').text("".concat(ui.values[0].format_price(), " - ").concat(ui.values[1].format_price()));
          },
          change: function change(event, ui) {
            $priceFilter.find('input[name="min_price"]').val(ui.values[0]);
            $priceFilter.find('input[name="max_price"]').val(ui.values[1]).trigger('change');
          }
        });
        $priceFilter.find('#amount').text("".concat($sliderRange.slider('values', 0).format_price(), " - ").concat($sliderRange.slider('values', 1).format_price()));
      }
    }

    /**
     @param {jQuery} element
     */
  }, {
    key: "lightGallery",
    value: function lightGallery(element) {
      if (element.data('lightGallery')) {
        element.data('lightGallery').destroy(true);
      }
      element.lightGallery({
        selector: 'a',
        thumbnail: true,
        share: false,
        fullScreen: false,
        autoplay: false,
        autoplayControls: false,
        actualSize: false
      });
    }
  }, {
    key: "reviewSection",
    value: function reviewSection() {
      var $reviewListWrapper = this.$body.find('.comment-list');
      var $loadingSpinner = this.$body.find('.loading-spinner');
      if (window.location.hash === '#reviews') {
        $(document).find('.tpproduct-details__reviewers').trigger('click');
      }
      $loadingSpinner.addClass('d-none');
      var $productReviewImages = $('.product-review-images');
      if ($productReviewImages.length > 0) {
        this.lightGallery($productReviewImages);
      }
      var _this = this;
      var fetchData = function fetchData(url) {
        var hasAnimation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        $.ajax({
          url: url,
          type: 'GET',
          beforeSend: function beforeSend() {
            $loadingSpinner.removeClass('d-none');
            if (hasAnimation) {
              $('html, body').animate({
                scrollTop: "".concat($('.product-reviews-container').offset().top, "px")
              }, 1500);
            }
          },
          success: function success(_ref5) {
            var data = _ref5.data;
            $reviewListWrapper.html(data);
            var $galleries = $('.product-reviews-container .review-images');
            if ($galleries.length > 0) {
              _this.lightGallery($galleries);
            }
          },
          complete: function complete() {
            $loadingSpinner.addClass('d-none');
          }
        });
      };
      if ($reviewListWrapper.length < 1) {
        return;
      }
      fetchData($reviewListWrapper.data('url'));
      $reviewListWrapper.on('click', '.basic-pagination li a', function (e) {
        e.preventDefault();
        var href = $(this).prop('href');
        if (href === '#') {
          return;
        }
        fetchData(href, true);
      });
      var imagesReviewBuffer = [];
      var setImagesFormReview = function setImagesFormReview(input) {
        var dT = new ClipboardEvent('').clipboardData || new DataTransfer();
        for (var _i = 0, _imagesReviewBuffer = imagesReviewBuffer; _i < _imagesReviewBuffer.length; _i++) {
          var file = _imagesReviewBuffer[_i];
          dT.items.add(file);
        }
        input.files = dT.files;
        loadPreviewImage(input);
      };
      var loadPreviewImage = function loadPreviewImage(input) {
        var $uploadText = $('.image-upload__text');
        var maxFiles = $(input).data('max-files');
        var filesAmount = input.files.length;
        if (maxFiles) {
          if (filesAmount >= maxFiles) {
            $uploadText.closest('.image-upload__uploader-container').addClass('d-none');
          } else {
            $uploadText.closest('.image-upload__uploader-container').removeClass('d-none');
          }
          $uploadText.text(filesAmount + '/' + maxFiles);
        } else {
          $uploadText.text(filesAmount);
        }
        var viewerList = $('.image-viewer__list');
        var $template = $('#review-image-template').html();
        viewerList.addClass('is-loading');
        viewerList.find('.image-viewer__item').remove();
        if (filesAmount) {
          for (var i = filesAmount - 1; i >= 0; i--) {
            viewerList.prepend($template.replace('__id__', i));
          }
          var _loop = function _loop(j) {
            var reader = new FileReader();
            reader.onload = function (event) {
              viewerList.find('.image-viewer__item[data-id=' + j + ']').find('img').attr('src', event.target.result);
            };
            reader.readAsDataURL(input.files[j]);
          };
          for (var j = filesAmount - 1; j >= 0; j--) {
            _loop(j);
          }
        }
        viewerList.removeClass('is-loading');
      };
      $(document).on('change', '.form-review-product input[type=file]', function (event) {
        event.preventDefault();
        var input = this;
        var $input = $(input);
        var maxSize = $input.data('max-size');
        Object.keys(input.files).map(function (i) {
          if (maxSize && input.files[i].size / 1024 > maxSize) {
            var message = $input.data('max-size-message').replace('__attribute__', input.files[i].name).replace('__max__', maxSize);
            PixbyteApp.showError(message);
          } else {
            imagesReviewBuffer.push(input.files[i]);
          }
        });
        var filesAmount = imagesReviewBuffer.length;
        var maxFiles = $input.data('max-files');
        if (maxFiles && filesAmount > maxFiles) {
          imagesReviewBuffer.splice(filesAmount - maxFiles - 1, filesAmount - maxFiles);
        }
        setImagesFormReview(input);
      });
      $(document).on('click', '.form-review-product .image-viewer__icon-remove', function (event) {
        event.preventDefault();
        var $this = $(event.currentTarget);
        var id = $this.closest('.image-viewer__item').data('id');
        imagesReviewBuffer.splice(id, 1);
        var input = $('.form-review-product input[type=file]')[0];
        setImagesFormReview(input);
      });
      $(document).on('submit', '.form-review-product', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $form = $(e.currentTarget);
        var $button = $form.find('button[type=submit]');
        $.ajax({
          type: 'POST',
          cache: false,
          url: $form.prop('action'),
          data: new FormData($form[0]),
          contentType: false,
          processData: false,
          beforeSend: function beforeSend() {
            $button.prop('disabled', true).addClass('button-loading');
          },
          success: function success(_ref6) {
            var error = _ref6.error,
              message = _ref6.message;
            if (!error) {
              $form.find('input[type=file]').val('');
              $form.find('textarea').val('');
              imagesReviewBuffer.splice(0, imagesReviewBuffer.length);
              loadPreviewImage($form.find('input[type=file]')[0]);
              PixbyteApp.showSuccess(message);
              fetchData($reviewListWrapper.data('url'));
              return;
            }
            PixbyteApp.showError(message);
          },
          error: function error(_error11) {
            PixbyteApp.handleError(_error11);
          },
          complete: function complete() {
            $button.prop('disabled', false).removeClass('button-loading');
          }
        });
      });
    }
  }, {
    key: "quickView",
    value: function quickView(event) {
      event.preventDefault();
      var $this = $(event.currentTarget);
      $.ajax({
        url: $this.prop('href'),
        type: 'GET',
        beforeSend: function beforeSend() {
          $this.addClass('loading');
        },
        success: function success(_ref7) {
          var data = _ref7.data;
          $('#quick-view-popup').html(data);
          $.magnificPopup.open({
            items: {
              src: '#quick-view-popup'
            },
            type: 'inline'
          });
          $('.thumbnails .images').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            adaptiveHeight: false,
            rtl: PixbyteApp.isRtl()
          });
        },
        error: function error(_error12) {
          PixbyteApp.handleError(_error12);
        },
        complete: function complete() {
          $this.removeClass('loading');
        }
      });
    }
  }, {
    key: "quickShop",
    value: function quickShop(event) {
      event.preventDefault();
      var $this = $(event.currentTarget);
      $.ajax({
        url: $this.prop('href'),
        type: 'GET',
        beforeSend: function beforeSend() {
          $this.addClass('loading');
        },
        success: function success(_ref8) {
          var data = _ref8.data;
          $('#quick-shop-popup').html(data);
          $.magnificPopup.open({
            items: {
              src: '#quick-shop-popup'
            },
            type: 'inline'
          });
        },
        error: function error(_error13) {
          PixbyteApp.handleError(_error13);
        },
        complete: function complete() {
          $this.removeClass('loading');
        }
      });
    }
  }]);
}();
$(document).ready(function () {
  var AppEcommerce = new Ecommerce();
  AppEcommerce.init();
  setTimeout(function () {
    var $productGalleryWrapper = $('.product-gallery__wrapper');
    if ($productGalleryWrapper.length && !$productGalleryWrapper.width()) {
      AppEcommerce.productGallery($('.product-gallery'));
    }
  }, 1500);
});
/******/ })()
;