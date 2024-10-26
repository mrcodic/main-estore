/******/ (() => { // webpackBootstrap
/*!*******************************************************************!*\
  !*** ./platform/plugins/language/resources/assets/js/language.js ***!
  \*******************************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LanguageManagement = /*#__PURE__*/function () {
  function LanguageManagement() {
    _classCallCheck(this, LanguageManagement);
  }
  return _createClass(LanguageManagement, [{
    key: "bindEventToElement",
    value: function bindEventToElement() {
      var _this = this;
      if (jQuery().select2) {
        $('.select-search-language').select2({
          width: '100%',
          templateResult: LanguageManagement.formatState,
          templateSelection: LanguageManagement.formatState
        });
      }
      var languageTable = $('.table-language');
      $(document).on('change', '#language_id', function (event) {
        var language = $(event.currentTarget).find('option:selected').data('language');
        if (typeof language != 'undefined' && language.length > 0) {
          $('#lang_name').val(language[2]);
          $('#lang_locale').val(language[0]);
          $('#lang_code').val(language[1]);
          $('#flag_list').val(language[4]).trigger('change');
          $('.lang_is_' + language[3]).prop('checked', true);
          $('#btn-language-submit-edit').prop('id', 'btn-language-submit').text('Add new language');
        }
      });
      $(document).on('click', '#btn-language-submit', function (event) {
        event.preventDefault();
        var name = $('#lang_name').val();
        var locale = $('#lang_locale').val();
        var code = $('#lang_code').val();
        var flag = $('#flag_list').val();
        var order = $('#lang_order').val();
        var isRTL = $('.lang_is_rtl').prop('checked') ? 1 : 0;
        LanguageManagement.createOrUpdateLanguage(0, name, locale, code, flag, order, isRTL, 0);
      });
      $(document).on('click', '#btn-language-submit-edit', function (event) {
        event.preventDefault();
        var id = $('#lang_id').val();
        var name = $('#lang_name').val();
        var locale = $('#lang_locale').val();
        var code = $('#lang_code').val();
        var flag = $('#flag_list').val();
        var order = $('#lang_order').val();
        var isRTL = $('.lang_is_rtl').prop('checked') ? 1 : 0;
        LanguageManagement.createOrUpdateLanguage(id, name, locale, code, flag, order, isRTL, 1);
      });
      languageTable.on('click', '.deleteDialog', function (event) {
        event.preventDefault();
        $('.delete-crud-entry').data('section', $(event.currentTarget).data('section'));
        $('.modal-confirm-delete').modal('show');
      });
      $('.delete-crud-entry').on('click', function (event) {
        event.preventDefault();
        $('.modal-confirm-delete').modal('hide');
        var deleteURL = $(event.currentTarget).data('section');
        $(_this).prop('disabled', true).addClass('button-loading');
        $httpClient.make()["delete"](deleteURL).then(function (_ref) {
          var data = _ref.data;
          if (data.data) {
            languageTable.find('i[data-id=' + data.data + ']').unwrap();
            $('.tooltip').remove();
          }
          languageTable.find('a[data-section="' + deleteURL + '"]').closest('tr').remove();
          Botble.showSuccess(data.message);
        })["finally"](function () {
          $(_this).prop('disabled', false).removeClass('button-loading');
        });
      });
      languageTable.on('click', '.set-language-default', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        $httpClient.make().get(_self.data('section')).then(function (_ref2) {
          var data = _ref2.data;
          var star = languageTable.find('td > i');
          star.replaceWith("<a data-section=\"".concat(route('languages.set.default'), "?lang_id=").concat(star.data('id'), "\" class=\"set-language-default\" data-bs-toggle=\"tooltip\" data-bs-original-title=\"Choose ").concat(star.data('name'), " as default language\">").concat(star.closest('td').html(), "</a>"));
          _self.find('i').unwrap();
          $('.tooltip').remove();
          Botble.showSuccess(data.message);
        });
      });
      languageTable.on('click', '.edit-language-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        $httpClient.make().get(route('languages.get') + '?lang_id=' + _self.data('id')).then(function (_ref3) {
          var data = _ref3.data;
          var language = data.data;
          $('#lang_id').val(language.lang_id);
          $('#lang_name').val(language.lang_name);
          $('#lang_locale').val(language.lang_locale);
          $('#lang_code').val(language.lang_code);
          $('#flag_list').val(language.lang_flag).trigger('change');
          $('.lang_is_rtl').prop('checked', language.lang_is_rtl);
          $('.lang_is_ltr').prop('checked', !language.lang_is_rtl);
          $('#lang_order').val(language.lang_order);
          $('#btn-language-submit').prop('id', 'btn-language-submit-edit').text('Update');
        });
      });
      $(document).on('click', '.button-save-language-settings', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        var $form = _self.closest('form');
        var formData = new FormData($form[0]);
        $httpClient.make().postForm($form.prop('action'), formData).then(function (_ref4) {
          var data = _ref4.data;
          Botble.showSuccess(data.message);
          $form.removeClass('dirty');
        })["finally"](function () {
          _self.removeClass('button-loading');
        });
      });
    }
  }], [{
    key: "formatState",
    value: function formatState(state) {
      if (!state.id || state.element.value.toLowerCase().includes('...')) {
        return state.text;
      }
      return $('<span><img src="' + $('#language_flag_path').val() + state.element.value.toLowerCase() + '.svg" class="img-flag" width="16" alt="Language flag"/> ' + state.text + '</span>');
    }
  }, {
    key: "createOrUpdateLanguage",
    value: function createOrUpdateLanguage(id, name, locale, code, flag, order, isRTL, edit) {
      var url = route('languages.store');
      if (edit) {
        url = route('languages.edit') + '?lang_code=' + code;
      }
      $('#btn-language-submit').addClass('button-loading');
      $httpClient.make().post(url, {
        lang_id: id.toString(),
        lang_name: name,
        lang_locale: locale,
        lang_code: code,
        lang_flag: flag,
        lang_order: order,
        lang_is_rtl: isRTL
      }).then(function (_ref5) {
        var data = _ref5.data;
        if (edit) {
          $('.table-language').find('tr[data-id=' + id + ']').replaceWith(data.data);
        } else {
          $('.table-language').append(data.data);
        }
        Botble.showSuccess(data.message);
      })["finally"](function () {
        $('#language_id').val('').trigger('change');
        $('#lang_name').val('');
        $('#lang_locale').val('');
        $('#lang_code').val('');
        $('#flag_list').val('').trigger('change');
        $('.lang_is_ltr').prop('checked', true);
        $('#btn-language-submit-edit').prop('id', 'btn-language-submit').text('Add new language');
        $('#btn-language-submit').removeClass('button-loading');
      });
    }
  }]);
}();
$(document).ready(function () {
  new LanguageManagement().bindEventToElement();
});
/******/ })()
;