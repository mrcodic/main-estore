/******/ (() => { // webpackBootstrap
/*!**********************************************************************!*\
  !*** ./platform/plugins/location/resources/assets/js/bulk-import.js ***!
  \**********************************************************************/
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
$(function () {
  var $locationImport = $('.location-import');
  var $form = $locationImport.find('.form-import-data');
  var dropzone = new Dropzone('.location-dropzone', {
    url: $locationImport.data('upload-url'),
    method: 'post',
    headers: {
      'X-CSRF-TOKEN': $form.find('input[name=_token]').val()
    },
    previewTemplate: $locationImport.find('#preview-template').html(),
    autoProcessQueue: false,
    chunking: true,
    chunkSize: 1048576,
    acceptedFiles: $locationImport.find('.location-dropzone').data('mimetypes'),
    maxFiles: 1,
    maxfilesexceeded: function maxfilesexceeded(file) {
      this.removeFile(file);
    }
  });
  $(document).on('submit', '.form-import-data', function (event) {
    event.preventDefault();
    var $button = $form.find('button[type=submit]');
    var failedRows = [];
    var _validateData = function validateData(file) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var limit = arguments.length > 2 ? arguments[2] : undefined;
      $.ajax({
        url: $locationImport.data('validate-url'),
        type: 'POST',
        data: {
          file: file,
          offset: offset,
          limit: limit
        },
        beforeSend: function beforeSend() {
          if (offset === 0) {
            $form.find('.status-text').text($button.data('validating-text'));
            $button.prop('disabled', true).addClass('button-loading');
            $('.main-form-message').hide();
          }
        },
        success: function success(_ref) {
          var error = _ref.error,
            message = _ref.message,
            data = _ref.data;
          if (error) {
            Botble.showError(message);
            return;
          }
          if (data && data.count > 0) {
            $form.find('.status-text').text(message);
            _validateData(file, data.offset);
            failedRows = [].concat(_toConsumableArray(failedRows), _toConsumableArray(data.failed));
          } else {
            $button.prop('disabled', false).removeClass('button-loading');
            if (failedRows.length > 0) {
              var $listing = $('#imported-listing');
              var $show = $('.show-errors');
              var failureTemplate = $('#failure-template').html();
              var result = '';
              failedRows.forEach(function (val) {
                result += failureTemplate.replace('__row__', val.row).replace('__errors__', val.errors.join(', '));
              });
              $show.show();
              $('.main-form-message').show();
              $listing.show().html(result);
            } else {
              _importData(file);
            }
          }
        },
        error: function error(_error) {
          Botble.handleError(_error);
        }
      });
    };
    var _importData = function importData(file) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var limit = arguments.length > 2 ? arguments[2] : undefined;
      $.ajax({
        url: $locationImport.data('import-url'),
        type: 'POST',
        data: {
          file: file,
          offset: offset,
          limit: limit
        },
        beforeSend: function beforeSend() {
          if (offset === 0) {
            $form.find('.status-text').text($button.data('importing-text'));
            $button.prop('disabled', true).addClass('button-loading');
          }
        },
        success: function success(_ref2) {
          var error = _ref2.error,
            message = _ref2.message,
            data = _ref2.data;
          if (error) {
            Botble.showError(message);
            return;
          }
          if (data && data.count > 0) {
            _importData(file, data.offset);
            $form.find('.status-text').text(message);
          } else {
            Botble.showSuccess(message);
            $button.prop('disabled', false).removeClass('button-loading');
            $form.find('.status-text').hide();
            Botble.unblockUI($form.find('.upload-form'));
            if (data.total_message) {
              $locationImport.find('.main-form-message').show();
              $locationImport.find('.success-message').show().text(data.total_message);
              dropzone.removeAllFiles(true);
            }
          }
        },
        error: function error(_error2) {
          Botble.handleError(_error2);
          Botble.unblockUI($form.find('.upload-form'));
        }
      });
    };
    if (dropzone.getQueuedFiles().length > 0) {
      dropzone.processQueue();
    }
    dropzone.on('sending', function () {
      Botble.blockUI({
        target: $form.find('.upload-form'),
        iconOnly: true,
        overlayColor: 'none'
      });
      $form.find('.status-text').show().text($button.data('uploading-text'));
      $button.prop('disabled', true).addClass('button-loading');
    });
    dropzone.on('error', function (file, message) {
      Botble.showError(message.message);
    });
    dropzone.on('success', function (file, _ref3) {
      var data = _ref3.data;
      _validateData(data.file_path);
    });
  });
  var alertWarning = $('.alert.alert-warning');
  if (alertWarning.length > 0) {
    alertWarning.forEach(function (el) {
      var storageAlert = localStorage.getItem('storage-alerts');
      storageAlert = storageAlert ? JSON.parse(storageAlert) : {};
      if ($(el).data('alert-id')) {
        if (storageAlert[$(el).data('alert-id')]) {
          $(el).alert('close');
          return;
        }
        $(el).removeClass('hidden');
      }
    });
  }
  alertWarning.on('closed.bs.alert', function (el) {
    var storage = $(el.target).data('alert-id');
    if (storage) {
      var storageAlert = localStorage.getItem('storage-alerts');
      storageAlert = storageAlert ? JSON.parse(storageAlert) : {};
      storageAlert[storage] = true;
      localStorage.setItem('storage-alerts', JSON.stringify(storageAlert));
    }
  });
  var isDownloadingTemplate = false;
  $(document).on('click', '.download-template', function (event) {
    event.preventDefault();
    if (isDownloadingTemplate) {
      return;
    }
    var $this = $(event.currentTarget);
    var extension = $this.data('extension');
    var $content = $this.html();
    $.ajax({
      url: $this.data('url'),
      method: 'POST',
      data: {
        extension: extension
      },
      xhrFields: {
        responseType: 'blob'
      },
      beforeSend: function beforeSend() {
        $this.html($this.data('downloading'));
        $this.addClass('text-secondary');
        isDownloadingTemplate = true;
      },
      success: function success(data) {
        var a = document.createElement('a');
        var url = window.URL.createObjectURL(data);
        a.href = url;
        a.download = $this.data('filename');
        document.body.append(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      },
      error: function error(data) {
        Botble.handleError(data);
      },
      complete: function complete() {
        setTimeout(function () {
          $this.html($content);
          $this.removeClass('text-secondary');
          isDownloadingTemplate = false;
        }, 2000);
      }
    });
  });
  var $availableRemoteLocations = $('#available-remote-locations');
  if ($availableRemoteLocations.length) {
    var getRemoteLocations = function getRemoteLocations() {
      $.ajax({
        url: $availableRemoteLocations.data('url'),
        type: 'GET',
        success: function success(_ref4) {
          var error = _ref4.error,
            message = _ref4.message,
            data = _ref4.data;
          if (error) {
            Botble.showError(message);
          } else {
            $availableRemoteLocations.html(data);
          }
        },
        error: function error(_error3) {
          Botble.handleError(_error3);
        }
      });
    };
    getRemoteLocations();
    $(document).on('click', '.btn-import-location-data', function (event) {
      event.preventDefault();
      $('.button-confirm-import').data('url', $(this).data('url'));
      $('.modal-confirm-import').modal('show');
    });
    $('.button-confirm-import').on('click', function (event) {
      event.preventDefault();
      var _self = $(event.currentTarget);
      _self.addClass('button-loading');
      var url = _self.data('url');
      $.ajax({
        url: url,
        type: 'POST',
        success: function success(_ref5) {
          var error = _ref5.error,
            message = _ref5.message;
          if (error) {
            Botble.showError(message);
          } else {
            Botble.showSuccess(message);
            getRemoteLocations();
          }
          _self.closest('.modal').modal('hide');
          _self.removeClass('button-loading');
        },
        error: function error(_error4) {
          Botble.handleError(_error4);
          _self.removeClass('button-loading');
        }
      });
    });
  }
});
/******/ })()
;