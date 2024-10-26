/******/ (() => { // webpackBootstrap
/*!**************************************************************!*\
  !*** ./platform/core/setting/resources/assets/js/setting.js ***!
  \**************************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SettingManagement = /*#__PURE__*/function () {
  function SettingManagement() {
    _classCallCheck(this, SettingManagement);
  }
  return _createClass(SettingManagement, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.handleMultipleAdminEmails();
      $('input[data-key=email-config-status-btn]').on('change', function (event) {
        var _self = $(event.currentTarget);
        var key = _self.prop('name');
        var url = _self.data('change-url');
        $httpClient.make().post(url, {
          key: key,
          value: _self.prop('checked') ? 1 : 0
        }).then(function (_ref) {
          var data = _ref.data;
          return Botble.showSuccess(data.message);
        });
      });
      $(document).on('change', '.setting-select-options', function (event) {
        $('.setting-wrapper').addClass('hidden');
        $('.setting-wrapper[data-type=' + $(event.currentTarget).val() + ']').removeClass('hidden');
      });
      $('.send-test-email-trigger-button').on('click', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        var defaultText = _self.text();
        var form = new FormData(_self.closest('form')[0]);
        _self.text(_self.data('saving'));
        $httpClient.make().postForm(route('settings.email.edit'), form).then(function (_ref2) {
          var data = _ref2.data;
          Botble.showSuccess(data.message);
          $('#send-test-email-modal').modal('show');
        })["finally"](function () {
          _self.text(defaultText);
        });
      });
      $('#send-test-email-btn').on('click', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $httpClient.make().post(route('setting.email.send.test'), {
          email: _self.closest('.modal-content').find('input[name=email]').val()
        }).then(function (_ref3) {
          var data = _ref3.data;
          Botble.showSuccess(data.message);
          _self.closest('.modal').modal('hide');
        })["finally"](function () {
          _self.removeClass('button-loading');
        });
      });
      $('.generate-thumbnails-trigger-button').on('click', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        var defaultText = _self.text();
        _self.text(_self.data('saving'));
        $httpClient.make().postForm(route('settings.media.post'), new FormData(_self.closest('form')[0])).then(function () {
          return $('#generate-thumbnails-modal').modal('show');
        })["finally"](function () {
          _self.text(defaultText);
        });
      });
      $('#generate-thumbnails-button').on('click', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $httpClient.make().post(route('settings.media.generate-thumbnails')).then(function (_ref4) {
          var data = _ref4.data;
          return Botble.showSuccess(data.message);
        })["finally"](function () {
          _self.removeClass('button-loading');
          _self.closest('.modal').modal('hide');
        });
      });
      if (typeof CodeMirror !== 'undefined') {
        Botble.initCodeEditor('mail-template-editor');
      }
      $(document).on('click', '.btn-trigger-reset-to-default', function (event) {
        event.preventDefault();
        $('#reset-template-to-default-button').data('target', $(event.currentTarget).data('target'));
        $('#reset-template-to-default-modal').modal('show');
      });
      $(document).on('click', '.js-select-mail-variable', function (event) {
        event.preventDefault();
        var $this = $(event.currentTarget);
        var doc = $('.CodeMirror')[0].CodeMirror;
        var key = '{{ ' + $this.data('key') + ' }}';

        // If there's a selection, replace the selection.
        if (doc.somethingSelected()) {
          doc.replaceSelection(key);
          return;
        }

        // Otherwise, we insert at the cursor position.
        var cursor = doc.getCursor();
        var pos = {
          line: cursor.line,
          ch: cursor.ch
        };
        doc.replaceRange(key, pos);
      });
      $(document).on('click', '.js-select-mail-function', function (event) {
        event.preventDefault();
        var $this = $(event.currentTarget);
        var CodeMirror = $('.CodeMirror')[0].CodeMirror;
        var key = $this.data('sample');

        // If there's a selection, replace the selection.
        if (CodeMirror.somethingSelected()) {
          CodeMirror.replaceSelection(key);
          return;
        }

        // Otherwise, we insert at the cursor position.
        var cursor = CodeMirror.getCursor();
        var position = {
          line: cursor.line,
          ch: cursor.ch
        };
        CodeMirror.replaceRange(key, position);
      });
      $(document).on('click', '#reset-template-to-default-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $httpClient.make().post(_self.data('target'), {
          email_subject_key: $('input[name=email_subject_key]').val(),
          module: $('input[name=module]').val(),
          template_file: $('input[name=template_file]').val()
        }).then(function (_ref5) {
          var data = _ref5.data;
          Botble.showSuccess(data.message);
          setTimeout(function () {
            window.location.reload();
          }, 1000);
          $('#reset-template-to-default-modal').modal('hide');
        })["finally"](function () {
          _self.removeClass('button-loading');
        });
      });
      $(document).on('change', '.check-all', function (event) {
        var _self = $(event.currentTarget);
        var set = _self.attr('data-set');
        var checked = _self.prop('checked');
        $(set).each(function (index, el) {
          if (checked) {
            $(el).prop('checked', true);
          } else {
            $(el).prop('checked', false);
          }
        });
      });
      $('input.setting-selection-option').each(function (index, el) {
        var $settingContentContainer = $($(el).data('target'));
        $(el).on('change', function () {
          if ($(el).val() == '1') {
            $settingContentContainer.removeClass('d-none');
            Botble.initResources();
          } else {
            $settingContentContainer.addClass('d-none');
          }
        });
      });
      $(document).on('click', '.cronjob #copy-command', function () {
        _this.copyCommand();
      });
    }
  }, {
    key: "handleMultipleAdminEmails",
    value: function handleMultipleAdminEmails() {
      var $wrapper = $('#admin_email_wrapper');
      if (!$wrapper.length) {
        return;
      }
      var $addBtn = $wrapper.find('#add');
      var max = parseInt($wrapper.data('max'), 10);
      var emails = $wrapper.data('emails');
      if (emails.length === 0) {
        emails = [''];
      }
      var onAddEmail = function onAddEmail() {
        var count = $wrapper.find('input[type=email]').length;
        if (count >= max) {
          $addBtn.addClass('disabled');
        } else {
          $addBtn.removeClass('disabled');
        }
      };
      var addEmail = function addEmail() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return $addBtn.before("<div class=\"d-flex mt-2 more-email align-items-center\">\n                <input type=\"email\" class=\"next-input\" placeholder=\"".concat($addBtn.data('placeholder'), "\" name=\"admin_email[]\" value=\"").concat(value ? value : '', "\" />\n                <a class=\"btn btn-link text-danger\"><i class=\"fas fa-minus\"></i></a>\n            </div>"));
      };
      var render = function render() {
        emails.forEach(function (email) {
          addEmail(email);
        });
        onAddEmail();
      };
      $wrapper.on('click', '.more-email > a', function () {
        $(this).parent('.more-email').remove();
        onAddEmail();
      });
      $addBtn.on('click', function (e) {
        e.preventDefault();
        addEmail();
        onAddEmail();
      });
      render();
    }
  }, {
    key: "copyCommand",
    value: function () {
      var _copyCommand = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var input, textToCopy, textarea;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              input = $('.cronjob #command');
              textToCopy = input.val();
              if (!(navigator.clipboard && window.isSecureContext)) {
                _context.next = 8;
                break;
              }
              _context.next = 5;
              return navigator.clipboard.writeText(textToCopy);
            case 5:
              Botble.showSuccess(input.data('copied'));
              _context.next = 15;
              break;
            case 8:
              textarea = document.createElement('textarea');
              textarea.value = textToCopy;
              textarea.style.position = 'absolute';
              textarea.style.left = '-999999px';
              document.body.prepend(textarea);
              textarea.select();
              try {
                document.execCommand('copy');
                Botble.showSuccess(input.data('copied'));
              } catch (error) {
                console.error(error);
              } finally {
                textarea.remove();
              }
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function copyCommand() {
        return _copyCommand.apply(this, arguments);
      }
      return copyCommand;
    }()
  }]);
}();
$(document).ready(function () {
  new SettingManagement().init();
});
/******/ })()
;