/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    checkUpdateUrl: {
      type: String,
      "default": function _default() {
        return null;
      },
      required: true
    },
    settingUrl: {
      type: String,
      "default": function _default() {
        return null;
      },
      required: true
    }
  },
  data: function data() {
    return {
      hasNewVersion: false,
      message: null
    };
  },
  mounted: function mounted() {
    this.checkUpdate();
  },
  methods: {
    checkUpdate: function checkUpdate() {
      var _this = this;
      axios.get(this.checkUpdateUrl).then(function (res) {
        if (!res.data.error && res.data.data.has_new_version) {
          _this.hasNewVersion = true;
          _this.message = res.data.message;
        }
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    verifyUrl: {
      type: String,
      "default": function _default() {
        return null;
      },
      required: true
    },
    settingUrl: {
      type: String,
      "default": function _default() {
        return null;
      },
      required: true
    }
  },
  data: function data() {
    return {
      verified: true
    };
  },
  mounted: function mounted() {
    this.verifyLicense();
  },
  methods: {
    verifyLicense: function verifyLicense() {
      var _this = this;
      axios.get(this.verifyUrl).then(function (res) {
        if (res.data.error) {
          _this.verified = false;
        }
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue?vue&type=template&id=0f929218":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue?vue&type=template&id=0f929218 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  key: 0,
  "class": "note note-warning"
};
var _hoisted_2 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.hasNewVersion ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.message) + ", please go to ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $props.settingUrl
  }, "System Updater", 8 /* PROPS */, _hoisted_2), _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to upgrade to the latest version!"))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue?vue&type=template&id=19926a86":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue?vue&type=template&id=19926a86 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  key: 0,
  "class": "note note-warning"
};
var _hoisted_2 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return !$data.verified ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your license is invalid, please contact support. If you didn't setup license code, please go to ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $props.settingUrl
  }, "Settings", 8 /* PROPS */, _hoisted_2), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to activate license! "))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue":
/*!*****************************************************************************************!*\
  !*** ./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckUpdateComponent_vue_vue_type_template_id_0f929218__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckUpdateComponent.vue?vue&type=template&id=0f929218 */ "./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue?vue&type=template&id=0f929218");
/* harmony import */ var _CheckUpdateComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckUpdateComponent.vue?vue&type=script&lang=js */ "./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CheckUpdateComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CheckUpdateComponent_vue_vue_type_template_id_0f929218__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue":
/*!*******************************************************************************************!*\
  !*** ./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VerifyLicenseComponent_vue_vue_type_template_id_19926a86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerifyLicenseComponent.vue?vue&type=template&id=19926a86 */ "./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue?vue&type=template&id=19926a86");
/* harmony import */ var _VerifyLicenseComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerifyLicenseComponent.vue?vue&type=script&lang=js */ "./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VerifyLicenseComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VerifyLicenseComponent_vue_vue_type_template_id_19926a86__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckUpdateComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckUpdateComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CheckUpdateComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************!*\
  !*** ./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerifyLicenseComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerifyLicenseComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VerifyLicenseComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue?vue&type=template&id=0f929218":
/*!***********************************************************************************************************************!*\
  !*** ./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue?vue&type=template&id=0f929218 ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckUpdateComponent_vue_vue_type_template_id_0f929218__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CheckUpdateComponent_vue_vue_type_template_id_0f929218__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CheckUpdateComponent.vue?vue&type=template&id=0f929218 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue?vue&type=template&id=0f929218");


/***/ }),

/***/ "./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue?vue&type=template&id=19926a86":
/*!*************************************************************************************************************************!*\
  !*** ./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue?vue&type=template&id=19926a86 ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerifyLicenseComponent_vue_vue_type_template_id_19926a86__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerifyLicenseComponent_vue_vue_type_template_id_19926a86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VerifyLicenseComponent.vue?vue&type=template&id=19926a86 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue?vue&type=template&id=19926a86");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = Vue;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************************************************!*\
  !*** ./platform/core/dashboard/resources/assets/js/dashboard.js ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_VerifyLicenseComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/VerifyLicenseComponent.vue */ "./platform/core/dashboard/resources/assets/js/components/VerifyLicenseComponent.vue");
