/******/ (() => { // webpackBootstrap
/*!***************************************************************************!*\
  !*** ./platform/packages/plugin-management/resources/assets/js/plugin.js ***!
  \***************************************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PluginManagement = /*#__PURE__*/function () {
  function PluginManagement() {
    _classCallCheck(this, PluginManagement);
  }
  return _createClass(PluginManagement, [{
    key: "init",
    value: function init() {
      var _this = this;
      $(document).on('click', '.btn-trigger-remove-plugin', function (event) {
        event.preventDefault();
        $('#confirm-remove-plugin-button').data('plugin', $(event.currentTarget).data('plugin'));
        $('#remove-plugin-modal').modal('show');
      });
      $(document).on('click', '#confirm-remove-plugin-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        var $modal = $('#remove-plugin-modal');
        $httpClient.make()["delete"](route('plugins.remove', {
          plugin: _self.data('plugin')
        })).then(function (_ref) {
          var data = _ref.data;
          Botble.showSuccess(data.message);
          window.location.reload();
        })["finally"](function () {
          _self.removeClass('button-loading');
          $modal.modal('hide');
        });
      });
      $(document).on('click', '.btn-trigger-update-plugin', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        var uuid = _self.data('uuid');
        var name = _self.data('name');
        _self.addClass('button-loading');
        _self.attr('disabled', true);
        $httpClient.make().post(route('plugins.marketplace.ajax.update', {
          id: uuid,
          name: name
        })).then(function (_ref2) {
          var data = _ref2.data;
          Botble.showSuccess(data.message);
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        })["finally"](function () {
          _self.removeClass('button-loading');
          _self.removeAttr('disabled', true);
        });
      });
      $(document).on('click', '.btn-trigger-change-status', /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
          var _self, pluginName;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _self = $(event.currentTarget);
                _self.addClass('button-loading');
                pluginName = _self.data('plugin');
                if (!(_self.data('status') === 1)) {
                  _context2.next = 8;
                  break;
                }
                _context2.next = 7;
                return _this.activateOrDeactivatePlugin(pluginName);
              case 7:
                return _context2.abrupt("return");
              case 8:
                $httpClient.makeWithoutErrorHandler().post(route('plugins.check-requirement', {
                  name: pluginName
                })).then(/*#__PURE__*/function () {
                  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref4) {
                    var data;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          data = _ref4.data;
                          _context.next = 3;
                          return _this.activateOrDeactivatePlugin(pluginName);
                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }));
                  return function (_x2) {
                    return _ref5.apply(this, arguments);
                  };
                }())["catch"](function (e) {
                  var _e$response$data = e.response.data,
                    data = _e$response$data.data,
                    message = _e$response$data.message;
                  if (data && data.existing_plugins_on_marketplace) {
                    var $modal = $('#confirm-install-plugin-modal');
                    $modal.find('.modal-body #requirement-message').html(message);
                    $modal.find('input[name="plugin_name"]').val(pluginName);
                    $modal.find('input[name="ids"]').val(data.existing_plugins_on_marketplace);
                    $modal.modal('show');
                    _self.removeClass('button-loading');
                    return;
                  }
                  Botble.showError(message);
                })["finally"](function () {
                  _self.removeClass('button-loading');
                });
              case 9:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
      $(document).on('click', '#confirm-install-plugin-button', /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event) {
          var _self, $body, pluginName, pluginIds, activatedPlugins, _iterator, _step, pluginId, response, _i, _activatedPlugins, _pluginName;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _self = $(event.currentTarget);
                _self.addClass('button-loading');
                $body = _self.parent().parent();
                pluginName = $body.find('input[name="plugin_name"]').val();
                pluginIds = $body.find('input[name="ids"]').val();
                activatedPlugins = [];
                _iterator = _createForOfIteratorHelper(pluginIds.split(','));
                _context3.prev = 7;
                _iterator.s();
              case 9:
                if ((_step = _iterator.n()).done) {
                  _context3.next = 17;
                  break;
                }
                pluginId = _step.value;
                _context3.next = 13;
                return _this.installPlugin(pluginId);
              case 13:
                response = _context3.sent;
                if (response) {
                  activatedPlugins.push(response.name);
                }
              case 15:
                _context3.next = 9;
                break;
              case 17:
                _context3.next = 22;
                break;
              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](7);
                _iterator.e(_context3.t0);
              case 22:
                _context3.prev = 22;
                _iterator.f();
                return _context3.finish(22);
              case 25:
                _i = 0, _activatedPlugins = activatedPlugins;
              case 26:
                if (!(_i < _activatedPlugins.length)) {
                  _context3.next = 33;
                  break;
                }
                _pluginName = _activatedPlugins[_i];
                _context3.next = 30;
                return _this.activateOrDeactivatePlugin(_pluginName, false);
              case 30:
                _i++;
                _context3.next = 26;
                break;
              case 33:
                _context3.next = 35;
                return _this.activateOrDeactivatePlugin(pluginName);
              case 35:
                _self.removeClass('button-loading');
                _self.text(_self.data('text'));
              case 37:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[7, 19, 22, 25]]);
        }));
        return function (_x3) {
          return _ref6.apply(this, arguments);
        };
      }());
      this.checkUpdate();
    }
  }, {
    key: "checkUpdate",
    value: function checkUpdate() {
      $httpClient.make().post(route('plugins.marketplace.ajax.check-update')).then(function (_ref7) {
        var data = _ref7.data;
        if (!data.data) {
          return;
        }
        Object.keys(data.data).forEach(function (key) {
          var plugin = data.data[key];
          $('button[data-check-update="' + plugin.name + '"]').data('uuid', plugin.id).show();
        });
      });
    }
  }, {
    key: "activateOrDeactivatePlugin",
    value: function () {
      var _activateOrDeactivatePlugin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(pluginName) {
        var reload,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              reload = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : true;
              return _context4.abrupt("return", $httpClient.make().put(route('plugins.change.status', {
                name: pluginName
              })).then(function (_ref8) {
                var data = _ref8.data;
                Botble.showSuccess(data.message);
                if (reload) {
                  $('#plugin-list #app-' + pluginName).load(window.location.href + ' #plugin-list #app-' + pluginName + ' > *');
                  window.location.reload();
                }
              }));
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function activateOrDeactivatePlugin(_x4) {
        return _activateOrDeactivatePlugin.apply(this, arguments);
      }
      return activateOrDeactivatePlugin;
    }()
  }, {
    key: "installPlugin",
    value: function () {
      var _installPlugin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return $httpClient.make().post(route('plugins.marketplace.ajax.install', {
                id: id
              })).then(function (_ref9) {
                var data = _ref9.data;
                return data.error ? [] : data.data;
              });
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function installPlugin(_x5) {
        return _installPlugin.apply(this, arguments);
      }
      return installPlugin;
    }()
  }]);
}();
$(document).ready(function () {
  new PluginManagement().init();
});
/******/ })()
;