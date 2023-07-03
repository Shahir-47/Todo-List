/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/pageLoad.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/pageLoad.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/sun.svg */ "./src/assets/img/sun.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/moon.svg */ "./src/assets/img/moon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    --sidebar-bg-color: #15202b;
    --content-text-color: #dddddd;
    --title-box-color: #dddddd;
    --item-focus-color: #1f2937;
    --search-box-bg-color: #192734;
    --search-input-color: #dddddd;
    --search-btn-bg-color: #313e4b;
    --logo-color: #dddddd;
    --toggle-switch-bg-color: #6b757e;
    --toggle-switch-border-color: #2ca9bc;
    --footer-color: #dddddd;
    --footer-active: #ffffff;
    background-color: #15202b;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #dddddd;
}

body.light-theme{
    background-color: #ffffff;
    --sidebar-bg-color: rgb(255, 255, 255);
    --content-text-color: rgb(0, 0, 0);
    color: #000000;
    --title-box-color: #000000;
    --item-focus-color: rgb(131 131 131 / 30%);
    --search-box-bg-color: #ffffff;
    --search-input-color: #000000;
    --search-btn-bg-color: #e9e5e5;
    --logo-color: #000000;
    --toggle-switch-bg-color: #ffffff;
    --toggle-switch-border-color: #fb8a09;
    --footer-color: #000000;
    --footer-active: #898d91;
}

body.light-theme img:not(.logo-box img){
    filter: invert(1);
}

div#content {
    display: flex;
    flex-direction: row;
    position: relative;
    min-height: 100vh;
    color: var(--content-text-color);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.sidebar-content {
    width: 250px;
    background-color: var(--sidebar-bg-color);
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: stretch;
    padding: 0;
    padding-left: 1rem;
    position: fixed;
    left: 0;
    height: 100%;
    overflow-y: hidden;
    z-index: 1;
    flex-grow: 1;
  
    &:hover {
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: #aaa #eee;
    }
  
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
  
    &::-webkit-scrollbar-track {
      background-color: #eee;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #aaa;
      border-radius: 4px;
    }
}

.box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
}

.box:first-of-type {
    padding-top: 0;
}

.title-box {
    border-bottom: 2px solid var(--title-box-color);
    margin-right: 1rem;
}

.title-box h2 {
    font-size: 1.4rem;
    font-weight: 900;
    margin-bottom: 0.25rem;
    margin-top: 0;
    padding-left: 0.25rem;
}

.items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.item {
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    transition: all 0.3s ease;
    border-radius: 0.25rem;
    margin: 0 0.25rem;
    cursor: pointer;
}

.item-row {
    display:flex;
    flex-direction:row;
}

.item-column {
    display:flex;
    flex-direction:column;
}

.item:hover {
    background-color: var(--item-focus-color);
    filter: brightness(1.2);
}

.active {
    background-color: var(--item-focus-color);
    filter: brightness(1.2);
}

.not-active {
    background-color: transparent;
}

.item img {
    width: 1.5rem;
    height: auto;
    cursor: pointer;
}

.item:nth-of-type(3) {
    padding-left: 0.375rem;
}

.item:nth-of-type(3) img {
    width: 1.8rem;
    height: auto;
}

.item p {
    font-weight: 500;
    margin: 0;
    cursor: pointer;
}

.item-reg {
    margin-right: 1rem;
}

.item-reg p {
    font-size: 1.1rem;
}

.item-mini p {
    font-size: 0.8rem;
}

.nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--sidebar-bg-color);
    width: calc(100% - 2rem);
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 0 1rem;
    /* -webkit-box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76); 
    box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76); */
}

.search-box {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    padding-right: 0;
    background-color: var(--search-box-bg-color);
    border-radius: 3.9375rem;
}

.search-box.light-theme {
   border: 1px solid #bcb8b8;
}

.search-box input {
    border: none;
    /* background-color: #192734;
    border-radius: 3.9375rem; */
    background-color: transparent;
    border: hsl(0, 0%, 18.82%);
    color: var(--search-input-color);
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem;
    flex: 1;
}

.search-box input:focus {
    outline: none;
}

.search-box button {
    border: none;
    background-color: var(--search-btn-bg-color);
    color: #dddddd;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem;
    cursor: pointer;
    height: 100%;
    width: 3.5rem;
    border-top-right-radius: 3.9375rem;
    border-bottom-right-radius: 3.9375rem;
}

.search-box img {
    width: 1.5rem;
    height: auto;
}

.search-box button:hover,
.search-box button:active {
    filter: brightness(1.2);
}

.logo-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
}

.logo-box img {
    width: 2.5rem;
    height: auto;
}


.logo-box:hover,
.logo-box:active {
    filter: brightness(1.2);
}

.logo-box a h1 {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--logo-color);
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
}

.container {
    display: flex;
    flex-direction: row;
    margin-top: 50px; /* adjust as needed to prevent content from being overlapped by the header */
  }

.left-box {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.left-box .menu-button img{
    width: 2rem;
    height: auto;
}


.menu-button{
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    color: inherit;
    font: inherit;
    cursor: pointer;
    outline: none;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
}

.menu-button:hover,
.menu-button:active {
    filter: brightness(1.2);
    background-color: var(--item-focus-color);
}

.toggle-switch {
    position: relative;
    width: 65px;
    height: 30px;
    background-color: var(--toggle-switch-bg-color);
    border-radius: 26px;
    overflow: hidden;
    border: 3px solid var(--toggle-switch-border-color);
}
  
.toggle-switch input {
    display: none;
}
  
.toggle-switch label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
  
.toggle-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
}
  
.toggle-icon-light {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/cover no-repeat;
    right: 6px;
    top: 4.5px;
    transform: translateX(0%);
}
  
.toggle-icon-dark {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) center/cover no-repeat;
    left: 5px;
    top: 5px;
    transform: translateX(0%);
}
  
.slider {
    position: absolute;
    top: 3px;
    left: 5px;
    width: 24px;
    height: 24px;
    background-color: #2ca9bc;
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
  
input:checked + label .slider {
    transform: translateX(33px);
    background-color: #fb8a09;
}

footer{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: absolute;
    bottom: 0.5rem; 
    width: 100%;
    height: 2.5rem;     
}

footer a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 100;
    color: var(--footer-color);
}

footer p {
    margin: 0.5rem 0;
}

footer a:hover,
footer a:active {
    color: var(--footer-active);
}

footer.light-theme a:hover img,
footer.light-theme a:active img {
    filter: invert(0.4);
}


footer a:hover img,
footer a:active img {
    filter: brightness(1.2);
}

