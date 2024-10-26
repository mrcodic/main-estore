/******/ (() => { // webpackBootstrap
/*!************************************************************!*\
  !*** ./platform/packages/slug/resources/assets/js/slug.js ***!
  \************************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SlugBoxManagement = /*#__PURE__*/function () {
  function SlugBoxManagement() {
    _classCallCheck(this, SlugBoxManagement);
  }
  return _createClass(SlugBoxManagement, [{
    key: "init",
    value: function init() {
      var $slugBox = $('#edit-slug-box');
      $(document).on('click', '#change_slug', function (event) {
        $('.default-slug').unwrap();
        var $slugInput = $('#editable-post-name');
        $slugInput.html('<input type="text" id="new-post-slug" class="form-control" value="' + $slugInput.text() + '" autocomplete="off">');
        $('#edit-slug-box .cancel').show();
        $('#edit-slug-box .save').show();
        $(event.currentTarget).hide();
      });
      $(document).on('click', '#edit-slug-box .cancel', function () {
        var currentSlug = $('#current-slug').val();
        var $permalink = $('#sample-permalink');
        $permalink.html('<a class="permalink" href="' + $('#slug_id').data('view') + currentSlug.replace('/', '') + '">' + $permalink.html() + '</a>');
        $('#editable-post-name').text(currentSlug);
        $('#edit-slug-box .cancel').hide();
        $('#edit-slug-box .save').hide();
        $('#change_slug').show();
      });
      var createSlug = function createSlug(name, id, exist) {
        $httpClient.make().post($('#slug_id').data('url'), {
          value: name,
          slug_id: id.toString(),
          model: $('input[name=model]').val()
        }).then(function (_ref) {
          var data = _ref.data;
          var $permalink = $('#sample-permalink');
          var $slugId = $('#slug_id');
          if (exist) {
            $permalink.find('.permalink').prop('href', $slugId.data('view') + data.replace('/', ''));
          } else {
            $permalink.html('<a class="permalink" target="_blank" href="' + $slugId.data('view') + data.replace('/', '') + '">' + $permalink.html() + '</a>');
          }
          $('.page-url-seo p').text($slugId.data('view') + data.replace('/', ''));
          $('#editable-post-name').text(data);
          $('#current-slug').val(data);
          $('#edit-slug-box .cancel').hide();
          $('#edit-slug-box .save').hide();
          $('#change_slug').show();
          $slugBox.removeClass('hidden');
        });
      };
      $(document).on('click', '#edit-slug-box .save', function () {
        var $slugField = $('#new-post-slug');
        var name = $slugField.val();
        var id = $('#slug_id').data('id');
        if (id == null) {
          id = 0;
        }
        if (name != null && name !== '') {
          createSlug(name, id, false);
        } else {
          $slugField.closest('.form-group').addClass('has-error');
        }
      });
      $(document).on('blur', '#' + $slugBox.data('field-name'), function (e) {
        if ($slugBox.hasClass('hidden')) {
          var value = $(e.currentTarget).val();
          if (value !== null && value !== '') {
            createSlug(value, 0, true);
          }
        }
      });
    }
  }]);
}();
$(function () {
  new SlugBoxManagement().init();
});
/******/ })()
;