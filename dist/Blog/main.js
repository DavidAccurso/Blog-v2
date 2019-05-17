(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Post.ts":
/*!*************************!*\
  !*** ./src/app/Post.ts ***!
  \*************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(userId, id, title, body, daysAgo) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
        this.daysAgo = daysAgo;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/Shared/notFound/notFound.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Shared/notFound/notFound.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <h1>ERROR 404 - NOT FOUND</h1>\r\n    <img \r\n    [src]=\"imgPath\" \r\n    alt=\"Not found image\"\r\n    style=\"width: 50rem\">\r\n    <br>\r\n    <hr>\r\n    <a [routerLink]=\"[ '/home' ]\" routerLinkActive=\"active\">Go Home</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Shared/notFound/notFound.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Shared/notFound/notFound.component.ts ***!
  \*******************************************************/
/*! exports provided: notFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundComponent", function() { return notFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var notFoundComponent = /** @class */ (function () {
    function notFoundComponent() {
        this.imgPath = '../../assets/difficultes.jpg';
    }
    notFoundComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(notFoundComponent.prototype, "imgPath", {
        get: function () {
            return this._imgPath;
        },
        set: function (v) {
            this._imgPath = v;
        },
        enumerable: true,
        configurable: true
    });
    notFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notFound',
            template: __webpack_require__(/*! ./notFound.component.html */ "./src/app/Shared/notFound/notFound.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], notFoundComponent);
    return notFoundComponent;
}());



/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <h3 class=\"about title\">About...</h3>\r\n  <div class=\"about body\">\r\n      <div class=\"row\">\r\n          <div class=\"col-3\">\r\n              <img src=\"../../assets/homero-intelectual.jpg\" alt=\"Img-About\">\r\n          </div>\r\n          <div class=\"col-9\">\r\n                  <p class=\"text\">\r\n                      Lorem ipsum dolor sit amet consectetur adipisicing elit. \r\n                      Quia expedita harum neque beatae, dolorum sapiente! Nemo debitis natus facere vitae,\r\n                      atque sit amet esse modi rerum quod pariatur est! Consectetur.\r\n                  </p>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about .body {\n  padding: 0.3rem 0.3rem 0.3rem 0.6rem; }\n\n.about .row img {\n  width: 10rem; }\n\n.about .row .text {\n  text-align: center;\n  justify-content: center;\n  text-align: left;\n  font-style: italic; }\n\n.about-text {\n  color: #999;\n  text-align: left;\n  font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxGdWxsIFNvbHV0aW9uc1xcRGVza3RvcFxcRGFcXHYzXFxCbG9nLXYyL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L0M6XFxVc2Vyc1xcRnVsbCBTb2x1dGlvbnNcXERlc2t0b3BcXERhXFx2M1xcQmxvZy12Mi9zcmNcXGFwcFxcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRU0sb0NBQW9DLEVBQUE7O0FBRjFDO0VBTVEsWUFBWSxFQUFBOztBQU5wQjtFQVNRLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJLFdDbkJhO0VEb0JiLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vY29sb3JzJztcclxuXHJcbi5hYm91dHtcclxuICAgIC5ib2R5e1xyXG4gICAgICBwYWRkaW5nOiAwLjNyZW0gMC4zcmVtIDAuM3JlbSAwLjZyZW07XHJcbiAgICB9XHJcbiAgICAucm93IHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5hYm91dC10ZXh0IHtcclxuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn0iLCIkdGV4dC1jb2xvcjogIzk5OTtcclxuJGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiRib3JkZXItY29sb3I6ICNlNWU1ZTU7Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autores_autores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autores/autores.component */ "./src/app/autores/autores.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _Shared_notFound_notFound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Shared/notFound/notFound.component */ "./src/app/Shared/notFound/notFound.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");









var routes = [
    {
        path: 'autor',
        component: _autores_autores_component__WEBPACK_IMPORTED_MODULE_3__["AutoresComponent"]
    },
    {
        path: 'details/:id',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]
    },
    {
        path: 'form',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"]
    },
    {
        path: 'newAuthor',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: 'form',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"]
    },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: '**',
        component: _Shared_notFound_notFound_component__WEBPACK_IMPORTED_MODULE_6__["notFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        //Primero
        var _this = this;
        this.title = 'Blog';
        this.texto = 'dada dada da';
        this.dav = 'hol';
        setTimeout(function () {
            return _this.dav = "pasaron 10 from Constr";
        }, 10000);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //segundo, cuando init compo
        setTimeout(function () {
            return _this.dav = "pasaron 5 from ngOnInit";
        }, 5000);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _autores_autores_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autores/autores.component */ "./src/app/autores/autores.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _Shared_notFound_notFound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Shared/notFound/notFound.component */ "./src/app/Shared/notFound/notFound.component.ts");
/* harmony import */ var _post_service_post_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post-service/post-service */ "./src/app/post-service/post-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _post_service_author_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./post-service/author-service */ "./src/app/post-service/author-service.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _form_author_form_author_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form-author/form-author.component */ "./src/app/form-author/form-author.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _autores_autores_component__WEBPACK_IMPORTED_MODULE_6__["AutoresComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_11__["ArticleComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _Shared_notFound_notFound_component__WEBPACK_IMPORTED_MODULE_13__["notFoundComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_17__["FormComponent"],
                _form_author_form_author_component__WEBPACK_IMPORTED_MODULE_18__["FormAuthorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]
            ],
            providers: [
                _post_service_post_service__WEBPACK_IMPORTED_MODULE_14__["PostService"],
                _post_service_author_service__WEBPACK_IMPORTED_MODULE_16__["AuthorService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article>\r\n  <div *ngIf=\"this.isLoading\">\r\n    <img [src]=\"imgLoading\" alt=\"Loading...\" class=\"loading\"/>\r\n  </div>\r\n  <div *ngIf=\"!this.isLoading\">\r\n      <div class=\"container-fluid\" *ngIf=\"this.hasPost\">\r\n          <div class=\"card text-left\">\r\n            <div class=\"card-header title\">\r\n              {{ this.post.title }}\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-2\">\r\n                  <img [src]=\"imgPath\" alt=\"Img 1\" class=\"img-fluid news-img\" />\r\n                </div>\r\n                <div class=\"col-10\">\r\n                  <p class=\"card-text\">\r\n                    {{ this.post.body }}\r\n                  </p>\r\n                  <div *ngIf=\"this.post\" class=\"seguir-leyendo\">\r\n                    <a class=\"btn-link\" [routerLink]=\"['/details', id]\"\r\n                      >Seguir leyendo...</a\r\n                    >\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer text-muted\">\r\n              {{ this.post.daysAgo }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!this.post\">\r\n          No se encontro el post :(\r\n        </div>\r\n  </div>\r\n</article>\r\n\r\n<!-- https://mmeopsat.ciostage.accenture.com/WorkTime/WMSSetup.aspx?Client=8225&WMU=1293728 -->\r\n\r\n<!-- <article>\r\n  <div class=\"card text-left\">\r\n    <div class=\"card-header\">\r\n      {{ title }}\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <img\r\n        [src]=\"imgPath\"\r\n        alt=\"Img 1\"\r\n        class=\"img-fluid news-img\"\r\n      />\r\n      <p class=\"card-text\">\r\n        {{ text }}\r\n      </p>\r\n      <div *ngIf=\"this.articlePost\">\r\n          <a class=\"btn-link\" [routerLink]=\"['/details', id ]\">Seguir leyendo...</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer text-muted\">\r\n      {{ daysAgo }}\r\n    </div>\r\n  </div>\r\n</article>\r\n\r\nhttps://mmeopsat.ciostage.accenture.com/WorkTime/WMSSetup.aspx?Client=8225&WMU=1293728 -->\r\n"

/***/ }),

/***/ "./src/app/article/article.component.scss":
/*!************************************************!*\
  !*** ./src/app/article/article.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 10rem;\n  width: 100%; }\n\n.seguir-leyendo {\n  vertical-align: bottom; }\n\narticle {\n  color: darkgray;\n  margin: 5px 0px;\n  display: block; }\n\narticle .loading {\n    width: 10rem; }\n\narticle .title {\n    font-weight: bold;\n    padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9DOlxcVXNlcnNcXEZ1bGwgU29sdXRpb25zXFxEZXNrdG9wXFxEYVxcdjNcXEJsb2ctdjIvc3JjXFxhcHBcXGFydGljbGVcXGFydGljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUViO0VBRUUsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0UsZUFBZTtFQUViLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBSmxCO0lBTU0sWUFBWSxFQUFBOztBQU5sQjtJQVNNLGlCQUFpQjtJQUNqQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc2VndWlyLWxleWVuZG8ge1xyXG4gICAgLy9EZWphciBlbiBwYXJ0ZSBpbmZlcmlvciBkZWwgYm9keVxyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICB9XHJcbmFydGljbGUgeyBcclxuICBjb2xvcjogZGFya2dyYXk7XHJcblxyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAubG9hZGluZyB7XHJcbiAgICAgIHdpZHRoOiAxMHJlbTs7XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIC5kYXlzQWdvIHtcclxuXHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-service/post-service */ "./src/app/post-service/post-service.ts");



var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(postService) {
        this.postService = postService;
        this.imgPath = '../../assets/defaultUser.jpg';
        this.imgLoading = '../../assets/loading.gif';
        this.daysAgo = '21 days ago.';
        this.isLoading = false;
        this.hasPost = false;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.hasPost = false;
        if (this.postId) {
            this.id = this.postId;
            this.getPost(this.id);
        }
        else {
            this.isLoading = false;
        }
    };
    ArticleComponent.prototype.getPost = function (id) {
        var _this = this;
        this.isLoading = true;
        this.postService.getPost(this.id)
            .then(function (returnedPost) {
            _this.post = returnedPost;
            _this.post.daysAgo = _this.postService.getDaysAgo();
        })
            .catch(function (error) {
            console.log(error);
        })
            .finally(function () {
            _this.isLoading = false;
            if (_this.post) {
                _this.hasPost = true;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ArticleComponent.prototype, "postId", void 0);
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.scss */ "./src/app/article/article.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/autores/autores.component.html":
/*!************************************************!*\
  !*** ./src/app/autores/autores.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\" md-5\">\r\n  <div class=\"container-fluid text-center autor\">\r\n    <div>\r\n      <div class=\"row\">\r\n        <div class=\"col text-left justify-content-center\">\r\n          <h3>Nombre autor</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"content-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-8\"> <!-- autor posts -->\r\n          <app-article></app-article>\r\n          <app-article></app-article>\r\n        </div>\r\n        <div class=\"col-4\"> <!-- autor info -->\r\n          <div class=\"row\">\r\n            <p>\r\n              {{ authorInfo }}\r\n            </p>\r\n            <img [src]=\"imgPath\" alt=\"img\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/autores/autores.component.scss":
/*!************************************************!*\
  !*** ./src/app/autores/autores.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".autor img {\n  width: 100%;\n  height: 19rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0b3Jlcy9DOlxcVXNlcnNcXEZ1bGwgU29sdXRpb25zXFxEZXNrdG9wXFxEYVxcdjNcXEJsb2ctdjIvc3JjXFxhcHBcXGF1dG9yZXNcXGF1dG9yZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSxXQUFXO0VBQ1gsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0b3Jlcy9hdXRvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dG9yIHtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDE5cmVtO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/autores/autores.component.ts":
/*!**********************************************!*\
  !*** ./src/app/autores/autores.component.ts ***!
  \**********************************************/
/*! exports provided: AutoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoresComponent", function() { return AutoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-service/post-service */ "./src/app/post-service/post-service.ts");
/* harmony import */ var _post_service_author_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-service/author-service */ "./src/app/post-service/author-service.ts");




var AutoresComponent = /** @class */ (function () {
    function AutoresComponent(postService, authorService) {
        this.postService = postService;
        this.authorService = authorService;
        this.isLoading = false;
    }
    AutoresComponent.prototype.ngOnInit = function () {
        this.authorPosts = this.GetAllPostsFromAuthor(this.authorId);
        this.authorInfo = this.authorService.getInfo(this.authorId);
        this.imgPath = this.authorService.getImg(this.authorId);
    };
    AutoresComponent.prototype.GetAllPostsFromAuthor = function (authorID) {
        var _this = this;
        this.isLoading = true;
        var postsFromAuthor = [];
        this.postService.GetAllPosts().then(function (posts) {
            postsFromAuthor = posts.filter(function (p) { p.userId === authorID; });
        })
            .catch(function (error) {
            return error;
        })
            .finally(function () {
            _this.isLoading = false;
        });
        return postsFromAuthor;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AutoresComponent.prototype, "authorId", void 0);
    AutoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autores',
            template: __webpack_require__(/*! ./autores.component.html */ "./src/app/autores/autores.component.html"),
            styles: [__webpack_require__(/*! ./autores.component.scss */ "./src/app/autores/autores.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            _post_service_author_service__WEBPACK_IMPORTED_MODULE_3__["AuthorService"]])
    ], AutoresComponent);
    return AutoresComponent;
}());



/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid details\">\r\n  <div *ngIf=\"this.isLoading\">\r\n      <img [src]=\"imgPath\" alt=\"Img 1\" class=\"img-fluid news-img\" />\r\n  </div>\r\n  <div *ngIf=\"!this.isLoading\">\r\n    <div *ngIf=\"this.hasPost\">\r\n        <div class=\"card bg-dark text-white text-center\">\r\n            <img [src]=\"this.imgPath\" class=\"card-img\" alt=\"...\" />\r\n            <div class=\"card-img-overlay\">\r\n              <h2 class=\"card-title\">{{ this.post.title }}</h2>\r\n            </div>\r\n          </div>\r\n          <p class=\"text\">\r\n            {{ this.post.body }}\r\n          </p>\r\n          <hr />\r\n          <p class=\"updated-text\">{{ this.post.daysAgo }}</p>\r\n          <p>\r\n            Date: {{ this.date }} - <a class=\"btn-link\" routerLink=\"/autor\">{{ this.author.name }}</a>\r\n          </p>\r\n    </div>\r\n    <div *ngIf=\"!this.hasPost\">\r\n      No se encontro el post :(\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/details/details.component.scss":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details {\n  color: #999;\n  text-align: left;\n  font-style: italic; }\n  .details img {\n    width: 100%;\n    height: 200px;\n    -webkit-filter: blur(0.6);\n            filter: blur(0.6);\n    -webkit-filter: segapia(0.9);\n            filter: segapia(0.9);\n    -webkit-filter: brightness(0.3);\n            filter: brightness(0.3); }\n  .details .card-title {\n    text-align: center; }\n  .details .card-title:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n    -webkit-filter: brightness(1.2);\n            filter: brightness(1.2); }\n  .details .updated-text {\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9DOlxcVXNlcnNcXEZ1bGwgU29sdXRpb25zXFxEZXNrdG9wXFxEYVxcdjNcXEJsb2ctdjIvc3JjXFxhcHBcXGRldGFpbHNcXGRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RldGFpbHMvQzpcXFVzZXJzXFxGdWxsIFNvbHV0aW9uc1xcRGVza3RvcFxcRGFcXHYzXFxCbG9nLXYyL3NyY1xcYXBwXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFlSSxXQ2pCYTtFRGtCYixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7RUFqQnRCO0lBRU0sV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBZ0I7WUFBaEIsaUJBQWdCO0lBQ2hCLDRCQUFtQjtZQUFuQixvQkFBbUI7SUFDbkIsK0JBQXNCO1lBQXRCLHVCQUFzQixFQUFBO0VBTjVCO0lBU00sa0JBQWtCLEVBQUE7RUFUeEI7SUFZTSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQWI3QjtJQW1CTSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2NvbG9ycyc7XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgZmlsdGVyOiBibHVyKC42KTtcclxuICAgICAgZmlsdGVyOiBzZWdhcGlhKC45KTtcclxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKC4zKTtcclxuICAgIH1cclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtdGl0bGU6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG4gICAgfVxyXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIC51cGRhdGVkLXRleHQge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufSIsIiR0ZXh0LWNvbG9yOiAjOTk5O1xyXG4kYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuJGJvcmRlci1jb2xvcjogI2U1ZTVlNTsiXX0= */"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-service/post-service */ "./src/app/post-service/post-service.ts");




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(activeRoute, service) {
        this.activeRoute = activeRoute;
        this.service = service;
        this.hasPost = false;
        this.imgPath = '../../assets/paisaje.jpg';
        this.date = Date.now();
        // this.postId = parseInt(activatedRoute.snapshot.paramMap.get('id'));
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.sub = this.activeRoute.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
        });
        if (this.id) {
            this.getPost(this.id);
        }
        console.log(this.post);
    };
    DetailsComponent.prototype.ngOnChanges = function (changes) {
        // Cada vez que cambie un input 
    };
    DetailsComponent.prototype.getPost = function (id) {
        var _this = this;
        this.isLoading = true;
        this.service.getPost(this.id)
            .then(function (returnedPost) {
            _this.post = returnedPost;
            _this.post.daysAgo = _this.service.getDaysAgo();
        })
            .catch(function (error) {
            console.log(error);
        })
            .finally(function () {
            _this.isLoading = false;
            if (_this.post) {
                _this.hasPost = true;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DetailsComponent.prototype, "id", void 0);
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/details/details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _post_service_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/form-author/form-author.component.html":
/*!********************************************************!*\
  !*** ./src/app/form-author/form-author.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"container-fluid\" (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n  <div class=\"form-group\">\r\n    <!-- VALIDACIONES-->\r\n    <div\r\n      class=\"input-group mb-3\"\r\n      [ngClass]=\"{ 'has-error': form.errors, 'has-success': !form.errors }\"\r\n    >\r\n      <div *ngIf=\"selectedAutor.invalid\" class=\"help-block\" style=\"color: #813838\">\r\n        <br />\r\n        <p>Please select an author!</p>\r\n      </div>\r\n      <div *ngIf=\"titulo.invalid\" class=\"help-block\" style=\"color: #813838\">\r\n        <br />\r\n        <p>Titulo is required!</p>\r\n      </div>\r\n      <div\r\n        *ngIf=\"contenido.invalid\"\r\n        class=\"help-block\"\r\n        style=\"color: #813838\"\r\n      >\r\n        <br />\r\n        <p>Please complete the body!</p>\r\n      </div>\r\n    </div>\r\n    <label for=\"autor\">Autor </label>\r\n    <select id=\"autor\" name=\"autorName\" [(ngModel)]=\"autorID\" required>\r\n      <option [value]=\"autor.id\" *ngFor=\"let autor of autores\">\r\n        {{ this.autor.username }}\r\n      </option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"titulo\">Titulo </label>\r\n    <input\r\n      type=\"text\"\r\n      id=\"titulo\"\r\n      required\r\n      minlength=\"3\"\r\n      name=\"tituloName\"\r\n      [formControlName]=\"titulo\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <textarea\r\n      name=\"contenido\"\r\n      id=\"contenido\"\r\n      cols=\"30\"\r\n      rows=\"10\"\r\n      required\r\n      minlength=\"10\"\r\n      name=\"contenidoName\"\r\n      [formControlName]=\"contenido\"\r\n    >\r\n    </textarea>\r\n  </div>\r\n  <!-- <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Submit</button> -->\r\n  <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">\r\n    Submit\r\n  </button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/form-author/form-author.component.scss":
/*!********************************************************!*\
  !*** ./src/app/form-author/form-author.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tYXV0aG9yL2Zvcm0tYXV0aG9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/form-author/form-author.component.ts":
/*!******************************************************!*\
  !*** ./src/app/form-author/form-author.component.ts ***!
  \******************************************************/
/*! exports provided: FormAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAuthorComponent", function() { return FormAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service_author_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-service/author-service */ "./src/app/post-service/author-service.ts");
/* harmony import */ var _post_service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-service/post-service */ "./src/app/post-service/post-service.ts");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Post */ "./src/app/Post.ts");





var FormAuthorComponent = /** @class */ (function () {
    function FormAuthorComponent(authorService, postService) {
        this.authorService = authorService;
        this.postService = postService;
    }
    FormAuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorService.getAutores().then(function (a) {
            _this.autores = a;
        });
    };
    FormAuthorComponent.prototype.onSubmit = function () {
        var _post = new _Post__WEBPACK_IMPORTED_MODULE_4__["Post"](1, 50, this.titulo, this.contenido, 'han pasado 84 años');
        var pusheo = this.postService.pushPost(_post);
        if (pusheo) {
            alert('Agregad con exito');
        }
        else {
            alert('ERRORR!');
        }
    };
    FormAuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formauthor',
            template: __webpack_require__(/*! ./form-author.component.html */ "./src/app/form-author/form-author.component.html"),
            styles: [__webpack_require__(/*! ./form-author.component.scss */ "./src/app/form-author/form-author.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service_author_service__WEBPACK_IMPORTED_MODULE_2__["AuthorService"],
            _post_service_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]])
    ], FormAuthorComponent);
    return FormAuthorComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"container-fluid\" (ngSubmit)=\"onSubmit(form)\" [formGroup]=\"form\">\r\n  <div class=\"form-group\">\r\n    <!-- VALIDACIONES-->\r\n    <div\r\n      class=\"input-group mb-3\"\r\n      [ngClass]=\"{ 'has-error': form.errors, 'has-success': !form.errors }\"\r\n    >\r\n      <div *ngIf=\"selectedAutor.invalid\" class=\"help-block\" style=\"color: #813838\">\r\n        <br />\r\n        <p>Please select an author!</p>\r\n      </div>\r\n      <div *ngIf=\"titulo.invalid\" class=\"help-block\" style=\"color: #813838\">\r\n        <br />\r\n        <p>Titulo is required!</p>\r\n      </div>\r\n      <div\r\n        *ngIf=\"contenido.invalid\"\r\n        class=\"help-block\"\r\n        style=\"color: #813838\"\r\n      >\r\n        <br />\r\n        <p>Please complete the body!</p>\r\n      </div>\r\n    </div>\r\n    <label for=\"autor\">Autor </label>\r\n    <select id=\"autor\" name=\"autorName\" [(ngModel)]=\"autorID\" required>\r\n      <option [value]=\"autor.id\" *ngFor=\"let autor of autores\">\r\n        {{ this.autor.username }}\r\n      </option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"titulo\">Titulo </label>\r\n    <input\r\n      type=\"text\"\r\n      id=\"titulo\"\r\n      required\r\n      minlength=\"3\"\r\n      name=\"tituloName\"\r\n      [formControlName]=\"titulo\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <textarea\r\n      name=\"contenido\"\r\n      id=\"contenido\"\r\n      cols=\"30\"\r\n      rows=\"10\"\r\n      required\r\n      minlength=\"10\"\r\n      name=\"contenidoName\"\r\n      [formControlName]=\"contenido\"\r\n    >\r\n    </textarea>\r\n  </div>\r\n  <!-- <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Submit</button> -->\r\n  <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">\r\n    Submit\r\n  </button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/form/form.component.scss":