.at-symbol {
    font-weight: 900;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

footer img {
    width: 2rem;
    height: auto;
}
`, "",{"version":3,"sources":["webpack://./src/css/pageLoad.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    --sidebar-bg-color: #15202b;\n    --content-text-color: #dddddd;\n    --title-box-color: #dddddd;\n    --item-focus-color: #1f2937;\n    --search-box-bg-color: #192734;\n    --search-input-color: #dddddd;\n    --search-btn-bg-color: #313e4b;\n    --logo-color: #dddddd;\n    --toggle-switch-bg-color: #6b757e;\n    --toggle-switch-border-color: #2ca9bc;\n    --footer-color: #dddddd;\n    --footer-active: #ffffff;\n    background-color: #15202b;\n    margin: 0;\n    padding: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #dddddd;\n}\n\nbody.light-theme{\n    background-color: #ffffff;\n    --sidebar-bg-color: rgb(255, 255, 255);\n    --content-text-color: rgb(0, 0, 0);\n    color: #000000;\n    --title-box-color: #000000;\n    --item-focus-color: rgb(131 131 131 / 30%);\n    --search-box-bg-color: #ffffff;\n    --search-input-color: #000000;\n    --search-btn-bg-color: #e9e5e5;\n    --logo-color: #000000;\n    --toggle-switch-bg-color: #ffffff;\n    --toggle-switch-border-color: #fb8a09;\n    --footer-color: #000000;\n    --footer-active: #898d91;\n}\n\nbody.light-theme img:not(.logo-box img){\n    filter: invert(1);\n}\n\ndiv#content {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    min-height: 100vh;\n    color: var(--content-text-color);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.sidebar-content {\n    width: 250px;\n    background-color: var(--sidebar-bg-color);\n    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: stretch;\n    padding: 0;\n    padding-left: 1rem;\n    position: fixed;\n    left: 0;\n    height: 100%;\n    overflow-y: hidden;\n    z-index: 1;\n    flex-grow: 1;\n  \n    &:hover {\n        overflow-y: auto;\n        scrollbar-width: thin;\n        scrollbar-color: #aaa #eee;\n    }\n  \n    &::-webkit-scrollbar {\n      width: 8px;\n      height: 8px;\n    }\n  \n    &::-webkit-scrollbar-track {\n      background-color: #eee;\n      border-radius: 4px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: #aaa;\n      border-radius: 4px;\n    }\n}\n\n.box {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem 0;\n}\n\n.box:first-of-type {\n    padding-top: 0;\n}\n\n.title-box {\n    border-bottom: 2px solid var(--title-box-color);\n    margin-right: 1rem;\n}\n\n.title-box h2 {\n    font-size: 1.4rem;\n    font-weight: 900;\n    margin-bottom: 0.25rem;\n    margin-top: 0;\n    padding-left: 0.25rem;\n}\n\n.items {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.item {\n    align-items: center;\n    gap: 1rem;\n    padding: 0.5rem;\n    transition: all 0.3s ease;\n    border-radius: 0.25rem;\n    margin: 0 0.25rem;\n    cursor: pointer;\n}\n\n.item-row {\n    display:flex;\n    flex-direction:row;\n}\n\n.item-column {\n    display:flex;\n    flex-direction:column;\n}\n\n.item:hover {\n    background-color: var(--item-focus-color);\n    filter: brightness(1.2);\n}\n\n.active {\n    background-color: var(--item-focus-color);\n    filter: brightness(1.2);\n}\n\n.not-active {\n    background-color: transparent;\n}\n\n.item img {\n    width: 1.5rem;\n    height: auto;\n    cursor: pointer;\n}\n\n.item:nth-of-type(3) {\n    padding-left: 0.375rem;\n}\n\n.item:nth-of-type(3) img {\n    width: 1.8rem;\n    height: auto;\n}\n\n.item p {\n    font-weight: 500;\n    margin: 0;\n    cursor: pointer;\n}\n\n.item-reg {\n    margin-right: 1rem;\n}\n\n.item-reg p {\n    font-size: 1.1rem;\n}\n\n.item-mini p {\n    font-size: 0.8rem;\n}\n\n.nav-bar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: var(--sidebar-bg-color);\n    width: calc(100% - 2rem);\n    z-index: 2;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 2rem;\n    padding: 0 1rem;\n    /* -webkit-box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76); \n    box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76); */\n}\n\n.search-box {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    padding: 0 1rem;\n    padding-right: 0;\n    background-color: var(--search-box-bg-color);\n    border-radius: 3.9375rem;\n}\n\n.search-box.light-theme {\n   border: 1px solid #bcb8b8;\n}\n\n.search-box input {\n    border: none;\n    /* background-color: #192734;\n    border-radius: 3.9375rem; */\n    background-color: transparent;\n    border: hsl(0, 0%, 18.82%);\n    color: var(--search-input-color);\n    font-size: 1rem;\n    font-weight: 500;\n    padding: 0.5rem;\n    flex: 1;\n}\n\n.search-box input:focus {\n    outline: none;\n}\n\n.search-box button {\n    border: none;\n    background-color: var(--search-btn-bg-color);\n    color: #dddddd;\n    font-size: 1rem;\n    font-weight: 500;\n    padding: 0.5rem;\n    cursor: pointer;\n    height: 100%;\n    width: 3.5rem;\n    border-top-right-radius: 3.9375rem;\n    border-bottom-right-radius: 3.9375rem;\n}\n\n.search-box img {\n    width: 1.5rem;\n    height: auto;\n}\n\n.search-box button:hover,\n.search-box button:active {\n    filter: brightness(1.2);\n}\n\n.logo-box {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    cursor: pointer;\n}\n\n.logo-box img {\n    width: 2.5rem;\n    height: auto;\n}\n\n\n.logo-box:hover,\n.logo-box:active {\n    filter: brightness(1.2);\n}\n\n.logo-box a h1 {\n    font-size: 1.6rem;\n    font-weight: 700;\n    color: var(--logo-color);\n    cursor: pointer;\n    transition: all 0.3s ease;\n    margin-top: 10px;\n}\n\n.container {\n    display: flex;\n    flex-direction: row;\n    margin-top: 50px; /* adjust as needed to prevent content from being overlapped by the header */\n  }\n\n.left-box {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n.left-box .menu-button img{\n    width: 2rem;\n    height: auto;\n}\n\n\n.menu-button{\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: transparent;\n    color: inherit;\n    font: inherit;\n    cursor: pointer;\n    outline: none;\n    border-radius: 50%;\n    width: 3rem;\n    height: 3rem;\n}\n\n.menu-button:hover,\n.menu-button:active {\n    filter: brightness(1.2);\n    background-color: var(--item-focus-color);\n}\n\n.toggle-switch {\n    position: relative;\n    width: 65px;\n    height: 30px;\n    background-color: var(--toggle-switch-bg-color);\n    border-radius: 26px;\n    overflow: hidden;\n    border: 3px solid var(--toggle-switch-border-color);\n}\n  \n.toggle-switch input {\n    display: none;\n}\n  \n.toggle-switch label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n}\n  \n.toggle-icon {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n    transition: transform 0.3s ease;\n}\n  \n.toggle-icon-light {\n    background: url('../assets/img/sun.svg') center/cover no-repeat;\n    right: 6px;\n    top: 4.5px;\n    transform: translateX(0%);\n}\n  \n.toggle-icon-dark {\n    background: url('../assets/img/moon.svg') center/cover no-repeat;\n    left: 5px;\n    top: 5px;\n    transform: translateX(0%);\n}\n  \n.slider {\n    position: absolute;\n    top: 3px;\n    left: 5px;\n    width: 24px;\n    height: 24px;\n    background-color: #2ca9bc;\n    border-radius: 50%;\n    transition: transform 0.3s ease;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n  \ninput:checked + label .slider {\n    transform: translateX(33px);\n    background-color: #fb8a09;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    position: absolute;\n    bottom: 0.5rem; \n    width: 100%;\n    height: 2.5rem;     \n}\n\nfooter a {\n    display: flex;\n    align-items: center;\n    gap: 0.6rem;\n    text-decoration: none;\n    font-size: 1.1rem;\n    font-weight: 100;\n    color: var(--footer-color);\n}\n\nfooter p {\n    margin: 0.5rem 0;\n}\n\nfooter a:hover,\nfooter a:active {\n    color: var(--footer-active);\n}\n\nfooter.light-theme a:hover img,\nfooter.light-theme a:active img {\n    filter: invert(0.4);\n}\n\n\nfooter a:hover img,\nfooter a:active img {\n    filter: brightness(1.2);\n}\n\n.at-symbol {\n    font-weight: 900;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nfooter img {\n    width: 2rem;\n    height: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/pageLoad.css":
/*!******************************!*\
  !*** ./src/css/pageLoad.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pageLoad_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./pageLoad.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/pageLoad.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pageLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pageLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pageLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pageLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/footer.js":
/*!*********************************!*\
  !*** ./src/functions/footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_img_git_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/git.svg */ "./src/assets/img/git.svg");


const footer = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const gitHubProfile = document.createElement('a');
    gitHubProfile.href = 'https://github.com/Shahir-47';

    const gitHubProfileImg = document.createElement('img');
    gitHubProfileImg.src = _assets_img_git_svg__WEBPACK_IMPORTED_MODULE_0__;
    gitHubProfileImg.alt = 'gitHub Logo';
    

    const gitHubProfileText = document.createElement('p');
    const atSymbol = document.createElement('span');
    atSymbol.classList.add('at-symbol');
    atSymbol.textContent = '@';
    const username = document.createElement('span');
    username.textContent = 'Shahir-47';
    gitHubProfileText.appendChild(atSymbol);
    gitHubProfileText.appendChild(username);
    
    gitHubProfile.appendChild(gitHubProfileImg);
    gitHubProfile.appendChild(gitHubProfileText);

    const seperator = document.createElement('p');
    seperator.textContent = '|';

    const gitHubRepo = document.createElement('a');
    gitHubRepo.href = 'https://github.com/Shahir-47/Todo-List';
    gitHubRepo.textContent = 'Source Code';

    footer.appendChild(gitHubProfile);
    footer.appendChild(seperator);
    footer.appendChild(gitHubRepo);

    document.querySelector('div#content').appendChild(footer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

/***/ "./src/functions/header.js":
/*!*********************************!*\
  !*** ./src/functions/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_img_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/icon.svg */ "./src/assets/img/icon.svg");
/* harmony import */ var _assets_img_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/menu.svg */ "./src/assets/img/menu.svg");
/* harmony import */ var _assets_img_search_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/search.svg */ "./src/assets/img/search.svg");




const header = () => {
    const bar = document.createElement('div');
    bar.classList.add('nav-bar');

    const leftBox = document.createElement('div');
    leftBox.classList.add('left-box');

    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    const menuIcon = document.createElement('img');
    menuIcon.src = _assets_img_menu_svg__WEBPACK_IMPORTED_MODULE_1__;
    menuIcon.alt = 'Menu icon';
    menuButton.appendChild(menuIcon);
    leftBox.appendChild(menuButton);

    const logoBox = document.createElement('div');
    logoBox.classList.add('logo-box');
    const logo = document.createElement('img');
    logo.src = _assets_img_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
    logo.alt = 'Todo List logo';
    const logoLink = document.createElement('a');
    logoLink.appendChild(logo);
    logoBox.appendChild(logoLink);
    const logoText = document.createElement('h1');
    logoText.textContent = 'Todo List';
    const logoLink2 = document.createElement('a');
    logoLink2.appendChild(logoText);
    logoBox.appendChild(logoLink2);
    leftBox.appendChild(logoBox);

    bar.appendChild(leftBox);

    const searchBox = document.createElement('div');
    searchBox.classList.add('search-box');
    const searchInput = document.createElement('input');
    searchInput.classList.add('search-input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search';
    searchBox.appendChild(searchInput);
    const searchButton = document.createElement('button');
    searchButton.classList.add('search-button');
    searchBox.appendChild(searchButton);
    const searchIcon = document.createElement('img');
    searchIcon.src = _assets_img_search_svg__WEBPACK_IMPORTED_MODULE_2__;
    searchIcon.alt = 'Search icon';
    searchButton.appendChild(searchIcon);

    bar.appendChild(searchBox);

    const toggleBox = document.createElement('div');
    toggleBox.classList.add('toggle-switch');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.setAttribute('id', 'theme-toggle');
    const label = document.createElement('label');
    label.setAttribute('for', 'theme-toggle');
    const light = document.createElement('span');
    light.classList.add('toggle-icon');
    light.classList.add('toggle-icon-light');
    const dark = document.createElement('span');
    dark.classList.add('toggle-icon');
    dark.classList.add('toggle-icon-dark');
    const slider = document.createElement('span');
    slider.classList.add('slider');

    label.appendChild(light);
    label.appendChild(dark);
    label.appendChild(slider);

    toggleBox.appendChild(checkBox);
    toggleBox.appendChild(label);


    bar.appendChild(toggleBox);

    document.querySelector('div#content').appendChild(bar);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/functions/sidebar.js":
/*!**********************************!*\
  !*** ./src/functions/sidebar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   miniSidebar: () => (/* binding */ miniSidebar),
/* harmony export */   sidebar: () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _assets_img_all_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/all.svg */ "./src/assets/img/all.svg");
/* harmony import */ var _assets_img_today_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/today.svg */ "./src/assets/img/today.svg");
/* harmony import */ var _assets_img_week_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/week.svg */ "./src/assets/img/week.svg");
/* harmony import */ var _assets_img_important_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/important.svg */ "./src/assets/img/important.svg");
/* harmony import */ var _assets_img_completed_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/completed.svg */ "./src/assets/img/completed.svg");
/* harmony import */ var _assets_img_newNote_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/newNote.svg */ "./src/assets/img/newNote.svg");
/* harmony import */ var _assets_img_newProject_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/newProject.svg */ "./src/assets/img/newProject.svg");
/* harmony import */ var _assets_img_allProjects_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/img/allProjects.svg */ "./src/assets/img/allProjects.svg");
/* harmony import */ var _assets_img_starredProjects_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/img/starredProjects.svg */ "./src/assets/img/starredProjects.svg");
/* harmony import */ var _assets_img_allNotes_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/img/allNotes.svg */ "./src/assets/img/allNotes.svg");
/* harmony import */ var _assets_img_starredNote_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/img/starredNote.svg */ "./src/assets/img/starredNote.svg");
// import all the icons












// Create a sidebar item
const createSidebarItems = (icon, text, barType) => { 
    const item = document.createElement('div');
    item.classList.add('item');
    if (barType === 'mini') {
        item.classList.remove('item-row');
        item.classList.add('item-column');
        item.classList.add('item-mini');
        item.classList.remove('item-reg')
    } else {
        item.classList.remove('item-column');
        item.classList.add('item-row');
        item.classList.add('item-reg');
        item.classList.remove('item-mini');
    }
    const itemIcon = document.createElement('img');
    itemIcon.src = icon;
    itemIcon.alt = text;
    const itemText = document.createElement('p');
    itemText.textContent = text;
    item.appendChild(itemIcon);
    item.appendChild(itemText);
    return item;
}

// All the data u want to display in the sidebar gets added and accessed from here
const sidebarData = (() => {
    
    let sidebarLog = []

    const getSidebarData = () => sidebarLog;

    const removeAll = () => {
        sidebarLog = [];
    }

    const removeSidebarCategory = (title) => {
        if (typeof title !== 'string') {
            throw new Error('Title must be a string');
        }
        sidebarLog = sidebarLog.filter((category) => category.title !== title);
    }

    const removeSidebarItem = (title, text) => {
        if (typeof title !== 'string') {
            throw new Error('Title must be a string');
        }
        if (typeof text !== 'string') {
            throw new Error('Text must be a string');
        }
        const category = sidebarLog.find((category) => category.title === title);
        if (!category) {
            throw new Error('Category not found');
        }
        category.items = category.items.filter((item) => item.text !== text);
    }

    const addSidebarCategory = (title, items = []) => {
        if (typeof title !== 'string') {
            throw new Error('Title must be a string');
        }
        if (!Array.isArray(items)) {
            throw new Error('Items must be an array');
        }
        sidebarLog.push({ title, items });
    }

    const addSidebarItem = (title, icon, text) => {
        if (typeof title !== 'string') {
            throw new Error('Title must be a string');
        }
        if (typeof icon !== 'string') {
            throw new Error('Icon must be a string');
        }
        if (typeof text !== 'string') {
            throw new Error('Text must be a string');
        }
        
        const category = sidebarLog.find((category) => category.title === title);
        if (!category) {
            throw new Error('Category not found');
        }
        category.items.push({ icon, text });
    }

    return {getSidebarData, addSidebarCategory, addSidebarItem, removeSidebarCategory, removeSidebarItem, removeAll }

})();

const createSidebarCategory = (data, barType = "full") => {
    // find the height of the nav-bar
    const top = document.querySelector('.nav-bar').offsetHeight;

    // adjust the height and position according to the header height
    const sidebarContent = document.createElement('div');
    sidebarContent.classList.add('sidebar-content');
    sidebarContent.style.height = 'calc(100vh - ' + (top - 0.5) + 'px)';
    sidebarContent.style.marginTop = (top - 0.5) + 'px';

    if (barType === 'mini') {
        sidebarContent.classList.add('mini');
        sidebarContent.classList.remove('full');
        sidebarContent.style.padding = '0'
        sidebarContent.style.width = '87px';
    } else {
        sidebarContent.classList.add('full');
        sidebarContent.classList.remove('mini');
        sidebarContent.style.padding = '0';
        sidebarContent.style.paddingLeft = '1rem';
        sidebarContent.style.width = '250px';
    }

    //create a div for each category
    for (let i = 0; i < data.length; i++) {

        const Box = document.createElement('div');
        Box.classList.add('box');

        if (barType !== 'mini') {
            const titleBox = document.createElement('div');
            titleBox.classList.add('title-box');
            const title = document.createElement('h2');
            title.textContent = data[i].title;
            titleBox.appendChild(title);
            Box.appendChild(titleBox);
            Box.appendChild(titleBox);
        }

        const Items = document.createElement('div');
        Items.classList.add('items');
        // create an item for each item in the category
        for (let j = 0; j < data[i].items.length; j++) {
            const item = createSidebarItems(data[i].items[j].icon, data[i].items[j].text, barType);
            Items.appendChild(item);
        }

        Box.appendChild(Items);
        sidebarContent.appendChild(Box);
    }
    return sidebarContent;

}

const sidebar = () => {

    if (document.querySelector('.sidebar-content')) {
        if (document.querySelector('.sidebar-content').classList.contains('full')) {
            return;
        } else {
            document.querySelector('.sidebar-content').remove();
        }
    }
    // Add home, projects, and notes to sidebar
    sidebarData.removeAll();
    sidebarData.addSidebarCategory('Home');
    sidebarData.addSidebarItem('Home', _assets_img_all_svg__WEBPACK_IMPORTED_MODULE_0__, 'All');
    sidebarData.addSidebarItem('Home', _assets_img_today_svg__WEBPACK_IMPORTED_MODULE_1__, 'Today');
    sidebarData.addSidebarItem('Home', _assets_img_week_svg__WEBPACK_IMPORTED_MODULE_2__, 'Week');
    sidebarData.addSidebarItem('Home', _assets_img_important_svg__WEBPACK_IMPORTED_MODULE_3__, 'Important');
    sidebarData.addSidebarItem('Home', _assets_img_completed_svg__WEBPACK_IMPORTED_MODULE_4__, 'Completed');

    sidebarData.addSidebarCategory('Projects');
    sidebarData.addSidebarItem('Projects', _assets_img_newProject_svg__WEBPACK_IMPORTED_MODULE_6__, 'New Project');
    sidebarData.addSidebarItem('Projects', _assets_img_allProjects_svg__WEBPACK_IMPORTED_MODULE_7__, 'All Projects');
    sidebarData.addSidebarItem('Projects', _assets_img_starredProjects_svg__WEBPACK_IMPORTED_MODULE_8__, 'Starred Projects');

    sidebarData.addSidebarCategory('Notes');
    sidebarData.addSidebarItem('Notes', _assets_img_newNote_svg__WEBPACK_IMPORTED_MODULE_5__, 'New Note');
    sidebarData.addSidebarItem('Notes', _assets_img_allNotes_svg__WEBPACK_IMPORTED_MODULE_9__, 'All Notes');
    sidebarData.addSidebarItem('Notes', _assets_img_starredNote_svg__WEBPACK_IMPORTED_MODULE_10__, 'Starred Notes');  

    // Add sidebar to content
    document.querySelector('#content').appendChild(createSidebarCategory(sidebarData.getSidebarData()));
}

const miniSidebar = () => {

    if (document.querySelector('.sidebar-content')) {
        if (document.querySelector('.sidebar-content').classList.contains('mini')) {
            return;
        } else {
            document.querySelector('.sidebar-content').remove();
        }
    }

    sidebarData.removeAll();
    sidebarData.addSidebarCategory('Home');
    sidebarData.addSidebarItem('Home', _assets_img_all_svg__WEBPACK_IMPORTED_MODULE_0__, 'All');
    sidebarData.addSidebarItem('Home', _assets_img_today_svg__WEBPACK_IMPORTED_MODULE_1__, 'Today');
    sidebarData.addSidebarItem('Home', _assets_img_week_svg__WEBPACK_IMPORTED_MODULE_2__, 'Week');
    sidebarData.addSidebarItem('Home', _assets_img_important_svg__WEBPACK_IMPORTED_MODULE_3__, 'Important');
    sidebarData.addSidebarItem('Home', _assets_img_completed_svg__WEBPACK_IMPORTED_MODULE_4__, 'Completed');
    document.querySelector('#content').appendChild(createSidebarCategory(sidebarData.getSidebarData(), 'mini'));
    
}



/***/ }),

/***/ "./src/assets/img/all.svg":
/*!********************************!*\
  !*** ./src/assets/img/all.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/all.svg";

/***/ }),

/***/ "./src/assets/img/allNotes.svg":
/*!*************************************!*\
  !*** ./src/assets/img/allNotes.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/allNotes.svg";

/***/ }),

/***/ "./src/assets/img/allProjects.svg":
/*!****************************************!*\
  !*** ./src/assets/img/allProjects.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/allProjects.svg";

/***/ }),

/***/ "./src/assets/img/completed.svg":
/*!**************************************!*\
  !*** ./src/assets/img/completed.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/completed.svg";

/***/ }),

/***/ "./src/assets/img/git.svg":
/*!********************************!*\
  !*** ./src/assets/img/git.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/git.svg";

/***/ }),

/***/ "./src/assets/img/icon.svg":
/*!*********************************!*\
  !*** ./src/assets/img/icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/icon.svg";

/***/ }),

/***/ "./src/assets/img/important.svg":
/*!**************************************!*\
  !*** ./src/assets/img/important.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/important.svg";

/***/ }),

/***/ "./src/assets/img/menu.svg":
/*!*********************************!*\
  !*** ./src/assets/img/menu.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/menu.svg";

/***/ }),

/***/ "./src/assets/img/moon.svg":
/*!*********************************!*\
  !*** ./src/assets/img/moon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/moon.svg";

/***/ }),

/***/ "./src/assets/img/newNote.svg":
/*!************************************!*\
  !*** ./src/assets/img/newNote.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/newNote.svg";

/***/ }),

/***/ "./src/assets/img/newProject.svg":
/*!***************************************!*\
  !*** ./src/assets/img/newProject.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/newProject.svg";

/***/ }),

/***/ "./src/assets/img/search.svg":
/*!***********************************!*\
  !*** ./src/assets/img/search.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/search.svg";

/***/ }),

/***/ "./src/assets/img/starredNote.svg":
/*!****************************************!*\
  !*** ./src/assets/img/starredNote.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/starredNote.svg";

/***/ }),

/***/ "./src/assets/img/starredProjects.svg":
/*!********************************************!*\
  !*** ./src/assets/img/starredProjects.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/starredProjects.svg";

/***/ }),

/***/ "./src/assets/img/sun.svg":
/*!********************************!*\
  !*** ./src/assets/img/sun.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/sun.svg";

/***/ }),

/***/ "./src/assets/img/today.svg":
/*!**********************************!*\
  !*** ./src/assets/img/today.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/today.svg";

/***/ }),

/***/ "./src/assets/img/week.svg":
/*!*********************************!*\
  !*** ./src/assets/img/week.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/week.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_pageLoad_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/pageLoad.css */ "./src/css/pageLoad.css");
/* harmony import */ var _functions_sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/sidebar.js */ "./src/functions/sidebar.js");
/* harmony import */ var _functions_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/header.js */ "./src/functions/header.js");
/* harmony import */ var _functions_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/footer */ "./src/functions/footer.js");
//import all css files
//import required pics




console.log('I get called from print.js!');

(0,_functions_header_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_functions_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.sidebar)();
(0,_functions_footer__WEBPACK_IMPORTED_MODULE_3__["default"])();

// Event listener to maximize/minimize sidebar
document.querySelector('#content').addEventListener('click', (event) => {
    if (event.target.closest('.menu-button')) {
        const sidebarContent = document.querySelector('.sidebar-content');
        if (sidebarContent.classList.contains('full')) {
            console.log('full');
            (0,_functions_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.miniSidebar)();
        } else if (sidebarContent.classList.contains('mini')) {
            (0,_functions_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.sidebar)();
        }
    }
});

// Event listener to change color theme
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
    document.querySelector('.search-box').classList.toggle('light-theme');
    document.querySelector('footer').classList.toggle('light-theme');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHNIQUF3QztBQUNwRiw0Q0FBNEMsd0hBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxRQUFRLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSx5QkFBeUIsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcs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QUFDdkIsVUFBVTtBQUNWLFlBQVksOERBQU87QUFDbkI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MvcGFnZUxvYWQuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3BhZ2VMb2FkLmNzcz9hN2U1Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1nL3N1bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1nL21vb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgLS1zaWRlYmFyLWJnLWNvbG9yOiAjMTUyMDJiO1xuICAgIC0tY29udGVudC10ZXh0LWNvbG9yOiAjZGRkZGRkO1xuICAgIC0tdGl0bGUtYm94LWNvbG9yOiAjZGRkZGRkO1xuICAgIC0taXRlbS1mb2N1cy1jb2xvcjogIzFmMjkzNztcbiAgICAtLXNlYXJjaC1ib3gtYmctY29sb3I6ICMxOTI3MzQ7XG4gICAgLS1zZWFyY2gtaW5wdXQtY29sb3I6ICNkZGRkZGQ7XG4gICAgLS1zZWFyY2gtYnRuLWJnLWNvbG9yOiAjMzEzZTRiO1xuICAgIC0tbG9nby1jb2xvcjogI2RkZGRkZDtcbiAgICAtLXRvZ2dsZS1zd2l0Y2gtYmctY29sb3I6ICM2Yjc1N2U7XG4gICAgLS10b2dnbGUtc3dpdGNoLWJvcmRlci1jb2xvcjogIzJjYTliYztcbiAgICAtLWZvb3Rlci1jb2xvcjogI2RkZGRkZDtcbiAgICAtLWZvb3Rlci1hY3RpdmU6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNkZGRkZGQ7XG59XG5cbmJvZHkubGlnaHQtdGhlbWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLXNpZGViYXItYmctY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAtLWNvbnRlbnQtdGV4dC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIC0tdGl0bGUtYm94LWNvbG9yOiAjMDAwMDAwO1xuICAgIC0taXRlbS1mb2N1cy1jb2xvcjogcmdiKDEzMSAxMzEgMTMxIC8gMzAlKTtcbiAgICAtLXNlYXJjaC1ib3gtYmctY29sb3I6ICNmZmZmZmY7XG4gICAgLS1zZWFyY2gtaW5wdXQtY29sb3I6ICMwMDAwMDA7XG4gICAgLS1zZWFyY2gtYnRuLWJnLWNvbG9yOiAjZTllNWU1O1xuICAgIC0tbG9nby1jb2xvcjogIzAwMDAwMDtcbiAgICAtLXRvZ2dsZS1zd2l0Y2gtYmctY29sb3I6ICNmZmZmZmY7XG4gICAgLS10b2dnbGUtc3dpdGNoLWJvcmRlci1jb2xvcjogI2ZiOGEwOTtcbiAgICAtLWZvb3Rlci1jb2xvcjogIzAwMDAwMDtcbiAgICAtLWZvb3Rlci1hY3RpdmU6ICM4OThkOTE7XG59XG5cbmJvZHkubGlnaHQtdGhlbWUgaW1nOm5vdCgubG9nby1ib3ggaW1nKXtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbn1cblxuZGl2I2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQtdGV4dC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4uc2lkZWJhci1jb250ZW50IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XG4gICAgLyogYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjYWFhICNlZWU7XG4gICAgfVxuICBcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgfVxuICBcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxufVxuXG4uYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbn1cblxuLmJveDpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnRpdGxlLWJveCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRpdGxlLWJveC1jb2xvcik7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4udGl0bGUtYm94IGgyIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG59XG5cbi5pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4uaXRlbSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBtYXJnaW46IDAgMC4yNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdGVtLXJvdyB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbn1cblxuLml0ZW0tY29sdW1uIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xufVxuXG4uaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbS1mb2N1cy1jb2xvcik7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0tZm9jdXMtY29sb3IpO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4ubm90LWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5pdGVtIGltZyB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXRlbTpudGgtb2YtdHlwZSgzKSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjM3NXJlbTtcbn1cblxuLml0ZW06bnRoLW9mLXR5cGUoMykgaW1nIHtcbiAgICB3aWR0aDogMS44cmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLml0ZW0gcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXRlbS1yZWcge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLml0ZW0tcmVnIHAge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uaXRlbS1taW5pIHAge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ubmF2LWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmctY29sb3IpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAvKiAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuNzYpOyBcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAwcHggcmdiYSgwLDAsMCwwLjc2KTsgKi9cbn1cblxuLnNlYXJjaC1ib3gge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYm94LWJnLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzLjkzNzVyZW07XG59XG5cbi5zZWFyY2gtYm94LmxpZ2h0LXRoZW1lIHtcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNiY2I4Yjg7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcbiAgICBib3JkZXItcmFkaXVzOiAzLjkzNzVyZW07ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBoc2woMCwgMCUsIDE4LjgyJSk7XG4gICAgY29sb3I6IHZhcigtLXNlYXJjaC1pbnB1dC1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZsZXg6IDE7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VhcmNoLWJveCBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYnRuLWJnLWNvbG9yKTtcbiAgICBjb2xvcjogI2RkZGRkZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMy41cmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzLjkzNzVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMuOTM3NXJlbTtcbn1cblxuLnNlYXJjaC1ib3ggaW1nIHtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnNlYXJjaC1ib3ggYnV0dG9uOmhvdmVyLFxuLnNlYXJjaC1ib3ggYnV0dG9uOmFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5sb2dvLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ28tYm94IGltZyB7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cblxuLmxvZ28tYm94OmhvdmVyLFxuLmxvZ28tYm94OmFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5sb2dvLWJveCBhIGgxIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1sb2dvLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLXRvcDogNTBweDsgLyogYWRqdXN0IGFzIG5lZWRlZCB0byBwcmV2ZW50IGNvbnRlbnQgZnJvbSBiZWluZyBvdmVybGFwcGVkIGJ5IHRoZSBoZWFkZXIgKi9cbiAgfVxuXG4ubGVmdC1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0LWJveCAubWVudS1idXR0b24gaW1ne1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuXG4ubWVudS1idXR0b257XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbn1cblxuLm1lbnUtYnV0dG9uOmhvdmVyLFxuLm1lbnUtYnV0dG9uOmFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbS1mb2N1cy1jb2xvcik7XG59XG5cbi50b2dnbGUtc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZS1zd2l0Y2gtYmctY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10b2dnbGUtc3dpdGNoLWJvcmRlci1jb2xvcik7XG59XG4gIFxuLnRvZ2dsZS1zd2l0Y2ggaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4gIFxuLnRvZ2dsZS1zd2l0Y2ggbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICBcbi50b2dnbGUtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbiAgXG4udG9nZ2xlLWljb24tbGlnaHQge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICAgIHJpZ2h0OiA2cHg7XG4gICAgdG9wOiA0LjVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xufVxuICBcbi50b2dnbGUtaWNvbi1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbn1cbiAgXG4uc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgbGVmdDogNXB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNhOWJjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4gIFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIC5zbGlkZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzM3B4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI4YTA5O1xufVxuXG5mb290ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwLjVyZW07IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMi41cmVtOyAgICAgXG59XG5cbmZvb3RlciBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjZyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgY29sb3I6IHZhcigtLWZvb3Rlci1jb2xvcik7XG59XG5cbmZvb3RlciBwIHtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG5mb290ZXIgYTpob3ZlcixcbmZvb3RlciBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWZvb3Rlci1hY3RpdmUpO1xufVxuXG5mb290ZXIubGlnaHQtdGhlbWUgYTpob3ZlciBpbWcsXG5mb290ZXIubGlnaHQtdGhlbWUgYTphY3RpdmUgaW1nIHtcbiAgICBmaWx0ZXI6IGludmVydCgwLjQpO1xufVxuXG5cbmZvb3RlciBhOmhvdmVyIGltZyxcbmZvb3RlciBhOmFjdGl2ZSBpbWcge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4uYXQtc3ltYm9sIHtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuZm9vdGVyIGltZyB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3BhZ2VMb2FkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1KQUFtSjtJQUNuSixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNDQUFzQztJQUN0QyxrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLDBCQUEwQjtJQUMxQiwwQ0FBMEM7SUFDMUMsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIscUJB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LHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7OztBQUdBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtSkFBbUo7QUFDdko7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgLS1zaWRlYmFyLWJnLWNvbG9yOiAjMTUyMDJiO1xcbiAgICAtLWNvbnRlbnQtdGV4dC1jb2xvcjogI2RkZGRkZDtcXG4gICAgLS10aXRsZS1ib3gtY29sb3I6ICNkZGRkZGQ7XFxuICAgIC0taXRlbS1mb2N1cy1jb2xvcjogIzFmMjkzNztcXG4gICAgLS1zZWFyY2gtYm94LWJnLWNvbG9yOiAjMTkyNzM0O1xcbiAgICAtLXNlYXJjaC1pbnB1dC1jb2xvcjogI2RkZGRkZDtcXG4gICAgLS1zZWFyY2gtYnRuLWJnLWNvbG9yOiAjMzEzZTRiO1xcbiAgICAtLWxvZ28tY29sb3I6ICNkZGRkZGQ7XFxuICAgIC0tdG9nZ2xlLXN3aXRjaC1iZy1jb2xvcjogIzZiNzU3ZTtcXG4gICAgLS10b2dnbGUtc3dpdGNoLWJvcmRlci1jb2xvcjogIzJjYTliYztcXG4gICAgLS1mb290ZXItY29sb3I6ICNkZGRkZGQ7XFxuICAgIC0tZm9vdGVyLWFjdGl2ZTogI2ZmZmZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjZGRkZGRkO1xcbn1cXG5cXG5ib2R5LmxpZ2h0LXRoZW1le1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICAtLXNpZGViYXItYmctY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgLS1jb250ZW50LXRleHQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIC0tdGl0bGUtYm94LWNvbG9yOiAjMDAwMDAwO1xcbiAgICAtLWl0ZW0tZm9jdXMtY29sb3I6IHJnYigxMzEgMTMxIDEzMSAvIDMwJSk7XFxuICAgIC0tc2VhcmNoLWJveC1iZy1jb2xvcjogI2ZmZmZmZjtcXG4gICAgLS1zZWFyY2gtaW5wdXQtY29sb3I6ICMwMDAwMDA7XFxuICAgIC0tc2VhcmNoLWJ0bi1iZy1jb2xvcjogI2U5ZTVlNTtcXG4gICAgLS1sb2dvLWNvbG9yOiAjMDAwMDAwO1xcbiAgICAtLXRvZ2dsZS1zd2l0Y2gtYmctY29sb3I6ICNmZmZmZmY7XFxuICAgIC0tdG9nZ2xlLXN3aXRjaC1ib3JkZXItY29sb3I6ICNmYjhhMDk7XFxuICAgIC0tZm9vdGVyLWNvbG9yOiAjMDAwMDAwO1xcbiAgICAtLWZvb3Rlci1hY3RpdmU6ICM4OThkOTE7XFxufVxcblxcbmJvZHkubGlnaHQtdGhlbWUgaW1nOm5vdCgubG9nby1ib3ggaW1nKXtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbmRpdiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQtdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNpZGViYXItY29udGVudCB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XFxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjYWFhICNlZWU7XFxuICAgIH1cXG4gIFxcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgd2lkdGg6IDhweDtcXG4gICAgICBoZWlnaHQ6IDhweDtcXG4gICAgfVxcbiAgXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcblxcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG59XFxuXFxuLmJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4uYm94OmZpcnN0LW9mLXR5cGUge1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG59XFxuXFxuLnRpdGxlLWJveCB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10aXRsZS1ib3gtY29sb3IpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi50aXRsZS1ib3ggaDIge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcbn1cXG5cXG4uaXRlbXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLml0ZW0ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAuMjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLml0ZW0tcm93IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XFxufVxcblxcbi5pdGVtLWNvbHVtbiB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG5cXG4uaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0tZm9jdXMtY29sb3IpO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0tZm9jdXMtY29sb3IpO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLm5vdC1hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLml0ZW0gaW1nIHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pdGVtOm50aC1vZi10eXBlKDMpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjM3NXJlbTtcXG59XFxuXFxuLml0ZW06bnRoLW9mLXR5cGUoMykgaW1nIHtcXG4gICAgd2lkdGg6IDEuOHJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uaXRlbSBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pdGVtLXJlZyB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLml0ZW0tcmVnIHAge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLml0ZW0tbWluaSBwIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICAvKiAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuNzYpOyBcXG4gICAgYm94LXNoYWRvdzogMHB4IDdweCA4cHggMHB4IHJnYmEoMCwwLDAsMC43Nik7ICovXFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1ib3gtYmctY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzLjkzNzVyZW07XFxufVxcblxcbi5zZWFyY2gtYm94LmxpZ2h0LXRoZW1lIHtcXG4gICBib3JkZXI6IDFweCBzb2xpZCAjYmNiOGI4O1xcbn1cXG5cXG4uc2VhcmNoLWJveCBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcXG4gICAgYm9yZGVyLXJhZGl1czogMy45Mzc1cmVtOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBoc2woMCwgMCUsIDE4LjgyJSk7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWFyY2gtaW5wdXQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1idG4tYmctY29sb3IpO1xcbiAgICBjb2xvcjogI2RkZGRkZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMy41cmVtO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMy45Mzc1cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMy45Mzc1cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBpbWcge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5zZWFyY2gtYm94IGJ1dHRvbjpob3ZlcixcXG4uc2VhcmNoLWJveCBidXR0b246YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5sb2dvLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2dvLWJveCBpbWcge1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcblxcbi5sb2dvLWJveDpob3ZlcixcXG4ubG9nby1ib3g6YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5sb2dvLWJveCBhIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1sb2dvLWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLXRvcDogNTBweDsgLyogYWRqdXN0IGFzIG5lZWRlZCB0byBwcmV2ZW50IGNvbnRlbnQgZnJvbSBiZWluZyBvdmVybGFwcGVkIGJ5IHRoZSBoZWFkZXIgKi9cXG4gIH1cXG5cXG4ubGVmdC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0LWJveCAubWVudS1idXR0b24gaW1ne1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5cXG4ubWVudS1idXR0b257XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ubWVudS1idXR0b246aG92ZXIsXFxuLm1lbnUtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWZvY3VzLWNvbG9yKTtcXG59XFxuXFxuLnRvZ2dsZS1zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA2NXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZS1zd2l0Y2gtYmctY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10b2dnbGUtc3dpdGNoLWJvcmRlci1jb2xvcik7XFxufVxcbiAgXFxuLnRvZ2dsZS1zd2l0Y2ggaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4gIFxcbi50b2dnbGUtc3dpdGNoIGxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuICBcXG4udG9nZ2xlLWljb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcbiAgXFxuLnRvZ2dsZS1pY29uLWxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1nL3N1bi5zdmcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcbiAgICByaWdodDogNnB4O1xcbiAgICB0b3A6IDQuNXB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbn1cXG4gIFxcbi50b2dnbGUtaWNvbi1kYXJrIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1nL21vb24uc3ZnJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICB0b3A6IDVweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG59XFxuICBcXG4uc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDNweDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNhOWJjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbiAgXFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIC5zbGlkZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzNweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjhhMDk7XFxufVxcblxcbmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDAuNXJlbTsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTsgICAgIFxcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC42cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBjb2xvcjogdmFyKC0tZm9vdGVyLWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlcixcXG5mb290ZXIgYTphY3RpdmUge1xcbiAgICBjb2xvcjogdmFyKC0tZm9vdGVyLWFjdGl2ZSk7XFxufVxcblxcbmZvb3Rlci5saWdodC10aGVtZSBhOmhvdmVyIGltZyxcXG5mb290ZXIubGlnaHQtdGhlbWUgYTphY3RpdmUgaW1nIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMC40KTtcXG59XFxuXFxuXFxuZm9vdGVyIGE6aG92ZXIgaW1nLFxcbmZvb3RlciBhOmFjdGl2ZSBpbWcge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLmF0LXN5bWJvbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlTG9hZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2VMb2FkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdpdEh1YiBmcm9tICcuLi9hc3NldHMvaW1nL2dpdC5zdmcnO1xuXG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgZ2l0SHViUHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaXRIdWJQcm9maWxlLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Nyc7XG5cbiAgICBjb25zdCBnaXRIdWJQcm9maWxlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ2l0SHViUHJvZmlsZUltZy5zcmMgPSBHaXRIdWI7XG4gICAgZ2l0SHViUHJvZmlsZUltZy5hbHQgPSAnZ2l0SHViIExvZ28nO1xuICAgIFxuXG4gICAgY29uc3QgZ2l0SHViUHJvZmlsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYXRTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYXRTeW1ib2wuY2xhc3NMaXN0LmFkZCgnYXQtc3ltYm9sJyk7XG4gICAgYXRTeW1ib2wudGV4dENvbnRlbnQgPSAnQCc7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdXNlcm5hbWUudGV4dENvbnRlbnQgPSAnU2hhaGlyLTQ3JztcbiAgICBnaXRIdWJQcm9maWxlVGV4dC5hcHBlbmRDaGlsZChhdFN5bWJvbCk7XG4gICAgZ2l0SHViUHJvZmlsZVRleHQuYXBwZW5kQ2hpbGQodXNlcm5hbWUpO1xuICAgIFxuICAgIGdpdEh1YlByb2ZpbGUuYXBwZW5kQ2hpbGQoZ2l0SHViUHJvZmlsZUltZyk7XG4gICAgZ2l0SHViUHJvZmlsZS5hcHBlbmRDaGlsZChnaXRIdWJQcm9maWxlVGV4dCk7XG5cbiAgICBjb25zdCBzZXBlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc2VwZXJhdG9yLnRleHRDb250ZW50ID0gJ3wnO1xuXG4gICAgY29uc3QgZ2l0SHViUmVwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaXRIdWJSZXBvLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Ny9Ub2RvLUxpc3QnO1xuICAgIGdpdEh1YlJlcG8udGV4dENvbnRlbnQgPSAnU291cmNlIENvZGUnO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlByb2ZpbGUpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChzZXBlcmF0b3IpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRIdWJSZXBvKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50JykuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyOyIsImltcG9ydCBJY29uIGZyb20gJy4uL2Fzc2V0cy9pbWcvaWNvbi5zdmcnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi4vYXNzZXRzL2ltZy9tZW51LnN2Zyc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4uL2Fzc2V0cy9pbWcvc2VhcmNoLnN2Zyc7XG5cbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpO1xuXG4gICAgY29uc3QgbGVmdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRCb3guY2xhc3NMaXN0LmFkZCgnbGVmdC1ib3gnKTtcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJyk7XG4gICAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtZW51SWNvbi5zcmMgPSBtZW51O1xuICAgIG1lbnVJY29uLmFsdCA9ICdNZW51IGljb24nO1xuICAgIG1lbnVCdXR0b24uYXBwZW5kQ2hpbGQobWVudUljb24pO1xuICAgIGxlZnRCb3guYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICBjb25zdCBsb2dvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nb0JveC5jbGFzc0xpc3QuYWRkKCdsb2dvLWJveCcpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvLnNyYyA9IEljb247XG4gICAgbG9nby5hbHQgPSAnVG9kbyBMaXN0IGxvZ28nO1xuICAgIGNvbnN0IGxvZ29MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxvZ29MaW5rLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIGxvZ29Cb3guYXBwZW5kQ2hpbGQobG9nb0xpbmspO1xuICAgIGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBsb2dvVGV4dC50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xuICAgIGNvbnN0IGxvZ29MaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsb2dvTGluazIuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuICAgIGxvZ29Cb3guYXBwZW5kQ2hpbGQobG9nb0xpbmsyKTtcbiAgICBsZWZ0Qm94LmFwcGVuZENoaWxkKGxvZ29Cb3gpO1xuXG4gICAgYmFyLmFwcGVuZENoaWxkKGxlZnRCb3gpO1xuXG4gICAgY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VhcmNoQm94LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1ib3gnKTtcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWlucHV0Jyk7XG4gICAgc2VhcmNoSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdTZWFyY2gnO1xuICAgIHNlYXJjaEJveC5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1idXR0b24nKTtcbiAgICBzZWFyY2hCb3guYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcbiAgICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2VhcmNoSWNvbi5zcmMgPSBzZWFyY2g7XG4gICAgc2VhcmNoSWNvbi5hbHQgPSAnU2VhcmNoIGljb24nO1xuICAgIHNlYXJjaEJ1dHRvbi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcblxuICAgIGJhci5hcHBlbmRDaGlsZChzZWFyY2hCb3gpO1xuXG4gICAgY29uc3QgdG9nZ2xlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9nZ2xlQm94LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1zd2l0Y2gnKTtcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCdpZCcsICd0aGVtZS10b2dnbGUnKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGhlbWUtdG9nZ2xlJyk7XG4gICAgY29uc3QgbGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGlnaHQuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWljb24nKTtcbiAgICBsaWdodC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaWNvbi1saWdodCcpO1xuICAgIGNvbnN0IGRhcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGFyay5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaWNvbicpO1xuICAgIGRhcmsuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWljb24tZGFyaycpO1xuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyJyk7XG5cbiAgICBsYWJlbC5hcHBlbmRDaGlsZChsaWdodCk7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoZGFyayk7XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcblxuICAgIHRvZ2dsZUJveC5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgdG9nZ2xlQm94LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuXG4gICAgYmFyLmFwcGVuZENoaWxkKHRvZ2dsZUJveCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpLmFwcGVuZENoaWxkKGJhcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjsiLCIvLyBpbXBvcnQgYWxsIHRoZSBpY29uc1xuaW1wb3J0IEFsbCBmcm9tICcuLi9hc3NldHMvaW1nL2FsbC5zdmcnO1xuaW1wb3J0IFRvZGF5IGZyb20gJy4uL2Fzc2V0cy9pbWcvdG9kYXkuc3ZnJztcbmltcG9ydCBXZWVrIGZyb20gJy4uL2Fzc2V0cy9pbWcvd2Vlay5zdmcnO1xuaW1wb3J0IEltcG9ydGFudCBmcm9tICcuLi9hc3NldHMvaW1nL2ltcG9ydGFudC5zdmcnO1xuaW1wb3J0IENvbXBsZXRlZCBmcm9tICcuLi9hc3NldHMvaW1nL2NvbXBsZXRlZC5zdmcnO1xuaW1wb3J0IG5ld05vdGUgZnJvbSAnLi4vYXNzZXRzL2ltZy9uZXdOb3RlLnN2Zyc7XG5pbXBvcnQgbmV3UHJvamVjdCBmcm9tICcuLi9hc3NldHMvaW1nL25ld1Byb2plY3Quc3ZnJztcbmltcG9ydCBhbGxQcm9qZWN0cyBmcm9tICcuLi9hc3NldHMvaW1nL2FsbFByb2plY3RzLnN2Zyc7XG5pbXBvcnQgc3RhcnJlZFByb2plY3RzIGZyb20gJy4uL2Fzc2V0cy9pbWcvc3RhcnJlZFByb2plY3RzLnN2Zyc7XG5pbXBvcnQgYWxsTm90ZXMgZnJvbSAnLi4vYXNzZXRzL2ltZy9hbGxOb3Rlcy5zdmcnO1xuaW1wb3J0IHN0YXJyZWROb3RlcyBmcm9tICcuLi9hc3NldHMvaW1nL3N0YXJyZWROb3RlLnN2Zyc7XG5cbi8vIENyZWF0ZSBhIHNpZGViYXIgaXRlbVxuY29uc3QgY3JlYXRlU2lkZWJhckl0ZW1zID0gKGljb24sIHRleHQsIGJhclR5cGUpID0+IHsgXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgIGlmIChiYXJUeXBlID09PSAnbWluaScpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtLXJvdycpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29sdW1uJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1taW5pJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1yZWcnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1jb2x1bW4nKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtLXJvdycpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcmVnJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1taW5pJyk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaXRlbUljb24uc3JjID0gaWNvbjtcbiAgICBpdGVtSWNvbi5hbHQgPSB0ZXh0O1xuICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1UZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1JY29uKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgICByZXR1cm4gaXRlbTtcbn1cblxuLy8gQWxsIHRoZSBkYXRhIHUgd2FudCB0byBkaXNwbGF5IGluIHRoZSBzaWRlYmFyIGdldHMgYWRkZWQgYW5kIGFjY2Vzc2VkIGZyb20gaGVyZVxuY29uc3Qgc2lkZWJhckRhdGEgPSAoKCkgPT4ge1xuICAgIFxuICAgIGxldCBzaWRlYmFyTG9nID0gW11cblxuICAgIGNvbnN0IGdldFNpZGViYXJEYXRhID0gKCkgPT4gc2lkZWJhckxvZztcblxuICAgIGNvbnN0IHJlbW92ZUFsbCA9ICgpID0+IHtcbiAgICAgICAgc2lkZWJhckxvZyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVNpZGViYXJDYXRlZ29yeSA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRpdGxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaXRsZSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2lkZWJhckxvZyA9IHNpZGViYXJMb2cuZmlsdGVyKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkudGl0bGUgIT09IHRpdGxlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVTaWRlYmFySXRlbSA9ICh0aXRsZSwgdGV4dCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRpdGxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaXRsZSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUZXh0IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHNpZGViYXJMb2cuZmluZCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5LnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIGlmICghY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0ZWdvcnkuaXRlbXMgPSBjYXRlZ29yeS5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udGV4dCAhPT0gdGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkU2lkZWJhckNhdGVnb3J5ID0gKHRpdGxlLCBpdGVtcyA9IFtdKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGl0bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpdGxlIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0ZW1zIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICBzaWRlYmFyTG9nLnB1c2goeyB0aXRsZSwgaXRlbXMgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkU2lkZWJhckl0ZW0gPSAodGl0bGUsIGljb24sIHRleHQpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aXRsZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGl0bGUgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaWNvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWNvbiBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUZXh0IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBzaWRlYmFyTG9nLmZpbmQoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS50aXRsZSA9PT0gdGl0bGUpO1xuICAgICAgICBpZiAoIWNhdGVnb3J5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhdGVnb3J5IG5vdCBmb3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGVnb3J5Lml0ZW1zLnB1c2goeyBpY29uLCB0ZXh0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0U2lkZWJhckRhdGEsIGFkZFNpZGViYXJDYXRlZ29yeSwgYWRkU2lkZWJhckl0ZW0sIHJlbW92ZVNpZGViYXJDYXRlZ29yeSwgcmVtb3ZlU2lkZWJhckl0ZW0sIHJlbW92ZUFsbCB9XG5cbn0pKCk7XG5cbmNvbnN0IGNyZWF0ZVNpZGViYXJDYXRlZ29yeSA9IChkYXRhLCBiYXJUeXBlID0gXCJmdWxsXCIpID0+IHtcbiAgICAvLyBmaW5kIHRoZSBoZWlnaHQgb2YgdGhlIG5hdi1iYXJcbiAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJhcicpLm9mZnNldEhlaWdodDtcblxuICAgIC8vIGFkanVzdCB0aGUgaGVpZ2h0IGFuZCBwb3NpdGlvbiBhY2NvcmRpbmcgdG8gdGhlIGhlYWRlciBoZWlnaHRcbiAgICBjb25zdCBzaWRlYmFyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItY29udGVudCcpO1xuICAgIHNpZGViYXJDb250ZW50LnN0eWxlLmhlaWdodCA9ICdjYWxjKDEwMHZoIC0gJyArICh0b3AgLSAwLjUpICsgJ3B4KSc7XG4gICAgc2lkZWJhckNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gKHRvcCAtIDAuNSkgKyAncHgnO1xuXG4gICAgaWYgKGJhclR5cGUgPT09ICdtaW5pJykge1xuICAgICAgICBzaWRlYmFyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtaW5pJyk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwnKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuc3R5bGUucGFkZGluZyA9ICcwJ1xuICAgICAgICBzaWRlYmFyQ29udGVudC5zdHlsZS53aWR0aCA9ICc4N3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdmdWxsJyk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21pbmknKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnMXJlbSc7XG4gICAgICAgIHNpZGViYXJDb250ZW50LnN0eWxlLndpZHRoID0gJzI1MHB4JztcbiAgICB9XG5cbiAgICAvL2NyZWF0ZSBhIGRpdiBmb3IgZWFjaCBjYXRlZ29yeVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBCb3guY2xhc3NMaXN0LmFkZCgnYm94Jyk7XG5cbiAgICAgICAgaWYgKGJhclR5cGUgIT09ICdtaW5pJykge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlQm94LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveCcpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBkYXRhW2ldLnRpdGxlO1xuICAgICAgICAgICAgdGl0bGVCb3guYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgQm94LmFwcGVuZENoaWxkKHRpdGxlQm94KTtcbiAgICAgICAgICAgIEJveC5hcHBlbmRDaGlsZCh0aXRsZUJveCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBJdGVtcy5jbGFzc0xpc3QuYWRkKCdpdGVtcycpO1xuICAgICAgICAvLyBjcmVhdGUgYW4gaXRlbSBmb3IgZWFjaCBpdGVtIGluIHRoZSBjYXRlZ29yeVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFbaV0uaXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVTaWRlYmFySXRlbXMoZGF0YVtpXS5pdGVtc1tqXS5pY29uLCBkYXRhW2ldLml0ZW1zW2pdLnRleHQsIGJhclR5cGUpO1xuICAgICAgICAgICAgSXRlbXMuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBCb3guYXBwZW5kQ2hpbGQoSXRlbXMpO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZChCb3gpO1xuICAgIH1cbiAgICByZXR1cm4gc2lkZWJhckNvbnRlbnQ7XG5cbn1cblxuY29uc3Qgc2lkZWJhciA9ICgpID0+IHtcblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1jb250ZW50JykpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWNvbnRlbnQnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2Z1bGwnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItY29udGVudCcpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFkZCBob21lLCBwcm9qZWN0cywgYW5kIG5vdGVzIHRvIHNpZGViYXJcbiAgICBzaWRlYmFyRGF0YS5yZW1vdmVBbGwoKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFyQ2F0ZWdvcnkoJ0hvbWUnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIEFsbCwgJ0FsbCcpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgVG9kYXksICdUb2RheScpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgV2VlaywgJ1dlZWsnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIEltcG9ydGFudCwgJ0ltcG9ydGFudCcpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgQ29tcGxldGVkLCAnQ29tcGxldGVkJyk7XG5cbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFyQ2F0ZWdvcnkoJ1Byb2plY3RzJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ1Byb2plY3RzJywgbmV3UHJvamVjdCwgJ05ldyBQcm9qZWN0Jyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ1Byb2plY3RzJywgYWxsUHJvamVjdHMsICdBbGwgUHJvamVjdHMnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnUHJvamVjdHMnLCBzdGFycmVkUHJvamVjdHMsICdTdGFycmVkIFByb2plY3RzJyk7XG5cbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFyQ2F0ZWdvcnkoJ05vdGVzJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ05vdGVzJywgbmV3Tm90ZSwgJ05ldyBOb3RlJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ05vdGVzJywgYWxsTm90ZXMsICdBbGwgTm90ZXMnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnTm90ZXMnLCBzdGFycmVkTm90ZXMsICdTdGFycmVkIE5vdGVzJyk7ICBcblxuICAgIC8vIEFkZCBzaWRlYmFyIHRvIGNvbnRlbnRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGViYXJDYXRlZ29yeShzaWRlYmFyRGF0YS5nZXRTaWRlYmFyRGF0YSgpKSk7XG59XG5cbmNvbnN0IG1pbmlTaWRlYmFyID0gKCkgPT4ge1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWNvbnRlbnQnKSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItY29udGVudCcpLmNsYXNzTGlzdC5jb250YWlucygnbWluaScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1jb250ZW50JykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaWRlYmFyRGF0YS5yZW1vdmVBbGwoKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFyQ2F0ZWdvcnkoJ0hvbWUnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIEFsbCwgJ0FsbCcpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgVG9kYXksICdUb2RheScpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgV2VlaywgJ1dlZWsnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIEltcG9ydGFudCwgJ0ltcG9ydGFudCcpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgQ29tcGxldGVkLCAnQ29tcGxldGVkJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyQ2F0ZWdvcnkoc2lkZWJhckRhdGEuZ2V0U2lkZWJhckRhdGEoKSwgJ21pbmknKSk7XG4gICAgXG59XG5cbmV4cG9ydCB7c2lkZWJhciwgbWluaVNpZGViYXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9pbXBvcnQgYWxsIGNzcyBmaWxlc1xuLy9pbXBvcnQgcmVxdWlyZWQgcGljc1xuaW1wb3J0ICcuL2Nzcy9wYWdlTG9hZC5jc3MnO1xuaW1wb3J0IHtzaWRlYmFyLCBtaW5pU2lkZWJhcn0gZnJvbSAnLi9mdW5jdGlvbnMvc2lkZWJhci5qcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vZnVuY3Rpb25zL2hlYWRlci5qcyc7XG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vZnVuY3Rpb25zL2Zvb3Rlcic7XG5jb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XG5cbmhlYWRlcigpO1xuc2lkZWJhcigpO1xuZm9vdGVyKCk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyIHRvIG1heGltaXplL21pbmltaXplIHNpZGViYXJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tZW51LWJ1dHRvbicpKSB7XG4gICAgICAgIGNvbnN0IHNpZGViYXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItY29udGVudCcpO1xuICAgICAgICBpZiAoc2lkZWJhckNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmdWxsJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmdWxsJyk7XG4gICAgICAgICAgICBtaW5pU2lkZWJhcigpO1xuICAgICAgICB9IGVsc2UgaWYgKHNpZGViYXJDb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnbWluaScpKSB7XG4gICAgICAgICAgICBzaWRlYmFyKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gY2hhbmdlIGNvbG9yIHRoZW1lXG5jb25zdCB0aGVtZVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS10b2dnbGUnKTtcbnRoZW1lVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2xpZ2h0LXRoZW1lJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ib3gnKS5jbGFzc0xpc3QudG9nZ2xlKCdsaWdodC10aGVtZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpLmNsYXNzTGlzdC50b2dnbGUoJ2xpZ2h0LXRoZW1lJyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==