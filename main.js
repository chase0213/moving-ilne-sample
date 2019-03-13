(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/moving-line/fesm5/moving-line.js":
/*!***********************************************!*\
  !*** ./dist/moving-line/fesm5/moving-line.js ***!
  \***********************************************/
/*! exports provided: AnimationDirection, MovingLineComponent, MovingLineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationDirection", function() { return AnimationDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingLineComponent", function() { return MovingLineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingLineModule", function() { return MovingLineModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var AnimationDirection = {
    Upward: 1,
    Downward: 2,
    Leftward: 3,
    Rightward: 4,
};
AnimationDirection[AnimationDirection.Upward] = 'Upward';
AnimationDirection[AnimationDirection.Downward] = 'Downward';
AnimationDirection[AnimationDirection.Leftward] = 'Leftward';
AnimationDirection[AnimationDirection.Rightward] = 'Rightward';
var MovingLineComponent = /** @class */ (function () {
    function MovingLineComponent() {
        this.show = false;
        this.content = "";
        this.height = '450px';
        this.width = '600px';
        this.background = 'rgba(172, 218, 253, 1.0)';
        this.color = 'rgba(0, 0, 0, 1.0)';
        this.boxShadow = '0 1px 3px 0 rgba(32, 32, 32, .6)';
        this.lineWidth = '2px';
        this.durations = [1.0, 1.0]; // sec
        // sec
        this.directions = [AnimationDirection.Downward, AnimationDirection.Rightward];
        this.transitionFuncs = ['easeInOutQuart', 'easeInOutQuart'];
        this.top = 'auto';
        this.bottom = 'auto';
        this.left = 'auto';
        this.right = 'auto';
        this.boxHeight = '2px';
        this.boxWidth = '2px';
        this.duration = '0.0s';
        this.timingFunc = 'easeInOutQuart';
        this.contentOpacity = 0.0;
        this.contentTransform = 'translateY(-8px)';
    }
    /**
     * @return {?}
     */
    MovingLineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    MovingLineComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.preprocess(this.directions);
        if (this.show) {
            this.startAnimation();
        }
    };
    /**
     * @return {?}
     */
    MovingLineComponent.prototype.startAnimation = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.boxHeight = this.lineWidth;
        this.boxWidth = this.lineWidth;
        this.playAnimation(this.directions[0], this.durations[0], this.transitionFuncs[0]);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.playAnimation(_this.directions[1], _this.durations[1], _this.transitionFuncs[1]);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.contentOpacity = 1.0;
                _this.contentTransform = 'translateY(0px)';
            }), 1000 * _this.durations[1]);
        }), 1000 * this.durations[0]);
    };
    /**
     * @private
     * @param {?} directions
     * @return {?}
     */
    MovingLineComponent.prototype.preprocess = /**
     * @private
     * @param {?} directions
     * @return {?}
     */
    function (directions) {
        var e_1, _a;
        try {
            for (var directions_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(directions), directions_1_1 = directions_1.next(); !directions_1_1.done; directions_1_1 = directions_1.next()) {
                var d = directions_1_1.value;
                switch (d) {
                    case AnimationDirection.Upward:
                        this.bottom = '0px';
                        break;
                    case AnimationDirection.Downward:
                        this.top = '0px';
                        break;
                    case AnimationDirection.Leftward:
                        this.right = '0px';
                        break;
                    case AnimationDirection.Rightward:
                        this.left = '0px';
                        break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (directions_1_1 && !directions_1_1.done && (_a = directions_1.return)) _a.call(directions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @param {?} direction
     * @param {?} duration
     * @param {?} transition
     * @return {?}
     */
    MovingLineComponent.prototype.playAnimation = /**
     * @private
     * @param {?} direction
     * @param {?} duration
     * @param {?} transition
     * @return {?}
     */
    function (direction, duration, transition) {
        this.duration = duration + 's';
        this.timingFunc = transition;
        switch (direction) {
            case AnimationDirection.Upward:
                this.playAnimationUpward();
                break;
            case AnimationDirection.Downward:
                this.playAnimationDownward();
                break;
            case AnimationDirection.Leftward:
                this.playAnimationLeftward();
                break;
            case AnimationDirection.Rightward:
                this.playAnimationRightward();
                break;
        }
    };
    /**
     * @private
     * @return {?}
     */
    MovingLineComponent.prototype.playAnimationUpward = /**
     * @private
     * @return {?}
     */
    function () {
        this.bottom = '0px';
        this.boxHeight = this.height;
    };
    /**
     * @private
     * @return {?}
     */
    MovingLineComponent.prototype.playAnimationDownward = /**
     * @private
     * @return {?}
     */
    function () {
        this.top = '0px';
        this.boxHeight = this.height;
    };
    /**
     * @private
     * @return {?}
     */
    MovingLineComponent.prototype.playAnimationLeftward = /**
     * @private
     * @return {?}
     */
    function () {
        this.right = '0px';
        this.boxWidth = this.width;
    };
    /**
     * @private
     * @return {?}
     */
    MovingLineComponent.prototype.playAnimationRightward = /**
     * @private
     * @return {?}
     */
    function () {
        this.left = '0px';
        this.boxWidth = this.width;
    };
    MovingLineComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'moving-line',
                    template: "\n    <div class=\"moving-line\" [style.height]=\"height\" [style.width]=\"width\">\n      <div class=\"moving-line__outer-container\">\n        <div class=\"moving-line__inner-container\"\n          [style.height]=\"boxHeight\"\n          [style.width]=\"boxWidth\"\n          [style.background]=\"background\"\n          [style.boxShadow]=\"boxShadow\"\n          [style.color]=\"color\"\n          [style.top]=\"top\"\n          [style.bottom]=\"bottom\"\n          [style.left]=\"left\"\n          [style.right]=\"right\"\n          [style.transitionTimingFunction]=\"timingFunc\"\n          [style.transitionDuration]=\"duration\">\n          <div class=\"embedded-content\"\n            [innerHTML]=\"content\"\n            [style.opacity]=\"contentOpacity\"\n            [style.transform]=\"contentTransform\"></div>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: [".moving-line__outer-container {\n      position: relative;\n      height: 100%;\n      width: 100%;\n    }",
                        ".moving-line__inner-container {\n      position: absolute;\n      height: 0;\n      width: 0;\n      overflow: hidden;\n      transition-property: height, width;\n    }",
                        ".embedded-content {\n      transition-property: transform, opacity;\n      transition-duration: 1.0s;\n    }"]
                }] }
    ];
    /** @nocollapse */
    MovingLineComponent.ctorParameters = function () { return []; };
    MovingLineComponent.propDecorators = {
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        boxShadow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        lineWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        durations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        directions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        transitionFuncs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return MovingLineComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MovingLineModule = /** @class */ (function () {
    function MovingLineModule() {
    }
    MovingLineModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [MovingLineComponent],
                    imports: [],
                    exports: [MovingLineComponent]
                },] }
    ];
    return MovingLineModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=moving-line.js.map

