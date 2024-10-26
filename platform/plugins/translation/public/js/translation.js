/******/ (() => { // webpackBootstrap
/*!*************************************************************************!*\
  !*** ./platform/plugins/translation/resources/assets/js/translation.js ***!
  \*************************************************************************/
jQuery(document).ready(function ($) {
  $('.editable').editable({
    mode: 'inline'
  }).on('hidden', function (event, reason) {
    var locale = $(event.currentTarget).data('locale');
    if (reason === 'save') {
      $(event.currentTarget).removeClass('status-0').addClass('status-1');
    }
    if (reason === 'save' || reason === 'nochange') {
      var $next = $(event.currentTarget).closest('tr').next().find('.editable.locale-' + locale);
      setTimeout(function () {
        $next.editable('show');
      }, 300);
    }
  });
  $('.group-select').on('change', function (event) {
    var group = $(event.currentTarget).val();
    if (group) {
      window.location.href = route('translations.index') + '?group=' + encodeURI($(event.currentTarget).val());
    } else {
      window.location.href = route('translations.index');
    }
  });
  $('.box-translation').on('click', '.button-import-groups', function (event) {
    event.preventDefault();
    var _self = $(event.currentTarget);
    _self.addClass('button-loading');
    var $form = _self.closest('form');
    $httpClient.make().postForm($form.prop('action'), new FormData($form[0])).then(function (_ref) {
      var data = _ref.data;
      Botble.showSuccess(data.message);
      $form.removeClass('dirty');
    })["finally"](function () {
      return _self.removeClass('button-loading');
    });
  });
  $(document).on('click', '.button-publish-groups', function (event) {
    event.preventDefault();
    $('#confirm-publish-modal').modal('show');
  });
  $('#confirm-publish-modal').on('click', '#button-confirm-publish-groups', function (event) {
    event.preventDefault();
    var _self = $(event.currentTarget);
    _self.addClass('button-loading');
    var $form = $('.button-publish-groups').closest('form');
    $httpClient.make().postForm($form.prop('action'), new FormData($form[0])).then(function (_ref2) {
      var data = _ref2.data;
      Botble.showSuccess(data.message);
      $form.removeClass('dirty');
      _self.closest('.modal').modal('hide');
    })["finally"](function () {
      return _self.removeClass('button-loading');
    });
  });
});
/******/ })()
;