/*!******************************************!*\
  !*** ./src/app/form/form.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service_author_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-service/author-service */ "./src/app/post-service/author-service.ts");
/* harmony import */ var _post_service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-service/post-service */ "./src/app/post-service/post-service.ts");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Post */ "./src/app/Post.ts");





var FormComponent = /** @class */ (function () {
    function FormComponent(authorService, postService) {
        this.authorService = authorService;
        this.postService = postService;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorService.getAutores().then(function (a) {
            _this.autores = a;
        });
    };
    FormComponent.prototype.onSubmit = function () {
        var _post = new _Post__WEBPACK_IMPORTED_MODULE_4__["Post"](1, 50, this.titulo, this.contenido, 'han pasado 84 años');
        var pusheo = this.postService.pushPost(_post);
        if (pusheo) {
            alert('Agregad con exito');
        }
        else {
            alert('ERRORR!');
        }
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/form/form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service_author_service__WEBPACK_IMPORTED_MODULE_2__["AuthorService"],
            _post_service_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\" md-5\">\r\n  <div class=\"container-fluid text-center principal\">\r\n    <div class=\"row justify-content-center\">\r\n      <div\r\n        class=\"jumbotron p-1 p-md-1 text-white rounded bg-dark col-12 col-md-12 col-sm-12\"\r\n      >\r\n        <h2>Bienvenido al blog {{ title }}</h2>\r\n      </div>\r\n      <main class=\"container-fluid blog-articles\">\r\n        <div *ngIf=\"![isLoading]\">\r\n            <img [src]=\"imgLoading\" alt=\"Loading...\" class=\"loading\"/>\r\n        </div>\r\n        <div *ngIf=\"!![hasPosts] && [isLoading]\">\r\n            <app-article \r\n            class=\"art\"\r\n              *ngFor=\"let p of posts\" \r\n              [postId]=\"p.id\">\r\n            </app-article>\r\n        </div>\r\n        <img \r\n        src=\"#\" \r\n        alt=\"NO HAY POSTS :(\" \r\n        *ngIf=\"![hasPosts] && ![isLoading]\"\r\n        >\r\n      </main>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  margin-bottom: 2rem; }\n\n.logo {\n  width: 150px; }\n\n.principal img {\n  height: 10rem;\n  width: 100%; }\n\n.blog-articles article {\n  margin: 5px 0px;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEZ1bGwgU29sdXRpb25zXFxEZXNrdG9wXFxEYVxcdjNcXEJsb2ctdjIvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDQSxZQUFZLEVBQUE7O0FBRVo7RUFFSSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBRUUsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLmxvZ28ge1xyXG53aWR0aDogMTUwcHg7XHJcbn1cclxuLnByaW5jaXBhbCB7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuLmJsb2ctYXJ0aWNsZXMge1xyXG4gIGFydGljbGUgeyBcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-service/post-service */ "./src/app/post-service/post-service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService) {
        this.postService = postService;
        this.title = 'del curso de Angular.';
        this.hasPosts = false;
        this.imgLoading = '../../assets/loading.gif';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadPosts();
    };
    HomeComponent.prototype.loadPosts = function () {
        var _this = this;
        this.isLoading = true;
        this.postService.GetAllPosts()
            .then(function (p) {
            _this.posts = p; //.slice(0,5);
        })
            .catch(function (error) {
            console.log(error);
        })
            .finally(function () {
            _this.isLoading = false;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/post-service/author-service.ts":
/*!************************************************!*\
  !*** ./src/app/post-service/author-service.ts ***!
  \************************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthorService = /** @class */ (function () {
    function AuthorService(http) {
        this.http = http;
        this.urlUsers = 'https://jsonplaceholder.typicode.com/users';
    }
    AuthorService.prototype.getAutores = function () {
        return this.http.get(this.urlUsers).toPromise();
    };
    AuthorService.prototype.getInfo = function (id) {
        return 'INFO DEL AUTHOR HARDCODEADAA POR QUE NO TENGO INTERNET SOY POBRE :(';
    };
    AuthorService.prototype.getImg = function (id) {
        return '../assets/apu.jpg';
    };
    AuthorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthorService);
    return AuthorService;
}());



/***/ }),

/***/ "./src/app/post-service/post-service.ts":
/*!**********************************************!*\
  !*** ./src/app/post-service/post-service.ts ***!
  \**********************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.urlPosts = 'https://jsonplaceholder.typicode.com/posts';
        this.urlUsers = 'https://jsonplaceholder.typicode.com/users';
        this.urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
        this.posts = [];
        this.lastId = 100;
    }
    PostService.prototype.getPost = function (d) {
        var _this = this;
        //  return this.http.get<IPost>(`${this.urlPosts}/${d}`).toPromise();
        return this.http.get(this.urlPosts + "/" + d)
            .toPromise().then(function (posts) {
            if (!posts) {
                return _this.posts.filter(function (p) {
                    p.id === d;
                })[0];
            }
            else {
                return posts;
            }
        });
    };
    PostService.prototype.GetAllPosts = function () {
        var _this = this;
        return this.http
            .get(this.urlPosts)
            .toPromise()
            .then(function (po) {
            return po.slice(0, 3).concat(_this.posts);
        });
    };
    PostService.prototype.getDaysAgo = function () {
        var _daysAgo;
        var _days = Math.round((Math.random() * 100));
        _daysAgo = "Publishied " + _days + " ago.";
        return _daysAgo;
    };
    PostService.prototype.pushPost = function (_post) {
        try {
            _post.id = this.getLastId();
            this.posts.push(_post);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    PostService.prototype.getLastId = function () {
        this.lastId = this.lastId + 1;
        return this.lastId;
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"blog-footer\">\r\n  Blog para projecto Angular - <strong> Abril - 2019 </strong>\r\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: ["./footer.component.scss"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n      <a class=\"navbar-brand\" href=\"#\">BLOG</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n          aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse justify-content-between\" id=\"navbarNav\">\r\n          <ul class=\"navbar-nav\">\r\n              <li class=\"nav-item active\">\r\n                  <a [routerLink]=\"[ '/home' ]\" \r\n                  routerLinkActive=\"active\"\r\n                  class=\"nav-link\">\r\n                  Home<span class=\"sr-only\">(current)</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a [routerLink]=\"[ '/about' ]\"\r\n                  class=\"nav-link\">\r\n                  About Us\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                    <a [routerLink]=\"[ '/form' ]\"\r\n                    class=\"nav-link\">\r\n                    Form - Posts\r\n                  </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a [routerLink]=\"[ '/newAuthor' ]\"\r\n                  class=\"nav-link\">\r\n                  Form - Authors\r\n                </a>\r\n            </li>\r\n          </ul>\r\n          <ul class=\"navbar-nav\">\r\n              <li class=\"nav-items\">\r\n                  <input type=\"text\" class=\"mr-1 input\" />\r\n                  <button class=\"btn btn-primary\">Search</button>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n  </nav>\r\n</header>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Full Solutions\Desktop\Da\v3\Blog-v2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map