webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n@import url(https://fonts.googleapis.com/css?family=Montserrat);\n/*custom font*/\n/*basic reset*/\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\n.body {\r\n    height: 100vh;\r\n    background: #6441A5; /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to left, #6441A5, #2a0845); /* Chrome 10-25, Safari 5.1-6 */\r\n}\nbody {\r\n    font-family: montserrat, arial, verdana;\r\n    background: transparent;\r\n}\n/*form styles*/\n#msform {\r\n    text-align: center;\r\n    position: relative;\r\n    margin-top: 30px;\r\n}\n#msform fieldset {\r\n    background: white;\r\n    border: 0 none;\r\n    border-radius: 0px;\r\n    -webkit-box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);\r\n            box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);\r\n    padding: 20px 30px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    width: 80%;\r\n    margin: 0 10%;\r\n\r\n    /*stacking fieldsets above each other*/\r\n    position: relative;\r\n}\n/*Hide all except first fieldset*/\n#msform fieldset:not(:first-of-type) {\r\n    display: none;\r\n}\n/*inputs*/\n#msform input, #msform textarea {\r\n    padding: 15px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 0px;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    font-family: montserrat;\r\n    color: #2C3E50;\r\n    font-size: 13px;\r\n}\n#msform input:focus, #msform textarea:focus {\r\n    -webkit-box-shadow: none !important;\r\n    box-shadow: none !important;\r\n    border: 1px solid #ee0979;\r\n    outline-width: 0;\r\n    transition: All 0.5s ease-in;\r\n    -webkit-transition: All 0.5s ease-in;\r\n    -moz-transition: All 0.5s ease-in;\r\n    -o-transition: All 0.5s ease-in;\r\n}\n/*buttons*/\n#msform .action-button {\r\n    width: 100px;\r\n    background: #ee0979;\r\n    font-weight: bold;\r\n    color: white;\r\n    border: 0 none;\r\n    border-radius: 25px;\r\n    cursor: pointer;\r\n    padding: 10px 5px;\r\n    margin: 10px 5px;\r\n}\n#msform .action-button:hover, #msform .action-button:focus {\r\n    -webkit-box-shadow: 0 0 0 2px white, 0 0 0 3px #ee0979;\r\n            box-shadow: 0 0 0 2px white, 0 0 0 3px #ee0979;\r\n}\n#msform .action-button-previous {\r\n    width: 100px;\r\n    background: #C5C5F1;\r\n    font-weight: bold;\r\n    color: white;\r\n    border: 0 none;\r\n    border-radius: 25px;\r\n    cursor: pointer;\r\n    padding: 10px 5px;\r\n    margin: 10px 5px;\r\n}\n#msform .action-button-previous:hover, #msform .action-button-previous:focus {\r\n    -webkit-box-shadow: 0 0 0 2px white, 0 0 0 3px #C5C5F1;\r\n            box-shadow: 0 0 0 2px white, 0 0 0 3px #C5C5F1;\r\n}\n/*headings*/\n.fs-title {\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n    color: #2C3E50;\r\n    margin-bottom: 10px;\r\n    letter-spacing: 2px;\r\n    font-weight: bold;\r\n}\n.fs-subtitle {\r\n    font-weight: normal;\r\n    font-size: 13px;\r\n    color: #666;\r\n    margin-bottom: 20px;\r\n}\n/*progressbar*/\n#progressbar {\r\n    margin-bottom: 30px;\r\n    overflow: hidden;\r\n    /*CSS counters to number the steps*/\r\n    counter-reset: step;\r\n}\n#progressbar li {\r\n    list-style-type: none;\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-size: 9px;\r\n    width: 50%;\r\n    float: left;\r\n    position: relative;\r\n    letter-spacing: 1px;\r\n}\n#progressbar li:before {\r\n    content: counter(step);\r\n    counter-increment: step;\r\n    width: 24px;\r\n    height: 24px;\r\n    line-height: 26px;\r\n    display: block;\r\n    font-size: 12px;\r\n    color: #333;\r\n    background: white;\r\n    border-radius: 25px;\r\n    margin: 0 auto 10px auto;\r\n}\n/*progressbar connectors*/\n#progressbar li:after {\r\n    content: '';\r\n    width: 100%;\r\n    height: 2px;\r\n    background: white;\r\n    position: absolute;\r\n    left: -50%;\r\n    top: 9px;\r\n    z-index: -1; /*put it behind the numbers*/\r\n}\n#progressbar li:first-child:after {\r\n    /*connector not needed before the first step*/\r\n    content: none;\r\n}\n/*marking active/completed steps green*/\n/*The number of the step and the connector before it = green*/\n#progressbar li.active:before, #progressbar li.active:after {\r\n    background: #ee0979;\r\n    color: white;\r\n}\n/* Not relevant to this form */\n.dme_link {\r\n    margin-top: 30px;\r\n    text-align: center;\r\n}\n.dme_link a {\r\n    background: #FFF;\r\n    font-weight: bold;\r\n    color: #ee0979;\r\n    border: 0 none;\r\n    border-radius: 25px;\r\n    cursor: pointer;\r\n    padding: 5px 25px;\r\n    font-size: 12px;\r\n}\n.dme_link a:hover, .dme_link a:focus {\r\n    background: #C5C5F1;\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n\n  <!-- MultiStep Form -->\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n\n    <div class=\"col-md-8\">\n\n      <form id=\"msform\" [formGroup]=\"loginForm\">\n\n        <!-- progressbar -->\n        <ul id=\"progressbar\">\n            <li class=\"active\">Personal Details</li>\n            <li>Confirm Email</li>\n        </ul>\n\n        <!-- fieldsets -->\n        <fieldset>\n            <h2 class=\"fs-title\">Personal Details</h2>\n            <h3 class=\"fs-subtitle\">Tell us something more about you</h3>\n            <input type=\"text\" formControlName=\"email\" name=\"email\" placeholder=\"Email\"/>\n            <input type=\"text\" formControlName=\"firstName\" name=\"fname\" placeholder=\"First Name\"/>\n            <input type=\"text\" formControlName=\"lastName\" name=\"lname\" placeholder=\"Last Name\"/>\n\n            <div class=\"form-group text-left mb-3\">\n              <label for=\"exampleFormControlSelect1\">Country or region</label>\n              <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                <option>Egypt</option>\n                <option>USA</option>\n                <option>Canda</option>\n                <option>Egypt</option>\n                <option>Egypt</option>\n              </select>\n            </div>\n\n            <input type=\"password\" formControlName=\"password\" name=\"pass\" placeholder=\"Password\" aria-describedby=\"passwordHelpBlock\"/>\n            <small id=\"passwordHelpBlock\" class=\"form-text text-muted\">\n              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.\n            </small>\n\n\n            <p class=\"text-left mt-2\">\n              IBM may use my contact data to keep me informed of products, services and offerings:\n            </p>\n\n            <div class=\"custom-control custom-checkbox text-left\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n              <label class=\"custom-control-label\" for=\"customCheck1\">By Email</label>\n            </div>\n\n\n            <input type=\"button\" name=\"next\" class=\"next action-button\" value=\"Continue\"/>\n        </fieldset>\n\n        <fieldset>\n            <h2 class=\"fs-title\">Confirm Email</h2>\n\n            <h3 class=\"text-left\">Check your email</h3>\n            <p class=\"text-left my-3\">For your security, we need to verify your identity. We sent a 7-digit code to <strong>ffffffffff@gmail.com</strong>. Please enter it below.</p>\n            \n            <input type=\"number\" name=\"code\" placeholder=\"code\"/>\n\n            <input type=\"button\" name=\"previous\" class=\"previous action-button-previous\" value=\"Previous\"/>\n            <input type=\"button\" name=\"next\" class=\"next action-button\" value=\"Verify\"/>\n        </fieldset>\n\n\n      </form>\n\n    </div>\n\n  </div>\n  <!-- /.MultiStep Form -->\n\n</div>\n\n<div class=\"mt-5\"></div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.title = 'app';
        this.loginForm = formBuilder.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].email])],
            'firstName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required])],
            'lastName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required])],
            'validate': ''
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".next").click(function () {
            if (animating)
                return false;
            animating = true;
            current_fs = __WEBPACK_IMPORTED_MODULE_1_jquery__(this).parent();
            next_fs = __WEBPACK_IMPORTED_MODULE_1_jquery__(this).parent().next();
            //activate next step on progressbar using the index of next_fs
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#progressbar li").eq(__WEBPACK_IMPORTED_MODULE_1_jquery__("fieldset").index(next_fs)).addClass("active");
            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50) + "%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'position': 'absolute'
                    });
                    next_fs.css({ 'left': left, 'opacity': opacity });
                },
                duration: 800,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
            });
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".previous").click(function () {
            if (animating)
                return false;
            animating = true;
            current_fs = __WEBPACK_IMPORTED_MODULE_1_jquery__(this).parent();
            previous_fs = __WEBPACK_IMPORTED_MODULE_1_jquery__(this).parent().prev();
            //de-activate current step on progressbar
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#progressbar li").eq(__WEBPACK_IMPORTED_MODULE_1_jquery__("fieldset").index(current_fs)).removeClass("active");
            //show the previous fieldset
            previous_fs.show();
            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1 - now) * 50) + "%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({ 'left': left });
                    previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
                },
                duration: 800,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
            });
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".submit").click(function () {
            return false;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map