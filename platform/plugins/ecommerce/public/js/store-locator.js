/******/ (() => { // webpackBootstrap
/*!*************************************************************************!*\
  !*** ./platform/plugins/ecommerce/resources/assets/js/store-locator.js ***!
  \*************************************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var StoreLocatorManagement = /*#__PURE__*/function () {
  function StoreLocatorManagement() {
    _classCallCheck(this, StoreLocatorManagement);
  }
  return _createClass(StoreLocatorManagement, [{
    key: "init",
    value: function init() {
      $(document).on('click', '.btn-trigger-show-store-locator', function (event) {
        event.preventDefault();
        var $current = $(event.currentTarget);
        var $modalBody;
        if ($current.data('type') === 'update') {
          $modalBody = $('#update-store-locator-modal .modal-body');
        } else {
          $modalBody = $('#add-store-locator-modal .modal-body');
        }
        $.ajax({
          url: $current.data('load-form'),
          type: 'GET',
          beforeSend: function beforeSend() {
            $current.addClass('button-loading');
            $modalBody.html('');
          },
          success: function success(res) {
            if (res.error) {
              Botble.showError(res.message);
            } else {
              $modalBody.html(res.data);
              Botble.initResources();
              $modalBody.closest('.modal.fade').modal('show');
            }
            $current.removeClass('button-loading');
          },
          complete: function complete() {
            $current.removeClass('button-loading');
          },
          error: function error(data) {
            $current.removeClass('button-loading');
            Botble.handleError(data);
          }
        });
      });
      var createOrUpdateStoreLocator = function createOrUpdateStoreLocator(_self) {
        _self.addClass('button-loading');
        var $form = _self.closest('.modal-content').find('form');
        $.ajax({
          type: 'POST',
          cache: false,
          url: $form.prop('action'),
          data: $form.serialize(),
          success: function success(res) {
            if (!res.error) {
              Botble.showSuccess(res.message);
              $('.store-locator-table').load(window.location.href + ' .store-locator-table > *');
              _self.removeClass('button-loading');
              _self.closest('.modal.fade').modal('hide');
            } else {
              Botble.showError(res.message);
              _self.removeClass('button-loading');
            }
          },
          error: function error(res) {
            Botble.handleError(res);
            _self.removeClass('button-loading');
          }
        });
      };
      $(document).on('click', '#add-store-locator-button', function (event) {
        event.preventDefault();
        createOrUpdateStoreLocator($(event.currentTarget));
      });
      $(document).on('click', '#update-store-locator-button', function (event) {
        event.preventDefault();
        createOrUpdateStoreLocator($(event.currentTarget));
      });
      $(document).on('click', '.btn-trigger-delete-store-locator', function (event) {
        event.preventDefault();
        $('#delete-store-locator-button').data('target', $(event.currentTarget).data('target'));
        $('#delete-store-locator-modal').modal('show');
      });
      $(document).on('click', '#delete-store-locator-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $.ajax({
          type: 'POST',
          cache: false,
          url: _self.data('target'),
          success: function success(res) {
            if (!res.error) {
              Botble.showSuccess(res.message);
              $('.store-locator-table').load(window.location.href + ' .store-locator-table > *');
              _self.removeClass('button-loading');
              _self.closest('.modal.fade').modal('hide');
            } else {
              Botble.showError(res.message);
              _self.removeClass('button-loading');
            }
          },
          error: function error(res) {
            Botble.handleError(res);
            _self.removeClass('button-loading');
          }
        });
      });
      $(document).on('click', '#change-primary-store-locator-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        var $form = _self.closest('.modal-content').find('form');
        _self.addClass('button-loading');
        $.ajax({
          type: 'POST',
          cache: false,
          url: $form.prop('action'),
          data: $form.serialize(),
          success: function success(res) {
            if (!res.error) {
              Botble.showSuccess(res.message);
              $('.store-locator-table').load(window.location.href + ' .store-locator-table > *');
              _self.removeClass('button-loading');
              _self.closest('.modal.fade').modal('hide');
            } else {
              Botble.showError(res.message);
              _self.removeClass('button-loading');
            }
          },
          error: function error(res) {
            Botble.handleError(res);
            _self.removeClass('button-loading');
          }
        });
      });
    }
  }]);
}();
$(document).ready(function () {
  new StoreLocatorManagement().init();
});
/******/ })()
;