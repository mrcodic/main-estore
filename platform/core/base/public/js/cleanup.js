/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***********************************************************!*\
  !*** ./platform/core/base/resources/assets/js/cleanup.js ***!
  \***********************************************************/


$(document).ready(function () {
  $(document).on('click', '.btn-trigger-cleanup', function (event) {
    event.preventDefault();
    $('#cleanup-modal').modal('show');
  });
  $(document).on('click', '#cleanup-submit-action', function (event) {
    event.preventDefault();
    event.stopPropagation();
    var _self = $(event.currentTarget);
    _self.addClass('button-loading');
    var $form = $('#form-cleanup-database');
    var $modal = $('#cleanup-modal');
    $httpClient.make().post($form.prop('action'), new FormData($form[0])).then(function (_ref) {
      var data = _ref.data;
      return Botble.showSuccess(data.message);
    })["finally"](function () {
      _self.removeClass('button-loading');
      $modal.modal('hide');
    });
  });
});
/******/ })()
;