/***/ }),

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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<moving-line class=\"first-content\"\n             [content]=\"firstContent\"\n             [directions]=\"firstDirections\"\n             [show]=\"showFirstContent\"\n             [background]=\"'rgba(172, 218, 253, 1.0)'\"></moving-line>\n<moving-line class=\"second-content\"\n             [content]=\"secondContent\"\n             [directions]=\"secondDirections\"\n             [show]=\"showSecondContent\"\n             [background]=\"'rgba(32, 32, 32, 0.8)'\"\n             [color]=\"'rgba(255, 255, 255, 1.0)'\"></moving-line>\n"

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
/* harmony import */ var moving_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moving-line */ "./dist/moving-line/fesm5/moving-line.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.showFirstContent = false;
        this.showSecondContent = false;
        this.firstDirections = [
            moving_line__WEBPACK_IMPORTED_MODULE_2__["AnimationDirection"].Downward,
            moving_line__WEBPACK_IMPORTED_MODULE_2__["AnimationDirection"].Rightward,
        ];
        this.secondDirections = [
            moving_line__WEBPACK_IMPORTED_MODULE_2__["AnimationDirection"].Leftward,
            moving_line__WEBPACK_IMPORTED_MODULE_2__["AnimationDirection"].Upward,
        ];
        this.firstContent = "\n    <h1>Hello World</h1>\n    <p>This is embedded by the parent component</p>\n  ";
        this.secondContent = "\n    <h1>This is the second container</h1>\n    <p>This content is also embedded by the parent component</p>\n  ";
        setTimeout(function () {
            _this.showFirstContent = true;
            setTimeout(function () {
                _this.showSecondContent = true;
            }, 1600);
        }, 1000);
    }
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
/* harmony import */ var moving_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moving-line */ "./dist/moving-line/fesm5/moving-line.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                moving_line__WEBPACK_IMPORTED_MODULE_3__["MovingLineModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! /Users/chase0213/Documents/workspace/moving-line-sample/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map