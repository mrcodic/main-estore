/******/ (() => { // webpackBootstrap
/*!*********************************************************************!*\
  !*** ./platform/plugins/translation/resources/assets/js/locales.js ***!
  \*********************************************************************/
$(document).ready(function () {
  var _this = this;
  var languageTable = $('.table-language');
  languageTable.on('click', '.delete-locale-button', function (event) {
    event.preventDefault();
    $('.delete-crud-entry').data('url', $(event.currentTarget).data('url'));
    $('.modal-confirm-delete').modal('show');
  });
  $(document).on('click', '.delete-crud-entry', function (event) {
    event.preventDefault();
    $('.modal-confirm-delete').modal('hide');
    var deleteURL = $(event.currentTarget).data('url');
    $(_this).prop('disabled', true).addClass('button-loading');
    $httpClient.make()["delete"](deleteURL).then(function (_ref) {
      var data = _ref.data;
      if (data.data) {
        languageTable.find('i[data-locale=' + data.data + ']').unwrap();
        $('.tooltip').remove();
      }
      languageTable.find("a[data-url=\"".concat(deleteURL, "\"]")).closest('tr').remove();
      Botble.showSuccess(data.message);
    })["finally"](function () {
      $(_this).prop('disabled', false).removeClass('button-loading');
    });
  });
  $(document).on('click', '.add-locale-form button[type=submit]', function (event) {
    var _this2 = this;
    event.preventDefault();
    event.stopPropagation();
    $(this).prop('disabled', true).addClass('button-loading');
    var formData = new FormData($(this).closest('form')[0]);
    $httpClient.make().postForm($(this).closest('form').prop('action'), formData).then(function (_ref2) {
      var data = _ref2.data;
      Botble.showSuccess(data.message);
      languageTable.load(window.location.href + ' .table-language > *');
    })["finally"](function () {
      $(_this2).prop('disabled', false).removeClass('button-loading');
    });
  });
  var $availableRemoteLocales = $('#available-remote-locales');
  if ($availableRemoteLocales.length) {
    var getRemoteLocales = function getRemoteLocales() {
      $httpClient.make().get($availableRemoteLocales.data('url')).then(function (_ref3) {
        var data = _ref3.data;
        languageTable.load(window.location.href + ' .table-language > *');
        $availableRemoteLocales.html(data.data);
      });
    };
    getRemoteLocales();
    $(document).on('click', '.btn-import-remote-locale', function (event) {
      event.preventDefault();
      $('.button-confirm-import-locale').data('url', $(this).data('url'));
      $('.modal-confirm-import-locale').modal('show');
    });
    $('.button-confirm-import-locale').on('click', function (event) {
      event.preventDefault();
      var _self = $(event.currentTarget);
      _self.addClass('button-loading');
      var url = _self.data('url');
      $httpClient.make().post(url).then(function (_ref4) {
        var data = _ref4.data;
        Botble.showSuccess(data.message);
        getRemoteLocales();
      })["finally"](function () {
        _self.closest('.modal').modal('hide');
        _self.removeClass('button-loading');
      });
    });
  }
});
/******/ })()
;