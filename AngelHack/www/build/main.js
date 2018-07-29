webpackJsonp([0],{

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@ionic-native/splash-screen/index.js
var splash_screen = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/@ionic-native/status-bar/index.js
var status_bar = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 4 modules
var ionic_angular = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@ionic-native/launch-navigator/index.js
var launch_navigator = __webpack_require__(93);

// CONCATENATED MODULE: ./src/pages/chat/chat.ts





var ChatPage = /*@__PURE__*/ (function () {
    function ChatPage(navCtrl, navParams, launchNavigator, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.launchNavigator = launchNavigator;
        this.loadingCtrl = loadingCtrl;
        this.segmentVar = true;
        this.mockApi = false;
        this.msgs = [];
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(this.timeMockDataUser, 1000);
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Carregando pessoas'
        });
        loading.present();
        console.log('Opened');
        setTimeout(function () {
            _this.mockApi = true;
            console.log('closed');
            loading.dismiss();
        }, 1500);
    };
    ChatPage.prototype.chatMapa = function (d) {
        console.log('D ', d);
        this.segmentVar = d;
    };
    ChatPage.prototype.openUber = function () {
        var options = {
            start: 'Av. Dr. Cardoso de Melo, 90 - Vila Olimpia, São Paulo - SP, 04548-000',
        };
        this.launchNavigator.navigate(' R. Angélica, 100 - Jd. das Flores, Osasco - SP, 06132-380', options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    ChatPage.prototype.sendMsg = function (msgRec) {
        this.msgs.push({ msg: msgRec });
        this.msgInput = "";
    };
    ChatPage.prototype.timeMockDataUser = function () {
        this.mockApi = false;
    };
    return ChatPage;
}());





// CONCATENATED MODULE: ./src/pages/quem-vai-comigo/quem-vai-comigo.ts





var quem_vai_comigo_QuemVaiComigoPage = /*@__PURE__*/ (function () {
    function QuemVaiComigoPage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mockApi = false;
    }
    QuemVaiComigoPage.prototype.ChatPagePush = function () {
        this.navCtrl.push(ChatPage);
    };
    QuemVaiComigoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Carregando pessoas'
        });
        loading.present();
        console.log('Opened');
        setTimeout(function () {
            _this.mockApi = true;
            console.log('closed');
            loading.dismiss();
        }, 1500);
    };
    QuemVaiComigoPage.prototype.timeMockDataUser = function () {
        console.log('Mock');
        this.mockApi = false;
    };
    return QuemVaiComigoPage;
}());





// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/http.js
var http = __webpack_require__(132);

// CONCATENATED MODULE: ./src/providers/requests/requests.ts




var RequestsProvider = /*@__PURE__*/ (function () {
    function RequestsProvider(http) {
        this.http = http;
        this.url = 'https://193cbd45.ngrok.io/api/v1';
        console.log('Hello RequestsProvider Provider');
    }
    RequestsProvider.prototype.transformGeolocation = function (data) {
        return this.http.post(this.url + "/transform", data);
    };
    return RequestsProvider;
}());





// EXTERNAL MODULE: ./node_modules/@ionic-native/geolocation/index.js
var _ionic_native_geolocation = __webpack_require__(57);

// CONCATENATED MODULE: ./src/pages/quer-vir-comigo/quer-vir-comigo.ts







var quer_vir_comigo_QuerVirComigoPage = /*@__PURE__*/ (function () {
    function QuerVirComigoPage(navCtrl, req, geolocation) {
        this.navCtrl = navCtrl;
        this.req = req;
        this.geolocation = geolocation;
    }
    QuerVirComigoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            _this.req.transformGeolocation({
                address: resp.coords.latitude + "," + resp.coords.longitude
            })
                .subscribe(function (resp) {
                _this.resp = resp;
                _this.origin = _this.resp.address;
                console.log(_this.resp);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    QuerVirComigoPage.prototype.QuemVaiComigoPagePush = function () {
        this.navCtrl.push(quem_vai_comigo_QuemVaiComigoPage);
    };
    return QuerVirComigoPage;
}());





// CONCATENATED MODULE: ./src/pages/login/login.ts






var login_LoginPage = /*@__PURE__*/ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this.navCtrl.setRoot(QuerVirComigoPage)
    }
    LoginPage.prototype.querVirComigoPagePush = function () {
        this.navCtrl.setRoot(quer_vir_comigo_QuerVirComigoPage);
    };
    LoginPage.prototype.autorizaOPagePush = function () {
        this.navCtrl.push(autoriza_o_AutorizaOPage);
    };
    return LoginPage;
}());





// CONCATENATED MODULE: ./src/pages/autoriza-o/autoriza-o.ts





var autoriza_o_AutorizaOPage = /*@__PURE__*/ (function () {
    function AutorizaOPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AutorizaOPage.prototype.pushLogin = function () {
        this.navCtrl.setRoot(login_LoginPage);
    };
    return AutorizaOPage;
}());





// CONCATENATED MODULE: ./src/pages/cart-tab-default-page/cart-tab-default-page.ts




var CartTabDefaultPagePage = /*@__PURE__*/ (function () {
    function CartTabDefaultPagePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return CartTabDefaultPagePage;
}());





// CONCATENATED MODULE: ./src/pages/home/home.ts




var HomePage = /*@__PURE__*/ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());





// CONCATENATED MODULE: ./src/pages/list/list.ts




var ListPage = /*@__PURE__*/ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
    var ListPage_1;
}());





// CONCATENATED MODULE: ./src/pages/camera-tab-default-page/camera-tab-default-page.ts




var CameraTabDefaultPagePage = /*@__PURE__*/ (function () {
    function CameraTabDefaultPagePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return CameraTabDefaultPagePage;
}());





// CONCATENATED MODULE: ./src/app/app.component.ts


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [0, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var app_component_MyApp = /*@__PURE__*/ (function () {
    function MyApp(platform, statusBar, splashScreen, geolocation) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.geolocation = geolocation;
        this.rootPage = autoriza_o_AutorizaOPage;
        this.initializeApp();
        this.getLocation();
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'List', component: ListPage },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var coords;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 2:
                        coords = (_a.sent()).coords;
                        console.log(coords);
                        return [2 /*return*/];
                }
            });
        });
    };
    return MyApp;
}());





// CONCATENATED MODULE: ./src/app/app.module.ts




















var AppModule = /*@__PURE__*/ (function () {
    function AppModule() {
    }
    return AppModule;
}());





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.js
var app_root = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(230);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js + 1 modules
var loading_component_ngfactory = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(234);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js + 1 modules
var select_popover_component_ngfactory = __webpack_require__(237);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu-close.js
var menu_close = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/menu-controller.js
var menu_controller = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu.ngfactory.js
var menu_ngfactory = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/split-pane/split-pane.js
var split_pane = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu.js + 1 modules
var menu = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform_platform = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.ngfactory.js
var toolbar_ngfactory = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.ngfactory.js
var nav_ngfactory = __webpack_require__(241);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.js
var nav = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/ionic-angular/transitions/transition-controller.js
var transition_controller = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(24);

// CONCATENATED MODULE: ./src/app/app.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_menu_menu_close,ionic_angular_components_app_menu_controller,_.._node_modules_ionic_angular_components_menu_menu.ngfactory,ionic_angular_components_split_pane_split_pane,ionic_angular_components_menu_menu,ionic_angular_platform_platform,ionic_angular_platform_keyboard,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,ionic_angular_components_app_app,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._node_modules_ionic_angular_components_toolbar_toolbar.ngfactory,ionic_angular_components_toolbar_toolbar,_.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_navbar,_.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_navigation_nav_controller,ionic_angular_components_list_list,_angular_common,_.._node_modules_ionic_angular_components_nav_nav.ngfactory,ionic_angular_components_nav_nav,ionic_angular_transitions_transition_controller,ionic_angular_navigation_deep_linker,_app.component,_ionic_native_status_bar_index,_ionic_native_splash_screen_index,_ionic_native_geolocation_index PURE_IMPORTS_END */





































var styles_MyApp = [];
var RenderType_MyApp = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_MyApp, data: {} });

function View_MyApp_1(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 10, "button", [["class", "item item-block"], ["ion-item", ""], ["menuClose", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 6).close() !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.openPage(_v.context.$implicit) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 6, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["Y" /* ɵdid */](6, 16384, null, 0, menu_close["a" /* MenuClose */], [menu_controller["a" /* MenuController */]], { menuClose: [0, "menuClose"] }, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](8, 0, null, 2, 1, "span", [["class", "menu-it"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](9, null, ["\n              ", "\n          "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "]))], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 6, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.title; _ck(_v, 9, 0, currVal_1); });
}
function View_MyApp_0(_l) { return core["_19" /* ɵvid */](0, [core["_16" /* ɵqud */](402653184, 1, { nav: 0 }), (_l()(), core["Z" /* ɵeld */](1, 0, null, null, 28, "ion-menu", [["role", "navigation"]], null, null, null, menu_ngfactory["b" /* View_Menu_0 */], menu_ngfactory["a" /* RenderType_Menu */])), core["_14" /* ɵprd */](6144, null, split_pane["a" /* RootNode */], null, [menu["a" /* Menu */]]), core["Y" /* ɵdid */](3, 245760, null, 2, menu["a" /* Menu */], [menu_controller["a" /* MenuController */], core["j" /* ElementRef */], config["a" /* Config */], platform_platform["a" /* Platform */], core["z" /* Renderer */], keyboard["a" /* Keyboard */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], app["a" /* App */]], { content: [0, "content"] }, null), core["_16" /* ɵqud */](335544320, 2, { menuContent: 0 }), core["_16" /* ɵqud */](335544320, 3, { menuNav: 0 }), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n  "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 0, 10, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](8, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, null, 6, "ion-toolbar", [["class", "toolbar"]], [[2, "statusbar-padding", null]], null, null, toolbar_ngfactory["b" /* View_Toolbar_0 */], toolbar_ngfactory["a" /* RenderType_Toolbar */])), core["Y" /* ɵdid */](11, 49152, null, 0, toolbar["a" /* Toolbar */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n      "])), (_l()(), core["Z" /* ɵeld */](13, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](14, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["Menu"])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n\n  "])), (_l()(), core["Z" /* ɵeld */](19, 0, null, 0, 9, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](20, 4374528, [[2, 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["Z" /* ɵeld */](22, 0, null, 1, 5, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](23, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_MyApp_1)), core["Y" /* ɵdid */](26, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](32, 0, null, null, 2, "ion-nav", [["swipeBackEnabled", "false"]], null, null, null, nav_ngfactory["b" /* View_Nav_0 */], nav_ngfactory["a" /* RenderType_Nav */])), core["_14" /* ɵprd */](6144, null, split_pane["a" /* RootNode */], null, [nav["a" /* Nav */]]), core["Y" /* ɵdid */](34, 4374528, [[1, 4], ["content", 4]], 0, nav["a" /* Nav */], [[2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["j" /* ElementRef */], core["u" /* NgZone */], core["z" /* Renderer */], core["i" /* ComponentFactoryResolver */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["k" /* ErrorHandler */]], { swipeBackEnabled: [0, "swipeBackEnabled"], root: [1, "root"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_11" /* ɵnov */](_v, 34); _ck(_v, 3, 0, currVal_0); var currVal_4 = _co.pages; _ck(_v, 26, 0, currVal_4); var currVal_5 = "false"; var currVal_6 = _co.rootPage; _ck(_v, 34, 0, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_1 = core["_11" /* ɵnov */](_v, 11)._sbPadding; _ck(_v, 10, 0, currVal_1); var currVal_2 = core["_11" /* ɵnov */](_v, 20).statusbarPadding; var currVal_3 = core["_11" /* ɵnov */](_v, 20)._hasRefresher; _ck(_v, 19, 0, currVal_2, currVal_3); }); }
function View_MyApp_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_MyApp_0, RenderType_MyApp)), core["Y" /* ɵdid */](1, 49152, null, 0, app_component_MyApp, [platform_platform["a" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */], _ionic_native_geolocation["a" /* Geolocation */]], null, null)], null, null); }
var MyAppNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("ng-component", app_component_MyApp, View_MyApp_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu-toggle.js
var menu_toggle = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(27);

// CONCATENATED MODULE: ./src/pages/home/home.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,ionic_angular_components_icon_icon,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,_home PURE_IMPORTS_END */























var styles_HomePage = [];
var RenderType_HomePage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_HomePage, data: {} });