/* harmony import */ var _components_CheckUpdateComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CheckUpdateComponent.vue */ "./platform/core/dashboard/resources/assets/js/components/CheckUpdateComponent.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


if (typeof vueApp !== 'undefined') {
  vueApp.booting(function (vue) {
    vue.component('verify-license-component', _components_VerifyLicenseComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
    vue.component('check-update-component', _components_CheckUpdateComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  });
}
var callbackWidgets = {};
var BDashboard = /*#__PURE__*/function () {
  function BDashboard() {
    _classCallCheck(this, BDashboard);
  }
  return _createClass(BDashboard, [{
    key: "init",
    value: function init() {
      var list_widgets = $('#list_widgets');
      $(document).on('click', '.portlet > .portlet-title .tools > a.remove', function (event) {
        event.preventDefault();
        $('#hide-widget-confirm-bttn').data('id', $(event.currentTarget).closest('.widget_item').prop('id'));
        $('#hide_widget_modal').modal('show');
      });
      list_widgets.on('click', '.page_next, .page_previous', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);
        var href = $this.prop('href');
        if (href) {
          BDashboard.loadWidget($this.closest('.portlet').find('.portlet-body'), href);
        }
      });
      list_widgets.on('change', '.number_record .numb', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);
        var numb = $this.closest('.number_record').find('.numb');
        var paginate = numb.val();
        if (!isNaN(paginate) && paginate > 0) {
          BDashboard.loadWidget($this.closest('.portlet').find('.portlet-body'), $this.closest('.widget_item').attr('data-url'), {
            paginate: paginate
          });
        } else {
          Botble.showError('Please input a number!');
        }
      });
      list_widgets.on('click', '.btn_change_paginate', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);
        var numb = $this.closest('.number_record').find('.numb');
        var min = parseInt(numb.prop('min') || 5);
        var max = parseInt(numb.prop('max') || 100);
        var step = parseInt(numb.prop('step') || 5);
        var paginate = parseInt(numb.val());
        if ($this.hasClass('btn_up')) {
          if (paginate < max) {
            paginate += step;
          }
        } else if ($this.hasClass('btn_down')) {
          if (paginate - step > 0) {
            paginate -= step;
          } else {
            paginate = step;
          }
          if (paginate < min) {
            paginate = min;
          }
        }
        if (paginate != parseInt(numb.val())) {
          numb.val(paginate).trigger('change');
        }
      });
      $('#hide-widget-confirm-bttn').on('click', function (event) {
        event.preventDefault();
        var name = $(event.currentTarget).data('id');
        $httpClient.makeWithoutErrorHandler().get(route('dashboard.hide_widget', {
          name: name
        })).then(function (_ref) {
          var data = _ref.data;
          $('#' + name).fadeOut();
          Botble.showSuccess(data.message);
        })["finally"](function () {
          $('#hide_widget_modal').modal('hide');
          var portlet = $(event.currentTarget).closest('.portlet');
          if ($(document).hasClass('page-portlet-fullscreen')) {
            $(document).removeClass('page-portlet-fullscreen');
          }
          portlet.find('[data-bs-toggle=tooltip]').tooltip('destroy');
          portlet.remove();
        });
      });
      $(document).on('click', '.portlet:not(.widget-load-has-callback) > .portlet-title .tools > a.reload', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);
        BDashboard.loadWidget($this.closest('.portlet').find('.portlet-body'), $this.closest('.widget_item').attr('data-url'));
      });
      $(document).on('click', '.portlet > .portlet-title .tools > .collapse, .portlet .portlet-title .tools > .expand', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        var $portlet = _self.closest('.portlet');
        var state = $.trim(_self.data('state'));
        if (state === 'expand') {
          $portlet.find('.portlet-body').removeClass('collapse').addClass('expand');
          BDashboard.loadWidget($portlet.find('.portlet-body'), _self.closest('.widget_item').attr('data-url'));
        } else {
          $portlet.find('.portlet-body').removeClass('expand').addClass('collapse');
        }
        $httpClient.makeWithoutErrorHandler().post(route('dashboard.edit_widget_setting_item'), {
          name: _self.closest('.widget_item').prop('id'),
          setting_name: 'state',
          setting_value: state
        }).then(function () {
          if (state === 'collapse') {
            _self.data('state', 'expand');
            $portlet.find('.predefined-ranges').addClass('d-none');
            $portlet.find('a.reload').addClass('d-none');
            $portlet.find('a.fullscreen').addClass('d-none');
          } else {
            _self.data('state', 'collapse');
            $portlet.find('.predefined-ranges').removeClass('d-none');
            $portlet.find('a.reload').removeClass('d-none');
            $portlet.find('a.fullscreen').removeClass('d-none');
          }
        });
      });
      $(document).on('change', '.portlet select[name=predefined_range]', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget);
        BDashboard.loadWidget($this.closest('.portlet').find('.portlet-body'), $this.closest('.widget_item').attr('data-url'), {
          changed_predefined_range: 1
        });
      });
      var $manageWidgetModal = $('#manage_widget_modal');
      $(document).on('click', '.manage-widget', function (event) {
        event.preventDefault();
        $manageWidgetModal.modal('show');
      });
      $manageWidgetModal.on('change', '.swc_wrap input', function (event) {
        $(event.currentTarget).closest('section').find('i').toggleClass('widget_none_color');
      });
    }
  }], [{
    key: "loadWidget",
    value: function loadWidget(el, url, data, callback) {
      var widgetItem = el.closest('.widget_item');
      var widgetId = widgetItem.attr('id');
      if (typeof callback !== 'undefined') {
        callbackWidgets[widgetId] = callback;
      }
      var $collapseExpand = widgetItem.find('a.collapse-expand');
      if ($collapseExpand.length && $collapseExpand.hasClass('collapse')) {
        return;
      }
      Botble.blockUI({
        target: el,
        iconOnly: true,
        overlayColor: 'none'
      });
      if (typeof data === 'undefined' || data == null) {
        data = {};
      }
      var predefinedRange = widgetItem.find('select[name=predefined_range]');
      if (predefinedRange.length) {
        data.predefined_range = predefinedRange.val();
      }
      $httpClient.makeWithoutErrorHandler().get(url, data).then(function (_ref2) {
        var data = _ref2.data;
        el.html(data.data);
        if (typeof callback !== 'undefined') {
          callback();
        } else if (callbackWidgets[widgetId]) {
          callbackWidgets[widgetId]();
        }
        if (el.find('.scroller').length !== 0) {
          Botble.callScroll(el.find('.scroller'));
        }
        $('.equal-height').equalHeights();
        BDashboard.initSortable();
      })["catch"](function (error) {
        el.html('<div class="dashboard_widget_msg col-12"><p>' + error.response.data.message + '</p>');
      })["finally"](function () {
        Botble.unblockUI(el);
      });
    }
  }, {
    key: "initSortable",
    value: function initSortable() {
      if ($('#list_widgets').length > 0) {
        var el = document.getElementById('list_widgets');
        Sortable.create(el, {
          group: 'widgets',
          // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
          sort: true,
          // sorting inside list
          delay: 0,
          // time in milliseconds to define when the sorting should start
          disabled: false,
          // Disables the sortable if set to true.
          store: null,
          // @see Store
          animation: 150,
          // ms, animation speed moving items when sorting, `0` — without animation
          handle: '.portlet-title',
          ghostClass: 'sortable-ghost',
          // Class name for the drop placeholder
          chosenClass: 'sortable-chosen',
          // Class name for the chosen item
          dataIdAttr: 'data-id',
          forceFallback: false,
          // ignore the HTML5 DnD behaviour and force the fallback to kick in
          fallbackClass: 'sortable-fallback',
          // Class name for the cloned DOM Element when using forceFallback
          fallbackOnBody: false,
          // Appends the cloned DOM Element into the Document's Body

          scroll: true,
          // or HTMLElement
          scrollSensitivity: 30,
          // px, how near the mouse must be to an edge to start scrolling.
          scrollSpeed: 10,
          // px

          // Changed sorting within list
          onUpdate: function onUpdate() {
            var items = [];
            $.each($('.widget_item'), function (index, widget) {
              items.push($(widget).prop('id'));
            });
            $httpClient.makeWithoutErrorHandler().post(route('dashboard.update_widget_order'), {
              items: items
            }).then(function (_ref3) {
              var data = _ref3.data;
              Botble.showSuccess(data.message);
            });
          }
        });
      }
    }
  }]);
}();
$(document).ready(function () {
  new BDashboard().init();
  window.BDashboard = BDashboard;
});
/******/ })()
;