/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Rating_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rating.vue */ "./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue");
/* harmony import */ var _Compatible_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compatible.vue */ "./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'marketplace-card',
  data: function data() {
    return {
      versionCheck: false,
      installing: false,
      installed: false,
      activating: false,
      activated: false,
      pluginName: ''
    };
  },
  props: {
    data: []
  },
  components: {
    Rating: _Rating_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Compatible: _Compatible_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    $event.on('assignInstalled', this.assignInstalled);
    $event.on('assignActivated', this.assignActivated);
    $event.on('onError', this.onError);
    this.setNamePlugin();
    this.checkVersion();
    this.checkInstalled();
    this.checkActivated();
  },
  methods: {
    setNamePlugin: function setNamePlugin() {
      var packageName = this.data.package_name;
      this.pluginName = packageName.substring(packageName.indexOf('/') + 1);
    },
    detail: function detail() {
      $event.emit('detail', this.data);
    },
    install: function install() {
      this.installing = true;
      $event.emit('install', this.data.id);
    },
    changeStatus: function changeStatus() {
      if (!this.activated) {
        this.activating = true;
        $event.emit('changeStatus', this.pluginName);
      }
    },
    assignInstalled: function assignInstalled(name) {
      var size = Object.keys(window.marketplace.installed).length;
      if (this.pluginName === name) {
        this.installing = false;
        window.marketplace.installed[size] = this.pluginName;
      }
      this.checkInstalled();
    },
    assignActivated: function assignActivated(name) {
      var size = Object.keys(window.marketplace.activated).length;
      if (this.pluginName === name) {
        this.activated = false;
        window.marketplace.activated[size] = this.pluginName;
      }
      this.checkActivated();
    },
    onError: function onError() {
      this.installing = false;
      this.activating = false;
    },
    checkVersion: function checkVersion() {
      return this.versionCheck = this.data.version_check;
    },
    checkInstalled: function checkInstalled() {
      if (Object.values(window.marketplace.installed).indexOf(this.pluginName) > -1) {
        this.installed = true;
      }
    },
    checkActivated: function checkActivated() {
      if (Object.values(window.marketplace.activated).indexOf(this.pluginName) > -1) {
        this.activated = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'marketplace-card-compatible'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'marketplace-card-ratting',
  data: function data() {
    return {
      star: []
    };
  },
  props: {
    count: 0,
    avg: 0
  },
  created: function created() {
    this.array();
  },
  methods: {
    array: function array() {
      for (var i = 1; i <= 5; i++) {
        if (this.avg >= i) {
          this.star.push('fa-solid fa-star text-warning');
        } else if (this.avg + 0.5 > i) {
          this.star.push('fa-regular fa-star-half-stroke text-warning');
        } else if (this.avg < i) {
          this.star.push('fa-regular fa-star text-warning');
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_Card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card/Card.vue */ "./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'marketplace-card-plugin',
  props: {
    plugin: []
  },
  components: {
    'marketplace-card': _Card_Card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LayoutPartials_Search_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutPartials/Search.vue */ "./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue");
/* harmony import */ var _Pagination_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue */ "./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue");
/* harmony import */ var _Modal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue */ "./platform/packages/plugin-management/resources/assets/js/components/Modal.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      connection: true,
      loading: true,
      list: [],
      pagination: [],
      currentPage: 1,
      keyword: '',
      tab: 'all',
      productIframeUrl: '',
      pluginName: ''
    };
  },
  created: function created() {
    $event.on('detail', this.detail);
    $event.on('install', this.install);
    $event.on('changeStatus', this.active);
    this.apiGetList();
  },
  components: {
    pagination: _Pagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    modal: _Modal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    search: _LayoutPartials_Search_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    params: function params() {
      var params = {
        page: this.currentPage,
        q: this.keyword
      };
      switch (this.tab) {
        case 'featured':
          Object.assign(params, {
            is_featured: true
          });
          break;
        case 'popular':
          Object.assign(params, {
            is_popular: true
          });
          break;
        case 'top_rated':
          Object.assign(params, {
            is_top_rating: true
          });
          break;
      }
      return params;
    },
    headers: function headers() {
      return {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      };
    },
    responseCheck: function responseCheck(response) {
      if (response.status === 500) {
        return {
          error: true,
          message: response.json()
        };
      }
      return response.json();
    },
    apiGetList: function apiGetList() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var showLoading, url;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              showLoading = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : true;
              if (showLoading) {
                _this.loading = true;
              }
              url = new URL(window.marketplace.route.list);
              url.search = new URLSearchParams(_this.params());
              _context.next = 6;
              return fetch(url, {
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json'
                }
              }).then(function (response) {
                return _this.responseCheck(response);
              }).then(function (data) {
                _this.loading = false;
                if (data.error) {
                  Botble.showError(data.message);
                  return _this.connection = false;
                }
                _this.list = data;
                _this.pagination = data.meta;
              });
            case 6:
              _this.loading = false;
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    apiInstall: function apiInstall(id) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var url;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              url = window.marketplace.route.install;
              url = url.replace(':id', id);
              _context2.next = 4;
              return fetch(url, {
                method: 'POST',
                headers: _this2.headers(),
                body: JSON.stringify({
                  _token: window.marketplace.token
                })
              }).then(function (response) {
                return _this2.responseCheck(response);
              }).then(function (data) {
                _this2.loading = false;
                if (data.error) {
                  $event.emit('onError');
                  return Botble.showError(data.message);
                }
                $event.emit('assignInstalled', data.data.name);
                Botble.showSuccess(data.message);
                _this2.pluginName = data.data.name;
                _this2.apiGetList(false);
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    apiChangeStatus: function apiChangeStatus(name) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var url;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              url = window.marketplace.route.active;
              _context3.next = 3;
              return fetch(url, {
                method: 'POST',
                headers: _this3.headers(),
                body: JSON.stringify({
                  _token: window.marketplace.token,
                  _method: 'PUT',
                  name: name
                })
              }).then(function (response) {
                return _this3.responseCheck(response);
              }).then(function (data) {
                _this3.loading = false;
                if (data.error) {
                  $event.emit('onError');
                  return Botble.showError(data.message);
                }
                $event.emit('assignActivated', name);
                Botble.showSuccess(data.message);
              });
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    detail: function detail(product) {
      var url = window.marketplace.route.detail.replace(':id', product.id);
      this.productIframeUrl = url + '/iframe';
      this.$refs.pluginDetail.showModal('plugin-detail');
      this.$refs.pluginDetail.setProduct(product);
    },
    install: function install(id) {
      this.apiInstall(id);
    },
    active: function active(name) {
      this.apiChangeStatus(name);
    },
    changePage: function changePage(page) {
      this.currentPage = page;
      this.apiGetList();
    },
    changeTab: function changeTab(tab) {
      this.tab = tab;
      this.pagination.total = 0;
      this.apiGetList();
    },
    search: function search(keyword) {
      this.keyword = keyword;
      this.loading = true;
      this.apiGetList();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'marketplace-layout-search',
  data: function data() {
    return {
      keyword: ''
    };
  },
  methods: {
    search: function search() {
      this.$emit('search', this.keyword);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'marketplace-modal',
  data: function data() {
    return {
      product: {},
      pluginName: '',
      installing: false,
      installed: false,
      activating: false,
      activated: false,
      loaded: false
    };
  },
  props: {
    iframeUrl: String
  },
  created: function created() {
    $event.on('assignInstalled', this.assignInstalled);
    $event.on('assignActivated', this.assignActivated);
  },
  methods: {
    setProduct: function setProduct(data) {
      this.product = data;
      this.installed = false;
      this.activated = false;
      this.setNamePlugin(data);
    },
    showModal: function showModal(id) {
      this.id = id;
      var modal = new bootstrap.Modal(document.getElementById(id));
      return modal.show();
    },
    hideModal: function hideModal(id) {
      var modal = bootstrap.Modal.getInstance(document.getElementById(id));
      this.product = {};
      return modal.hide();
    },
    install: function install() {
      this.installing = true;
      $event.emit('install', this.product.id);
    },
    changeStatus: function changeStatus() {
      if (!this.activated) {
        this.activating = true;
        $event.emit('changeStatus', this.pluginName);
      }
    },
    assignInstalled: function assignInstalled(name) {
      var size = Object.keys(window.marketplace.installed).length;
      if (this.pluginName === name) {
        this.installing = false;
        window.marketplace.installed[size] = this.pluginName;
      }
      this.checkInstalled();
    },
    assignActivated: function assignActivated(name) {
      var size = Object.keys(window.marketplace.activated).length;
      if (this.pluginName === name) {
        this.activated = false;
        window.marketplace.activated[size] = this.pluginName;
      }
      this.checkActivated();
    },
    onError: function onError() {
      this.installing = false;
      this.activating = false;
    },
    setNamePlugin: function setNamePlugin(data) {
      var packageName = data.package_name;
      this.pluginName = packageName.substring(packageName.indexOf('/') + 1);
      this.checkInstalled();
      this.checkActivated();
    },
    checkInstalled: function checkInstalled() {
      if (Object.values(window.marketplace.installed).indexOf(this.pluginName) > -1) {
        this.installed = true;
      }
    },
    checkActivated: function checkActivated() {
      if (Object.values(window.marketplace.activated).indexOf(this.pluginName) > -1) {
        this.activated = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'marketplace-pagination',
  data: function data() {
    return {
      pages: []
    };
  },
  props: {
    pagination: {
      type: [Object],
      required: true,
      "default": {}
    }
  },
  created: function created() {
    this.pageRange();
  },
  methods: {
    changePage: function changePage(page) {
      this.$emit('change-page', page);
    },
    pageRange: function pageRange() {
      var current = this.pagination.current_page;
      var last = this.pagination.last_page;
      var delta = this.pagination.per_page;
      var left = current - delta;
      var right = current + delta + 1;
      var range = [];
      var pages = [];
      var l;
      for (var i = 1; i <= last; i++) {
        if (i === 1 || i === last || i >= left && i < right) {
          range.push(i);
        }
      }
      range.forEach(function (i) {
        if (l) {
          if (i - l === 2) {
            pages.push(l + 1);
          } else if (i - l !== 1) {
            pages.push('...');
          }
        }
        pages.push(i);
        l = i;
      });
      return this.pages = pages;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue */ "./platform/packages/plugin-management/resources/assets/js/components/Layout.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    'marketplace-layout': _Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue?vue&type=template&id=23469cc0":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue?vue&type=template&id=23469cc0 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "p-3 col-12 col-sm-6 col-md-4 col-lg-3"
};
var _hoisted_2 = {
  "class": "card h-100"
};
var _hoisted_3 = ["src", "alt"];
var _hoisted_4 = {
  "class": "card-body"
};
var _hoisted_5 = {
  "class": "card-title"
};
var _hoisted_6 = {
  "class": "card-text text-truncate"
};
var _hoisted_7 = {
  "class": "badge rounded-pill bg-info me-1"
};
var _hoisted_8 = {
  "class": "badge rounded-pill bg-info"
};
var _hoisted_9 = {
  "class": "mt-2 card-text d-flex justify-content-between flex-wrap"
};
var _hoisted_10 = {
  "class": "text-muted"
};
var _hoisted_11 = {
  "class": "card-footer d-flex"
};
var _hoisted_12 = ["textContent"];
var _hoisted_13 = ["textContent"];
var _hoisted_14 = {
  key: 2,
  "class": "btn btn-info btn-disabled",
  disabled: "disabled"
};
var _hoisted_15 = {
  "class": "d-inline-block d-md-none d-xl-inline-block ms-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Rating = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Rating");
  var _component_Compatible = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Compatible");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.data.image_url,
    "class": "card-img-top",
    alt: $props.data.name
  }, null, 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.version')) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.latest_version), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.minimum_core_version')) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.minimum_core_version), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.last_update')) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.humanized_last_updated_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Rating, {
    count: $props.data.ratings_count,
    avg: $props.data.ratings_avg
  }, null, 8 /* PROPS */, ["count", "avg"])]), $data.versionCheck ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Compatible, {
    key: 0
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [!$data.installed ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "btn btn-warning",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.install();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'fa-solid fa-download': !$data.installing,
      'fas fa-circle-notch fa-spin': $data.installing
    })
  }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "d-inline-block d-md-none d-xl-inline-block ms-1",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(!$data.installing ? _ctx.__('base.install_now') : _ctx.__('base.installing'))
  }, null, 8 /* PROPS */, _hoisted_12)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.installed && !$data.activated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "btn btn-success",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.changeStatus();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'fa-solid fa-check': !$data.activating,
      'fas fa-circle-notch fa-spin': $data.activating
    })
  }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "d-inline-block d-md-none d-xl-inline-block ms-1",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(!$data.activating ? _ctx.__('base.activate') : _ctx.__('base.activating'))
  }, null, 8 /* PROPS */, _hoisted_13)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.installed && $data.activated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.activated')), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-secondary ms-auto",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.detail();
    }, ["prevent"]))
  }, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-info-circle"
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.detail')), 1 /* TEXT */)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue?vue&type=template&id=cb269538":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue?vue&type=template&id=cb269538 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "mt-2 card-text small"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-check fw-bold px-2 text-success"
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.compatible_version')), 1 /* TEXT */)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue?vue&type=template&id=5ec8bbad":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue?vue&type=template&id=5ec8bbad ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "fw-bold ms-1"
};
var _hoisted_2 = {
  "class": "badge bg-info text-wrap fw-bold"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.star, function (s, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fa-sm", s])
    }, null, 2 /* CLASS */);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.count), 1 /* TEXT */)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue?vue&type=template&id=05718a3c":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue?vue&type=template&id=05718a3c ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_marketplace_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("marketplace-card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_marketplace_card, {
    data: $props.plugin
  }, null, 8 /* PROPS */, ["data"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=template&id=1acc08ae&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=template&id=1acc08ae&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "card-body"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-md-6 col-sm-12"
};
var _hoisted_5 = {
  "class": "nav nav-pills"
};
var _hoisted_6 = ["onClick"];
var _hoisted_7 = {
  "class": "col-md-6 col-sm-12"
};
var _hoisted_8 = {
  "class": "plugin-list-wrapper"
};
var _hoisted_9 = {
  key: 0,
  "class": "overlay"
};
var _hoisted_10 = {
  key: 1,
  "class": "card-body text-center"
};
var _hoisted_11 = {
  "class": "mt-20 mb-20"
};
var _hoisted_12 = {
  "class": "fw-lighter"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("search");
  var _component_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination");
  var _component_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$data.connection ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(['all', 'featured', 'popular', 'top_rated'], function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
      "class": "nav-item",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
        active: $data.tab === item
      }]),
      onClick: function onClick($event) {
        return $options.changeTab(item);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.' + item)) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "(" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pagination.total) + ")", 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.tab === item]])], 10 /* CLASS, PROPS */, _hoisted_6)]);
  }), 64 /* STABLE_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_search, {
    keyword: $data.keyword,
    onSearch: $options.search
  }, null, 8 /* PROPS */, ["keyword", "onSearch"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [$data.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, _cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "overlay__inner"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "overlay__content"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "spinner"
  })])], -1 /* HOISTED */)]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
    list: $data.list
  }, undefined, true)]), !$data.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_pagination, {
    key: 0,
    pagination: $data.pagination,
    onChangePage: $options.changePage
  }, null, 8 /* PROPS */, ["pagination", "onChangePage"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_modal, {
    id: "plugin-detail",
    ref: "pluginDetail",
    "iframe-url": $data.productIframeUrl
  }, null, 8 /* PROPS */, ["iframe-url"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.connection_aborted')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.connection_aborted_description')), 1 /* TEXT */), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<span class=\"mt-5 img-fluid rounded mx-auto d-block\" data-v-1acc08ae><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"65vh\" viewBox=\"0 0 586.47858 659.29778\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-v-1acc08ae><circle cx=\"332.47856\" cy=\"254\" r=\"254.00001\" fill=\"#f2f2f2\" data-v-1acc08ae></circle><path d=\"M498.46363,113.58835H33.17063c-.99774-.02133-1.78931-.84746-1.76797-1.84521,.02069-.96771,.80026-1.74727,1.76797-1.76796H498.46363c.99774,.02133,1.78931,.84746,1.76794,1.84521-.02069,.96771-.80023,1.74727-1.76794,1.76796Z\" fill=\"#cacaca\" data-v-1acc08ae></path><rect x=\"193.77441\" y=\"174.47256\" width=\"163.61147\" height=\"34.98639\" rx=\"17.49318\" ry=\"17.49318\" fill=\"#fff\" data-v-1acc08ae></rect><path d=\"M128.17493,244.44534H422.98542c9.66122,0,17.49316,7.83197,17.49316,17.49319h0c0,9.66122-7.83194,17.49319-17.49316,17.49319H128.17493c-9.66122,0-17.49318-7.83197-17.49318-17.49319h0c0-9.66122,7.83196-17.49319,17.49318-17.49319Z\" fill=\"#fff\" data-v-1acc08ae></path><path d=\"M128.17493,314.41812H422.98542c9.66122,0,17.49316,7.83197,17.49316,17.49319h0c0,9.66122-7.83194,17.49319-17.49316,17.49319H128.17493c-9.66122,0-17.49318-7.83197-17.49318-17.49319h0c0-9.66122,7.83196-17.49319,17.49318-17.49319Z\" fill=\"#fff\" data-v-1acc08ae></path><path d=\"M91.64085,657.75932l-.69385-.06793c-23.54068-2.42871-44.82135-15.08929-58.18845-34.61835-3.66138-5.44159-6.62299-11.32251-8.815-17.50409l-.21069-.58966,.62375-.05048c7.44699-.59924,15.09732-1.86292,18.49585-2.46417l-21.91473-7.42511-.1355-.65033c-1.29926-6.10406,1.24612-12.38458,6.4285-15.86176,5.19641-3.64447,12.08731-3.76111,17.40405-.29449,2.38599,1.52399,4.88162,3.03339,7.29489,4.49359,8.29321,5.01636,16.8688,10.20337,23.29828,17.30121,9.74951,10.97778,14.02298,25.76984,11.63,40.25562l4.7829,17.47595Z\" fill=\"#f2f2f2\" data-v-1acc08ae></path><polygon points=\"171.30016 646.86102 182.10017 646.85999 187.23916 605.198 171.29716 605.19897 171.30016 646.86102\" fill=\"#a0616a\" data-v-1acc08ae></polygon><path d=\"M170.9192,658.12816l33.21436-.00122v-.41998c-.00049-7.13965-5.78833-12.92737-12.92798-12.92773h-.00079l-6.06702-4.60278-11.3197,4.60345-2.89941,.00012,.00055,13.34814Z\" fill=\"#2f2e41\" data-v-1acc08ae></path><polygon points=\"84.74116 616.94501 93.38016 623.42603 122.49316 593.185 109.74116 583.61902 84.74116 616.94501\" fill=\"#a0616a\" data-v-1acc08ae></polygon><path d=\"M77.67448,625.72966l26.569,19.93188,.25208-.336c4.2843-5.71136,3.12799-13.81433-2.58279-18.09937l-.00064-.00049-2.09079-7.32275-11.81735-3.11102-2.31931-1.73993-8.01019,10.67767Z\" fill=\"#2f2e41\" data-v-1acc08ae></path><path d=\"M120.64463,451.35271s.59625,16.26422,1.3483,29.30737c.12335,2.13916-4.88821,4.46301-4.75842,6.7901,.08609,1.54395,1.02808,3.04486,1.1156,4.65472,.09235,1.69897-1.20822,3.20282-1.1156,4.95984,.09052,1.71667,1.57422,3.6853,1.66373,5.44244,.96317,18.9093,4.45459,41.54633,.9584,47.87439-1.72299,3.11871-23.68533,46.32446-23.68533,46.32446,0,0,12.23666,18.35498,15.73285,12.23663,4.61771-8.08099,40.20615-45.88745,40.20615-53.10712,0-7.21088,8.23346-61.25323,8.23346-61.25323l5.74103,31.98169,2.63239,6.33655-.82715,3.71997,1.70117,5.02045,.09192,4.96838,1.65619,9.22614s-4.98199,71.88159-2.17633,73.88312c2.81439,2.01038,16.44086,5.62018,18.04901,2.01038,1.59955-3.6098,12.0108-75.01947,12.0108-75.01947,0,0,1.6781-32.72424,3.49622-63.14111,.1048-1.76556,1.34607-3.89825,1.4422-5.63763,.11365-2.01898-.67297-4.64111-.56818-6.599,.11365-2.24628,1.11005-3.82831,1.20618-5.97852,.74292-16.6156-3.42761-36.84912-4.7561-38.84192-4.01202-6.01343-7.62177-10.82074-7.62177-10.82074,0,0-54.03558-17.75403-68.47485,.28625l-3.30185,25.37585Z\" fill=\"#2f2e41\" data-v-1acc08ae></path><path d=\"M174.53779,284.10378l-21.4209-4.28418-9.9964,13.56656h0c-18.65262,18.34058-18.93359,34.52753-15.60379,60.47382v36.41553l-2.41,24.41187s-8.53156,17.84521,.26788,22.00006,66.59857,3.80066,72.117,2.14209,.73517-3.69482-.71399-11.4245c-2.72211-14.51929-.90131-7.51562-.71399-12.13849,2.68585-66.31363-3.57013-93.5379-4.20544-100.69376l-10.89398-19.75858-6.42639-10.71042Z\" fill=\"#3f3d56\" data-v-1acc08ae></path><path d=\"M287.43909,337.57097c-2.23248,4.23007-7.47144,5.84943-11.70148,3.61694-.45099-.23804-.88013-.51541-1.28229-.82895l-46.26044,29.37308,.13336-15.9924,44.93842-26.07846c3.20093-3.58887,8.70514-3.90332,12.29401-.70239,3.00305,2.67844,3.7796,7.0657,1.87842,10.61218Z\" fill=\"#a0616a\" data-v-1acc08ae></path><path d=\"M157.62488,302.62425l-5.26666-.55807c-4.86633-.50473-9.64093,1.57941-12.57947,5.491-1.12549,1.48346-1.9339,3.18253-2.37491,4.99164l-.00317,.01447c-1.32108,5.44534,.75095,11.15201,5.25803,14.48117l18.19031,13.41101c12.76544,17.24899,36.75653,28.69272,64.89832,37.98978l43.74274-27.16666-15.47186-18.73843-30.00336,16.0798-44.59833-34.52374-.0257-.02075-16.97424-10.936-4.79169-.5152Z\" fill=\"#3f3d56\" data-v-1acc08ae></path><circle cx=\"167.29993\" cy=\"248.60526\" r=\"24.9798\" fill=\"#a0616a\" data-v-1acc08ae></circle><path d=\"M167.8769,273.59047c-.20135,.00662-.4032,.01108-.6048,.01657-.0863,.22388-.17938,.44583-.2868,.66357l.8916-.68015Z\" fill=\"#2f2e41\" data-v-1acc08ae></path><path d=\"M174.73243,249.29823c.03918,.24612,.09912,.48846,.17914,.72449-.03302-.24731-.09308-.49026-.17914-.72449Z\" fill=\"#2f2e41\" data-v-1acc08ae></path><path d=\"M192.59852,224.6942c-1.0282,3.19272-1.94586-.85715-5.32825-.12869-4.06885,.87625-8.80377,.57532-12.13586-1.91879-4.96478-3.64273-11.39874-4.62335-17.22333-2.62509-5.70154,2.01706-15.25348,3.43933-16.73907,9.30179-.51642,2.03781-.7215,4.24933-1.97321,5.9382-1.09436,1.47662-2.82166,2.31854-4.26608,3.45499-4.87726,3.83743-1.14954,14.73981,1.15881,20.50046,2.30838,5.76065,7.60355,9.95721,13.42526,12.10678,5.63281,2.07977,11.7464,2.44662,17.75531,2.28317,1.04517-2.7106,.59363-5.84137-.26874-8.65134-.93359-3.04199-2.31592-5.97791-2.70593-9.13599s.46643-6.74527,3.11444-8.50986c2.4339-1.62192,6.39465-.63388,7.32062,1.98843-.54028-3.27841,2.7807-6.4509,6.20508-7.00882,3.67651-.599,7.35291,.72833,11.01886,1.38901s2.36475-14.77301,.64209-18.98425Z\" fill=\"#2f2e41\" data-v-1acc08ae></path><circle cx=\"281.3585\" cy=\"285.71051\" r=\"51.12006\" transform=\"translate(-26.58509 542.54478) rotate(-85.26884)\" fill=\"#6c63ff\" data-v-1acc08ae></circle><path d=\"M294.78675,264.41051l-13.42828,13.42828-13.42828-13.42828c-2.17371-2.17374-5.69806-2.17374-7.87177,0s-2.17371,5.69803,0,7.87177l13.42828,13.42828-13.42828,13.42828c-2.17169,2.17575-2.1684,5.70007,.00739,7.87177,2.17285,2.16879,5.69153,2.16879,7.86438-.00003l13.42828-13.42828,13.42828,13.42828c2.17578,2.17169,5.70007,2.1684,7.87177-.00735,2.16882-2.17288,2.16882-5.6915,0-7.86438l-13.42828-13.42828,13.42828-13.42828c2.17371-2.17374,2.17371-5.69803,0-7.87177s-5.69806-2.17374-7.87177,0h0Z\" fill=\"#fff\" data-v-1acc08ae></path><path d=\"M261.21387,242.74385c1.5069,4.53946-.95154,9.44101-5.49097,10.94791-.48401,.16064-.9812,.27823-1.4859,.35141l-10.83051,53.71692-11.44788-11.16785,12.29266-50.48209c-.37366-4.7944,3.21008-8.98395,8.00452-9.3576,4.01166-.31265,7.71509,2.16425,8.95807,5.9913Z\" fill=\"#a0616a\" data-v-1acc08ae></path><path d=\"M146.12519,312.22478l-4.04883,3.41412c-3.73322,3.16214-5.53476,8.05035-4.74649,12.87888,.29129,1.83917,.95773,3.59879,1.95786,5.16949l.00824,.0123c3.01477,4.72311,8.5672,7.17865,14.08978,6.23117l22.27075-3.84171c21.28461,2.72995,46.15155-6.65967,72.34302-20.53055l10.67969-50.37274-24.23297-1.80811-9.16821,32.78271-55.78815,8.28149-.03278,.00415-19.64294,4.67767-3.68896,3.1011Z\" fill=\"#3f3d56\" data-v-1acc08ae></path><path d=\"M272.93684,658.99046l-271.75,.30731c-.65759-.00214-1.18896-.53693-1.18683-1.19452,.00211-.6546,.53223-1.18469,1.18683-1.18683l271.75-.30731c.65759,.00214,1.18896,.53693,1.18683,1.19452-.00208,.6546-.53223,1.18469-1.18683,1.18683Z\" fill=\"#cacaca\" data-v-1acc08ae></path><g data-v-1acc08ae><ellipse cx=\"56.77685\" cy=\"82.05834\" rx=\"8.45661\" ry=\"8.64507\" fill=\"#3f3d56\" data-v-1acc08ae></ellipse><ellipse cx=\"85.9906\" cy=\"82.05834\" rx=\"8.45661\" ry=\"8.64507\" fill=\"#3f3d56\" data-v-1acc08ae></ellipse><ellipse cx=\"115.20435\" cy=\"82.05834\" rx=\"8.45661\" ry=\"8.64507\" fill=\"#3f3d56\" data-v-1acc08ae></ellipse><path d=\"M148.51577,88.89113c-.25977,0-.51904-.10059-.71484-.30078l-5.70605-5.83301c-.38037-.38867-.38037-1.00977,0-1.39844l5.70605-5.83252c.38721-.39453,1.021-.40088,1.41406-.01562,.39502,.38623,.40186,1.01953,.01562,1.41406l-5.02197,5.1333,5.02197,5.13379c.38623,.39453,.37939,1.02783-.01562,1.41406-.19434,.19043-.44678,.28516-.69922,.28516Z\" fill=\"#3f3d56\" data-v-1acc08ae></path><path d=\"M158.10415,88.89113c-.25244,0-.50488-.09473-.69922-.28516-.39502-.38623-.40186-1.01904-.01562-1.41406l5.02148-5.13379-5.02148-5.1333c-.38623-.39453-.37939-1.02783,.01562-1.41406,.39404-.38672,1.02783-.37939,1.41406,.01562l5.70557,5.83252c.38037,.38867,.38037,1.00977,0,1.39844l-5.70557,5.83301c-.1958,.2002-.45508,.30078-.71484,.30078Z\" fill=\"#3f3d56\" data-v-1acc08ae></path><path d=\"M456.61398,74.41416h-10.60999c-1.21002,0-2.19,.97998-2.19,2.19v10.62c0,1.21002,.97998,2.19,2.19,2.19h10.60999c1.21002,0,2.20001-.97998,2.20001-2.19v-10.62c0-1.21002-.98999-2.19-2.20001-2.19Z\" fill=\"#3f3d56\" data-v-1acc08ae></path><path d=\"M430.61398,74.41416h-10.60999c-1.21002,0-2.19,.97998-2.19,2.19v10.62c0,1.21002,.97998,2.19,2.19,2.19h10.60999c1.21002,0,2.20001-.97998,2.20001-2.19v-10.62c0-1.21002-.98999-2.19-2.20001-2.19Z\" fill=\"#3f3d56\" data-v-1acc08ae></path><path d=\"M481.11398,74.91416h-10.60999c-1.21002,0-2.19,.97998-2.19,2.19v10.62c0,1.21002,.97998,2.19,2.19,2.19h10.60999c1.21002,0,2.20001-.97998,2.20001-2.19v-10.62c0-1.21002-.98999-2.19-2.20001-2.19Z\" fill=\"#3f3d56\" data-v-1acc08ae></path><path d=\"M321.19229,78.95414h-84.81c-1.48004,0-2.67004,1.20001-2.67004,2.67004s1.19,2.66998,2.67004,2.66998h84.81c1.46997,0,2.66998-1.20001,2.66998-2.66998s-1.20001-2.67004-2.66998-2.67004Z\" fill=\"#3f3d56\" data-v-1acc08ae></path></g></svg></span>", 1))]))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue?vue&type=template&id=1a56b3a8":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue?vue&type=template&id=1a56b3a8 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "input-group justify-content-md-end"
};
var _hoisted_2 = ["placeholder", "aria-label"];
var _hoisted_3 = {
  "class": "input-group-append"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.keyword = $event;
    }),
    "class": "form-control",
    placeholder: _ctx.__('base.keyword'),
    "aria-label": _ctx.__('base.keyword'),
    "aria-describedby": "basic-addon2",
    style: {
      "max-width": "200px"
    },
    onKeyup: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $options.search && $options.search.apply($options, arguments);
    }, ["enter"]))
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_2), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.keyword]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.search && $options.search.apply($options, arguments);
    }),
    "class": "btn btn-info"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.search')), 1 /* TEXT */)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=template&id=28efba04&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=template&id=28efba04&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "modal-dialog modal-xl my-1 modal-dialog-marketplace"
};
var _hoisted_2 = {
  "class": "modal-content modal-content-marketplace"
};
var _hoisted_3 = {
  "class": "modal-header bg-warning"
};
var _hoisted_4 = {
  "class": "modal-title"
};
var _hoisted_5 = {
  "class": "modal-body marketplace-modal-body"
};
var _hoisted_6 = {
  "class": "row row-iframe"
};
var _hoisted_7 = {
  key: 0,
  "class": "overlay"
};
var _hoisted_8 = ["src"];
var _hoisted_9 = {
  "class": "modal-footer"
};
var _hoisted_10 = {
  key: 0
};
var _hoisted_11 = {
  key: 1
};
var _hoisted_12 = {
  key: 0
};
var _hoisted_13 = {
  key: 1
};
var _hoisted_14 = {
  key: 2,
  "class": "btn btn-info btn-disabled",
  disabled: "disabled"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(_ctx.$attrs, {
    "class": "modal-marketplace modal fade",
    "aria-hidden": "true",
    ref: "modalProduct"
  }), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_4, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "til_img"
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.name), 1 /* TEXT */)]), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-close",
    "data-bs-dismiss": "modal",
    "aria-hidden": "true"
  }, null, -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [$data.loaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, _cache[4] || (_cache[4] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "overlay__inner"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "overlay__content"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "spinner"
  })])], -1 /* HOISTED */)]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
    src: $props.iframeUrl
  }, null, 8 /* PROPS */, _hoisted_8)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [!$data.installed ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "btn btn-warning",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.install();
    }, ["prevent"]))
  }, [!$data.installing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-download"
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.install_now')), 1 /* TEXT */)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_11, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-circle-notch fa-spin"
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.installing')), 1 /* TEXT */)]))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.installed && !$data.activated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "btn btn-success",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.changeStatus();
    }, ["prevent"]))
  }, [!$data.activating ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_12, [_cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-check"
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.activate')), 1 /* TEXT */)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-circle-notch fa-spin"
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.activating')), 1 /* TEXT */)]))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.installed && $data.activated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.activated')), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])], 16 /* FULL_PROPS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue?vue&type=template&id=5732b499":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue?vue&type=template&id=5732b499 ***!
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
  "class": "d-flex justify-items-center justify-content-between"
};
var _hoisted_2 = {
  "class": "d-flex justify-content-between flex-fill d-sm-none"
};
var _hoisted_3 = {
  "class": "pagination pagination-sm"
};
var _hoisted_4 = {
  key: 0,
  "class": "page-item disabled",
  "aria-disabled": "true"
};
var _hoisted_5 = ["innerHTML"];
var _hoisted_6 = {
  key: 1,
  "class": "page-item"
};
var _hoisted_7 = ["innerHTML"];
var _hoisted_8 = {
  key: 2,
  "class": "page-item"
};
var _hoisted_9 = ["innerHTML"];
var _hoisted_10 = {
  key: 3,
  "class": "page-item disabled",
  "aria-disabled": "true"
};
var _hoisted_11 = ["innerHTML"];
var _hoisted_12 = {
  "class": "d-none flex-sm-fill d-sm-flex align-items-sm-center justify-content-sm-between"
};
var _hoisted_13 = {
  "class": "small text-muted"
};
var _hoisted_14 = {
  "class": "fw-semibold"
};
var _hoisted_15 = {
  "class": "fw-semibold"
};
var _hoisted_16 = {
  "class": "fw-semibold"
};
var _hoisted_17 = {
  "class": "pagination"
};
var _hoisted_18 = {
  key: 0,
  "class": "page-item disabled",
  "aria-disabled": "true"
};
var _hoisted_19 = ["innerHTML"];
var _hoisted_20 = {
  key: 1,
  "class": "page-item"
};
var _hoisted_21 = ["innerHTML"];
var _hoisted_22 = ["onClick", "innerHTML"];
var _hoisted_23 = ["innerHTML"];
var _hoisted_24 = {
  key: 2,
  "class": "page-item"
};
var _hoisted_25 = ["innerHTML"];
var _hoisted_26 = {
  key: 3,
  "class": "page-item disabled",
  "aria-disabled": "true"
};
var _hoisted_27 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.pagination.total > $props.pagination.per_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_3, [$props.pagination.current_page === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "page-link",
    innerHTML: _ctx.__('base.previous')
  }, null, 8 /* PROPS */, _hoisted_5)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "page-link",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.changePage($props.pagination.current_page - 1);
    }, ["prevent"])),
    href: "#",
    rel: "prev",
    innerHTML: _ctx.__('base.previous')
  }, null, 8 /* PROPS */, _hoisted_7)])), $props.pagination.current_page < $props.pagination.last_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "page-link",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.changePage($props.pagination.current_page + 1);
    }, ["prevent"])),
    href: "#",
    rel: "next",
    innerHTML: _ctx.__('base.next')
  }, null, 8 /* PROPS */, _hoisted_9)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "page-link",
    innerHTML: _ctx.__('base.next')
  }, null, 8 /* PROPS */, _hoisted_11)]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.showing')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.pagination.from), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.to')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.pagination.to), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.of')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.pagination.total), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('base.results')), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_17, [$props.pagination.current_page === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "page-link",
    "aria-hidden": "true",
    innerHTML: _ctx.__('base.previous')
  }, null, 8 /* PROPS */, _hoisted_19)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "page-link",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.changePage($props.pagination.current_page - 1);
    }, ["prevent"])),
    href: "#",
    rel: "prev",
    innerHTML: _ctx.__('base.previous')
  }, null, 8 /* PROPS */, _hoisted_21)])), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.pages, function (page, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
        active: $props.pagination.current_page === page,
        disabled: page === '...'
      }])
    }, [page !== $props.pagination.current_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-link", {
        active: $props.pagination.current_page === page
      }]),
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.changePage(page);
      }, ["prevent"]),
      innerHTML: page
    }, null, 10 /* CLASS, PROPS */, _hoisted_22)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 1,
      "class": "page-link",
      innerHTML: page
    }, null, 8 /* PROPS */, _hoisted_23))], 2 /* CLASS */);
  }), 128 /* KEYED_FRAGMENT */)), $props.pagination.current_page !== $props.pagination.last_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "page-link",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.changePage($props.pagination.current_page + 1);
    }, ["prevent"])),
    href: "#",
    rel: "next",
    innerHTML: _ctx.__('base.next')
  }, null, 8 /* PROPS */, _hoisted_25)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "page-link",
    "aria-hidden": "true",
    innerHTML: _ctx.__('base.next')
  }, null, 8 /* PROPS */, _hoisted_27)]))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue?vue&type=template&id=21e8c431":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue?vue&type=template&id=21e8c431 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  key: 0,
  "class": "text-center mt-5"
};
var _hoisted_3 = {
  "class": "text-muted mt-3 mt-md-5 fs-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_marketplace_card_plugin = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("marketplace-card-plugin");
  var _component_marketplace_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("marketplace-layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_marketplace_layout, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(props.list.data, function (plugin) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_marketplace_card_plugin, {
          key: plugin.id,
          plugin: plugin
        }, null, 8 /* PROPS */, ["plugin"]);
      }), 128 /* KEYED_FRAGMENT */)), props.list.data < 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
        "class": "w-25",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 647.63626 632.17383"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z",
        transform: "translate(-276.18187 -133.91309)",
        fill: "#f2f2f2"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z",
        transform: "translate(-276.18187 -133.91309)",
        fill: "#3f3d56"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z",
        transform: "translate(-276.18187 -133.91309)",
        fill: "#6c63ff"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
        cx: "190.15351",
        cy: "24.95465",
        r: "20",
        fill: "#6c63ff"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
        cx: "190.15351",
        cy: "24.95465",
        r: "12.66462",
        fill: "#fff"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z",
        transform: "translate(-276.18187 -133.91309)",
        fill: "#e6e6e6"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z",
        transform: "translate(-276.18187 -133.91309)",
        fill: "#3f3d56"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
        d: "M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z",
        transform: "translate(-276.18187 -133.91309)",
        fill: "#6c63ff"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
        cx: "433.63626",
        cy: "105.17383",
        r: "20",
        fill: "#6c63ff"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
        cx: "433.63626",
        cy: "105.17383",
        r: "12.18187",
        fill: "#fff"
      })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Looks like there are no plugins available.')), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=style&index=0&id=1acc08ae&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=style&index=0&id=1acc08ae&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-pills .nav-link.active[data-v-1acc08ae] {\n  background-color: #0dcaf0;\n}\n.card-body[data-v-1acc08ae] {\n  min-height: calc(100vh - 150px);\n  position: relative;\n}\n.overlay[data-v-1acc08ae] {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 10000000;\n  border-radius: var(--bs-border-color-translucent);\n}\n.overlay__inner[data-v-1acc08ae] {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.overlay__content[data-v-1acc08ae] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.spinner[data-v-1acc08ae] {\n  width: 75px;\n  height: 75px;\n  display: inline-block;\n  border-width: 2px;\n  border-color: rgba(255, 255, 255, 0.05);\n  border-top-color: #fff;\n  animation: spin-1acc08ae 1s infinite linear;\n  border-radius: 100%;\n  border-style: solid;\n}\n@keyframes spin-1acc08ae {\n100% {\n    transform: rotate(360deg);\n}\n}\n.plugin-list-wrapper[data-v-1acc08ae] {\n  position: relative;\n  min-height: calc(100vh - 220px);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=style&index=0&id=28efba04&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=style&index=0&id=28efba04&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-dialog-marketplace[data-v-28efba04] {\n  min-width: 70%;\n}\n.marketplace-modal-body[data-v-28efba04] {\n  padding: 0 0 0 0;\n}\n.modal-content-marketplace[data-v-28efba04] {\n  height: 97vh;\n  position: relative;\n}\n.row-iframe[data-v-28efba04] {\n  height: 100%;\n}\n.overlay[data-v-28efba04] {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 10000000;\n  border-radius: var(--bs-border-color-translucent);\n}\n.overlay__inner[data-v-28efba04] {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.overlay__content[data-v-28efba04] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.spinner[data-v-28efba04] {\n  width: 75px;\n  height: 75px;\n  display: inline-block;\n  border-width: 2px;\n  border-color: rgba(0, 0, 0, 0.1);\n  border-top-color: #fff;\n  animation: spin-28efba04 1s infinite linear;\n  border-radius: 100%;\n  border-style: solid;\n}\n@keyframes spin-28efba04 {\n100% {\n    transform: rotate(360deg);\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=style&index=0&id=1acc08ae&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=style&index=0&id=1acc08ae&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_66_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_66_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_66_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_style_index_0_id_1acc08ae_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=style&index=0&id=1acc08ae&lang=scss&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=style&index=0&id=1acc08ae&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_66_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_66_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_66_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_style_index_0_id_1acc08ae_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_66_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_66_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_66_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_style_index_0_id_1acc08ae_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=style&index=0&id=28efba04&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=style&index=0&id=28efba04&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_66_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_66_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_66_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_style_index_0_id_28efba04_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=style&index=0&id=28efba04&lang=scss&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=style&index=0&id=28efba04&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_66_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_66_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_66_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_style_index_0_id_28efba04_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_66_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_66_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_66_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_style_index_0_id_28efba04_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue":
