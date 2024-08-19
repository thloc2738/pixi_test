/******/ (() => { // webpackBootstrap
/*!****************!*\
  !*** ./app.js ***!
  \****************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function initApp(_x) {
  return _initApp.apply(this, arguments);
}
function _initApp() {
  _initApp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
    var app, board_position, logo_position, container, position_y_roadmap, position_x_roadmaps, visible_highlight_left, visible_highlight_middle, visible_highlight_bot, roadmaps_p, roadmaps_t, roadmaps_b, chip_colors, amount_chip_left, amount_chip_mid, amount_chip_right, is_sfx_on, is_music_on, font1, font2, font3, fonts, board_texture, logo_texture, card_box_texture, timer_texture, countdown_texture, arrow_up_texture, arrow_down_texture, button_texture, close_button_texture, splash_texture, player_texture, player_below_texture, banker_texture, banker_below_texture, room_info_texture, people_texture, s11, c5, h13, d4, back, button_info, icon_history, icon_rule, slot_bet_texture, lb_player_top_texture, lb_player_bot_texture, lb_banker_top_texture, lb_banker_bot_texture, lb_tie_top_texture, lb_tie_bot_texture, bet_highlight_texture, bar_bg_texture, bar_fill_texture, bet_highlight_glow_texture, glow_amount_texture, coint_texture, menu_texture, menu_bg_texture, sfx_on_texture, sfx_off_texture, music_on_texture, music_off_texture, roundmap_t_texture, roundmap_b_texture, roundmap_p_texture, btn_red_texture, btn_green_texture, cover_texture, arrow_bt_texture, chip_glow_texture, chip_shadow_below_texture, chip_shadow_texture, chip_top_texture, chip_base_texture, chip_tint_texture, bet_style, rate_bet_style, percent_style, style_room_info, point_style, style, card_style, timer_style, amount_style, chip_style_value, raito_style, board_left, board_right, logo, card_box, timer, countdown, button, arrow_up, x_button, line, player, player_below, banker, banker_below, bg_room_info, icon_people, amount_people, player_lb, S11, C5, H13, D4, back_left, back_rightt, button_up, button_down, history_icon, rule_icon, highlight_left, slot_left, amount_left, lb_player_top, lb_player_bot, rate_amount_left, bar_bg_l, bar_fill_l, highlight_glow_left, glow_money_l, layout_l, coin_l, amount_l, layout_width_l, rate_l, percent_left, highlight_middle, slot_middle, amount_middle, lb_tie_top, lb_tie_bot, rate_amount_middle, bar_bg_m, bar_fill_m, highlight_glow_middle, glow_money_m, layout_m, coin_m, amount_m, layout_width_m, rate_m, percent_middle, highlight_right, slot_right, amount_right, lb_banker_top, lb_banker_bot, rate_amount_right, bar_bg_r, bar_fill_r, highlight_glow_right, glow_money_r, layout_r, coin_r, amount_r, layout_width_r, rate_r, percent_right, menu_bg, menu, sfx_on, sfx_off, music_on, music_off, b, result_b, p, result_p, t, result_t, total, i, roadmap_p, _i, roadmap_t, _i2, roadmap_b, btn_red, btn_green, left_point, right_point, amount_card, card_txt, timer_txt, chip_player_container, chip_tie_container, chip_banker_container, bet_option_container, chip_glow, cover_l, cover_r, arrow_left, arrow_right, addChip, spawnChips;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          spawnChips = function _spawnChips(amount, rate, _container, index_color, x, y, value) {
            for (var _i3 = 0; _i3 < amount; _i3++) {
              var random_x = Math.random() * 80 - 40;
              var random_y = Math.random() * 20 - 10;
              addChip(rate, _container, index_color, random_x, random_y, value);
            }
          };
          addChip = function _addChip(rate, _container) {
            var index_color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var value = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            if (!_container) {
              console.error("Container is undefined or null.");
              return;
            }
            var chip_shadow_below = new PIXI.Sprite(chip_shadow_below_texture);
            _container.addChild(chip_shadow_below);
            chip_shadow_below.scale = 2.4 * rate;
            chip_shadow_below.alpha = 0.6;
            chip_shadow_below.anchor = 0.5;
            chip_shadow_below.x = _container.x + x;
            chip_shadow_below.y = _container.y + 10 * rate + y;
            var chip_shadow = new PIXI.Sprite(chip_shadow_texture);
            chip_shadow.anchor = 0.5;
            chip_shadow.width = 188;
            chip_shadow.height = 188;
            chip_shadow.scale.set(1 * rate);
            chip_shadow.tint = chip_colors[index_color];
            _container.addChild(chip_shadow);
            chip_shadow.x = _container.x + x;
            chip_shadow.y = _container.y + y;
            var chip_tint = new PIXI.Sprite(chip_tint_texture);
            chip_tint.anchor = 0.5;
            chip_tint.width = 140;
            chip_tint.height = 140;
            chip_tint.scale.set(1 * rate);
            chip_tint.tint = chip_colors[index_color];
            _container.addChild(chip_tint);
            chip_tint.x = _container.x + x;
            chip_tint.y = _container.y + y;
            var base_chip = new PIXI.Sprite(chip_base_texture);
            base_chip.anchor = 0.5;
            base_chip.width = 140;
            base_chip.height = 140;
            base_chip.scale.set(1 * rate);
            base_chip.tint = '#ffffff';
            _container.addChild(base_chip);
            base_chip.x = _container.x + x;
            base_chip.y = _container.y + y;
            var chip_top = new PIXI.Sprite(chip_top_texture);
            chip_top.anchor = 0.5;
            chip_top.width = 188;
            chip_top.height = 188;
            chip_top.scale.set(1 * rate);
            chip_top.tint = '#ffffff';
            _container.addChild(chip_top);
            chip_top.x = _container.x + x;
            chip_top.y = _container.y + y;
            if (value) {
              var chip_value = new PIXI.Text({
                text: value,
                style: chip_style_value
              });
              chip_value.anchor = 0.5;
              chip_value.x = _container.x + x;
              chip_value.y = _container.y + y;
              chip_value.scale.set(rate);
              _container.addChild(chip_value);
            }
          };
          app = new PIXI.Application();
          _context.next = 5;
          return app.init({
            backgroundColor: '#1099bb',
            resizeTo: window,
            antialias: true
          });
        case 5:
          document.body.appendChild(app.canvas);

          //constant variable
          board_position = [336, 0];
          logo_position = [-20, 95]; // create app
          container = new PIXI.Container();
          container.x = 44;
          container.y = 44;
          app.stage.addChild(container);

          //variable
          position_y_roadmap = 459;
          position_x_roadmaps = [57.5, 94, 131, 168, 205, 242, 279, 320, 362, 399, 436, 473, 510, 548, 584];
          visible_highlight_left = false;
          visible_highlight_middle = false;
          visible_highlight_bot = true;
          roadmaps_p = [0, 5, 7, 12, 14];
          roadmaps_t = [6, 13];
          roadmaps_b = [1, 2, 3, 4, 8, 9, 10, 11];
          chip_colors = ['#aa181a', '#141381', '#88b303', '#0c7c00', '#00afca', '#044e7e', '#eb4411', '#6e1d9a'];
          amount_chip_left = 7;
          amount_chip_mid = 5;
          amount_chip_right = 10;
          is_sfx_on = true;
          is_music_on = true; // load assets
          console.log(PIXI.VERSION);

          // Fonts
          font1 = new FontFace('BebasNeue_Regular', 'url(./assets/fonts/BebasNeue-Regular.ttf)');
          font2 = new FontFace('MyriadPro_Bold', 'url(./assets/fonts/MyriadPro-Bold.ttf)');
          font3 = new FontFace('MyriadPro_Semibold', 'url(./assets/fonts/MyriadPro-Semibold.ttf)');
          fonts = [font1, font2, font3];
          Promise.all(fonts.map(function (font) {
            return font.load();
          })).then(function (loadedFonts) {
            loadedFonts.forEach(function (font) {
              return document.fonts.add(font);
            });
            console.log('All fonts loaded successfully');
          });
          _context.next = 34;
          return PIXI.Assets.load("assets/image/png/smallsize/board_half.png");
        case 34:
          board_texture = _context.sent;
          _context.next = 37;
          return PIXI.Assets.load("assets/image/png/smallsize/Logo_Baccarat_en.png");
        case 37:
          logo_texture = _context.sent;
          _context.next = 40;
          return PIXI.Assets.load("assets/image/png/smallsize/cardshoe_top.png");
        case 40:
          card_box_texture = _context.sent;
          _context.next = 43;
          return PIXI.Assets.load("assets/image/png/smallsize/timer.png");
        case 43:
          timer_texture = _context.sent;
          _context.next = 46;
          return PIXI.Assets.load("assets/image/png/smallsize/count_time.png");
        case 46:
          countdown_texture = _context.sent;
          _context.next = 49;
          return PIXI.Assets.load("assets/image/png/smallsize/V_up.png");
        case 49:
          arrow_up_texture = _context.sent;
          _context.next = 52;
          return PIXI.Assets.load("assets/image/png/smallsize/V_down.png");
        case 52:
          arrow_down_texture = _context.sent;
          _context.next = 55;
          return PIXI.Assets.load("assets/image/png/smallsize/bt_square.png");
        case 55:
          button_texture = _context.sent;
          _context.next = 58;
          return PIXI.Assets.load("assets/image/png/smallsize/bt_x.png");
        case 58:
          close_button_texture = _context.sent;
          _context.next = 61;
          return PIXI.Assets.load("assets/image/png/smallsize/default_sprite_splash.png");
        case 61:
          splash_texture = _context.sent;
          _context.next = 64;
          return PIXI.Assets.load("assets/image/png/smallsize/text_Player_en.png");
        case 64:
          player_texture = _context.sent;
          _context.next = 67;
          return PIXI.Assets.load("assets/image/png/smallsize/text_Player_cn.png");
        case 67:
          player_below_texture = _context.sent;
          _context.next = 70;
          return PIXI.Assets.load("assets/image/png/smallsize/text_Banker_en.png");
        case 70:
          banker_texture = _context.sent;
          _context.next = 73;
          return PIXI.Assets.load("assets/image/png/smallsize/text_Banker_cn.png");
        case 73:
          banker_below_texture = _context.sent;
          _context.next = 76;
          return PIXI.Assets.load("assets/image/png/smallsize/Rounded_10.png");
        case 76:
          room_info_texture = _context.sent;
          _context.next = 79;
          return PIXI.Assets.load("assets/image/png/smallsize/people_icon.png");
        case 79:
          people_texture = _context.sent;
          _context.next = 82;
          return PIXI.Assets.load("assets/image/png/Card/Card_98x144/S11.png");
        case 82:
          s11 = _context.sent;
          _context.next = 85;
          return PIXI.Assets.load("assets/image/png/Card/Card_98x144/C5.png");
        case 85:
          c5 = _context.sent;
          _context.next = 88;
          return PIXI.Assets.load("assets/image/png/Card/Card_98x144/H13.png");
        case 88:
          h13 = _context.sent;
          _context.next = 91;
          return PIXI.Assets.load("assets/image/png/Card/Card_98x144/D4.png");
        case 91:
          d4 = _context.sent;
          _context.next = 94;
          return PIXI.Assets.load("assets/image/png/Card/Card_98x144/Back.png");
        case 94:
          back = _context.sent;
          _context.next = 97;
          return PIXI.Assets.load("assets/image/png/smallsize/bt_blue.png");
        case 97:
          button_info = _context.sent;
          _context.next = 100;
          return PIXI.Assets.load("assets/image/png/smallsize/history_icon.png");
        case 100:
          icon_history = _context.sent;
          _context.next = 103;
          return PIXI.Assets.load("assets/image/png/smallsize/info_icon.png");
        case 103:
          icon_rule = _context.sent;
          _context.next = 106;
          return PIXI.Assets.load("assets/image/png/smallsize/999_frame.png");
        case 106:
          slot_bet_texture = _context.sent;
          _context.next = 109;
          return PIXI.Assets.load("assets/image/png/smallsize/label_player.png");
        case 109:
          lb_player_top_texture = _context.sent;
          _context.next = 112;
          return PIXI.Assets.load("assets/image/png/smallsize/label_player_en.png");
        case 112:
          lb_player_bot_texture = _context.sent;
          _context.next = 115;
          return PIXI.Assets.load("assets/image/png/smallsize/label_banker.png");
        case 115:
          lb_banker_top_texture = _context.sent;
          _context.next = 118;
          return PIXI.Assets.load("assets/image/png/smallsize/label_banker_en.png");
        case 118:
          lb_banker_bot_texture = _context.sent;
          _context.next = 121;
          return PIXI.Assets.load("assets/image/png/smallsize/label_tie.png");
        case 121:
          lb_tie_top_texture = _context.sent;
          _context.next = 124;
          return PIXI.Assets.load("assets/image/png/smallsize/label_tie_en.png");
        case 124:
          lb_tie_bot_texture = _context.sent;
          _context.next = 127;
          return PIXI.Assets.load("assets/image/png/smallsize/bet_highlight.png");
        case 127:
          bet_highlight_texture = _context.sent;
          _context.next = 130;
          return PIXI.Assets.load("assets/image/png/smallsize/bar_backing.png");
        case 130:
          bar_bg_texture = _context.sent;
          _context.next = 133;
          return PIXI.Assets.load("assets/image/png/smallsize/bar_fill.png");
        case 133:
          bar_fill_texture = _context.sent;
          _context.next = 136;
          return PIXI.Assets.load("assets/image/png/smallsize/bet_highlight_glow.png");
        case 136:
          bet_highlight_glow_texture = _context.sent;
          _context.next = 139;
          return PIXI.Assets.load("assets/image/png/smallsize/Rounded_13.png");
        case 139:
          glow_amount_texture = _context.sent;
          _context.next = 142;
          return PIXI.Assets.load("assets/image/png/microsize/coin_small.png");
        case 142:
          coint_texture = _context.sent;
          _context.next = 145;
          return PIXI.Assets.load("assets/image/png/smallsize/hamburger_bt.png");
        case 145:
          menu_texture = _context.sent;
          _context.next = 148;
          return PIXI.Assets.load("assets/image/png/smallsize/sound_open_tab.png");
        case 148:
          menu_bg_texture = _context.sent;
          _context.next = 151;
          return PIXI.Assets.load("assets/image/png/smallsize/sound.png");
        case 151:
          sfx_on_texture = _context.sent;
          _context.next = 154;
          return PIXI.Assets.load("assets/image/png/smallsize/sound_off.png");
        case 154:
          sfx_off_texture = _context.sent;
          _context.next = 157;
          return PIXI.Assets.load("assets/image/png/smallsize/music.png");
        case 157:
          music_on_texture = _context.sent;
          _context.next = 160;
          return PIXI.Assets.load("assets/image/png/smallsize/music_off.png");
        case 160:
          music_off_texture = _context.sent;
          _context.next = 163;
          return PIXI.Assets.load("assets/image/png/smallsize/roadmap_T.png");
        case 163:
          roundmap_t_texture = _context.sent;
          _context.next = 166;
          return PIXI.Assets.load("assets/image/png/smallsize/roadmap_B.png");
        case 166:
          roundmap_b_texture = _context.sent;
          _context.next = 169;
          return PIXI.Assets.load("assets/image/png/smallsize/roadmap_P.png");
        case 169:
          roundmap_p_texture = _context.sent;
          _context.next = 172;
          return PIXI.Assets.load("assets/image/png/smallsize/bt_red.png");
        case 172:
          btn_red_texture = _context.sent;
          _context.next = 175;
          return PIXI.Assets.load("assets/image/png/smallsize/bt_green.png");
        case 175:
          btn_green_texture = _context.sent;
          _context.next = 178;
          return PIXI.Assets.load("assets/image/png/smallsize/cover.png");
        case 178:
          cover_texture = _context.sent;
          _context.next = 181;
          return PIXI.Assets.load("assets/image/png/smallsize/arrow_bt.png");
        case 181:
          arrow_bt_texture = _context.sent;
          _context.next = 184;
          return PIXI.Assets.load("assets/image/png/smallsize/chip_glow.png");
        case 184:
          chip_glow_texture = _context.sent;
          _context.next = 187;
          return PIXI.Assets.load("assets/image/png/chip/circle_buttonshadow.png");
        case 187:
          chip_shadow_below_texture = _context.sent;
          _context.next = 190;
          return PIXI.Assets.load("assets/image/png/chip/chip_v1_shadow.png");
        case 190:
          chip_shadow_texture = _context.sent;
          _context.next = 193;
          return PIXI.Assets.load("assets/image/png/chip/chip_v1_top.png");
        case 193:
          chip_top_texture = _context.sent;
          _context.next = 196;
          return PIXI.Assets.load("assets/image/png/chip/chip_v2_base_above_layer.png");
        case 196:
          chip_base_texture = _context.sent;
          _context.next = 199;
          return PIXI.Assets.load("assets/image/png/chip/chip_v2_tint_below_layer.png");
        case 199:
          chip_tint_texture = _context.sent;
          //Style
          bet_style = new PIXI.TextStyle({
            fontFamily: "MyriadPro_Semibold",
            fontSize: 16,
            fill: "#EBC026",
            fontWeight: 'normal',
            stroke: '#980000',
            strokeThickness: 2,
            lineJoin: 'round'
          });
          rate_bet_style = new PIXI.TextStyle({
            fontFamily: "MyriadPro_Semibold",
            fontSize: 24,
            fill: "#FFFFFF",
            fontWeight: 'normal'
          });
          percent_style = new PIXI.TextStyle({
            fontFamily: "MyriadPro_Bold",
            fontSize: 14,
            fontWeight: 'normal',
            fill: '#ffffff'
          });
          style_room_info = new PIXI.TextStyle({
            fontFamily: 'MyriadPro_Semibold',
            fontSize: 20,
            fontWeight: 'normal',
            fill: '#EBC026',
            stroke: {
              color: '#0A414D',
              width: 1,
              join: 'round'
            }
          });
          point_style = new PIXI.TextStyle(_defineProperty({
            fontFamily: "MyriadPro_Bold",
            fontSize: 100,
            fill: '#ffffff',
            fontWeight: 'normal',
            stroke: '#711f1d',
            strokeThickness: 4,
            lineJoin: 'round',
            //'miter', 'bevel', 'round'
            dropShadow: true
          }, "dropShadow", {
            color: '#711f1d',
            blur: 1,
            angle: Math.PI / 2,
            distance: 3
          }));
          style = new PIXI.TextStyle({
            fontFamily: 'MyriadPro_Bold',
            fontSize: 42,
            fontWeight: 'normal',
            fill: '0xffffff',
            stroke: {
              color: '#1A1A1A',
              width: 6,
              join: 'round'
            }
          });
          card_style = new PIXI.TextStyle({
            fontFamily: 'MyriadPro_Bold',
            fontSize: 20,
            fontWeight: 'normal',
            fill: '#CDCDCD',
            stroke: {
              color: '#1A1A1A',
              width: 6,
              join: 'round'
            }
          });
          timer_style = new PIXI.TextStyle({
            fontFamily: 'MyriadPro_Bold',
            fontSize: 34,
            fontWeight: 'normal',
            fill: '#622300',
            stroke: {
              color: '#FFD93F',
              width: 1,
              join: 'round'
            }
          });
          amount_style = new PIXI.TextStyle({
            fontFamily: 'MyriadPro_Semibold',
            fontSize: 18,
            fill: '#ffffff'
          });
          chip_style_value = new PIXI.TextStyle({
            fontFamily: 'BebasNeue_Regular',
            fontSize: 56,
            // fontWeight: 'bold',
            fill: '#000000',
            stroke: {
              color: '#000000',
              width: 1,
              join: 'round'
            }
          });
          raito_style = new PIXI.TextStyle({
            fontFamily: "MyriadPro_Bold",
            fontWeight: 'bold',
            fill: '#ffffff',
            fontSize: 20
          }); //========================================================================================
          //board_left
          board_left = new PIXI.Sprite(board_texture);
          container.addChild(board_left);
          board_left.anchor.x = 1;
          board_left.x = board_position[0];
          board_left.y = board_position[1];

          //board_right
          board_right = new PIXI.Sprite(board_texture);
          container.addChild(board_right);
          board_right.anchor.x = 1;
          board_right.x = board_position[0];
          board_right.y = board_position[1];
          board_right.scale.x = -1;

          //logo
          logo = new PIXI.Sprite(logo_texture);
          container.addChild(logo);
          logo.anchor.x = 0;
          logo.anchor.y = 1;
          logo.x = logo_position[0];
          logo.y = logo_position[1];

          //card box
          card_box = new PIXI.Sprite(card_box_texture);
          container.addChild(card_box);
          card_box.x = board_position[0];
          card_box.anchor.x = 0.5;
          card_box.y = -15;

          //timer
          timer = new PIXI.Sprite(timer_texture);
          container.addChild(timer);
          timer.x = board_position[0] + 112;
          timer.anchor.x = 0.5;
          timer.y = -5;

          //countdown
          countdown = new PIXI.Sprite(countdown_texture);
          countdown.x = 0;
          countdown.anchor.x = 0.5;
          countdown.y = 10;
          countdown.tint = '#E58E2D';
          timer.addChild(countdown);

          // button up
          button = new PIXI.Sprite(button_texture);
          button.x = timer.x + 65;
          button.y = 0;
          container.addChild(button);
          arrow_up = new PIXI.Sprite(arrow_up_texture);
          arrow_up.x = timer.x + 75;
          arrow_up.y = 13;
          container.addChild(arrow_up);

          // close button
          x_button = new PIXI.Sprite(close_button_texture);
          x_button.x = button.x + 90;
          x_button.y = -15;
          container.addChild(x_button);

          // line
          line = new PIXI.Sprite(splash_texture);
          line.x = board_position[0];
          line.y = 113;
          line.width = 3;
          line.height = 164;
          line.tint = '#8EC4C2';
          container.addChild(line);

          // player
          player = new PIXI.Sprite(player_texture);
          player.anchor.x = 1;
          player.x = board_position[0] - 45;
          player.y = 78;
          player.tint = '#ffffff';
          player.alpha = 0.4;
          container.addChild(player);
          player_below = new PIXI.Sprite(player_below_texture);
          player_below.anchor.x = 1;
          player_below.scale = 0.9;
          player_below.x = board_position[0] - 90;
          player_below.y = 160;
          player_below.tint = '#ffffff';
          player_below.alpha = 0.2;
          container.addChild(player_below);

          // banker
          banker = new PIXI.Sprite(banker_texture);
          banker.x = board_position[0] + 60;
          banker.anchor.x = 0;
          banker.y = 78;
          banker.tint = '#ffffff';
          banker.alpha = 0.4;
          container.addChild(banker);
          banker_below = new PIXI.Sprite(banker_below_texture);
          banker_below.anchor.x = 1;
          banker_below.scale = 0.9;
          banker_below.x = board_position[0] + 140;
          banker_below.y = 160;
          banker_below.tint = '#ffffff';
          banker_below.alpha = 0.2;
          container.addChild(banker_below);

          // room info
          bg_room_info = new PIXI.NineSlicePlane(room_info_texture, 10, 10, 10, 10);
          banker.x = board_position[0] + 60;
          bg_room_info.width = 114;
          bg_room_info.height = 45;
          bg_room_info.alpha = 0.8;
          bg_room_info.x = -10;
          bg_room_info.y = 95;
          bg_room_info.tint = '#00485DCC';
          container.addChild(bg_room_info);

          // icon people
          icon_people = new PIXI.Sprite(people_texture);
          icon_people.x = -2;
          icon_people.y = 106.25;
          icon_people.alpha = 1;
          container.addChild(icon_people);
          amount_people = new PIXI.Text({
            text: '10',
            style: style_room_info
          });
          amount_people.x = 57;
          amount_people.y = -10;
          icon_people.addChild(amount_people);
          player_lb = new PIXI.Text({
            text: 'Players',
            style: style_room_info
          });
          player_lb.x = 37;
          player_lb.y = 7;
          icon_people.addChild(player_lb);

          // cards s11 c5 h13 d4
          S11 = new PIXI.Sprite(s11);
          S11.x = 155;
          S11.y = 140;
          S11.scale = 0.57;
          container.addChild(S11);
          C5 = new PIXI.Sprite(c5);
          C5.x = 225;
          C5.y = 140;
          C5.scale = 0.57;
          container.addChild(C5);
          H13 = new PIXI.Sprite(h13);
          H13.x = 390;
          H13.y = 140;
          H13.scale = 0.57;
          container.addChild(H13);
          D4 = new PIXI.Sprite(d4);
          D4.x = 460;
          D4.y = 140;
          D4.scale = 0.57;
          container.addChild(D4);
          back_left = new PIXI.Sprite(back);
          back_left.x = 175;
          back_left.y = 285;
          back_left.scale = 0.57;
          back_left.angle = -90;
          container.addChild(back_left);
          back_rightt = new PIXI.Sprite(back);
          back_rightt.x = 410;
          back_rightt.y = 285;
          back_rightt.scale = 0.57;
          back_rightt.angle = -90;
          container.addChild(back_rightt);

          // button info
          button_up = new PIXI.Sprite(button_info);
          button_up.x = -12;
          button_up.y = 250;
          button_up.scale.y = -1;
          container.addChild(button_up);
          button_down = new PIXI.Sprite(button_info);
          button_down.x = -12;
          button_down.y = 250;
          container.addChild(button_down);
          history_icon = new PIXI.Sprite(icon_history);
          history_icon.x = 1;
          history_icon.y = 275;
          container.addChild(history_icon);
          rule_icon = new PIXI.Sprite(icon_rule);
          rule_icon.x = 15;
          rule_icon.y = 185;
          container.addChild(rule_icon);

          //============ Left
          highlight_left = new PIXI.NineSlicePlane(bet_highlight_texture, 61, 61, 61, 61);
          highlight_left.width = 178;
          highlight_left.height = 126;
          highlight_left.x = 62;
          highlight_left.y = 290;
          container.addChild(highlight_left);
          highlight_left.visible = visible_highlight_left;
          slot_left = new PIXI.NineSlicePlane(slot_bet_texture, 35, 43, 8, 12);
          slot_left.width = 178;
          slot_left.height = 126;
          slot_left.x = 62;
          slot_left.y = 290;
          slot_left.tint = '#FFFFFF';
          container.addChild(slot_left);
          amount_left = new PIXI.Text({
            text: '999',
            style: bet_style
          });
          amount_left.angle = -39;
          amount_left.anchor.x = 0.5;
          amount_left.anchor.y = 0.5;
          amount_left.y = 10;
          amount_left.x = 10;
          slot_left.addChild(amount_left);
          lb_player_top = new PIXI.Sprite(lb_player_top_texture);
          lb_player_top.anchor.x = 0.5;
          lb_player_top.anchor.y = 0.5;
          lb_player_top.x = 89;
          lb_player_top.y = 37;
          slot_left.addChild(lb_player_top);
          lb_player_bot = new PIXI.Sprite(lb_player_bot_texture);
          lb_player_bot.anchor.x = 0.5;
          lb_player_bot.anchor.y = 0.5;
          lb_player_bot.x = 89;
          lb_player_bot.y = 86;
          slot_left.addChild(lb_player_bot);
          rate_amount_left = new PIXI.Text({
            text: '1 : 1',
            style: rate_bet_style
          });
          rate_amount_left.anchor.x = 0.5;
          rate_amount_left.anchor.y = 0.5;
          rate_amount_left.y = 110;
          rate_amount_left.x = 89;
          slot_left.addChild(rate_amount_left);
          bar_bg_l = new PIXI.Sprite(bar_bg_texture);
          bar_bg_l.x = 157;
          bar_bg_l.y = 16;
          slot_left.addChild(bar_bg_l);
          bar_fill_l = new PIXI.Sprite(bar_fill_texture);
          bar_fill_l.x = 159;
          bar_fill_l.y = 19;
          bar_fill_l.tint = '#0288D1';
          slot_left.addChild(bar_fill_l);
          highlight_glow_left = new PIXI.NineSlicePlane(bet_highlight_glow_texture, 59, 84, 84, 59);
          highlight_glow_left.width = 180;
          highlight_glow_left.height = 126;
          highlight_glow_left.x = 62;
          highlight_glow_left.y = 290;
          highlight_glow_left.alpha = 0.5;
          highlight_glow_left.visible = visible_highlight_left;
          container.addChild(highlight_glow_left);
          glow_money_l = new PIXI.NineSlicePlane(glow_amount_texture, 12, 12, 12, 12);
          glow_money_l.width = 112;
          glow_money_l.height = 26;
          glow_money_l.alpha = 0.7;
          glow_money_l.tint = '#1F1F1FB4';
          glow_money_l.x = 95;
          glow_money_l.y = 370;
          container.addChild(glow_money_l);
          layout_l = new PIXI.Container();
          layout_l.x = 521;
          layout_l.y = 370;
          container.addChild(layout_l);
          coin_l = new PIXI.Sprite(coint_texture);
          coin_l.y = 5;
          coin_l.anchor.x = 0.5;
          layout_l.addChild(coin_l);
          amount_l = new PIXI.Text({
            text: '9.999',
            style: amount_style
          });
          amount_l.y = 2.5;
          amount_l.x = coin_l.x + 12;
          layout_l.addChild(amount_l);
          layout_width_l = layout_l.getBounds().width;
          rate_l = layout_width_l / glow_money_l.width;
          layout_l.x = glow_money_l.x + (1 - rate_l) * layout_width_l;
          percent_left = new PIXI.Text({
            text: '98%',
            style: percent_style
          });
          percent_left.x = 170;
          percent_left.y = 101;
          percent_left.anchor.x = 1;
          slot_left.addChild(percent_left);

          //============= Middle
          highlight_middle = new PIXI.NineSlicePlane(bet_highlight_texture, 61, 61, 61, 61);
          highlight_middle.width = 178;
          highlight_middle.height = 126;
          highlight_middle.x = 247;
          highlight_middle.y = 290;
          container.addChild(highlight_middle);
          highlight_middle.visible = visible_highlight_middle;
          slot_middle = new PIXI.NineSlicePlane(slot_bet_texture, 35, 43, 8, 12);
          slot_middle.width = 178;
          slot_middle.height = 126;
          slot_middle.x = 247;
          slot_middle.y = 290;
          slot_middle.tint = '#FFFFFF';
          container.addChild(slot_middle);
          amount_middle = new PIXI.Text({
            text: '999',
            style: bet_style
          });
          amount_middle.angle = -39;
          amount_middle.anchor.x = 0.5;
          amount_middle.anchor.y = 0.5;
          amount_middle.y = 10;
          amount_middle.x = 10;
          slot_middle.addChild(amount_middle);
          lb_tie_top = new PIXI.Sprite(lb_tie_top_texture);
          lb_tie_top.anchor.x = 0.5;
          lb_tie_top.anchor.y = 0.5;
          lb_tie_top.x = 89;
          lb_tie_top.y = 37;
          slot_middle.addChild(lb_tie_top);
          lb_tie_bot = new PIXI.Sprite(lb_tie_bot_texture);
          lb_tie_bot.anchor.x = 0.5;
          lb_tie_bot.anchor.y = 0.5;
          lb_tie_bot.x = 89;
          lb_tie_bot.y = 86;
          slot_middle.addChild(lb_tie_bot);
          rate_amount_middle = new PIXI.Text({
            text: '1 : 8',
            style: rate_bet_style
          });
          rate_amount_middle.anchor.x = 0.5;
          rate_amount_middle.anchor.y = 0.5;
          rate_amount_middle.y = 110;
          rate_amount_middle.x = 89;
          slot_middle.addChild(rate_amount_middle);
          bar_bg_m = new PIXI.Sprite(bar_bg_texture);
          bar_bg_m.x = 157;
          bar_bg_m.y = 16;
          slot_middle.addChild(bar_bg_m);
          bar_fill_m = new PIXI.Sprite(bar_fill_texture);
          bar_fill_m.x = 159;
          bar_fill_m.y = 19;
          bar_fill_m.tint = '#25B453';
          slot_middle.addChild(bar_fill_m);
          highlight_glow_middle = new PIXI.NineSlicePlane(bet_highlight_glow_texture, 59, 84, 84, 59);
          highlight_glow_middle.width = 180;
          highlight_glow_middle.height = 126;
          highlight_glow_middle.x = 247;
          highlight_glow_middle.y = 290;
          highlight_glow_middle.alpha = 0.5;
          highlight_glow_middle.visible = visible_highlight_middle;
          container.addChild(highlight_glow_middle);
          glow_money_m = new PIXI.NineSlicePlane(glow_amount_texture, 12, 12, 12, 12);
          glow_money_m.width = 112;
          glow_money_m.height = 26;
          glow_money_m.alpha = 0.7;
          glow_money_m.tint = '#1F1F1FB4';
          glow_money_m.x = 280;
          glow_money_m.y = 370;
          container.addChild(glow_money_m);
          layout_m = new PIXI.Container();
          layout_m.x = 521;
          layout_m.y = 370;
          container.addChild(layout_m);
          coin_m = new PIXI.Sprite(coint_texture);
          coin_m.y = 5;
          coin_m.anchor.x = 0.5;
          layout_m.addChild(coin_m);
          amount_m = new PIXI.Text({
            text: '999.999',
            style: amount_style
          });
          amount_m.y = 2.5;
          amount_m.x = coin_l.x + 12;
          layout_m.addChild(amount_m);
          layout_width_m = layout_m.getBounds().width;
          rate_m = layout_width_m / glow_money_m.width;
          layout_m.x = glow_money_m.x + (1 - rate_m) * layout_width_m;
          percent_middle = new PIXI.Text({
            text: '98%',
            style: percent_style
          });
          percent_middle.x = 170;
          percent_middle.y = 101;
          percent_middle.anchor.x = 1;
          slot_middle.addChild(percent_middle);

          //============= Right
          highlight_right = new PIXI.NineSlicePlane(bet_highlight_texture, 61, 61, 61, 61);
          highlight_right.width = 178;
          highlight_right.height = 126;
          highlight_right.x = 432;
          highlight_right.y = 290;
          container.addChild(highlight_right);
          highlight_right.visible = visible_highlight_bot;
          slot_right = new PIXI.NineSlicePlane(slot_bet_texture, 35, 43, 8, 12);
          slot_right.width = 178;
          slot_right.height = 126;
          slot_right.x = 432;
          slot_right.y = 290;
          slot_right.tint = '#FFFFFF';
          container.addChild(slot_right);
          amount_right = new PIXI.Text({
            text: '999',
            style: bet_style
          });
          amount_right.angle = -39;
          amount_right.anchor.x = 0.5;
          amount_right.anchor.y = 0.5;
          amount_right.y = 10;
          amount_right.x = 10;
          slot_right.addChild(amount_right);
          lb_banker_top = new PIXI.Sprite(lb_banker_top_texture);
          lb_banker_top.anchor.x = 0.5;
          lb_banker_top.anchor.y = 0.5;
          lb_banker_top.x = 89;
          lb_banker_top.y = 37;
          slot_right.addChild(lb_banker_top);
          lb_banker_bot = new PIXI.Sprite(lb_banker_bot_texture);
          lb_banker_bot.anchor.x = 0.5;
          lb_banker_bot.anchor.y = 0.5;
          lb_banker_bot.x = 89;
          lb_banker_bot.y = 86;
          slot_right.addChild(lb_banker_bot);
          rate_amount_right = new PIXI.Text({
            text: '1 : 0.95',
            style: rate_bet_style
          });
          rate_amount_right.anchor.x = 0.5;
          rate_amount_right.anchor.y = 0.5;
          rate_amount_right.y = 110;
          rate_amount_right.x = 89;
          slot_right.addChild(rate_amount_right);
          bar_bg_r = new PIXI.Sprite(bar_bg_texture);
          bar_bg_r.x = 589;
          bar_bg_r.y = 306;
          container.addChild(bar_bg_r);
          bar_fill_r = new PIXI.Sprite(bar_fill_texture);
          bar_fill_r.x = 591;
          bar_fill_r.y = 309;
          bar_fill_r.tint = '#E53935';
          container.addChild(bar_fill_r);
          highlight_glow_right = new PIXI.NineSlicePlane(bet_highlight_glow_texture, 59, 84, 84, 59);
          highlight_glow_right.width = 180;
          highlight_glow_right.height = 126;
          highlight_glow_right.x = 432;
          highlight_glow_right.y = 290;
          highlight_glow_right.alpha = 0.5;
          highlight_glow_right.visible = visible_highlight_bot;
          container.addChild(highlight_glow_right);
          glow_money_r = new PIXI.NineSlicePlane(glow_amount_texture, 12, 12, 12, 12);
          glow_money_r.width = 112;
          glow_money_r.height = 26;
          glow_money_r.alpha = 0.7;
          glow_money_r.tint = '#1F1F1FB4';
          glow_money_r.x = 465;
          glow_money_r.y = 370;
          container.addChild(glow_money_r);
          layout_r = new PIXI.Container();
          layout_r.x = 521;
          layout_r.y = 370;
          container.addChild(layout_r);
          coin_r = new PIXI.Sprite(coint_texture);
          coin_r.y = 5;
          coin_r.anchor.x = 0.5;
          layout_r.addChild(coin_r);
          amount_r = new PIXI.Text({
            text: '9.999.999',
            style: amount_style
          });
          amount_r.y = 2.5;
          amount_r.x = coin_r.x + 12;
          layout_r.addChild(amount_r);
          layout_width_r = layout_r.getBounds().width;
          rate_r = layout_width_r / glow_money_r.width;
          layout_r.x = glow_money_r.x + (1 - rate_r) * layout_width_r;
          percent_right = new PIXI.Text({
            text: '98%',
            style: percent_style
          });
          percent_right.x = 170;
          percent_right.y = 101;
          percent_right.anchor.x = 1;
          slot_right.addChild(percent_right);

          // menu
          menu_bg = new PIXI.NineSlicePlane(menu_bg_texture, 8, 8, 25, 8);
          menu_bg.x = 25;
          menu_bg.y = 362.5;
          menu_bg.width = 210;
          container.addChild(menu_bg);
          menu = new PIXI.Sprite(menu_texture);
          menu_bg.addChild(menu);
          menu.y = -2.5;
          menu.x = -30;
          sfx_on = new PIXI.Sprite(sfx_on_texture);
          menu_bg.addChild(sfx_on);
          sfx_on.y = 12.5;
          sfx_on.x = 70;
          sfx_on.visible = is_sfx_on;
          sfx_off = new PIXI.Sprite(sfx_off_texture);
          menu_bg.addChild(sfx_off);
          sfx_off.y = 10;
          sfx_off.x = 70;
          sfx_off.visible = !is_sfx_on;
          music_on = new PIXI.Sprite(music_on_texture);
          menu_bg.addChild(music_on);
          music_on.y = 10;
          music_on.x = 140;
          music_on.visible = is_music_on;
          music_off = new PIXI.Sprite(music_off_texture);
          menu_bg.addChild(music_off);
          music_off.y = 10;
          music_off.x = 140;
          music_off.visible = !is_music_on;

          //raito result
          // raito_style
          b = new PIXI.Text({
            text: "B:",
            style: raito_style
          });
          container.addChild(b);
          b.y = 430;
          b.x = 62;
          b.tint = '#FF1744';
          result_b = new PIXI.Text({
            text: '24',
            style: raito_style
          });
          result_b.y = 430;
          result_b.x = b.x + 20;
          container.addChild(result_b);
          p = new PIXI.Text({
            text: "P:",
            style: raito_style
          });
          container.addChild(p);
          p.y = 430;
          p.x = 140;
          p.tint = '#42A5F5';
          result_p = new PIXI.Text({
            text: '22',
            style: raito_style
          });
          result_p.y = 430;
          result_p.x = p.x + 20;
          container.addChild(result_p);
          t = new PIXI.Text({
            text: "T:",
            style: raito_style
          });
          container.addChild(t);
          t.y = 430;
          t.x = 220;
          t.tint = '#66BB6A';
          result_t = new PIXI.Text({
            text: '3',
            style: raito_style
          });
          result_t.y = 430;
          result_t.x = t.x + 20;
          container.addChild(result_t);
          total = new PIXI.Text({
            text: 'Total 51',
            style: raito_style
          });
          total.y = 430;
          total.x = 540;
          container.addChild(total);

          // road map
          for (i = 0; i < roadmaps_p.length; i++) {
            roadmap_p = new PIXI.Sprite(roundmap_p_texture);
            container.addChild(roadmap_p);
            roadmap_p.y = position_y_roadmap;
            roadmap_p.x = position_x_roadmaps[roadmaps_p[i]];
          }
          for (_i = 0; _i < roadmaps_t.length; _i++) {
            roadmap_t = new PIXI.Sprite(roundmap_t_texture);
            container.addChild(roadmap_t);
            roadmap_t.y = position_y_roadmap;
            roadmap_t.x = position_x_roadmaps[roadmaps_t[_i]];
          }
          for (_i2 = 0; _i2 < roadmaps_b.length; _i2++) {
            roadmap_b = new PIXI.Sprite(roundmap_b_texture);
            container.addChild(roadmap_b);
            roadmap_b.y = position_y_roadmap;
            roadmap_b.x = position_x_roadmaps[roadmaps_b[_i2]];
          }

          // btn bottom
          btn_red = new PIXI.Sprite(btn_red_texture);
          container.addChild(btn_red);
          btn_red.y = 497;
          btn_red.x = 10;
          btn_green = new PIXI.Sprite(btn_green_texture);
          container.addChild(btn_green);
          btn_green.y = 497;
          btn_green.x = 550;

          // points
          left_point = new PIXI.Text({
            text: '5',
            style: point_style
          });
          left_point.x = 80;
          left_point.y = 155;
          container.addChild(left_point);
          right_point = new PIXI.Text({
            text: '4',
            style: point_style
          });
          right_point.x = container.width - 162;
          right_point.y = 155;
          container.addChild(right_point);

          //text card box
          amount_card = new PIXI.Text({
            text: '48',
            style: style
          });
          amount_card.anchor.x = 0.5;
          amount_card.x = board_position[0];
          amount_card.y = -5;
          container.addChild(amount_card);

          //text card
          card_txt = new PIXI.Text({
            text: 'Card',
            style: card_style
          });
          card_txt.anchor.x = 0.5;
          card_txt.x = board_position[0];
          card_txt.y = 40;
          container.addChild(card_txt);

          //text timer
          timer_txt = new PIXI.Text({
            text: '10',
            style: timer_style
          });
          timer_txt.anchor.x = 0.5;
          timer_txt.x = board_position[0] + 111;
          timer_txt.y = 5;
          container.addChild(timer_txt);

          // chip
          chip_player_container = new PIXI.Container();
          chip_player_container.x = 75;
          chip_player_container.y = 170;
          container.addChild(chip_player_container);
          spawnChips(amount_chip_left, 0.15, chip_player_container, 0, 0, 0, 200);
          chip_tie_container = new PIXI.Container();
          chip_tie_container.x = 169;
          chip_tie_container.y = 170;
          container.addChild(chip_tie_container);
          spawnChips(amount_chip_mid, 0.15, chip_tie_container, 2, 0, 0, 50);
          chip_banker_container = new PIXI.Container();
          chip_banker_container.x = 260;
          chip_banker_container.y = 170;
          container.addChild(chip_banker_container);
          spawnChips(amount_chip_right, 0.15, chip_banker_container, 4, 0, 0, 500);

          // chip option
          bet_option_container = new PIXI.Container();
          bet_option_container.x = 168.5;
          bet_option_container.y = 267;
          container.addChild(bet_option_container);
          addChip(0.45, bet_option_container, 3, 180, 0, 1000);
          addChip(0.45, bet_option_container, 4, 100, 0, 500);
          addChip(0.5, bet_option_container, 0, 0, 0, 200);
          addChip(0.45, bet_option_container, 7, -100, 0, 100);
          addChip(0.45, bet_option_container, 2, -180, 0, 50);
          chip_glow = new PIXI.Sprite(chip_glow_texture);
          chip_glow.x = 169;
          chip_glow.y = 269;
          chip_glow.width = 110;
          chip_glow.height = 110;
          chip_glow.anchor = 0.5;
          bet_option_container.addChild(chip_glow);
          cover_l = new PIXI.Sprite(cover_texture);
          container.addChild(cover_l);
          cover_l.y = 497;
          cover_l.x = 152;
          cover_l.scale.x = -1;
          cover_l.alpha = 0.98;
          // cover_l.tint = '#000000';
          cover_l.width = 36;
          cover_l.height = 76;
          cover_r = new PIXI.Sprite(cover_texture);
          container.addChild(cover_r);
          cover_r.y = 497;
          cover_r.x = 515;
          cover_r.alpha = 0.98;
          // cover_r.tint = '#000000';
          cover_r.width = 36;
          cover_r.height = 76;
          arrow_left = new PIXI.Sprite(arrow_bt_texture);
          container.addChild(arrow_left);
          arrow_left.anchor = 0.5;
          arrow_left.x = 147;
          arrow_left.y = 535;
          arrow_right = new PIXI.Sprite(arrow_bt_texture);
          container.addChild(arrow_right);
          arrow_right.anchor = 0.5;
          arrow_right.scale.x = -1;
          arrow_right.x = 517;
          arrow_right.y = 535;

          // log size position of container
          // const bounds = container.getBounds();
          // console.log('X:', bounds.x);
          // console.log('Y:', bounds.y);
          // console.log('Width:', bounds.width);
          // console.log('Height:', bounds.height);

          //update
          // app.ticker.add(() => {

          // });
        case 767:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _initApp.apply(this, arguments);
}
initApp();
/******/ })()
;
//# sourceMappingURL=bundle.js.map