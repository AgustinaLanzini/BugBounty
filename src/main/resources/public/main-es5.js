function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'TallerJava';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "<router-outlet></router-outlet>",
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _todoList_todolist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./todoList/todolist.component */
    "./src/app/todoList/todolist.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _ppal_ppal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ppal/ppal.component */
    "./src/app/ppal/ppal.component.ts");
    /* harmony import */


    var _log_log_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./log/log.component */
    "./src/app/log/log.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
      }, {
        path: 'todos',
        component: _ppal_ppal_component__WEBPACK_IMPORTED_MODULE_8__["PpalComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"], _todoList_todolist_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _ppal_ppal_component__WEBPACK_IMPORTED_MODULE_8__["PpalComponent"], _log_log_component__WEBPACK_IMPORTED_MODULE_9__["LogComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"], _todoList_todolist_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _ppal_ppal_component__WEBPACK_IMPORTED_MODULE_8__["PpalComponent"], _log_log_component__WEBPACK_IMPORTED_MODULE_9__["LogComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([{
            path: '',
            redirectTo: '/login',
            pathMatch: 'full'
          }, {
            path: 'login',
            component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
          }, {
            path: 'todos',
            component: _ppal_ppal_component__WEBPACK_IMPORTED_MODULE_8__["PpalComponent"]
          }])],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/log/log.component.ts":
  /*!**************************************!*\
    !*** ./src/app/log/log.component.ts ***!
    \**************************************/

  /*! exports provided: LogComponent */

  /***/
  function srcAppLogLogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogComponent", function () {
      return LogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./log.service */
    "./src/app/log/log.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LogComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var logItem_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", logItem_r1.user.name, ": ", logItem_r1.action, " ");
      }
    }

    var LogComponent = /*#__PURE__*/function () {
      function LogComponent(logService) {
        var _this = this;

        _classCallCheck(this, LogComponent);

        this.logService = logService;
        this.update();
        this.interval = setInterval(function () {
          _this.update();
        }, 5000);
      }

      _createClass(LogComponent, [{
        key: "update",
        value: function update() {
          var _this2 = this;

          this.logService.getLogs().then(function (log) {
            _this2.log = log;
          });
        }
      }]);

      return LogComponent;
    }();

    LogComponent.ɵfac = function LogComponent_Factory(t) {
      return new (t || LogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]));
    };

    LogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogComponent,
      selectors: [["log"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]])],
      decls: 5,
      vars: 1,
      consts: [[1, "card", "card-default"], [1, "card-header"], [1, "card-body"], [4, "ngFor", "ngForOf"]],
      template: function LogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Actions Log ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LogComponent_div_4_Template, 2, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.log);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'log',
          template: "<div class=\"card card-default\">\n    <div class=\"card-header\">\n      Actions Log\n    </div>\n    <div class=\"card-body\">\n      <div *ngFor=\"let logItem of log\">\n        {{ logItem.user.name }}: {{ logItem.action }}\n      </div>\n    </div>\n  </div> ",
          providers: [_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]]
        }]
      }], function () {
        return [{
          type: _log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/log/log.service.ts":
  /*!************************************!*\
    !*** ./src/app/log/log.service.ts ***!
    \************************************/

  /*! exports provided: LogService */

  /***/
  function srcAppLogLogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogService", function () {
      return LogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LogService = /*#__PURE__*/function () {
      function LogService(http) {
        _classCallCheck(this, LogService);

        this.http = http;
        this.headers = new Headers({
          'Content-Type': 'application/json'
        });
        this.logUrl = 'api/log'; // URL to web api
      }

      _createClass(LogService, [{
        key: "getLogs",
        value: function getLogs() {
          return this.http.get(this.logUrl).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.error('An error occurred', error);
          return Promise.reject(error.message || error);
        }
      }]);

      return LogService;
    }();

    LogService.ɵfac = function LogService_Factory(t) {
      return new (t || LogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LogService,
      factory: LogService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../users/users.service */
    "./src/app/users/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["loginInput"];

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, userService) {
        var _this3 = this;

        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.userService = userService;
        userService.getCurrentUser().then(function (user) {
          _this3.checkUser(user);
        });
      }

      _createClass(LoginComponent, [{
        key: "checkUser",
        value: function checkUser(user) {
          this.user = user;

          if (this.user && this.user.id != null) {
            this.router.navigate(['/todos']);
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this4 = this;

          this.userService.login(this.nombreUsuario).then(function (user) {
            return _this4.checkUser(user);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._inputElement.nativeElement.focus();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])],
      decls: 15,
      vars: 1,
      consts: [[2, "min-height", "100%", "min-height", "100vh", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "login", 2, "max-width", "300px"], [1, "card", "card-success"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "input-group"], ["placeholder", "Nombre de usuario", "ng-model", "password", "name", "username", "id", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["loginInput", ""], [1, "input-group-btn"], ["type", "submit", 1, "btn", "btn-primary"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-check"], ["fill-rule", "evenodd", "d", "M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z", "clip-rule", "evenodd"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Ingrese un nombre de usuario ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.nombreUsuario = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nombreUsuario);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app',
          template: "<div\n    style=\"min-height: 100%;min-height: 100vh;display: flex;align-items: center;justify-content: center;\"\n  >\n    <div class=\"login\" style=\"max-width:300px;\">\n      <div class=\"card card-success\">\n        <div class=\"card-header\">\n          Ingrese un nombre de usuario\n        </div>\n        <div class=\"card-body\">\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n            <div class=\"input-group\">\n              <input\n                #loginInput\n                class=\"form-control\"\n                [(ngModel)]=\"nombreUsuario\"\n                placeholder=\"Nombre de usuario\"\n                ng-model=\"password\"\n                name=\"username\"\n                id=\"username\"\n                required\n              />\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-primary\" type=\"submit\">\n                  <svg\n                    class=\"bi bi-check\"\n                    width=\"1em\"\n                    height=\"1em\"\n                    viewBox=\"0 0 16 16\"\n                    fill=\"currentColor\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <path\n                      fill-rule=\"evenodd\"\n                      d=\"M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z\"\n                      clip-rule=\"evenodd\"\n                    />\n                  </svg>\n                </button>\n              </span>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>",
          providers: [_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _users_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, {
        _inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['loginInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ppal/ppal.component.ts":
  /*!****************************************!*\
    !*** ./src/app/ppal/ppal.component.ts ***!
    \****************************************/

  /*! exports provided: PpalComponent */

  /***/
  function srcAppPpalPpalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PpalComponent", function () {
      return PpalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _todoList_todolist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../todoList/todolist.component */
    "./src/app/todoList/todolist.component.ts");
    /* harmony import */


    var _log_log_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../log/log.component */
    "./src/app/log/log.component.ts");

    var PpalComponent = function PpalComponent() {
      _classCallCheck(this, PpalComponent);
    };

    PpalComponent.ɵfac = function PpalComponent_Factory(t) {
      return new (t || PpalComponent)();
    };

    PpalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PpalComponent,
      selectors: [["app"]],
      decls: 10,
      vars: 0,
      consts: [[1, "row", 2, "padding", "1em"], [1, "col-sm-3"], [1, "col-sm-6"]],
      template: function PpalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "List of Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "todo-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Todo List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "log");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Action Log");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_users_users_component__WEBPACK_IMPORTED_MODULE_1__["UsersComponent"], _todoList_todolist_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"], _log_log_component__WEBPACK_IMPORTED_MODULE_3__["LogComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PpalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app',
          template: "<div class=\"row\" style=\"padding:1em;\">\n                  <div class=\"col-sm-3\">\n                    <users>List of Users</users>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <todo-list>Todo List</todo-list>\n                  </div>\n                  <div class=\"col-sm-3\">\n                    <log>Action Log</log>\n                  </div>\n              </div>"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/todoList/todo.service.ts":
  /*!******************************************!*\
    !*** ./src/app/todoList/todo.service.ts ***!
    \******************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppTodoListTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./todo */
    "./src/app/todoList/todo.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TodoService = /*#__PURE__*/function () {
      function TodoService(http) {
        _classCallCheck(this, TodoService);

        this.http = http;
        this.headers = new Headers({
          'Content-Type': 'application/json'
        });
        this.todoURL = 'api/todo'; // URL to web api
      }

      _createClass(TodoService, [{
        key: "getTodos",
        value: function getTodos() {
          return this.http.get(this.todoURL).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "saveTodo",
        value: function saveTodo(todoContent) {
          var todo = new _todo__WEBPACK_IMPORTED_MODULE_1__["Todo"]();
          todo.content = todoContent;
          return this.http.post(this.todoURL, todo).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "deleteTodo",
        value: function deleteTodo(todo) {
          return this.http["delete"]("".concat(this.todoURL, "/").concat(todo.id)).toPromise().then(function () {})["catch"](this.handleError);
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.error('An error occurred', error);
          return Promise.reject(error.message || error);
        }
      }]);

      return TodoService;
    }();

    TodoService.ɵfac = function TodoService_Factory(t) {
      return new (t || TodoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TodoService,
      factory: TodoService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todoList/todo.ts":
  /*!**********************************!*\
    !*** ./src/app/todoList/todo.ts ***!
    \**********************************/

  /*! exports provided: Todo */

  /***/
  function srcAppTodoListTodoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Todo", function () {
      return Todo;
    });

    var Todo = function Todo() {
      _classCallCheck(this, Todo);
    };
    /***/

  },

  /***/
  "./src/app/todoList/todolist.component.ts":
  /*!************************************************!*\
    !*** ./src/app/todoList/todolist.component.ts ***!
    \************************************************/

  /*! exports provided: TodoListComponent */

  /***/
  function srcAppTodoListTodolistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () {
      return TodoListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../users/users.service */
    "./src/app/users/users.service.ts");
    /* harmony import */


    var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./todo.service */
    "./src/app/todoList/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function TodoListComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_div_8_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var todo_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.borrarTodo(todo_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var todo_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todo_r2.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" User: ", todo_r2.user.name, " ");
      }
    }

    var TodoListComponent = /*#__PURE__*/function () {
      function TodoListComponent(todoService, router, userService) {
        _classCallCheck(this, TodoListComponent);

        this.todoService = todoService;
        this.router = router;
        this.userService = userService;
      }

      _createClass(TodoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.userService.getCurrentUser().then(function (user) {
            _this5.checkUser(user);
          });
        }
      }, {
        key: "checkUser",
        value: function checkUser(user) {
          var _this6 = this;

          this.user = user;

          if (!this.user.id) {
            this.router.navigate(['/login']);
          } else {
            this.update();
            this.interval = setInterval(function () {
              _this6.update();
            }, 10000);
          }
        }
      }, {
        key: "update",
        value: function update() {
          var _this7 = this;

          this.todoService.getTodos().then(function (todos) {
            _this7.todos = todos;
          });
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          jQuery('.delete-todo-button').tooltip();
        }
      }, {
        key: "nuevoTodo",
        value: function nuevoTodo() {
          this.todoContent = '';
          jQuery('#addTodo').modal('show');
          setTimeout(function () {
            jQuery('#todoContent').focus();
          });
        }
      }, {
        key: "guardarTodo",
        value: function guardarTodo() {
          var _this8 = this;

          this.todoService.saveTodo(this.todoContent).then(function () {
            jQuery('#addTodo').modal('hide');

            _this8.update();
          });
        }
      }, {
        key: "borrarTodo",
        value: function borrarTodo(todo) {
          var _this9 = this;

          this.todoService.deleteTodo(todo).then(function () {
            jQuery('.delete-todo-button').tooltip('hide');

            _this9.update();
          });
        }
      }]);

      return TodoListComponent;
    }();

    TodoListComponent.ɵfac = function TodoListComponent_Factory(t) {
      return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoListComponent,
      selectors: [["todo-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"], _users_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])],
      decls: 28,
      vars: 2,
      consts: [[1, "card", "card-warning"], [1, "card-header"], [1, "card-body"], ["type", "button", 1, "btn", "btn-primary", "agregar-todo-button", 3, "click"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-plus"], ["class", "card card-default", "style", "margin-bottom: 1rem;", 4, "ngFor", "ngForOf"], ["tabindex", "-1", "role", "dialog", "id", "addTodo", 1, "modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [3, "ngSubmit"], ["todoForm", "ngForm"], [1, "modal-body"], ["type", "text", "id", "todoContent", "name", "name", 1, "form-control", 2, "width", "100%", "height", "100%", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["type", "button", "type", "submit", 1, "btn", "btn-primary"], [1, "card", "card-default", 2, "margin-bottom", "1rem"], [1, "card-body", 2, "background-color", "#ffe15b"], [1, "row"], [1, "col-sm-10"], [1, "col-sm-2"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "", "data-original-title", "Borrar TO-DO", 1, "btn", "btn-sm", "btn-danger", "delete-todo-button", 2, "float", "right", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-trash-fill"], ["fill-rule", "evenodd", "d", "M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z", "clip-rule", "evenodd"], [1, "row", 2, "margin-top", "1em"], [1, "col-sm-12", 2, "text-align", "right", "font-style", "italic"]],
      template: function TodoListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " TO-DOs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_Template_button_click_4_listener() {
            return ctx.nuevoTodo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Nuevo TO-DO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TodoListComponent_div_8_Template, 12, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Agregar TODO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TodoListComponent_Template_form_ngSubmit_18_listener() {
            return ctx.guardarTodo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoListComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.todoContent = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.todoContent);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'todo-list',
          templateUrl: './todolist.component.html',
          providers: [_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"], _users_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }]
      }], function () {
        return [{
          type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _users_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/user.ts":
  /*!*******************************!*\
    !*** ./src/app/users/user.ts ***!
    \*******************************/

  /*! exports provided: User */

  /***/
  function srcAppUsersUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./users.service */
    "./src/app/users/users.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UsersComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.name, " ");
      }
    }

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(userService) {
        var _this10 = this;

        _classCallCheck(this, UsersComponent);

        this.userService = userService;
        this.update();
        this.interval = setInterval(function () {
          _this10.update();
        }, 5000);
      }

      _createClass(UsersComponent, [{
        key: "update",
        value: function update() {
          var _this11 = this;

          this.userService.getUsers().then(function (userlist) {
            _this11.userlist = userlist;
          });
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["users"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])],
      decls: 5,
      vars: 1,
      consts: [[1, "card", "card-success"], [1, "card-header"], [1, "card-body"], [4, "ngFor", "ngForOf"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Logged Users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userlist);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'users',
          template: "<div class=\"card card-success\">\n    <div class=\"card-header\">\n      Logged Users\n    </div>\n    <div class=\"card-body\">\n      <div *ngFor=\"let user of userlist\">\n        {{ user.name }}\n      </div>\n    </div>\n  </div> ",
          providers: [_users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }]
      }], function () {
        return [{
          type: _users_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/users.service.ts":
  /*!****************************************!*\
    !*** ./src/app/users/users.service.ts ***!
    \****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUsersUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user */
    "./src/app/users/user.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.headers = new Headers({
          'Content-Type': 'application/json'
        });
        this.userUrl = 'api/user'; // URL to web api
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(this.userUrl).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.http.get('api/currentuser').toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "login",
        value: function login(userName) {
          var user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
          user.name = userName;
          return this.http.post(this.userUrl, user).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.error('An error occurred', error);
          return Promise.reject(error.message || error);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Usuario\Documents\Taller de Java\TallerJava\Proyecto - BugBounty\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map