/*!******************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_23469cc0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=23469cc0 */ "./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue?vue&type=template&id=23469cc0");
/* harmony import */ var _Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js */ "./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Card_vue_vue_type_template_id_23469cc0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue":
/*!************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Compatible_vue_vue_type_template_id_cb269538__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Compatible.vue?vue&type=template&id=cb269538 */ "./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue?vue&type=template&id=cb269538");
/* harmony import */ var _Compatible_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compatible.vue?vue&type=script&lang=js */ "./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Compatible_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Compatible_vue_vue_type_template_id_cb269538__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue":
/*!********************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Rating_vue_vue_type_template_id_5ec8bbad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rating.vue?vue&type=template&id=5ec8bbad */ "./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue?vue&type=template&id=5ec8bbad");
/* harmony import */ var _Rating_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rating.vue?vue&type=script&lang=js */ "./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Rating_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Rating_vue_vue_type_template_id_5ec8bbad__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue":
/*!*******************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardPlugin_vue_vue_type_template_id_05718a3c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardPlugin.vue?vue&type=template&id=05718a3c */ "./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue?vue&type=template&id=05718a3c");
/* harmony import */ var _CardPlugin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardPlugin.vue?vue&type=script&lang=js */ "./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CardPlugin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CardPlugin_vue_vue_type_template_id_05718a3c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Layout.vue":
/*!***************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Layout.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_1acc08ae_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=1acc08ae&scoped=true */ "./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=template&id=1acc08ae&scoped=true");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js */ "./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=script&lang=js");
/* harmony import */ var _Layout_vue_vue_type_style_index_0_id_1acc08ae_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.vue?vue&type=style&index=0&id=1acc08ae&lang=scss&scoped=true */ "./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=style&index=0&id=1acc08ae&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Layout_vue_vue_type_template_id_1acc08ae_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1acc08ae"],['__file',"platform/packages/plugin-management/resources/assets/js/components/Layout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue":
/*!******************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Search_vue_vue_type_template_id_1a56b3a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=1a56b3a8 */ "./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue?vue&type=template&id=1a56b3a8");
/* harmony import */ var _Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js */ "./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Search_vue_vue_type_template_id_1a56b3a8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Modal.vue":
/*!**************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Modal.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_vue_vue_type_template_id_28efba04_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=28efba04&scoped=true */ "./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=template&id=28efba04&scoped=true");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js */ "./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=script&lang=js");
/* harmony import */ var _Modal_vue_vue_type_style_index_0_id_28efba04_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=28efba04&lang=scss&scoped=true */ "./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=style&index=0&id=28efba04&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Modal_vue_vue_type_template_id_28efba04_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-28efba04"],['__file',"platform/packages/plugin-management/resources/assets/js/components/Modal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue":
/*!*******************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_5732b499__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=5732b499 */ "./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue?vue&type=template&id=5732b499");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js */ "./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_5732b499__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/packages/plugin-management/resources/assets/js/components/Pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue":
/*!****************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Plugins_vue_vue_type_template_id_21e8c431__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plugins.vue?vue&type=template&id=21e8c431 */ "./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue?vue&type=template&id=21e8c431");
/* harmony import */ var _Plugins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plugins.vue?vue&type=script&lang=js */ "./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Plugins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Plugins_vue_vue_type_template_id_21e8c431__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"platform/packages/plugin-management/resources/assets/js/components/Plugins.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Compatible_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Compatible_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Compatible.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Rating_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Rating_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Rating.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardPlugin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardPlugin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardPlugin.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Plugins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Plugins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Plugins.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue?vue&type=template&id=23469cc0":
/*!************************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue?vue&type=template&id=23469cc0 ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_template_id_23469cc0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_template_id_23469cc0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=template&id=23469cc0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Card.vue?vue&type=template&id=23469cc0");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue?vue&type=template&id=cb269538":
/*!******************************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue?vue&type=template&id=cb269538 ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Compatible_vue_vue_type_template_id_cb269538__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Compatible_vue_vue_type_template_id_cb269538__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Compatible.vue?vue&type=template&id=cb269538 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Compatible.vue?vue&type=template&id=cb269538");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue?vue&type=template&id=5ec8bbad":
/*!**************************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue?vue&type=template&id=5ec8bbad ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Rating_vue_vue_type_template_id_5ec8bbad__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Rating_vue_vue_type_template_id_5ec8bbad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Rating.vue?vue&type=template&id=5ec8bbad */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Card/Rating.vue?vue&type=template&id=5ec8bbad");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue?vue&type=template&id=05718a3c":
/*!*************************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue?vue&type=template&id=05718a3c ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardPlugin_vue_vue_type_template_id_05718a3c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardPlugin_vue_vue_type_template_id_05718a3c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardPlugin.vue?vue&type=template&id=05718a3c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue?vue&type=template&id=05718a3c");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=template&id=1acc08ae&scoped=true":
/*!*********************************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=template&id=1acc08ae&scoped=true ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_1acc08ae_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_1acc08ae_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=template&id=1acc08ae&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=template&id=1acc08ae&scoped=true");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue?vue&type=template&id=1a56b3a8":
/*!************************************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue?vue&type=template&id=1a56b3a8 ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_template_id_1a56b3a8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_template_id_1a56b3a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=template&id=1a56b3a8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/LayoutPartials/Search.vue?vue&type=template&id=1a56b3a8");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=template&id=28efba04&scoped=true":
/*!********************************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=template&id=28efba04&scoped=true ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_28efba04_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_28efba04_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=template&id=28efba04&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=template&id=28efba04&scoped=true");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue?vue&type=template&id=5732b499":
/*!*************************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue?vue&type=template&id=5732b499 ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_5732b499__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_5732b499__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=template&id=5732b499 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Pagination.vue?vue&type=template&id=5732b499");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue?vue&type=template&id=21e8c431":
/*!**********************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue?vue&type=template&id=21e8c431 ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Plugins_vue_vue_type_template_id_21e8c431__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Plugins_vue_vue_type_template_id_21e8c431__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Plugins.vue?vue&type=template&id=21e8c431 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue?vue&type=template&id=21e8c431");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=style&index=0&id=1acc08ae&lang=scss&scoped=true":
/*!************************************************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=style&index=0&id=1acc08ae&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_66_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_66_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_66_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_style_index_0_id_1acc08ae_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=style&index=0&id=1acc08ae&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Layout.vue?vue&type=style&index=0&id=1acc08ae&lang=scss&scoped=true");


/***/ }),

/***/ "./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=style&index=0&id=28efba04&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=style&index=0&id=28efba04&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_66_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_66_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_66_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_style_index_0_id_28efba04_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=style&index=0&id=28efba04&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-66.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-66.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-66.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./platform/packages/plugin-management/resources/assets/js/components/Modal.vue?vue&type=style&index=0&id=28efba04&lang=scss&scoped=true");


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/marketplace.js ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Plugins_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Plugins.vue */ "./platform/packages/plugin-management/resources/assets/js/components/Plugins.vue");
/* harmony import */ var _components_CardPlugin_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CardPlugin.vue */ "./platform/packages/plugin-management/resources/assets/js/components/CardPlugin.vue");


if (typeof vueApp !== 'undefined') {
  vueApp.booting(function (vue) {
    vue.component('marketplace-plugins', _components_Plugins_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
    vue.component('marketplace-card-plugin', _components_CardPlugin_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  });
}
/******/ })()
;