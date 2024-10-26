/******/ (() => { // webpackBootstrap
/*!**************************************************!*\
  !*** ./platform/themes/ninico/assets/js/page.js ***!
  \**************************************************/
$(document).ready(function () {
  var $pageForm = $(document).find('#botble-page-forms-page-form');
  var fieldsToToggle = ['footer_background_color', 'footer_text_color', 'footer_text_muted_color', 'footer_logo', 'footer_border_color', 'footer_bottom_background_color'];
  $pageForm.on('change', 'select[name="customize_footer"]', function () {
    var _this = this;
    fieldsToToggle.forEach(function (field) {
      $pageForm.find("[name=\"".concat(field, "\"]")).closest('.meta-boxes').css('display', $(_this).val() === 'custom' ? 'block' : 'none');
    });
  });
  $pageForm.find('select[name="customize_footer"]').trigger('change');
});
/******/ })()
;