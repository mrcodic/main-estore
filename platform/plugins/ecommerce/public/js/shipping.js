/******/ (() => { // webpackBootstrap
/*!********************************************************************!*\
  !*** ./platform/plugins/ecommerce/resources/assets/js/shipping.js ***!
  \********************************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ShippingManagement = /*#__PURE__*/function () {
  function ShippingManagement() {
    _classCallCheck(this, ShippingManagement);
  }
  return _createClass(ShippingManagement, [{
    key: "init",
    value: function init() {
      $(document).on('click', '.btn-confirm-delete-region-item-modal-trigger', function (event) {
        event.preventDefault();
        var $modal = $('#confirm-delete-region-item-modal');
        $modal.find('.region-item-label').text($(event.currentTarget).data('name'));
        $modal.find('#confirm-delete-region-item-button').data('id', $(event.currentTarget).data('id'));
        $modal.modal('show');
      });
      $(document).on('click', '#confirm-delete-region-item-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $.ajax({
          type: 'POST',
          url: $('div[data-delete-region-item-url]').data('delete-region-item-url'),
          data: {
            _method: 'DELETE',
            id: _self.data('id')
          },
          success: function success(res) {
            if (!res.error) {
              $('.wrap-table-shipping-' + _self.data('id')).remove();
              Botble.showSuccess(res.message);
            } else {
              Botble.showError(res.message);
            }
            $('#confirm-delete-region-item-modal').modal('hide');
          },
          error: function error(_error) {
            Botble.handleError(_error);
          },
          complete: function complete() {
            _self.removeClass('button-loading');
          }
        });
      });
      $(document).on('click', '.btn-confirm-delete-price-item-modal-trigger', function (event) {
        event.preventDefault();
        var $modal = $('#confirm-delete-price-item-modal');
        $modal.find('.region-price-item-label').text($(event.currentTarget).data('name'));
        $modal.find('#confirm-delete-price-item-button').data('id', $(event.currentTarget).data('id'));
        $modal.modal('show');
      });
      $(document).on('click', '#confirm-delete-price-item-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $.ajax({
          type: 'POST',
          url: $('div[data-delete-rule-item-url]').data('delete-rule-item-url'),
          data: {
            _method: 'DELETE',
            id: _self.data('id')
          },
          success: function success(res) {
            if (!res.error) {
              $('.box-table-shipping-item-' + _self.data('id')).remove();
              if (res.data.count === 0) {
                $('.wrap-table-shipping-' + res.data.shipping_id).remove();
              }
              Botble.showSuccess(res.message);
            } else {
              Botble.showError(res.message);
            }
            $('#confirm-delete-price-item-modal').modal('hide');
          },
          error: function error(_error2) {
            Botble.handleError(_error2);
          },
          complete: function complete() {
            _self.removeClass('button-loading');
          }
        });
      });
      var saveRuleItem = function saveRuleItem($this, $form, method, shippingId) {
        $(document).find('.field-has-error').removeClass('field-has-error');
        var _self = $this;
        _self.addClass('button-loading');
        var formData = [];
        if (method !== 'POST') {
          formData._method = method;
        }
        $.each($form.serializeArray(), function (index, el) {
          if (el.name === 'from' || el.name === 'to' || el.name === 'price') {
            if (el.value) {
              el.value = parseFloat(el.value.replace(',', '')).toFixed(2);
            }
          }
          formData[el.name] = el.value;
        });
        if (shippingId) {
          formData.shipping_id = shippingId;
        }
        formData = $.extend({}, formData);
        $.ajax({
          type: 'POST',
          url: $form.prop('action'),
          data: formData,
          success: function success(res) {
            if (!res.error) {
              var _res$data, _res$data2;
              Botble.showSuccess(res.message);
              if (res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && (_res$data = _res$data.rule) !== null && _res$data !== void 0 && _res$data.shipping_id && res !== null && res !== void 0 && (_res$data2 = res.data) !== null && _res$data2 !== void 0 && _res$data2.html) {
                var $box = $('.wrap-table-shipping-' + res.data.rule.shipping_id + ' .pd-all-20.border-bottom');
                var $item = $box.find('.box-table-shipping-item-' + res.data.rule.id);
                if ($item.length) {
                  $item.replaceWith(res.data.html);
                } else {
                  $box.append(res.data.html);
                }
                Botble.initResources();
              }
            } else {
              Botble.showError(res.message);
            }
            if (shippingId) {
              _self.closest('.modal').modal('hide');
            }
          },
          error: function error(_error3) {
            Botble.handleError(_error3);
          },
          complete: function complete() {
            _self.removeClass('button-loading');
          }
        });
      };
      $(document).on('click', '.btn-save-rule', function (event) {
        event.preventDefault();
        var $this = $(event.currentTarget);
        saveRuleItem($this, $this.closest('form'), 'PUT', null);
      });
      $(document).on('change', '.select-rule-type', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        var $box = _self.closest('form');
        var $option = _self.find('option:selected');
        if ($option.data('show-from-to')) {
          $box.find('.rule-from-to-inputs').removeClass('d-none');
        } else {
          $box.find('.rule-from-to-inputs').addClass('d-none');
        }
        $box.find('.unit-item-label').text($option.data('unit'));
        $box.find('.rule-from-to-label').text($option.data('text'));
      });
      $(document).on('keyup', '.input-sync-item', function (event) {
        var $this = $(event.currentTarget);
        var number = $this.val();
        if (!number || isNaN(number)) {
          number = 0;
        }
        $this.closest('.input-shipping-sync-wrapper').find($this.data('target')).text(Botble.numberFormat(parseFloat(number), 2));
      });
      $(document).on('keyup', '.input-sync-text-item', function (event) {
        var $this = $(event.currentTarget);
        $this.closest('.input-shipping-sync-wrapper').find($this.data('target')).text($this.val());
      });
      $(document).on('keyup', '.input-to-value-field', function (event) {
        var $this = $(event.currentTarget);
        var $parent = $this.closest('.input-shipping-sync-wrapper');
        if ($this.val()) {
          $parent.find('.rule-to-value-wrap').removeClass('hidden');
          $parent.find('.rule-to-value-missing').addClass('hidden');
        } else {
          $parent.find('.rule-to-value-wrap').addClass('hidden');
          $parent.find('.rule-to-value-missing').removeClass('hidden');
        }
      });
      $(document).on('click', '.btn-add-shipping-rule-trigger', function (event) {
        event.preventDefault();
        var $this = $(event.currentTarget);
        var $modal = $('#add-shipping-rule-item-modal');
        $('#add-shipping-rule-item-button').data('shipping-id', $this.data('shipping-id'));
        $modal.find('select[name=type] option[disabled]').prop('disabled', false);
        if (!$this.data('country')) {
          $modal.find('select[name=type] option[value=base_on_zip_code]').prop('disabled', true);
        }
        $modal.find('input[name=name]').val('');
        $modal.find('select[name=type]').val('').trigger('change');
        $modal.find('input[name=from]').val('0');
        $modal.find('input[name=to]').val('');
        $modal.find('input[name=price]').val('0');
        $modal.modal('show');
      });
      $(document).on('click', '.btn-shipping-rule-item-trigger', function (event) {
        event.preventDefault();
        var $this = $(event.currentTarget);
        var $modal = $('#form-shipping-rule-item-detail-modal');
        $modal.modal('show');
        $.ajax({
          type: 'GET',
          url: $this.data('url'),
          beforeSend: function beforeSend() {
            $modal.find('.modal-title strong').html('');
            $modal.find('.modal-body').html("<div class='w-100 text-center py-3'><div class='spinner-border' role='status'>\n                    <span class='visually-hidden'>Loading...</span>\n                  </div></div>");
          },
          success: function success(res) {
            if (!res.error) {
              $modal.find('.modal-body').html(res.data.html);
              $modal.find('.modal-title strong').html(res.message);
              Botble.initResources();
            } else {
              Botble.showError(res.message);
            }
          },
          error: function error(_error4) {
            Botble.handleError(_error4);
          }
        });
      });
      $(document).on('click', '#save-shipping-rule-item-detail-button', function (event) {
        event.preventDefault();
        var $this = $(event.currentTarget);
        var $modal = $('#form-shipping-rule-item-detail-modal');
        var $form = $modal.find('form');
        $.ajax({
          type: $form.prop('method'),
          url: $form.prop('action'),
          data: $form.serialize(),
          beforeSend: function beforeSend() {
            $this.addClass('button-loading');
          },
          success: function success(res) {
            if (!res.error) {
              var $table = $('.table-shipping-rule-' + res.data.shipping_rule_id);
              if ($table.find('.shipping-rule-item-' + res.data.id).length) {
                $table.find('.shipping-rule-item-' + res.data.id).replaceWith(res.data.html);
              } else {
                $table.prepend(res.data.html);
              }
              $modal.modal('hide');
              Botble.showSuccess(res.message);
            } else {
              Botble.showError(res.message);
            }
          },
          error: function error(_error5) {
            Botble.handleError(_error5);
          },
          complete: function complete() {
            $this.removeClass('button-loading');
          }
        });
      });
      $(document).on('click', '.btn-confirm-delete-rule-item-modal-trigger', function (event) {
        event.preventDefault();
        var $modal = $('#confirm-delete-shipping-rule-item-modal');
        $modal.find('.item-label').text($(event.currentTarget).data('name'));
        $modal.find('#confirm-delete-shipping-rule-item-button').data('url', $(event.currentTarget).data('section'));
        $modal.modal('show');
      });
      $(document).on('click', '#confirm-delete-shipping-rule-item-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $.ajax({
          type: 'POST',
          url: _self.data('url'),
          data: {
            _method: 'DELETE'
          },
          success: function success(res) {
            if (!res.error) {
              var $table = $('.table-shipping-rule-' + res.data.shipping_rule_id);
              if ($table.find('.shipping-rule-item-' + res.data.id).length) {
                $table.find('.shipping-rule-item-' + res.data.id).fadeOut(500, function () {
                  $(this).remove();
                });
              }
              Botble.showSuccess(res.message);
            } else {
              Botble.showError(res.message);
            }
            $('#confirm-delete-shipping-rule-item-modal').modal('hide');
          },
          error: function error(_error6) {
            Botble.handleError(_error6);
          },
          complete: function complete() {
            _self.removeClass('button-loading');
          }
        });
      });
      $(document).find('.select-country-search').select2({
        width: '100%',
        dropdownParent: $('#select-country-modal')
      });
      $(document).on('click', '.btn-select-country', function (event) {
        event.preventDefault();
        $('#select-country-modal').modal('show');
      });
      $(document).on('click', '#add-shipping-region-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        var $form = _self.closest('.modal-content').find('form');
        $.ajax({
          type: 'POST',
          url: $form.prop('action'),
          data: $form.serialize(),
          success: function success(res) {
            if (!res.error) {
              Botble.showSuccess(res.message);
              $('.wrapper-content').load(window.location.href + ' .wrapper-content > *');
            } else {
              Botble.showError(res.message);
            }
            _self.removeClass('button-loading');
            $('#select-country-modal').modal('hide');
          },
          error: function error(_error7) {
            Botble.handleError(_error7);
            _self.removeClass('button-loading');
          }
        });
      });
      $(document).on('click', '#add-shipping-rule-item-button', function (event) {
        event.preventDefault();
        saveRuleItem($(event.currentTarget), $(event.currentTarget).closest('.modal-content').find('form'), 'POST', $(event.currentTarget).data('shipping-id'));
      });
      $(document).on('keyup', '.base-price-rule-item', function (event) {
        var _self = $(event.currentTarget);
        var basePrice = _self.val();
        if (!basePrice || isNaN(basePrice)) {
          basePrice = 0;
        }
        $.each($(document).find('.support-shipping .rule-adjustment-price-item'), function (index, item) {
          var adjustmentPrice = $(item).closest('tr').find('.shipping-price-district').val();
          if (!adjustmentPrice || isNaN(adjustmentPrice)) {
            adjustmentPrice = 0;
          }
          $(item).text(Botble.numberFormat(parseFloat(basePrice) + parseFloat(adjustmentPrice)), 2);
        });
      });
      $(document).on('change', 'select[name=shipping_rule_id].shipping-rule-id', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);
        var $form = $this.closest('form');
        var $country = $form.find('select[data-type="country"]');
        var val = $this.find('option:selected').data('country');
        if ($country.length) {
          if ($country.val() != val) {
            $country.val(val).trigger('change');
          }
        } else {
          $country = $form.find('input[name="country"]');
          if ($country.length && $country.val() != val) {
            $country.val(val);
          }
        }
      });
      $(document).on('click', '.table-shipping-rule-items .shipping-rule-load-items', function (event) {
        event.preventDefault();
        var $this = $(event.currentTarget);
        var $table = $this.closest('.table-shipping-rule-items');
        loadRuleItems($this.attr('href'), $table, $this);
      });
      $(document).on('click', '.table-shipping-rule-items a.page-link', function (event) {
        event.preventDefault();
        var $this = $(event.currentTarget);
        var $table = $this.closest('.table-shipping-rule-items');
        loadRuleItems($this.attr('href'), $table, $this);
      });
      $(document).on('change', '.table-shipping-rule-items .number-record .numb', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);
        var per_page = $this.val();
        if (!isNaN(per_page) && per_page > 0) {
          var $table = $this.closest('.table-shipping-rule-items');
          var $th = $table.find('thead tr th[data-column][data-dir]');
          var data = {
            per_page: per_page
          };
          if ($th.length) {
            data.order_by = $th.data('column');
            data.order_dir = $th.data('dir') || 'DESC';
          }
          loadRuleItems($table.data('url'), $table, $this, data);
        } else {
          $this.val($this.attr('min') || 12).trigger('change');
        }
      });
      $(document).on('click', '.table-shipping-rule-items thead tr th[data-column]', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);
        var order_by = $this.data('column');
        var order_dir = $this.data('dir') || 'ASC';
        order_dir = order_dir == 'ASC' ? 'DESC' : 'ASC';
        var $table = $this.closest('.table-shipping-rule-items');
        var $numb = $table.find('.number-record .numb');
        var per_page = $numb.val();
        loadRuleItems($table.data('url'), $table, $this, {
          order_by: order_by,
          order_dir: order_dir,
          per_page: per_page
        });
      });
      function loadRuleItems(url, $table, $button) {
        var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        $.ajax({
          type: 'GET',
          url: url,
          data: data,
          beforeSend: function beforeSend() {
            $button && $button.addClass('button-loading');
            $table.addClass('table-loading');
          },
          success: function success(res) {
            if (!res.error) {
              $table.replaceWith(res.data.html);
            } else {
              Botble.showError(res.message);
            }
          },
          error: function error(_error8) {
            Botble.handleError(_error8);
          },
          complete: function complete() {
            $button && $button.removeClass('button-loading');
          }
        });
      }
    }
  }]);
}();
$(function () {
  new ShippingManagement().init();
});
/******/ })()
;