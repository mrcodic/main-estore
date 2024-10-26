/******/ (() => { // webpackBootstrap
/*!***********************************************************************!*\
  !*** ./platform/plugins/sale-popup/resources/assets/js/sale-popup.js ***!
  \***********************************************************************/
var salesPopup = function salesPopup($popupContainer) {
  if ($(window).width() < 768) {
    return;
  }
  var stt = $popupContainer.data('stt');
  if (stt === undefined) {
    return;
  }
  var limit = stt.limit - 1;
  var popupType = stt.pp_type;
  var arrTitle = JSON.parse($('#title-sale-popup').html());
  var arrUrl = stt.url;
  var arrImage = stt.image;
  var arrID = stt.id;
  var arrLocation = JSON.parse($('#location-sale-popup').html());
  var arrTime = JSON.parse($('#time-sale-popup').html());
  var classUp = stt.classUp;
  var classDown = stt.classDown[classUp];
  var starTimeout;
  var stayTimeout;
  var salePopupImg = $('.js-sale-popup-img');
  var salePopupLink = $('.js-sale-popup-a');
  var salePopupTitle = $('.js-sale-popup-tt');
  var salePopupLocation = $('.js-sale-popup-location');
  var salePopupTimeAgo = $('.js-sale-popup-ago');
  var salePopupQuickView = $('.sale-popup-quick-view');
  var index = 0;
  var min = 0;
  var max = arrUrl.length - 1;
  var max2 = arrLocation.length - 1;
  var max3 = arrTime.length - 1;
  var starTime = stt.starTime * stt.starTimeUnit;
  var stayTime = stt.stayTime * stt.stayTimeUnit;
  var getRandomInt = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var updateData = function updateData(index) {
    var img = arrImage[index];
    salePopupImg.attr('src', img).attr('srcset', img);
    salePopupTitle.text(arrTitle[index]);
    salePopupLink.attr('href', arrUrl[index]);
    var quickViewUrl = salePopupQuickView.attr('data-base-url') + '/ajax/quick-view/' + arrID[index];
    salePopupQuickView.attr('href', quickViewUrl).attr('data-url', quickViewUrl);
    salePopupLocation.text(arrLocation[getRandomInt(min, max2)]);
    salePopupTimeAgo.text(arrTime[getRandomInt(min, max3)]);
    showSalesPopUp();
  };
  var loadSalesPopup = function loadSalesPopup() {
    if (popupType == '1') {
      updateData(index);
      ++index;
      if (index > limit || index > max) {
        index = 0;
      }
    } else {
      updateData(getRandomInt(min, max));
    }
    stayTimeout = setTimeout(function () {
      unloadSalesPopup();
    }, stayTime);
  };
  var unloadSalesPopup = function unloadSalesPopup() {
    hideSalesPopUp();
    starTimeout = setTimeout(function () {
      loadSalesPopup();
    }, starTime);
  };
  var showSalesPopUp = function showSalesPopUp() {
    $popupContainer.removeClass('hidden').addClass(classUp).removeClass(classDown);
  };
  var hideSalesPopUp = function hideSalesPopUp() {
    $popupContainer.removeClass(classUp).addClass(classDown);
  };
  $(document).on('click', '.sale-popup-close', function (e) {
    e.preventDefault();
    hideSalesPopUp();
    clearTimeout(stayTimeout);
    clearTimeout(starTimeout);
  });
  $popupContainer.on('open-sale-popup', function () {
    unloadSalesPopup();
  });
  unloadSalesPopup();
};
$(document).ready(function () {
  var $popupContainer = $('.js-sale-popup-container.hidden');
  if ($popupContainer.length) {
    setTimeout(function () {
      $popupContainer.removeClass('hidden');
      $popupContainer.load($popupContainer.data('include'), function () {
        salesPopup($popupContainer.find('.sale-popup-container-wrap'));
      });
    }, 3000);
  }
});
/******/ })()
;