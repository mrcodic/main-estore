/******/ (() => { // webpackBootstrap
/*!********************************************************************!*\
  !*** ./platform/packages/theme/resources/assets/js/icons-field.js ***!
  \********************************************************************/
$(document).ready(function () {
  'use strict';

  var initIconsField = function initIconsField() {
    var icons = window.themeIcons || [];
    if (!icons) {
      return;
    }
    $(document).find('.icon-select').each(function (index, el) {
      var $this = $(el);
      if ($this.data('check-initialized') && $this.hasClass('select2-hidden-accessible')) {
        return;
      }
      var value = $this.children('option:selected').val();
      var options = '<option value="">' + $this.data('empty-value') + '</option>';
      icons.forEach(function (value) {
        options += '<option value="' + value + '">' + value + '</option>';
      });
      $this.html(options);
      $this.val(value);
      var templateCallback = function templateCallback(state) {
        if (!state.id) {
          return state.text;
        }
        return $("<span><i class=\"".concat(state.id, "\"></i></span> ").concat(state.text, "</span>"));
      };
      var select2Options = {
        templateResult: function templateResult(state) {
          return templateCallback(state);
        },
        width: '100%',
        templateSelection: function templateSelection(state) {
          return templateCallback(state);
        }
      };
      var parent = $this.closest('.modal');
      if (parent.length) {
        select2Options.dropdownParent = parent;
      }
      $this.select2(select2Options);
    });
  };
  initIconsField();
  document.addEventListener('core-init-resources', function () {
    initIconsField();
  });
});
/******/ })()
;