"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mf_demo_remote_angular"] = self["webpackChunk_mf_demo_remote_angular"] || []).push([["src_bootstrap_ts"],{

/***/ "./src/app.component.ts"
/*!******************************!*\
  !*** ./src/app.component.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppComponent: () => (/* binding */ AppComponent)\n/* harmony export */ });\n/* harmony import */ var _registry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry.component */ \"./src/registry.component.ts\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ \"webpack/sharing/consume/default/@angular/core/@angular/core\");\n\n\nclass AppComponent {\n    static ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); };\n    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__[\"ɵɵdefineComponent\"]({ type: AppComponent, selectors: [[\"app-root\"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__[\"ɵɵStandaloneFeature\"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {\n            _angular_core__WEBPACK_IMPORTED_MODULE_1__[\"ɵɵelementStart\"](0, \"h1\");\n            _angular_core__WEBPACK_IMPORTED_MODULE_1__[\"ɵɵtext\"](1, \"remote-angular (standalone)\");\n            _angular_core__WEBPACK_IMPORTED_MODULE_1__[\"ɵɵelementEnd\"]();\n            _angular_core__WEBPACK_IMPORTED_MODULE_1__[\"ɵɵelement\"](2, \"app-registry\");\n        } }, dependencies: [_registry_component__WEBPACK_IMPORTED_MODULE_0__.RegistryComponent], encapsulation: 2 });\n}\n\n\n//# sourceURL=webpack://@mf-demo/remote-angular/./src/app.component.ts?\n}");

/***/ },

/***/ "./src/bootstrap.ts"
/*!**************************!*\
  !*** ./src/bootstrap.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ \"../node_modules/@angular/compiler/fesm2022/compiler.mjs\");\n/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js */ \"../node_modules/zone.js/fesm2015/zone.js\");\n/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ \"webpack/sharing/consume/default/@angular/core/@angular/core\");\n/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ \"../node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs\");\n/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ \"./src/app.component.ts\");\n\n\n\n\n\n(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.createApplication)().then((appRef) => {\n    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.createComponent)(_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, {\n        hostElement: document.getElementById('app'),\n        environmentInjector: appRef.injector,\n    });\n});\n\n\n//# sourceURL=webpack://@mf-demo/remote-angular/./src/bootstrap.ts?\n}");

/***/ },

/***/ "./src/registry.component.ts"
/*!***********************************!*\
  !*** ./src/registry.component.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RegistryComponent: () => (/* binding */ RegistryComponent)\n/* harmony export */ });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"webpack/sharing/consume/default/@angular/core/@angular/core\");\n\n\nclass RegistryComponent {\n    count = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(0);\n    doubled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this.count() * 2);\n    inc() {\n        this.count.update((c) => c + 1);\n    }\n    static ɵfac = function RegistryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegistryComponent)(); };\n    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineComponent\"]({ type: RegistryComponent, selectors: [[\"app-registry\"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵStandaloneFeature\"]], decls: 9, vars: 2, consts: [[3, \"click\"]], template: function RegistryComponent_Template(rf, ctx) { if (rf & 1) {\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"section\")(1, \"h2\");\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](2, \"\\u0420\\u0435\\u0435\\u0441\\u0442\\u0440 (remote-angular)\");\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](3, \"p\");\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](4);\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](5, \"p\");\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](6);\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](7, \"button\", 0);\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵlistener\"](\"click\", function RegistryComponent_Template_button_click_7_listener() { return ctx.inc(); });\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](8, \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C\");\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]()();\n        } if (rf & 2) {\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](4);\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtextInterpolate1\"](\"\\u0417\\u0430\\u043F\\u0438\\u0441\\u0435\\u0439: \", ctx.count(), \"\");\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](2);\n            _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtextInterpolate1\"](\"\\u0423\\u0434\\u0432\\u043E\\u0435\\u043D\\u043E: \", ctx.doubled(), \"\");\n        } }, encapsulation: 2 });\n}\n\n\n//# sourceURL=webpack://@mf-demo/remote-angular/./src/registry.component.ts?\n}");

/***/ }

}]);