function View_HomePage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 8).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](7, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), core["Y" /* ɵdid */](8, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["Y" /* ɵdid */](9, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["Z" /* ɵeld */](12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](13, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](16, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](17, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["Home"])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["Z" /* ɵeld */](22, 0, null, null, 18, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](23, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](25, 0, null, 1, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Ionic Menu Starter"])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["Z" /* ɵeld */](28, 0, null, 1, 4, "p", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    If you get lost, the "])), (_l()(), core["Z" /* ɵeld */](30, 0, null, null, 1, "a", [["href", "http://ionicframework.com/docs/v2"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["docs"])), (_l()(), core["_18" /* ɵted */](-1, null, [" will show you the way.\n  "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["Z" /* ɵeld */](34, 0, null, 1, 5, "button", [["ion-button", ""], ["menuToggle", ""], ["secondary", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 36).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](35, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), core["Y" /* ɵdid */](36, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["Y" /* ɵdid */](37, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, 0, ["Toggle Menu"])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var currVal_3 = ""; _ck(_v, 8, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 13, 0, currVal_5); var currVal_9 = ""; _ck(_v, 36, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = core["_11" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_11" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_11" /* ɵnov */](_v, 8).isHidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = core["_11" /* ɵnov */](_v, 13)._hidden; _ck(_v, 12, 0, currVal_4); var currVal_6 = core["_11" /* ɵnov */](_v, 23).statusbarPadding; var currVal_7 = core["_11" /* ɵnov */](_v, 23)._hasRefresher; _ck(_v, 22, 0, currVal_6, currVal_7); var currVal_8 = core["_11" /* ɵnov */](_v, 36).isHidden; _ck(_v, 34, 0, currVal_8); });
}
function View_HomePage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-home", [], null, null, null, View_HomePage_0, RenderType_HomePage)), core["Y" /* ɵdid */](1, 49152, null, 0, HomePage, [nav_controller["a" /* NavController */]], null, null)], null, null); }
var HomePageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-home", HomePage, View_HomePage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(14);

// CONCATENATED MODULE: ./src/pages/list/list.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_icon_icon,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,_angular_common,_list,ionic_angular_navigation_nav_params PURE_IMPORTS_END */
































var styles_ListPage = [];
var RenderType_ListPage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_ListPage, data: {} });

function View_ListPage_1(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 12, "button", [["class", "item item-block"], ["ion-item", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.itemTapped($event, _v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 4, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](8, 147456, [[4, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](9, 2, ["\n      ", "\n      "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 4, 1, "div", [["class", "item-note"], ["item-end", ""]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](11, null, ["\n        ", "\n      "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.icon; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_11" /* ɵnov */](_v, 8)._hidden; _ck(_v, 7, 0, currVal_0); var currVal_2 = _v.context.$implicit.title; _ck(_v, 9, 0, currVal_2); var currVal_3 = _v.context.$implicit.note; _ck(_v, 11, 0, currVal_3); });
}
function View_ListPage_2(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, "div", [["padding", ""]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    You navigated here from "])), (_l()(), core["Z" /* ɵeld */](2, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](3, null, ["", ""])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selectedItem.title; _ck(_v, 3, 0, currVal_0); }); }
function View_ListPage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 8).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](7, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), core["Y" /* ɵdid */](8, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["Y" /* ɵdid */](9, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["Z" /* ɵeld */](12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](13, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](16, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](17, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["List"])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["Z" /* ɵeld */](22, 0, null, null, 12, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](23, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](25, 0, null, 1, 5, "ion-list", [], null, null, null, null, null)), core["Y" /* ɵdid */](26, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_ListPage_1)), core["Y" /* ɵdid */](29, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_ListPage_2)), core["Y" /* ɵdid */](33, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = ""; _ck(_v, 8, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 13, 0, currVal_5); var currVal_8 = _co.items; _ck(_v, 29, 0, currVal_8); var currVal_9 = _co.selectedItem; _ck(_v, 33, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = core["_11" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_11" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_11" /* ɵnov */](_v, 8).isHidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = core["_11" /* ɵnov */](_v, 13)._hidden; _ck(_v, 12, 0, currVal_4); var currVal_6 = core["_11" /* ɵnov */](_v, 23).statusbarPadding; var currVal_7 = core["_11" /* ɵnov */](_v, 23)._hasRefresher; _ck(_v, 22, 0, currVal_6, currVal_7); });
}
function View_ListPage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-list", [], null, null, null, View_ListPage_0, RenderType_ListPage)), core["Y" /* ɵdid */](1, 49152, null, 0, ListPage, [nav_controller["a" /* NavController */], nav_params["a" /* NavParams */]], null, null)], null, null); }
var ListPageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-list", ListPage, View_ListPage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(55);

// CONCATENATED MODULE: ./src/pages/login/login.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_components_app_app,ionic_angular_platform_keyboard,ionic_angular_navigation_nav_controller,_angular_forms,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_label_label,_.._.._node_modules_ionic_angular_components_input_input.ngfactory,ionic_angular_components_input_input,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,_login PURE_IMPORTS_END */

























var styles_LoginPage = [];
var RenderType_LoginPage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_LoginPage, data: {} });

function View_LoginPage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 2, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](4, 0, null, null, 65, "ion-content", [["id", "page5"], ["padding", ""], ["style", "background-color:#A63EB8;"]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](5, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 1, 0, "img", [["src", "assets/imgs/Caroner_logo.png"], ["style", "display:block;width:10;height:10;margin-left:auto;margin-right:auto;"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["Z" /* ɵeld */](9, 0, null, 1, 0, "img", [["src", "assets/img/6PiCGkohTyKSa3Pb4hlC_Logo1.png"], ["style", "display:block;width:10;height:10;margin-left:auto;margin-right:auto;"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["Z" /* ɵeld */](11, 0, null, 1, 0, "br", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](13, 0, null, 1, 51, "form", [["id", "login-form1"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            if (("submit" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 15).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (core["_11" /* ɵnov */](_v, 15).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), core["Y" /* ɵdid */](14, 16384, null, 0, esm5_forms["n" /* ɵbf */], [], null, null), core["Y" /* ɵdid */](15, 4210688, null, 0, esm5_forms["j" /* NgForm */], [[8, null], [8, null]], null, null), core["_14" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["j" /* NgForm */]]), core["Y" /* ɵdid */](17, 16384, null, 0, esm5_forms["i" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](19, 0, null, null, 38, "ion-list", [["id", "login-list1"]], null, null, null, null, null)), core["Y" /* ɵdid */](20, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](22, 0, null, null, 16, "ion-item", [["class", "forms item item-block"], ["id", "login-input1"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](23, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 3, { _icons: 1 }), core["Y" /* ɵdid */](27, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["Z" /* ɵeld */](29, 0, null, 1, 5, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](30, 16384, [[1, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["Z" /* ɵeld */](32, 0, null, null, 1, "span", [["color", "#fff"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Email"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["Z" /* ɵeld */](36, 0, null, 3, 1, "ion-input", [["placeholder", "Seu email"], ["type", "email"], ["value", "aline@caroner.com.br"]], null, null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["Y" /* ɵdid */](37, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform_platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["g" /* NgControl */]], dom_controller["a" /* DomController */]], { value: [0, "value"], type: [1, "type"], placeholder: [2, "placeholder"] }, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](40, 0, null, null, 16, "ion-item", [["class", "forms item item-block"], ["id", "login-input2"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](41, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 6, { _icons: 1 }), core["Y" /* ɵdid */](45, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["Z" /* ɵeld */](47, 0, null, 1, 5, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](48, 16384, [[4, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["Z" /* ɵeld */](50, 0, null, null, 1, "span", [["color", "#fff"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Senha"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["Z" /* ɵeld */](54, 0, null, 3, 1, "ion-input", [["placeholder", "Sua senha"], ["type", "password"], ["value", "teste"]], null, null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["Y" /* ɵdid */](55, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform_platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["g" /* NgControl */]], dom_controller["a" /* DomController */]], { value: [0, "value"], type: [1, "type"], placeholder: [2, "placeholder"] }, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](59, 0, null, null, 0, "div", [["class", "spacer"], ["id", "login-spacer1"], ["style", "height:40px;"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](61, 0, null, null, 2, "button", [["block", ""], ["color", "stable"], ["id", "login-button1"], ["ion-button", ""]], null, [[null, "tap"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("tap" === en)) {
                var pd_0 = (_co.querVirComigoPagePush() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](62, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { color: [0, "color"], block: [1, "block"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      Entrar\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](66, 0, null, 1, 2, "button", [["block", ""], ["clear", ""], ["color", "light"], ["href-inappbrowser", "/signup"], ["id", "login-button2"], ["ion-button", ""]], null, null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](67, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"], block: [2, "block"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n    Ou criar nova conta\n  "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var currVal_9 = "aline@caroner.com.br"; var currVal_10 = "email"; var currVal_11 = "Seu email"; _ck(_v, 37, 0, currVal_9, currVal_10, currVal_11); var currVal_12 = "teste"; var currVal_13 = "password"; var currVal_14 = "Sua senha"; _ck(_v, 55, 0, currVal_12, currVal_13, currVal_14); var currVal_15 = "stable"; var currVal_16 = ""; _ck(_v, 62, 0, currVal_15, currVal_16); var currVal_17 = "light"; var currVal_18 = ""; var currVal_19 = ""; _ck(_v, 67, 0, currVal_17, currVal_18, currVal_19); }, function (_ck, _v) { var currVal_0 = core["_11" /* ɵnov */](_v, 5).statusbarPadding; var currVal_1 = core["_11" /* ɵnov */](_v, 5)._hasRefresher; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_11" /* ɵnov */](_v, 17).ngClassUntouched; var currVal_3 = core["_11" /* ɵnov */](_v, 17).ngClassTouched; var currVal_4 = core["_11" /* ɵnov */](_v, 17).ngClassPristine; var currVal_5 = core["_11" /* ɵnov */](_v, 17).ngClassDirty; var currVal_6 = core["_11" /* ɵnov */](_v, 17).ngClassValid; var currVal_7 = core["_11" /* ɵnov */](_v, 17).ngClassInvalid; var currVal_8 = core["_11" /* ɵnov */](_v, 17).ngClassPending; _ck(_v, 13, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); });
}
function View_LoginPage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-login", [], null, null, null, View_LoginPage_0, RenderType_LoginPage)), core["Y" /* ɵdid */](1, 49152, null, 0, login_LoginPage, [nav_controller["a" /* NavController */]], null, null)], null, null); }
var LoginPageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-login", login_LoginPage, View_LoginPage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/checkbox/checkbox.ngfactory.js
var checkbox_ngfactory = __webpack_require__(194);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/checkbox/checkbox.js
var checkbox_checkbox = __webpack_require__(62);

// CONCATENATED MODULE: ./src/pages/autoriza-o/autoriza-o.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,_angular_forms,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_label_label,_.._.._node_modules_ionic_angular_components_checkbox_checkbox.ngfactory,ionic_angular_components_checkbox_checkbox,_autoriza_o PURE_IMPORTS_END */


























var styles_AutorizaOPage = [];
var RenderType_AutorizaOPage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_AutorizaOPage, data: {} });

function View_AutorizaOPage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](7, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      Autoriza\u00E7\u00E3o\n    "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](12, 0, null, null, 44, "ion-content", [["id", "page6"], ["padding", ""], ["style", "background-color:#A63EB8;"]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](13, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](15, 0, null, 1, 32, "form", [["id", "autorizaO-form2"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            if (("submit" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 17).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (core["_11" /* ɵnov */](_v, 17).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), core["Y" /* ɵdid */](16, 16384, null, 0, esm5_forms["n" /* ɵbf */], [], null, null), core["Y" /* ɵdid */](17, 4210688, null, 0, esm5_forms["j" /* NgForm */], [[8, null], [8, null]], null, null), core["_14" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["j" /* NgForm */]]), core["Y" /* ɵdid */](19, 16384, null, 0, esm5_forms["i" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](21, 0, null, null, 0, "img", [["src", "assets/img/QVVmCMZqTVunDFT73ZKl_Girl1.PNG"], ["style", "display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](23, 0, null, null, 7, "div", [["class", "show-list-numbers-and-dots"], ["id", "autorizaO-markdown1"], ["style", "text-align:center;"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](25, 0, null, null, 4, "p", [["style", "color:#fff!important;"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        Voc\u00EA autoriza acesso \u00E0 localiza\u00E7\u00E3o para o\n        "])), (_l()(), core["Z" /* ɵeld */](27, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          Caroner\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        melhorar meu percurso?\n      "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](32, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["id", "autorizaO-checkbox1"], ["name", "Check_Auth"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](33, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 3, { _icons: 1 }), core["Y" /* ɵdid */](37, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](39, 0, null, 1, 2, "ion-label", [["style", "color:#000!important;"]], null, null, null, null, null)), core["Y" /* ɵdid */](40, 16384, [[1, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        Autorizo!\n      "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](43, 0, null, 0, 2, "ion-checkbox", [], [[2, "checkbox-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 45)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("click" === en)) {
                var pd_1 = (_co.pushLogin() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, checkbox_ngfactory["b" /* View_Checkbox_0 */], checkbox_ngfactory["a" /* RenderType_Checkbox */])), core["_14" /* ɵprd */](5120, null, esm5_forms["f" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [checkbox_checkbox["a" /* Checkbox */]]), core["Y" /* ɵdid */](45, 1228800, null, 0, checkbox_checkbox["a" /* Checkbox */], [config["a" /* Config */], util_form["a" /* Form */], [2, item["a" /* Item */]], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](49, 0, null, 1, 0, "div", [["class", "spacer"], ["id", "autorizaO-spacer2"], ["style", "height:30px;"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](51, 0, null, 1, 4, "div", [["class", "show-list-numbers-and-dots"], ["id", "autorizaO-markdown8"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](53, 0, null, null, 1, "p", [["style", "color:#FFFFFF;font-size:13px;"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      De acordo a lei Geral de Prote\u00E7\u00E3o de Dados Pessoais\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"]))], null, function (_ck, _v) { var currVal_0 = core["_11" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_11" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_11" /* ɵnov */](_v, 13).statusbarPadding; var currVal_3 = core["_11" /* ɵnov */](_v, 13)._hasRefresher; _ck(_v, 12, 0, currVal_2, currVal_3); var currVal_4 = core["_11" /* ɵnov */](_v, 19).ngClassUntouched; var currVal_5 = core["_11" /* ɵnov */](_v, 19).ngClassTouched; var currVal_6 = core["_11" /* ɵnov */](_v, 19).ngClassPristine; var currVal_7 = core["_11" /* ɵnov */](_v, 19).ngClassDirty; var currVal_8 = core["_11" /* ɵnov */](_v, 19).ngClassValid; var currVal_9 = core["_11" /* ɵnov */](_v, 19).ngClassInvalid; var currVal_10 = core["_11" /* ɵnov */](_v, 19).ngClassPending; _ck(_v, 15, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_11 = core["_11" /* ɵnov */](_v, 45)._disabled; _ck(_v, 43, 0, currVal_11); });
}
function View_AutorizaOPage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-autoriza-o", [], null, null, null, View_AutorizaOPage_0, RenderType_AutorizaOPage)), core["Y" /* ɵdid */](1, 49152, null, 0, autoriza_o_AutorizaOPage, [nav_controller["a" /* NavController */]], null, null)], null, null); }
var AutorizaOPageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-autoriza-o", autoriza_o_AutorizaOPage, View_AutorizaOPage_Host_0, {}, {}, []);





// CONCATENATED MODULE: ./src/pages/camera-tab-default-page/camera-tab-default-page.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,ionic_angular_components_icon_icon,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,_camera_tab_default_page PURE_IMPORTS_END */























var styles_CameraTabDefaultPagePage = [];
var RenderType_CameraTabDefaultPagePage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_CameraTabDefaultPagePage, data: {} });

function View_CameraTabDefaultPagePage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 8).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](7, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), core["Y" /* ɵdid */](8, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["Y" /* ɵdid */](9, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["Z" /* ɵeld */](12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](13, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](16, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](17, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      Camera Tab Default Page\n    "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](22, 0, null, null, 1, "ion-content", [["id", "page2"], ["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](23, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null)], function (_ck, _v) { var currVal_3 = ""; _ck(_v, 8, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 13, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = core["_11" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_11" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_11" /* ɵnov */](_v, 8).isHidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = core["_11" /* ɵnov */](_v, 13)._hidden; _ck(_v, 12, 0, currVal_4); var currVal_6 = core["_11" /* ɵnov */](_v, 23).statusbarPadding; var currVal_7 = core["_11" /* ɵnov */](_v, 23)._hasRefresher; _ck(_v, 22, 0, currVal_6, currVal_7); });
}
function View_CameraTabDefaultPagePage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-camera-tab-default-page", [], null, null, null, View_CameraTabDefaultPagePage_0, RenderType_CameraTabDefaultPagePage)), core["Y" /* ɵdid */](1, 49152, null, 0, CameraTabDefaultPagePage, [nav_controller["a" /* NavController */]], null, null)], null, null); }
var CameraTabDefaultPagePageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-camera-tab-default-page", CameraTabDefaultPagePage, View_CameraTabDefaultPagePage_Host_0, {}, {}, []);





// CONCATENATED MODULE: ./src/pages/cart-tab-default-page/cart-tab-default-page.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,ionic_angular_components_icon_icon,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,_cart_tab_default_page PURE_IMPORTS_END */























var styles_CartTabDefaultPagePage = [];
var RenderType_CartTabDefaultPagePage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_CartTabDefaultPagePage, data: {} });

function View_CartTabDefaultPagePage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 8).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](7, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), core["Y" /* ɵdid */](8, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["Y" /* ɵdid */](9, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["Z" /* ɵeld */](12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](13, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](16, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](17, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      Cart Tab Default Page\n    "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](22, 0, null, null, 1, "ion-content", [["id", "page3"], ["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](23, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null)], function (_ck, _v) { var currVal_3 = ""; _ck(_v, 8, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 13, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = core["_11" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_11" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_11" /* ɵnov */](_v, 8).isHidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = core["_11" /* ɵnov */](_v, 13)._hidden; _ck(_v, 12, 0, currVal_4); var currVal_6 = core["_11" /* ɵnov */](_v, 23).statusbarPadding; var currVal_7 = core["_11" /* ɵnov */](_v, 23)._hasRefresher; _ck(_v, 22, 0, currVal_6, currVal_7); });
}
function View_CartTabDefaultPagePage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-cart-tab-default-page", [], null, null, null, View_CartTabDefaultPagePage_0, RenderType_CartTabDefaultPagePage)), core["Y" /* ɵdid */](1, 49152, null, 0, CartTabDefaultPagePage, [nav_controller["a" /* NavController */]], null, null)], null, null); }
var CartTabDefaultPagePageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-cart-tab-default-page", CartTabDefaultPagePage, View_CartTabDefaultPagePage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/grid.js
var grid = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/row.js
var row = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/col.js
var col = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.ngfactory.js
var toggle_ngfactory = __webpack_require__(242);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.js + 1 modules
var toggle = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(34);

// CONCATENATED MODULE: ./src/pages/quer-vir-comigo/quer-vir-comigo.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,ionic_angular_components_icon_icon,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,_angular_forms,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_label_label,_.._.._node_modules_ionic_angular_components_input_input.ngfactory,ionic_angular_components_input_input,ionic_angular_components_grid_grid,ionic_angular_components_grid_row,ionic_angular_components_grid_col,_.._.._node_modules_ionic_angular_components_toggle_toggle.ngfactory,ionic_angular_components_toggle_toggle,ionic_angular_tap_click_haptic,ionic_angular_gestures_gesture_controller,_quer_vir_comigo,_.._providers_requests_requests,_ionic_native_geolocation_index PURE_IMPORTS_END */









































var styles_QuerVirComigoPage = [];
var RenderType_QuerVirComigoPage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_QuerVirComigoPage, data: {} });

function View_QuerVirComigoPage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 8).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](7, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), core["Y" /* ɵdid */](8, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["Y" /* ɵdid */](9, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["Z" /* ɵeld */](12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](13, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](16, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](17, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n\n    "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](22, 0, null, null, 118, "ion-content", [["id", "page7"], ["padding", ""], ["style", "background-color:#A63EB8;"]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](23, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](25, 0, null, 1, 114, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            if (("submit" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 27).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (core["_11" /* ɵnov */](_v, 27).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), core["Y" /* ɵdid */](26, 16384, null, 0, esm5_forms["n" /* ɵbf */], [], null, null), core["Y" /* ɵdid */](27, 4210688, null, 0, esm5_forms["j" /* NgForm */], [[8, null], [8, null]], null, null), core["_14" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["j" /* NgForm */]]), core["Y" /* ɵdid */](29, 16384, null, 0, esm5_forms["i" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](31, 0, null, null, 16, "ion-item", [["class", "forms item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](32, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 4, { _icons: 1 }), core["Y" /* ɵdid */](36, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](38, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](39, 16384, [[2, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["Origem:"])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](42, 0, null, 3, 4, "ion-input", [["name", "title"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.origin = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["Y" /* ɵdid */](43, 671744, null, 0, esm5_forms["k" /* NgModel */], [[2, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_14" /* ɵprd */](2048, null, esm5_forms["g" /* NgControl */], null, [esm5_forms["k" /* NgModel */]]), core["Y" /* ɵdid */](45, 16384, null, 0, esm5_forms["h" /* NgControlStatus */], [esm5_forms["g" /* NgControl */]], null, null), core["Y" /* ɵdid */](46, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform_platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["g" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"] }, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](49, 0, null, null, 13, "ion-item", [["class", "forms item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](50, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 7, { _icons: 1 }), core["Y" /* ɵdid */](54, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](56, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](57, 16384, [[5, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["Destino:"])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](60, 0, null, 3, 1, "ion-input", [["name", "title"], ["type", "text"], ["value", "UNIFESP"]], null, null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["Y" /* ɵdid */](61, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform_platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["g" /* NgControl */]], dom_controller["a" /* DomController */]], { value: [0, "value"], type: [1, "type"] }, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](64, 0, null, null, 70, "ion-grid", [["class", "grid"]], null, null, null, null, null)), core["Y" /* ɵdid */](65, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](67, 0, null, null, 42, "ion-row", [["class", "row"]], null, null, null, null, null)), core["Y" /* ɵdid */](68, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](70, 0, null, null, 18, "ion-col", [["class", "col"]], null, null, null, null, null)), core["Y" /* ɵdid */](71, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["Z" /* ɵeld */](73, 0, null, null, 14, "ion-item", [["class", "forms item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](74, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 8, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 9, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 10, { _icons: 1 }), core["Y" /* ɵdid */](78, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["Z" /* ɵeld */](80, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](81, 16384, [[8, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["Uber"])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["Z" /* ɵeld */](84, 0, null, 4, 2, "ion-toggle", [], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null]], [[null, "keyup"]], function (_v, en, $event) {
            var ad = true;
            if (("keyup" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 86)._keyup($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_14" /* ɵprd */](5120, null, esm5_forms["f" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["Y" /* ɵdid */](86, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config["a" /* Config */], platform_platform["a" /* Platform */], core["j" /* ElementRef */], core["z" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["u" /* NgZone */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](90, 0, null, null, 18, "ion-col", [["class", "col"]], null, null, null, null, null)), core["Y" /* ɵdid */](91, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["Z" /* ɵeld */](93, 0, null, null, 14, "ion-item", [["class", "forms item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](94, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 11, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 12, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 13, { _icons: 1 }), core["Y" /* ɵdid */](98, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["Z" /* ɵeld */](100, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](101, 16384, [[11, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["Carona"])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["Z" /* ɵeld */](104, 0, null, 4, 2, "ion-toggle", [["disabled", "true"]], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null]], [[null, "keyup"]], function (_v, en, $event) {
            var ad = true;
            if (("keyup" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 106)._keyup($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_14" /* ɵprd */](5120, null, esm5_forms["f" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["Y" /* ɵdid */](106, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config["a" /* Config */], platform_platform["a" /* Platform */], core["j" /* ElementRef */], core["z" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["u" /* NgZone */]], { disabled: [0, "disabled"] }, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](111, 0, null, null, 22, "ion-row", [["class", "row"]], null, null, null, null, null)), core["Y" /* ɵdid */](112, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](114, 0, null, null, 18, "ion-col", [["class", "col"]], null, null, null, null, null)), core["Y" /* ɵdid */](115, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["Z" /* ɵeld */](117, 0, null, null, 14, "ion-item", [["class", "forms item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](118, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 14, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 15, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 16, { _icons: 1 }), core["Y" /* ɵdid */](122, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["Z" /* ɵeld */](124, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](125, 16384, [[14, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["Transporte P\u00FAblico"])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["Z" /* ɵeld */](128, 0, null, 4, 2, "ion-toggle", [], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null]], [[null, "keyup"]], function (_v, en, $event) {
            var ad = true;
            if (("keyup" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 130)._keyup($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_14" /* ɵprd */](5120, null, esm5_forms["f" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["Y" /* ɵdid */](130, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config["a" /* Config */], platform_platform["a" /* Platform */], core["j" /* ElementRef */], core["z" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["u" /* NgZone */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](136, 0, null, null, 2, "button", [["block", ""], ["ion-button", ""], ["type", "submit"]], null, [[null, "tap"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("tap" === en)) {
                var pd_0 = (_co.QuemVaiComigoPagePush() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](137, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["Buscar por pessoas"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = ""; _ck(_v, 8, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 13, 0, currVal_5); var currVal_22 = "title"; var currVal_23 = _co.origin; _ck(_v, 43, 0, currVal_22, currVal_23); var currVal_24 = "text"; _ck(_v, 46, 0, currVal_24); var currVal_25 = "UNIFESP"; var currVal_26 = "text"; _ck(_v, 61, 0, currVal_25, currVal_26); var currVal_33 = "true"; _ck(_v, 106, 0, currVal_33); var currVal_37 = ""; _ck(_v, 137, 0, currVal_37); }, function (_ck, _v) { var currVal_0 = core["_11" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_11" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_11" /* ɵnov */](_v, 8).isHidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = core["_11" /* ɵnov */](_v, 13)._hidden; _ck(_v, 12, 0, currVal_4); var currVal_6 = core["_11" /* ɵnov */](_v, 23).statusbarPadding; var currVal_7 = core["_11" /* ɵnov */](_v, 23)._hasRefresher; _ck(_v, 22, 0, currVal_6, currVal_7); var currVal_8 = core["_11" /* ɵnov */](_v, 29).ngClassUntouched; var currVal_9 = core["_11" /* ɵnov */](_v, 29).ngClassTouched; var currVal_10 = core["_11" /* ɵnov */](_v, 29).ngClassPristine; var currVal_11 = core["_11" /* ɵnov */](_v, 29).ngClassDirty; var currVal_12 = core["_11" /* ɵnov */](_v, 29).ngClassValid; var currVal_13 = core["_11" /* ɵnov */](_v, 29).ngClassInvalid; var currVal_14 = core["_11" /* ɵnov */](_v, 29).ngClassPending; _ck(_v, 25, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = core["_11" /* ɵnov */](_v, 45).ngClassUntouched; var currVal_16 = core["_11" /* ɵnov */](_v, 45).ngClassTouched; var currVal_17 = core["_11" /* ɵnov */](_v, 45).ngClassPristine; var currVal_18 = core["_11" /* ɵnov */](_v, 45).ngClassDirty; var currVal_19 = core["_11" /* ɵnov */](_v, 45).ngClassValid; var currVal_20 = core["_11" /* ɵnov */](_v, 45).ngClassInvalid; var currVal_21 = core["_11" /* ɵnov */](_v, 45).ngClassPending; _ck(_v, 42, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_27 = core["_11" /* ɵnov */](_v, 86)._disabled; var currVal_28 = core["_11" /* ɵnov */](_v, 86)._value; var currVal_29 = core["_11" /* ɵnov */](_v, 86)._activated; _ck(_v, 84, 0, currVal_27, currVal_28, currVal_29); var currVal_30 = core["_11" /* ɵnov */](_v, 106)._disabled; var currVal_31 = core["_11" /* ɵnov */](_v, 106)._value; var currVal_32 = core["_11" /* ɵnov */](_v, 106)._activated; _ck(_v, 104, 0, currVal_30, currVal_31, currVal_32); var currVal_34 = core["_11" /* ɵnov */](_v, 130)._disabled; var currVal_35 = core["_11" /* ɵnov */](_v, 130)._value; var currVal_36 = core["_11" /* ɵnov */](_v, 130)._activated; _ck(_v, 128, 0, currVal_34, currVal_35, currVal_36); });
}
function View_QuerVirComigoPage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-quer-vir-comigo", [], null, null, null, View_QuerVirComigoPage_0, RenderType_QuerVirComigoPage)), core["Y" /* ɵdid */](1, 49152, null, 0, quer_vir_comigo_QuerVirComigoPage, [nav_controller["a" /* NavController */], RequestsProvider, _ionic_native_geolocation["a" /* Geolocation */]], null, null)], null, null); }
var QuerVirComigoPageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-quer-vir-comigo", quer_vir_comigo_QuerVirComigoPage, View_QuerVirComigoPage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/avatar/avatar.js
var avatar = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-options.js
var item_options = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-controller.js
var loading_controller = __webpack_require__(65);

// CONCATENATED MODULE: ./src/pages/quem-vai-comigo/quem-vai-comigo.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_list_list,ionic_angular_config_config,ionic_angular_platform_platform,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_avatar_avatar,ionic_angular_components_label_label,_.._.._node_modules_ionic_angular_components_checkbox_checkbox.ngfactory,_angular_forms,ionic_angular_components_checkbox_checkbox,ionic_angular_components_item_item_options,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,ionic_angular_components_menu_menu_toggle,ionic_angular_components_app_menu_controller,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,ionic_angular_components_icon_icon,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_keyboard,_angular_common,_quem_vai_comigo,ionic_angular_components_loading_loading_controller PURE_IMPORTS_END */






































var styles_QuemVaiComigoPage = [];
var RenderType_QuemVaiComigoPage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_QuemVaiComigoPage, data: {} });

function View_QuemVaiComigoPage_1(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 56, "ion-list", [["id", "quemVaiComigo-list6"]], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 20, "ion-item", [["class", "item item-block"], ["color", "positive"], ["id", "quemVaiComigo-list-item10"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_16" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 4, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 0, 4, "ion-avatar", [["item-left", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](11, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](13, 0, null, null, 0, "img", [["src", "assets/img/FLiM92u3TtuthNnQ944z_girl3.PNG"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](16, 0, null, 1, 2, "ion-label", [["color", "black"]], null, null, null, null, null)), core["Y" /* ɵdid */](17, 16384, [[2, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], { color: [0, "color"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        Aline Br\u00E1s\n      "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](20, 0, null, 0, 2, "ion-checkbox", [], [[2, "checkbox-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 22)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, checkbox_ngfactory["b" /* View_Checkbox_0 */], checkbox_ngfactory["a" /* RenderType_Checkbox */])), core["_14" /* ɵprd */](5120, null, esm5_forms["f" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [checkbox_checkbox["a" /* Checkbox */]]), core["Y" /* ɵdid */](22, 1228800, null, 0, checkbox_checkbox["a" /* Checkbox */], [config["a" /* Config */], util_form["a" /* Form */], [2, item["a" /* Item */]], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](25, 0, null, null, 20, "ion-item", [["class", "item item-block"], ["color", "positive"], ["id", "quemVaiComigo-list-item9"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](26, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_16" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 7, { _icons: 1 }), core["Y" /* ɵdid */](30, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](32, 0, null, 0, 4, "ion-avatar", [["item-left", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](33, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](35, 0, null, null, 0, "img", [["src", "assets/img/Girl6.PNG"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](38, 0, null, 1, 2, "ion-label", [["color", "black"]], null, null, null, null, null)), core["Y" /* ɵdid */](39, 16384, [[5, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], { color: [0, "color"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        Marina Santos\n      "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](42, 0, null, 0, 2, "ion-checkbox", [], [[2, "checkbox-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 44)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, checkbox_ngfactory["b" /* View_Checkbox_0 */], checkbox_ngfactory["a" /* RenderType_Checkbox */])), core["_14" /* ɵprd */](5120, null, esm5_forms["f" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [checkbox_checkbox["a" /* Checkbox */]]), core["Y" /* ɵdid */](44, 1228800, null, 0, checkbox_checkbox["a" /* Checkbox */], [config["a" /* Config */], util_form["a" /* Form */], [2, item["a" /* Item */]], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](47, 0, null, null, 8, "ion-item-options", [["side", "left"]], null, null, null, null, null)), core["Y" /* ɵdid */](48, 16384, null, 0, item_options["a" /* ItemOptions */], [core["j" /* ElementRef */], platform_platform["a" /* Platform */]], { side: [0, "side"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](50, 0, null, null, 1, "button", [["color", "positive"], ["ion-button", ""]], null, null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](51, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](53, 0, null, null, 1, "button", [["color", "positive"], ["ion-button", ""]], null, null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](54, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var currVal_0 = "positive"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "black"; _ck(_v, 17, 0, currVal_1); var currVal_3 = "positive"; _ck(_v, 26, 0, currVal_3); var currVal_4 = "black"; _ck(_v, 39, 0, currVal_4); var currVal_6 = "left"; _ck(_v, 48, 0, currVal_6); var currVal_7 = "positive"; _ck(_v, 51, 0, currVal_7); var currVal_8 = "positive"; _ck(_v, 54, 0, currVal_8); }, function (_ck, _v) { var currVal_2 = core["_11" /* ɵnov */](_v, 22)._disabled; _ck(_v, 20, 0, currVal_2); var currVal_5 = core["_11" /* ɵnov */](_v, 44)._disabled; _ck(_v, 42, 0, currVal_5); });
}
function View_QuemVaiComigoPage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 8).toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](7, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), core["Y" /* ɵdid */](8, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["Y" /* ɵdid */](9, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["Z" /* ɵeld */](12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](13, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](16, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](17, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      Quem vai comigo?\n    "])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](22, 0, null, null, 12, "ion-content", [["id", "page8"], ["padding", ""], ["style", "background-color:#A63EB8;"]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](23, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](26, 0, null, 1, 0, "img", [["src", "assets/img/Map_DigitalHouse.png"], ["style", "display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_QuemVaiComigoPage_1)), core["Y" /* ɵdid */](29, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](31, 0, null, 1, 2, "button", [["block", ""], ["color", "stable"], ["id", "login-button1"], ["ion-button", ""]], null, [[null, "tap"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("tap" === en)) {
                var pd_0 = (_co.ChatPagePush() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](32, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { color: [0, "color"], block: [1, "block"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n      Convidar pessoas selecionadas\n    "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = ""; _ck(_v, 8, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 13, 0, currVal_5); var currVal_8 = _co.mockApi; _ck(_v, 29, 0, currVal_8); var currVal_9 = "stable"; var currVal_10 = ""; _ck(_v, 32, 0, currVal_9, currVal_10); }, function (_ck, _v) { var currVal_0 = core["_11" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_11" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_11" /* ɵnov */](_v, 8).isHidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = core["_11" /* ɵnov */](_v, 13)._hidden; _ck(_v, 12, 0, currVal_4); var currVal_6 = core["_11" /* ɵnov */](_v, 23).statusbarPadding; var currVal_7 = core["_11" /* ɵnov */](_v, 23)._hasRefresher; _ck(_v, 22, 0, currVal_6, currVal_7); });
}
function View_QuemVaiComigoPage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-quem-vai-comigo", [], null, null, null, View_QuemVaiComigoPage_0, RenderType_QuemVaiComigoPage)), core["Y" /* ɵdid */](1, 49152, null, 0, quem_vai_comigo_QuemVaiComigoPage, [nav_controller["a" /* NavController */], loading_controller["a" /* LoadingController */]], null, null)], null, null); }
var QuemVaiComigoPageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-quem-vai-comigo", quem_vai_comigo_QuemVaiComigoPage, View_QuemVaiComigoPage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card.js
var card = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/segment/segment.js
var segment = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/segment/segment-button.ngfactory.js
var segment_button_ngfactory = __webpack_require__(243);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/segment/segment-button.js
var segment_button = __webpack_require__(68);

// CONCATENATED MODULE: ./src/pages/chat/chat.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_card_card,ionic_angular_config_config,_.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_avatar_avatar,_angular_common,ionic_angular_components_grid_grid,ionic_angular_components_grid_row,ionic_angular_components_grid_col,_.._.._node_modules_ionic_angular_components_input_input.ngfactory,_angular_forms,ionic_angular_components_input_input,ionic_angular_platform_platform,ionic_angular_components_app_app,ionic_angular_components_content_content,ionic_angular_platform_dom_controller,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_icon_icon,ionic_angular_components_label_label,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,ionic_angular_components_item_item_options,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_navigation_nav_controller,_.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_platform_keyboard,ionic_angular_components_segment_segment,_.._.._node_modules_ionic_angular_components_segment_segment_button.ngfactory,ionic_angular_components_segment_segment_button,_chat,ionic_angular_navigation_nav_params,_ionic_native_launch_navigator_index,ionic_angular_components_loading_loading_controller PURE_IMPORTS_END */












































var styles_ChatPage = [];
var RenderType_ChatPage = /*@__PURE__*/ core["X" /* ɵcrt */]({ encapsulation: 2, styles: styles_ChatPage, data: {} });

function View_ChatPage_2(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 22, "ion-card", [["class", "right"]], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 18, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 11, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 12, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 13, { _icons: 1 }), core["Y" /* ɵdid */](8, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, 0, 4, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](11, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](13, 0, null, null, 0, "img", [["src", "assets/img/Girl6.PNG"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](16, 0, null, 2, 1, "h4", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Marina Santos"])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](19, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](20, null, ["", ""])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.msg; _ck(_v, 20, 0, currVal_0); }); }
function View_ChatPage_1(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 83, "ion-card", [["id", "inputsMsgs"]], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 26, "ion-card", [["class", "left"]], null, null, null, null, null)), core["Y" /* ɵdid */](4, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, null, 22, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](7, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 4, { _icons: 1 }), core["Y" /* ɵdid */](11, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](13, 0, null, 0, 4, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](14, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](16, 0, null, null, 0, "img", [["src", "assets/img/FLiM92u3TtuthNnQ944z_girl3.PNG"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](19, 0, null, 2, 1, "h4", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Aline Br\u00E1s"])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](22, 0, null, 2, 5, "p", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Marina, j\u00E1 estou no"])), (_l()(), core["Z" /* ɵeld */](24, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, [" ponto de encontro. "])), (_l()(), core["Z" /* ɵeld */](26, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          Onde voc\u00EA est\u00E1?\n          "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](31, 0, null, null, 22, "ion-card", [["class", "right"]], null, null, null, null, null)), core["Y" /* ɵdid */](32, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](34, 0, null, null, 18, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](35, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 7, { _icons: 1 }), core["Y" /* ɵdid */](39, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](41, 0, null, 0, 4, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](42, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](44, 0, null, null, 0, "img", [["src", "assets/img/Girl6.PNG"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](47, 0, null, 2, 1, "h4", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Marina Santos"])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](50, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Aline, estou chegando."])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](55, 0, null, null, 24, "ion-card", [["class", "left"]], null, null, null, null, null)), core["Y" /* ɵdid */](56, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["Z" /* ɵeld */](58, 0, null, null, 20, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](59, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 8, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 9, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 10, { _icons: 1 }), core["Y" /* ɵdid */](63, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](65, 0, null, 0, 4, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](66, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["Z" /* ɵeld */](68, 0, null, null, 0, "img", [["src", "assets/img/FLiM92u3TtuthNnQ944z_girl3.PNG"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](71, 0, null, 2, 1, "h4", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Aline Br\u00E1s"])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["Z" /* ɵeld */](74, 0, null, 2, 3, "p", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["Ok, estou aguardando "])), (_l()(), core["Z" /* ɵeld */](76, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          para solicitar o Uber X\n          "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_ChatPage_2)), core["Y" /* ɵdid */](82, 802816, null, 0, common["h" /* NgForOf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */], core["p" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.msgs; _ck(_v, 82, 0, currVal_0); }, null); }
function View_ChatPage_3(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 35, "ion-grid", [["class", "grid"]], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 31, "ion-row", [["class", "row"]], null, null, null, null, null)), core["Y" /* ɵdid */](4, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, null, 16, "ion-col", [["class", "col"], ["col-9", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](7, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["Z" /* ɵeld */](9, 0, null, null, 12, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](10, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_16" /* ɵqud */](335544320, 14, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 15, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 16, { _icons: 1 }), core["Y" /* ɵdid */](14, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["Z" /* ɵeld */](16, 0, null, 3, 4, "ion-input", [["id", "msgsSend"], ["placeholder", "Digite a sua mensagem"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.msgInput = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["Y" /* ɵdid */](17, 671744, null, 0, esm5_forms["k" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_14" /* ɵprd */](2048, null, esm5_forms["g" /* NgControl */], null, [esm5_forms["k" /* NgModel */]]), core["Y" /* ɵdid */](19, 16384, null, 0, esm5_forms["h" /* NgControlStatus */], [esm5_forms["g" /* NgControl */]], null, null), core["Y" /* ɵdid */](20, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform_platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["g" /* NgControl */]], dom_controller["a" /* DomController */]], { placeholder: [0, "placeholder"] }, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n          "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](24, 0, null, null, 9, "ion-col", [["class", "col"]], null, null, null, null, null)), core["Y" /* ɵdid */](25, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["Z" /* ɵeld */](27, 0, null, null, 5, "button", [["block", ""], ["id", "msg-send"], ["ion-button", ""]], null, [[null, "tap"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("tap" === en)) {
                var pd_0 = (_co.sendMsg(_co.msgInput) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](28, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["Z" /* ɵeld */](30, 0, null, 0, 1, "ion-icon", [["name", "send"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](31, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n          "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.msgInput; _ck(_v, 17, 0, currVal_7); var currVal_8 = "Digite a sua mensagem"; _ck(_v, 20, 0, currVal_8); var currVal_9 = ""; _ck(_v, 28, 0, currVal_9); var currVal_11 = "send"; _ck(_v, 31, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = core["_11" /* ɵnov */](_v, 19).ngClassUntouched; var currVal_1 = core["_11" /* ɵnov */](_v, 19).ngClassTouched; var currVal_2 = core["_11" /* ɵnov */](_v, 19).ngClassPristine; var currVal_3 = core["_11" /* ɵnov */](_v, 19).ngClassDirty; var currVal_4 = core["_11" /* ɵnov */](_v, 19).ngClassValid; var currVal_5 = core["_11" /* ɵnov */](_v, 19).ngClassInvalid; var currVal_6 = core["_11" /* ɵnov */](_v, 19).ngClassPending; _ck(_v, 16, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_10 = core["_11" /* ɵnov */](_v, 31)._hidden; _ck(_v, 30, 0, currVal_10); });
}
function View_ChatPage_4(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 4, "ion-card", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 0, "img", [["src", "assets/img/Image_Radius.png"], ["style", "display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "]))], null, null); }
function View_ChatPage_6(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 19, "ion-item", [["class", "item item-block"], ["color", "positive"], ["id", "quemVaiComigo-list-item10"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_16" /* ɵqud */](335544320, 17, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 18, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 19, { _icons: 1 }), core["Y" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](7, 0, null, 0, 4, "ion-avatar", [["item-left", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](8, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](10, 0, null, null, 0, "img", [["src", "assets/img/FLiM92u3TtuthNnQ944z_girl3.PNG"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](13, 0, null, 1, 5, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](14, 16384, [[17, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        Aline Br\u00E1s\n        "])), (_l()(), core["Z" /* ɵeld */](16, 0, null, null, 1, "ion-icon", [["name", "checkmark-circle"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](17, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { var currVal_0 = "positive"; _ck(_v, 1, 0, currVal_0); var currVal_2 = "checkmark-circle"; _ck(_v, 17, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = core["_11" /* ɵnov */](_v, 17)._hidden; _ck(_v, 16, 0, currVal_1); }); }
function View_ChatPage_5(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 36, "ion-list", [["id", "quemVaiComigo-list6"]], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], platform_platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n\n\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_ChatPage_6)), core["Y" /* ɵdid */](4, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, null, 19, "ion-item", [["class", "item item-block"], ["color", "positive"], ["id", "quemVaiComigo-list-item9"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["Y" /* ɵdid */](7, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_16" /* ɵqud */](335544320, 20, { contentLabel: 0 }), core["_16" /* ɵqud */](603979776, 21, { _buttons: 1 }), core["_16" /* ɵqud */](603979776, 22, { _icons: 1 }), core["Y" /* ɵdid */](11, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](13, 0, null, 0, 4, "ion-avatar", [["item-left", ""]], null, null, null, null, null)), core["Y" /* ɵdid */](14, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["Z" /* ɵeld */](16, 0, null, null, 0, "img", [["src", "assets/img/Girl6.PNG"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["Z" /* ɵeld */](19, 0, null, 1, 5, "ion-label", [], null, null, null, null, null)), core["Y" /* ɵdid */](20, 16384, [[20, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n        Marina Santos\n        "])), (_l()(), core["Z" /* ɵeld */](22, 0, null, null, 1, "ion-icon", [["name", "checkmark-circle"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](23, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_18" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](27, 0, null, null, 8, "ion-item-options", [["side", "left"]], null, null, null, null, null)), core["Y" /* ɵdid */](28, 16384, null, 0, item_options["a" /* ItemOptions */], [core["j" /* ElementRef */], platform_platform["a" /* Platform */]], { side: [0, "side"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](30, 0, null, null, 1, "button", [["color", "positive"], ["ion-button", ""]], null, null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](31, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](33, 0, null, null, 1, "button", [["color", "positive"], ["ion-button", ""]], null, null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](34, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mockApi; _ck(_v, 4, 0, currVal_0); var currVal_1 = "positive"; _ck(_v, 7, 0, currVal_1); var currVal_3 = "checkmark-circle"; _ck(_v, 23, 0, currVal_3); var currVal_4 = "left"; _ck(_v, 28, 0, currVal_4); var currVal_5 = "positive"; _ck(_v, 31, 0, currVal_5); var currVal_6 = "positive"; _ck(_v, 34, 0, currVal_6); }, function (_ck, _v) { var currVal_2 = core["_11" /* ɵnov */](_v, 23)._hidden; _ck(_v, 22, 0, currVal_2); }); }
function View_ChatPage_0(_l) {
    return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), core["Y" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["Z" /* ɵeld */](3, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["Y" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], null, null), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["Z" /* ɵeld */](6, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["Y" /* ɵdid */](7, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["chat"])), (_l()(), core["_18" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n"])), (_l()(), core["Z" /* ɵeld */](12, 0, null, null, 48, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](13, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](15, 0, null, 1, 20, "div", [["id", "divsegment"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["Z" /* ɵeld */](17, 0, null, null, 17, "ion-segment", [["color", "secondary"]], [[2, "segment-disabled", null]], null, null, null, null)), core["Y" /* ɵdid */](18, 1196032, null, 1, segment["a" /* Segment */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */], [2, esm5_forms["g" /* NgControl */]]], { color: [0, "color"] }, null), core["_16" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](21, 0, null, null, 5, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "camera"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "ionSelect"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 22).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("ionSelect" === en)) {
                var pd_1 = (_co.chatMapa(true) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](22, 114688, [[1, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, { ionSelect: "ionSelect" }), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["Z" /* ɵeld */](24, 0, null, 0, 1, "ion-icon", [["name", "chatbubbles"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](25, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n        Chat\n      "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["Z" /* ɵeld */](28, 0, null, null, 5, "ion-segment-button", [["class", "segment-button"], ["role", "button"], ["tappable", ""], ["value", "bookmark"]], [[2, "segment-button-disabled", null], [2, "segment-activated", null], [1, "aria-pressed", 0]], [[null, "ionSelect"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_11" /* ɵnov */](_v, 29).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (("ionSelect" === en)) {
                var pd_1 = (_co.chatMapa(false) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, segment_button_ngfactory["b" /* View_SegmentButton_0 */], segment_button_ngfactory["a" /* RenderType_SegmentButton */])), core["Y" /* ɵdid */](29, 114688, [[1, 4]], 0, segment_button["a" /* SegmentButton */], [], { value: [0, "value"] }, { ionSelect: "ionSelect" }), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["Z" /* ɵeld */](31, 0, null, 0, 1, "ion-icon", [["name", "map"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["Y" /* ɵdid */](32, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n        Mapa\n      "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](37, 0, null, 1, 7, "div", [["id", "container"]], null, null, null, null, null)), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_ChatPage_1)), core["Y" /* ɵdid */](40, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["U" /* ɵand */](16777216, null, null, 1, null, View_ChatPage_3)), core["Y" /* ɵdid */](43, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_18" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_ChatPage_4)), core["Y" /* ɵdid */](47, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["U" /* ɵand */](16777216, null, 1, 1, null, View_ChatPage_5)), core["Y" /* ɵdid */](51, 16384, null, 0, common["i" /* NgIf */], [core["I" /* ViewContainerRef */], core["F" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](53, 0, null, 1, 2, "button", [["block", ""], ["color", "stable"], ["id", "login-button1"], ["ion-button", ""]], null, [[null, "tap"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("tap" === en)) {
                var pd_0 = (_co.openUber() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["Y" /* ɵdid */](54, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["j" /* ElementRef */], core["z" /* Renderer */]], { color: [0, "color"], block: [1, "block"] }, null), (_l()(), core["_18" /* ɵted */](-1, 0, ["\n    Abrir app do Uber\n\n  "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["Z" /* ɵeld */](57, 0, null, 1, 2, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["Y" /* ɵdid */](58, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["j" /* ElementRef */], core["z" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["u" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_18" /* ɵted */](-1, 1, [" "])), (_l()(), core["_18" /* ɵted */](-1, 1, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_5 = "secondary"; _ck(_v, 18, 0, currVal_5); var currVal_9 = "camera"; _ck(_v, 22, 0, currVal_9); var currVal_11 = "chatbubbles"; _ck(_v, 25, 0, currVal_11); var currVal_15 = "bookmark"; _ck(_v, 29, 0, currVal_15); var currVal_17 = "map"; _ck(_v, 32, 0, currVal_17); var currVal_18 = _co.segmentVar; _ck(_v, 40, 0, currVal_18); var currVal_19 = _co.segmentVar; _ck(_v, 43, 0, currVal_19); var currVal_20 = !_co.segmentVar; _ck(_v, 47, 0, currVal_20); var currVal_21 = _co.mockApi; _ck(_v, 51, 0, currVal_21); var currVal_22 = "stable"; var currVal_23 = ""; _ck(_v, 54, 0, currVal_22, currVal_23); }, function (_ck, _v) { var currVal_0 = core["_11" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_11" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_11" /* ɵnov */](_v, 13).statusbarPadding; var currVal_3 = core["_11" /* ɵnov */](_v, 13)._hasRefresher; _ck(_v, 12, 0, currVal_2, currVal_3); var currVal_4 = core["_11" /* ɵnov */](_v, 18)._disabled; _ck(_v, 17, 0, currVal_4); var currVal_6 = core["_11" /* ɵnov */](_v, 22)._disabled; var currVal_7 = core["_11" /* ɵnov */](_v, 22).isActive; var currVal_8 = core["_11" /* ɵnov */](_v, 22).isActive; _ck(_v, 21, 0, currVal_6, currVal_7, currVal_8); var currVal_10 = core["_11" /* ɵnov */](_v, 25)._hidden; _ck(_v, 24, 0, currVal_10); var currVal_12 = core["_11" /* ɵnov */](_v, 29)._disabled; var currVal_13 = core["_11" /* ɵnov */](_v, 29).isActive; var currVal_14 = core["_11" /* ɵnov */](_v, 29).isActive; _ck(_v, 28, 0, currVal_12, currVal_13, currVal_14); var currVal_16 = core["_11" /* ɵnov */](_v, 32)._hidden; _ck(_v, 31, 0, currVal_16); var currVal_24 = core["_11" /* ɵnov */](_v, 58).statusbarPadding; var currVal_25 = core["_11" /* ɵnov */](_v, 58)._hasRefresher; _ck(_v, 57, 0, currVal_24, currVal_25); });
}
function View_ChatPage_Host_0(_l) { return core["_19" /* ɵvid */](0, [(_l()(), core["Z" /* ɵeld */](0, 0, null, null, 1, "page-chat", [], null, null, null, View_ChatPage_0, RenderType_ChatPage)), core["Y" /* ɵdid */](1, 49152, null, 0, ChatPage, [nav_controller["a" /* NavController */], nav_params["a" /* NavParams */], launch_navigator["a" /* LaunchNavigator */], loading_controller["a" /* LoadingController */]], null, null)], null, null); }
var ChatPageNgFactory = /*@__PURE__*/ core["V" /* ɵccf */]("page-chat", ChatPage, View_ChatPage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-config.js
var gesture_config = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-controller.js
var action_sheet_controller = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-controller.js
var alert_controller = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/events.js
var events = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/url-serializer.js
var url_serializer = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-controller.js
var picker_controller = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/tap-click.js + 3 modules
var tap_click = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-controller.js
var toast_controller = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ionic-error-handler.js
var ionic_error_handler = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform-registry.js
var platform_registry = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ng-module-loader.js
var ng_module_loader = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/mode-registry.js
var mode_registry = __webpack_require__(130);

// CONCATENATED MODULE: ./src/app/app.module.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_app.module,ionic_angular_components_app_app_root,_.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_app.component.ngfactory,_pages_home_home.ngfactory,_pages_list_list.ngfactory,_pages_login_login.ngfactory,_pages_autoriza_o_autoriza_o.ngfactory,_pages_camera_tab_default_page_camera_tab_default_page.ngfactory,_pages_cart_tab_default_page_cart_tab_default_page.ngfactory,_pages_quer_vir_comigo_quer_vir_comigo.ngfactory,_pages_quem_vai_comigo_quem_vai_comigo.ngfactory,_pages_chat_chat.ngfactory,_angular_common,_angular_platform_browser,ionic_angular_gestures_gesture_config,_angular_forms,_angular_common_http,ionic_angular_components_action_sheet_action_sheet_controller,ionic_angular_components_app_app,ionic_angular_config_config,ionic_angular_components_alert_alert_controller,ionic_angular_util_events,ionic_angular_util_form,ionic_angular_tap_click_haptic,ionic_angular_platform_platform,ionic_angular_platform_keyboard,ionic_angular_platform_dom_controller,ionic_angular_components_loading_loading_controller,ionic_angular_module,ionic_angular_navigation_url_serializer,ionic_angular_navigation_deep_linker,ionic_angular_util_module_loader,ionic_angular_components_modal_modal_controller,ionic_angular_components_picker_picker_controller,ionic_angular_components_popover_popover_controller,ionic_angular_tap_click_tap_click,ionic_angular_gestures_gesture_controller,ionic_angular_components_toast_toast_controller,ionic_angular_transitions_transition_controller,_ionic_native_status_bar_index,_ionic_native_splash_screen_index,_ionic_native_launch_navigator_index,_providers_requests_requests,_ionic_native_geolocation_index,ionic_angular_util_ionic_error_handler,ionic_angular_platform_platform_registry,ionic_angular_components_app_menu_controller,ionic_angular_util_ng_module_loader,ionic_angular_config_mode_registry,_app.component PURE_IMPORTS_END */




























































var AppModuleNgFactory = /*@__PURE__*/ core["W" /* ɵcmf */](AppModule, [app_root["b" /* IonicApp */]], function (_l) { return core["_7" /* ɵmod */]([core["_8" /* ɵmpd */](512, core["i" /* ComponentFactoryResolver */], core["S" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], MyAppNgFactory, HomePageNgFactory, ListPageNgFactory, LoginPageNgFactory, AutorizaOPageNgFactory, CameraTabDefaultPagePageNgFactory, CartTabDefaultPagePageNgFactory, QuerVirComigoPageNgFactory, QuemVaiComigoPageNgFactory, ChatPageNgFactory]], [3, core["i" /* ComponentFactoryResolver */]], core["s" /* NgModuleRef */]]), core["_8" /* ɵmpd */](5120, core["r" /* LOCALE_ID */], core["_15" /* ɵq */], [[3, core["r" /* LOCALE_ID */]]]), core["_8" /* ɵmpd */](4608, common["k" /* NgLocalization */], common["j" /* NgLocaleLocalization */], [core["r" /* LOCALE_ID */], [2, common["s" /* ɵa */]]]), core["_8" /* ɵmpd */](5120, core["b" /* APP_ID */], core["_1" /* ɵi */], []), core["_8" /* ɵmpd */](5120, core["p" /* IterableDiffers */], core["_9" /* ɵn */], []), core["_8" /* ɵmpd */](5120, core["q" /* KeyValueDiffers */], core["_12" /* ɵo */], []), core["_8" /* ɵmpd */](4608, platform_browser["c" /* DomSanitizer */], platform_browser["q" /* ɵe */], [common["c" /* DOCUMENT */]]), core["_8" /* ɵmpd */](6144, core["D" /* Sanitizer */], null, [platform_browser["c" /* DomSanitizer */]]), core["_8" /* ɵmpd */](4608, platform_browser["f" /* HAMMER_GESTURE_CONFIG */], gesture_config["a" /* IonicGestureConfig */], []), core["_8" /* ɵmpd */](5120, platform_browser["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["k" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["o" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["n" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["c" /* DOCUMENT */], core["u" /* NgZone */], common["c" /* DOCUMENT */], common["c" /* DOCUMENT */], platform_browser["f" /* HAMMER_GESTURE_CONFIG */]]), core["_8" /* ɵmpd */](4608, platform_browser["e" /* EventManager */], platform_browser["e" /* EventManager */], [platform_browser["d" /* EVENT_MANAGER_PLUGINS */], core["u" /* NgZone */]]), core["_8" /* ɵmpd */](135680, platform_browser["m" /* ɵDomSharedStylesHost */], platform_browser["m" /* ɵDomSharedStylesHost */], [common["c" /* DOCUMENT */]]), core["_8" /* ɵmpd */](4608, platform_browser["l" /* ɵDomRendererFactory2 */], platform_browser["l" /* ɵDomRendererFactory2 */], [platform_browser["e" /* EventManager */], platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_8" /* ɵmpd */](6144, core["B" /* RendererFactory2 */], null, [platform_browser["l" /* ɵDomRendererFactory2 */]]), core["_8" /* ɵmpd */](6144, platform_browser["p" /* ɵSharedStylesHost */], null, [platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_8" /* ɵmpd */](4608, core["G" /* Testability */], core["G" /* Testability */], [core["u" /* NgZone */]]), core["_8" /* ɵmpd */](4608, platform_browser["h" /* Meta */], platform_browser["h" /* Meta */], [common["c" /* DOCUMENT */]]), core["_8" /* ɵmpd */](4608, platform_browser["i" /* Title */], platform_browser["i" /* Title */], [common["c" /* DOCUMENT */]]), core["_8" /* ɵmpd */](4608, esm5_forms["o" /* ɵi */], esm5_forms["o" /* ɵi */], []), core["_8" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_8" /* ɵmpd */](4608, http["h" /* HttpXsrfTokenExtractor */], http["n" /* ɵh */], [common["c" /* DOCUMENT */], core["w" /* PLATFORM_ID */], http["l" /* ɵf */]]), core["_8" /* ɵmpd */](4608, http["o" /* ɵi */], http["o" /* ɵi */], [http["h" /* HttpXsrfTokenExtractor */], http["m" /* ɵg */]]), core["_8" /* ɵmpd */](5120, http["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [http["o" /* ɵi */]]), core["_8" /* ɵmpd */](4608, http["k" /* ɵe */], http["k" /* ɵe */], []), core["_8" /* ɵmpd */](6144, http["i" /* XhrFactory */], null, [http["k" /* ɵe */]]), core["_8" /* ɵmpd */](4608, http["g" /* HttpXhrBackend */], http["g" /* HttpXhrBackend */], [http["i" /* XhrFactory */]]), core["_8" /* ɵmpd */](6144, http["b" /* HttpBackend */], null, [http["g" /* HttpXhrBackend */]]), core["_8" /* ɵmpd */](4608, http["f" /* HttpHandler */], http["j" /* ɵc */], [http["b" /* HttpBackend */], core["o" /* Injector */]]), core["_8" /* ɵmpd */](4608, http["c" /* HttpClient */], http["c" /* HttpClient */], [http["f" /* HttpHandler */]]), core["_8" /* ɵmpd */](4608, action_sheet_controller["a" /* ActionSheetController */], action_sheet_controller["a" /* ActionSheetController */], [app["a" /* App */], config["a" /* Config */]]), core["_8" /* ɵmpd */](4608, alert_controller["a" /* AlertController */], alert_controller["a" /* AlertController */], [app["a" /* App */], config["a" /* Config */]]), core["_8" /* ɵmpd */](4608, events["a" /* Events */], events["a" /* Events */], []), core["_8" /* ɵmpd */](4608, util_form["a" /* Form */], util_form["a" /* Form */], []), core["_8" /* ɵmpd */](4608, haptic["a" /* Haptic */], haptic["a" /* Haptic */], [platform_platform["a" /* Platform */]]), core["_8" /* ɵmpd */](4608, keyboard["a" /* Keyboard */], keyboard["a" /* Keyboard */], [config["a" /* Config */], platform_platform["a" /* Platform */], core["u" /* NgZone */], dom_controller["a" /* DomController */]]), core["_8" /* ɵmpd */](4608, loading_controller["a" /* LoadingController */], loading_controller["a" /* LoadingController */], [app["a" /* App */], config["a" /* Config */]]), core["_8" /* ɵmpd */](5120, common["f" /* LocationStrategy */], ionic_angular_module["b" /* provideLocationStrategy */], [common["q" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], config["a" /* Config */]]), core["_8" /* ɵmpd */](4608, common["e" /* Location */], common["e" /* Location */], [common["f" /* LocationStrategy */]]), core["_8" /* ɵmpd */](5120, url_serializer["b" /* UrlSerializer */], url_serializer["d" /* setupUrlSerializer */], [app["a" /* App */], url_serializer["a" /* DeepLinkConfigToken */]]), core["_8" /* ɵmpd */](5120, deep_linker["a" /* DeepLinker */], deep_linker["b" /* setupDeepLinker */], [app["a" /* App */], url_serializer["b" /* UrlSerializer */], common["e" /* Location */], module_loader["b" /* ModuleLoader */], core["i" /* ComponentFactoryResolver */]]), core["_8" /* ɵmpd */](4608, modal_controller["a" /* ModalController */], modal_controller["a" /* ModalController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_8" /* ɵmpd */](4608, picker_controller["a" /* PickerController */], picker_controller["a" /* PickerController */], [app["a" /* App */], config["a" /* Config */]]), core["_8" /* ɵmpd */](4608, popover_controller["a" /* PopoverController */], popover_controller["a" /* PopoverController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_8" /* ɵmpd */](4608, tap_click["a" /* TapClick */], tap_click["a" /* TapClick */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */]]), core["_8" /* ɵmpd */](4608, toast_controller["a" /* ToastController */], toast_controller["a" /* ToastController */], [app["a" /* App */], config["a" /* Config */]]), core["_8" /* ɵmpd */](4608, transition_controller["a" /* TransitionController */], transition_controller["a" /* TransitionController */], [platform_platform["a" /* Platform */], config["a" /* Config */]]), core["_8" /* ɵmpd */](4608, status_bar["a" /* StatusBar */], status_bar["a" /* StatusBar */], []), core["_8" /* ɵmpd */](4608, splash_screen["a" /* SplashScreen */], splash_screen["a" /* SplashScreen */], []), core["_8" /* ɵmpd */](4608, launch_navigator["a" /* LaunchNavigator */], launch_navigator["a" /* LaunchNavigator */], []), core["_8" /* ɵmpd */](4608, RequestsProvider, RequestsProvider, [http["c" /* HttpClient */]]), core["_8" /* ɵmpd */](4608, _ionic_native_geolocation["a" /* Geolocation */], _ionic_native_geolocation["a" /* Geolocation */], []), core["_8" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_8" /* ɵmpd */](512, core["k" /* ErrorHandler */], ionic_error_handler["a" /* IonicErrorHandler */], []), core["_8" /* ɵmpd */](256, config["b" /* ConfigToken */], {}, []), core["_8" /* ɵmpd */](1024, platform_registry["a" /* PlatformConfigToken */], platform_registry["b" /* providePlatformConfigs */], []), core["_8" /* ɵmpd */](1024, platform_platform["a" /* Platform */], platform_platform["b" /* setupPlatform */], [platform_browser["b" /* DOCUMENT */], platform_registry["a" /* PlatformConfigToken */], core["u" /* NgZone */]]), core["_8" /* ɵmpd */](1024, config["a" /* Config */], config["c" /* setupConfig */], [config["b" /* ConfigToken */], platform_platform["a" /* Platform */]]), core["_8" /* ɵmpd */](512, dom_controller["a" /* DomController */], dom_controller["a" /* DomController */], [platform_platform["a" /* Platform */]]), core["_8" /* ɵmpd */](512, menu_controller["a" /* MenuController */], menu_controller["a" /* MenuController */], []), core["_8" /* ɵmpd */](512, app["a" /* App */], app["a" /* App */], [config["a" /* Config */], platform_platform["a" /* Platform */], [2, menu_controller["a" /* MenuController */]]]), core["_8" /* ɵmpd */](512, gesture_controller["l" /* GestureController */], gesture_controller["l" /* GestureController */], [app["a" /* App */]]), core["_8" /* ɵmpd */](256, url_serializer["a" /* DeepLinkConfigToken */], { links: [] }, []), core["_8" /* ɵmpd */](512, core["h" /* Compiler */], core["h" /* Compiler */], []), core["_8" /* ɵmpd */](512, ng_module_loader["a" /* NgModuleLoader */], ng_module_loader["a" /* NgModuleLoader */], [core["h" /* Compiler */]]), core["_8" /* ɵmpd */](1024, module_loader["b" /* ModuleLoader */], module_loader["c" /* provideModuleLoader */], [ng_module_loader["a" /* NgModuleLoader */], core["o" /* Injector */]]), core["_8" /* ɵmpd */](1024, core["c" /* APP_INITIALIZER */], function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [platform_browser["s" /* ɵh */](p0_0), mode_registry["a" /* registerModeConfigs */](p1_0), events["b" /* setupProvideEvents */](p2_0, p2_1), tap_click["b" /* setupTapClick */](p3_0, p3_1, p3_2, p3_3, p3_4), module_loader["d" /* setupPreloading */](p4_0, p4_1, p4_2, p4_3)]; }, [[2, core["t" /* NgProbeToken */]], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */], config["a" /* Config */], url_serializer["a" /* DeepLinkConfigToken */], module_loader["b" /* ModuleLoader */], core["u" /* NgZone */]]), core["_8" /* ɵmpd */](512, core["d" /* ApplicationInitStatus */], core["d" /* ApplicationInitStatus */], [[2, core["c" /* APP_INITIALIZER */]]]), core["_8" /* ɵmpd */](131584, core["f" /* ApplicationRef */], core["f" /* ApplicationRef */], [core["u" /* NgZone */], core["T" /* ɵConsole */], core["o" /* Injector */], core["k" /* ErrorHandler */], core["i" /* ComponentFactoryResolver */], core["d" /* ApplicationInitStatus */]]), core["_8" /* ɵmpd */](512, core["e" /* ApplicationModule */], core["e" /* ApplicationModule */], [core["f" /* ApplicationRef */]]), core["_8" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_8" /* ɵmpd */](512, esm5_forms["m" /* ɵba */], esm5_forms["m" /* ɵba */], []), core["_8" /* ɵmpd */](512, esm5_forms["e" /* FormsModule */], esm5_forms["e" /* FormsModule */], []), core["_8" /* ɵmpd */](512, esm5_forms["l" /* ReactiveFormsModule */], esm5_forms["l" /* ReactiveFormsModule */], []), core["_8" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_8" /* ɵmpd */](512, http["e" /* HttpClientXsrfModule */], http["e" /* HttpClientXsrfModule */], []), core["_8" /* ɵmpd */](512, http["d" /* HttpClientModule */], http["d" /* HttpClientModule */], []), core["_8" /* ɵmpd */](512, AppModule, AppModule, []), core["_8" /* ɵmpd */](256, http["l" /* ɵf */], "XSRF-TOKEN", []), core["_8" /* ɵmpd */](256, http["m" /* ɵg */], "X-XSRF-TOKEN", []), core["_8" /* ɵmpd */](256, app_root["a" /* AppRootToken */], app_component_MyApp, []), core["_8" /* ɵmpd */](256, common["a" /* APP_BASE_HREF */], "/", [])]); });





// CONCATENATED MODULE: ./src/app/main.ts



Object(core["M" /* enableProdMode */])();
Object(platform_browser["j" /* platformBrowser */])().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map