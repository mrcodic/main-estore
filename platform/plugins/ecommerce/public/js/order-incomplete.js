/******/ (() => { // webpackBootstrap
/*!****************************************************************************!*\
  !*** ./platform/plugins/ecommerce/resources/assets/js/order-incomplete.js ***!
  \****************************************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var OrderIncompleteManagement = /*#__PURE__*/function () {
  function OrderIncompleteManagement() {
    _classCallCheck(this, OrderIncompleteManagement);
  }
  return _createClass(OrderIncompleteManagement, [{
    key: "init",
    value: function init() {
      $(document).on('click', '.btn-update-order', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $.ajax({
          type: 'POST',
          cache: false,
          url: _self.closest('form').prop('action'),
          data: _self.closest('form').serialize(),
          success: function success(res) {
            if (!res.error) {
              Botble.showSuccess(res.message);
            } else {
              Botble.showError(res.message);
            }
            _self.removeClass('button-loading');
          },
          error: function error(res) {
            Botble.handleError(res);
            _self.removeClass('button-loading');
          }
        });
      });
      $(document).on('click', '.btn-trigger-send-order-recover-modal', function (event) {
        event.preventDefault();
        $('#confirm-send-recover-email-button').data('action', $(event.currentTarget).data('action'));
        $('#send-order-recover-email-modal').modal('show');
      });
      $(document).on('click', '.btn-mark-order-as-completed-modal', function (event) {
        event.preventDefault();
        $('#confirm-mark-as-completed-button').data('action', $(event.currentTarget).data('action'));
        $('#mark-order-as-completed-modal').modal('show');
      });
      $(document).on('click', '#confirm-send-recover-email-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $.ajax({
          type: 'POST',
          cache: false,
          url: _self.data('action'),
          success: function success(res) {
            if (!res.error) {
              Botble.showSuccess(res.message);
            } else {
              Botble.showError(res.message);
            }
            _self.removeClass('button-loading');
            $('#send-order-recover-email-modal').modal('hide');
          },
          error: function error(res) {
            Botble.handleError(res);
            _self.removeClass('button-loading');
          }
        });
      });
      $(document).on('click', '#confirm-mark-as-completed-button', function (event) {
        event.preventDefault();
        var button = $(event.currentTarget);
        $.ajax({
          type: 'POST',
          cache: false,
          url: button.data('action'),
          beforeSend: function beforeSend() {
            button.addClass('button-loading');
          },
          success: function success(_ref) {
            var error = _ref.error,
              message = _ref.message,
              data = _ref.data;
            if (error) {
              Botble.showError(message);
              return;
            }
            $('#mark-order-as-completed-modal').modal('hide');
            Botble.showSuccess(message);
            if (data.next_url) {
              setTimeout(function () {
                return window.location.href = data.next_url;
              }, 2000);
            }
          },
          error: function error(_error) {
            Botble.handleError(_error);
          },
          completed: function completed() {
            button.removeClass('button-loading');
          }
        });
      });
    }
  }]);
}();
$(document).ready(function () {
  new OrderIncompleteManagement().init();
});
/******/ })()
;