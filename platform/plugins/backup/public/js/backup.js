/******/ (() => { // webpackBootstrap
/*!***************************************************************!*\
  !*** ./platform/plugins/backup/resources/assets/js/backup.js ***!
  \***************************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BackupManagement = /*#__PURE__*/function () {
  function BackupManagement() {
    _classCallCheck(this, BackupManagement);
  }
  return _createClass(BackupManagement, [{
    key: "init",
    value: function init() {
      var backupTable = $('#table-backups');
      backupTable.on('click', '.deleteDialog', function (event) {
        event.preventDefault();
        $('.delete-crud-entry').data('section', $(event.currentTarget).data('section'));
        $('.modal-confirm-delete').modal('show');
      });
      backupTable.on('click', '.restoreBackup', function (event) {
        event.preventDefault();
        $('#restore-backup-button').data('section', $(event.currentTarget).data('section'));
        $('#restore-backup-modal').modal('show');
      });
      $('.delete-crud-entry').on('click', function (event) {
        event.preventDefault();
        $('.modal-confirm-delete').modal('hide');
        var deleteURL = $(event.currentTarget).data('section');
        $httpClient.make()["delete"](deleteURL).then(function (_ref) {
          var data = _ref.data;
          if (backupTable.find('tbody tr').length <= 1) {
            backupTable.load(window.location.href + ' #table-backups > *');
          }
          backupTable.find('a[data-section="' + deleteURL + '"]').closest('tr').remove();
          Botble.showSuccess(data.message);
        });
      });
      $('#restore-backup-button').on('click', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $httpClient.make().get(_self.data('section')).then(function (_ref2) {
          var data = _ref2.data;
          _self.closest('.modal').modal('hide');
          Botble.showSuccess(data.message);
          window.location.reload();
        })["finally"](function () {
          _self.removeClass('button-loading');
        });
      });
      $(document).on('click', '#generate_backup', function (event) {
        event.preventDefault();
        $('#name').val('');
        $('#description').val('');
        $('#create-backup-modal').modal('show');
      });
      $('#create-backup-modal').on('click', '#create-backup-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        var name = $('#name').val();
        var description = $('#description').val();
        var error = false;
        if (name === '' || name === null) {
          error = true;
          Botble.showError('Backup name is required!');
        }
        if (!error) {
          $httpClient.make().post($('div[data-route-create]').data('route-create'), {
            name: name,
            description: description
          }).then(function (_ref3) {
            var data = _ref3.data;
            backupTable.find('.no-backup-row').remove();
            backupTable.find('tbody').append(data.data);
            Botble.showSuccess(data.message);
          })["finally"](function () {
            _self.removeClass('button-loading');
            _self.closest('.modal').modal('hide');
          });
        } else {
          _self.removeClass('button-loading');
        }
      });
    }
  }]);
}();
$(document).ready(function () {
  new BackupManagement().init();
});
/******/ })()
;