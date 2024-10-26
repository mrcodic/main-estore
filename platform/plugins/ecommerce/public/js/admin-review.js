/******/ (() => { // webpackBootstrap
/*!************************************************************************!*\
  !*** ./platform/plugins/ecommerce/resources/assets/js/admin-review.js ***!
  \************************************************************************/
var toggleReviewStatus = function toggleReviewStatus(url, button) {
  $.ajax({
    url: url,
    type: 'POST',
    beforeSend: function beforeSend() {
      button.prop('disabled', true);
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
      Botble.showSuccess(message);
      $('#main').load(window.location.href + ' #main > *');
    },
    error: function error(_error) {
      Botble.handleError(_error);
    },
    complete: function complete() {
      button.removeClass('button-loading');
      button.prop('disabled', false);
    }
  });
};
$(document).on('click', '.btn-trigger-delete-review', function (e) {
  $('#confirm-delete-review-button').data('target', $(e.currentTarget).data('target'));
  $('#delete-review-modal').modal('show');
}).on('click', '#confirm-delete-review-button', function (e) {
  var button = $(e.currentTarget);
  $.ajax({
    url: button.data('target'),
    type: 'POST',
    data: {
      _method: 'DELETE'
    },
    beforeSend: function beforeSend() {
      button.prop('disabled', true);
      button.addClass('button-loading');
    },
    success: function success(_ref2) {
      var error = _ref2.error,
        message = _ref2.message,
        data = _ref2.data;
      if (error) {
        Botble.showError(message);
        return;
      }
      Botble.showSuccess(message);
      $('#delete-review-modal').modal('hide');
      setTimeout(function () {
        return window.location.href = data.next_url;
      }, 2000);
    },
    error: function error(_error2) {
      Botble.handleError(_error2);
    },
    complete: function complete() {
      button.removeClass('button-loading');
      button.prop('disabled', false);
    }
  });
}).on('click', '.btn-trigger-unpublish-review', function (e) {
  var button = $(e.currentTarget);
  toggleReviewStatus(route('reviews.unpublish', button.data('id')), button);
}).on('click', '.btn-trigger-publish-review', function (e) {
  var button = $(e.currentTarget);
  toggleReviewStatus(route('reviews.publish', button.data('id')), button);
});
/******/ })()
;