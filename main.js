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

#page-content {
    border: 1px solid #000000;
}`, "",{"version":3,"sources":["webpack://./src/css/pageLoad.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    --sidebar-bg-color: #15202b;\n    --content-text-color: #dddddd;\n    --title-box-color: #dddddd;\n    --item-focus-color: #1f2937;\n    --search-box-bg-color: #192734;\n    --search-input-color: #dddddd;\n    --search-btn-bg-color: #313e4b;\n    --logo-color: #dddddd;\n    --toggle-switch-bg-color: #6b757e;\n    --toggle-switch-border-color: #2ca9bc;\n    --footer-color: #dddddd;\n    --footer-active: #ffffff;\n    background-color: #15202b;\n    margin: 0;\n    padding: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #dddddd;\n}\n\nbody.light-theme{\n    background-color: #ffffff;\n    --sidebar-bg-color: rgb(255, 255, 255);\n    --content-text-color: rgb(0, 0, 0);\n    color: #000000;\n    --title-box-color: #000000;\n    --item-focus-color: rgb(131 131 131 / 30%);\n    --search-box-bg-color: #ffffff;\n    --search-input-color: #000000;\n    --search-btn-bg-color: #e9e5e5;\n    --logo-color: #000000;\n    --toggle-switch-bg-color: #ffffff;\n    --toggle-switch-border-color: #fb8a09;\n    --footer-color: #000000;\n    --footer-active: #898d91;\n}\n\nbody.light-theme img:not(.logo-box img){\n    filter: invert(1);\n}\n\ndiv#content {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    min-height: 100vh;\n    color: var(--content-text-color);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.sidebar-content {\n    width: 250px;\n    background-color: var(--sidebar-bg-color);\n    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: stretch;\n    padding: 0;\n    padding-left: 1rem;\n    position: fixed;\n    left: 0;\n    height: 100%;\n    overflow-y: hidden;\n    z-index: 1;\n    flex-grow: 1;\n  \n    &:hover {\n        overflow-y: auto;\n        scrollbar-width: thin;\n        scrollbar-color: #aaa #eee;\n    }\n  \n    &::-webkit-scrollbar {\n      width: 8px;\n      height: 8px;\n    }\n  \n    &::-webkit-scrollbar-track {\n      background-color: #eee;\n      border-radius: 4px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: #aaa;\n      border-radius: 4px;\n    }\n}\n\n.box {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem 0;\n}\n\n.box:first-of-type {\n    padding-top: 0;\n}\n\n.title-box {\n    border-bottom: 2px solid var(--title-box-color);\n    margin-right: 1rem;\n}\n\n.title-box h2 {\n    font-size: 1.4rem;\n    font-weight: 900;\n    margin-bottom: 0.25rem;\n    margin-top: 0;\n    padding-left: 0.25rem;\n}\n\n.items {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.item {\n    align-items: center;\n    gap: 1rem;\n    padding: 0.5rem;\n    transition: all 0.3s ease;\n    border-radius: 0.25rem;\n    margin: 0 0.25rem;\n    cursor: pointer;\n}\n\n.item-row {\n    display:flex;\n    flex-direction:row;\n}\n\n.item-column {\n    display:flex;\n    flex-direction:column;\n}\n\n.item:hover {\n    background-color: var(--item-focus-color);\n    filter: brightness(1.2);\n}\n\n.active {\n    background-color: var(--item-focus-color);\n    filter: brightness(1.2);\n}\n\n.not-active {\n    background-color: transparent;\n}\n\n.item img {\n    width: 1.5rem;\n    height: auto;\n    cursor: pointer;\n}\n\n.item:nth-of-type(3) {\n    padding-left: 0.375rem;\n}\n\n.item:nth-of-type(3) img {\n    width: 1.8rem;\n    height: auto;\n}\n\n.item p {\n    font-weight: 500;\n    margin: 0;\n    cursor: pointer;\n}\n\n.item-reg {\n    margin-right: 1rem;\n}\n\n.item-reg p {\n    font-size: 1.1rem;\n}\n\n.item-mini p {\n    font-size: 0.8rem;\n}\n\n.nav-bar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: var(--sidebar-bg-color);\n    width: calc(100% - 2rem);\n    z-index: 2;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 2rem;\n    padding: 0 1rem;\n    /* -webkit-box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76); \n    box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76); */\n}\n\n.search-box {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    padding: 0 1rem;\n    padding-right: 0;\n    background-color: var(--search-box-bg-color);\n    border-radius: 3.9375rem;\n}\n\n.search-box.light-theme {\n   border: 1px solid #bcb8b8;\n}\n\n.search-box input {\n    border: none;\n    /* background-color: #192734;\n    border-radius: 3.9375rem; */\n    background-color: transparent;\n    border: hsl(0, 0%, 18.82%);\n    color: var(--search-input-color);\n    font-size: 1rem;\n    font-weight: 500;\n    padding: 0.5rem;\n    flex: 1;\n}\n\n.search-box input:focus {\n    outline: none;\n}\n\n.search-box button {\n    border: none;\n    background-color: var(--search-btn-bg-color);\n    color: #dddddd;\n    font-size: 1rem;\n    font-weight: 500;\n    padding: 0.5rem;\n    cursor: pointer;\n    height: 100%;\n    width: 3.5rem;\n    border-top-right-radius: 3.9375rem;\n    border-bottom-right-radius: 3.9375rem;\n}\n\n.search-box img {\n    width: 1.5rem;\n    height: auto;\n}\n\n.search-box button:hover,\n.search-box button:active {\n    filter: brightness(1.2);\n}\n\n.logo-box {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    cursor: pointer;\n}\n\n.logo-box img {\n    width: 2.5rem;\n    height: auto;\n}\n\n\n.logo-box:hover,\n.logo-box:active {\n    filter: brightness(1.2);\n}\n\n.logo-box a h1 {\n    font-size: 1.6rem;\n    font-weight: 700;\n    color: var(--logo-color);\n    cursor: pointer;\n    transition: all 0.3s ease;\n    margin-top: 10px;\n}\n\n.container {\n    display: flex;\n    flex-direction: row;\n    margin-top: 50px; /* adjust as needed to prevent content from being overlapped by the header */\n  }\n\n.left-box {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n.left-box .menu-button img{\n    width: 2rem;\n    height: auto;\n}\n\n\n.menu-button{\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: transparent;\n    color: inherit;\n    font: inherit;\n    cursor: pointer;\n    outline: none;\n    border-radius: 50%;\n    width: 3rem;\n    height: 3rem;\n}\n\n.menu-button:hover,\n.menu-button:active {\n    filter: brightness(1.2);\n    background-color: var(--item-focus-color);\n}\n\n.toggle-switch {\n    position: relative;\n    width: 65px;\n    height: 30px;\n    background-color: var(--toggle-switch-bg-color);\n    border-radius: 26px;\n    overflow: hidden;\n    border: 3px solid var(--toggle-switch-border-color);\n}\n  \n.toggle-switch input {\n    display: none;\n}\n  \n.toggle-switch label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n}\n  \n.toggle-icon {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n    transition: transform 0.3s ease;\n}\n  \n.toggle-icon-light {\n    background: url('../assets/img/sun.svg') center/cover no-repeat;\n    right: 6px;\n    top: 4.5px;\n    transform: translateX(0%);\n}\n  \n.toggle-icon-dark {\n    background: url('../assets/img/moon.svg') center/cover no-repeat;\n    left: 5px;\n    top: 5px;\n    transform: translateX(0%);\n}\n  \n.slider {\n    position: absolute;\n    top: 3px;\n    left: 5px;\n    width: 24px;\n    height: 24px;\n    background-color: #2ca9bc;\n    border-radius: 50%;\n    transition: transform 0.3s ease;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n  \ninput:checked + label .slider {\n    transform: translateX(33px);\n    background-color: #fb8a09;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    position: absolute;\n    bottom: 0.5rem; \n    width: 100%;\n    height: 2.5rem;     \n}\n\nfooter a {\n    display: flex;\n    align-items: center;\n    gap: 0.6rem;\n    text-decoration: none;\n    font-size: 1.1rem;\n    font-weight: 100;\n    color: var(--footer-color);\n}\n\nfooter p {\n    margin: 0.5rem 0;\n}\n\nfooter a:hover,\nfooter a:active {\n    color: var(--footer-active);\n}\n\nfooter.light-theme a:hover img,\nfooter.light-theme a:active img {\n    filter: invert(0.4);\n}\n\n\nfooter a:hover img,\nfooter a:active img {\n    filter: brightness(1.2);\n}\n\n.at-symbol {\n    font-weight: 900;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nfooter img {\n    width: 2rem;\n    height: auto;\n}\n\n#page-content {\n    border: 1px solid #000000;\n}"],"sourceRoot":""}]);
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

/***/ "./src/functions/pageLoad.js":
/*!***********************************!*\
  !*** ./src/functions/pageLoad.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustPageContent: () => (/* binding */ adjustPageContent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.js */ "./src/functions/sidebar.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/functions/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/functions/footer.js");





const pageContent = () => {
    const sidebarContent = document.querySelector('.sidebar-content');
    let width = sidebarContent.offsetWidth;
    console.log(width);
    let top = sidebarContent.style.marginTop;
    let height = sidebarContent.style.height;
    const footerH = document.querySelector('footer');
    let bottom = footerH.offsetHeight;

    const pageContent = document.createElement('div');
    pageContent.id = 'page-content';
    pageContent.style.marginLeft = width + 'px';
    pageContent.style.marginTop = top;
    pageContent.style.minHeight = 'calc(100vh - ' + (top + bottom + 'px') + ')';
    pageContent.style.width = 'calc(100vw - ' + (width + 'px') + ')';

    document.querySelector('div#content').appendChild(pageContent);
}

const adjustPageContent = () => {
    const sidebarContent = document.querySelector('.sidebar-content');
    let width = sidebarContent.offsetWidth;
    console.log(width);
    let top = sidebarContent.style.marginTop;
    let height = sidebarContent.style.height;
    const footerH = document.querySelector('footer');
    let bottom = footerH.offsetHeight;

    const pageContent = document.querySelector('#page-content');
    pageContent.style.marginLeft = width + 'px';
    pageContent.style.marginTop = top;
    pageContent.style.minHeight = 'calc(100vh - ' + (top + bottom + 'px') + ')';
    pageContent.style.width = 'calc(100vw - ' + (width + 'px') + ')';
}

const pageLoad = () => {
    ;(0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_0__.sidebar)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();
    pageContent();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);


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
/* harmony import */ var _functions_pageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/pageLoad */ "./src/functions/pageLoad.js");
//import all css files
//import required pics




console.log('I get called from print.js!');

// Load header, sidebar, and footer
(0,_functions_pageLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();

// Event listener to maximize/minimize sidebar
document.querySelector('#content').addEventListener('click', (event) => {
    if (event.target.closest('.menu-button')) {
        const sidebarContent = document.querySelector('.sidebar-content');
        if (sidebarContent.classList.contains('full')) {
            console.log('full');
            (0,_functions_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.miniSidebar)();
            (0,_functions_pageLoad__WEBPACK_IMPORTED_MODULE_2__.adjustPageContent)();
        } else if (sidebarContent.classList.contains('mini')) {
            (0,_functions_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.sidebar)();
            (0,_functions_pageLoad__WEBPACK_IMPORTED_MODULE_2__.adjustPageContent)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHNIQUF3QztBQUNwRiw0Q0FBNEMsd0hBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsUUFBUSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVkseUJBQXlCLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFV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RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQzRCO0FBQ2dDO0FBQ2hCO0FBQ1c7QUFDdkQ7O0FBRUE7QUFDQSwrREFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtFQUFXO0FBQ3ZCLFlBQVksc0VBQWlCO0FBQzdCLFVBQVU7QUFDVixZQUFZLDhEQUFPO0FBQ25CLFlBQVksc0VBQWlCO0FBQzdCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3BhZ2VMb2FkLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9wYWdlTG9hZC5jc3M/YTdlNSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1nL3N1bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1nL21vb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgLS1zaWRlYmFyLWJnLWNvbG9yOiAjMTUyMDJiO1xuICAgIC0tY29udGVudC10ZXh0LWNvbG9yOiAjZGRkZGRkO1xuICAgIC0tdGl0bGUtYm94LWNvbG9yOiAjZGRkZGRkO1xuICAgIC0taXRlbS1mb2N1cy1jb2xvcjogIzFmMjkzNztcbiAgICAtLXNlYXJjaC1ib3gtYmctY29sb3I6ICMxOTI3MzQ7XG4gICAgLS1zZWFyY2gtaW5wdXQtY29sb3I6ICNkZGRkZGQ7XG4gICAgLS1zZWFyY2gtYnRuLWJnLWNvbG9yOiAjMzEzZTRiO1xuICAgIC0tbG9nby1jb2xvcjogI2RkZGRkZDtcbiAgICAtLXRvZ2dsZS1zd2l0Y2gtYmctY29sb3I6ICM2Yjc1N2U7XG4gICAgLS10b2dnbGUtc3dpdGNoLWJvcmRlci1jb2xvcjogIzJjYTliYztcbiAgICAtLWZvb3Rlci1jb2xvcjogI2RkZGRkZDtcbiAgICAtLWZvb3Rlci1hY3RpdmU6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNkZGRkZGQ7XG59XG5cbmJvZHkubGlnaHQtdGhlbWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLXNpZGViYXItYmctY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAtLWNvbnRlbnQtdGV4dC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIC0tdGl0bGUtYm94LWNvbG9yOiAjMDAwMDAwO1xuICAgIC0taXRlbS1mb2N1cy1jb2xvcjogcmdiKDEzMSAxMzEgMTMxIC8gMzAlKTtcbiAgICAtLXNlYXJjaC1ib3gtYmctY29sb3I6ICNmZmZmZmY7XG4gICAgLS1zZWFyY2gtaW5wdXQtY29sb3I6ICMwMDAwMDA7XG4gICAgLS1zZWFyY2gtYnRuLWJnLWNvbG9yOiAjZTllNWU1O1xuICAgIC0tbG9nby1jb2xvcjogIzAwMDAwMDtcbiAgICAtLXRvZ2dsZS1zd2l0Y2gtYmctY29sb3I6ICNmZmZmZmY7XG4gICAgLS10b2dnbGUtc3dpdGNoLWJvcmRlci1jb2xvcjogI2ZiOGEwOTtcbiAgICAtLWZvb3Rlci1jb2xvcjogIzAwMDAwMDtcbiAgICAtLWZvb3Rlci1hY3RpdmU6ICM4OThkOTE7XG59XG5cbmJvZHkubGlnaHQtdGhlbWUgaW1nOm5vdCgubG9nby1ib3ggaW1nKXtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbn1cblxuZGl2I2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQtdGV4dC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4uc2lkZWJhci1jb250ZW50IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XG4gICAgLyogYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjYWFhICNlZWU7XG4gICAgfVxuICBcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgfVxuICBcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxufVxuXG4uYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbn1cblxuLmJveDpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnRpdGxlLWJveCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRpdGxlLWJveC1jb2xvcik7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4udGl0bGUtYm94IGgyIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG59XG5cbi5pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4uaXRlbSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBtYXJnaW46IDAgMC4yNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdGVtLXJvdyB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbn1cblxuLml0ZW0tY29sdW1uIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xufVxuXG4uaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbS1mb2N1cy1jb2xvcik7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0tZm9jdXMtY29sb3IpO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4ubm90LWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5pdGVtIGltZyB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXRlbTpudGgtb2YtdHlwZSgzKSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjM3NXJlbTtcbn1cblxuLml0ZW06bnRoLW9mLXR5cGUoMykgaW1nIHtcbiAgICB3aWR0aDogMS44cmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLml0ZW0gcCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXRlbS1yZWcge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLml0ZW0tcmVnIHAge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uaXRlbS1taW5pIHAge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ubmF2LWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmctY29sb3IpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAvKiAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuNzYpOyBcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAwcHggcmdiYSgwLDAsMCwwLjc2KTsgKi9cbn1cblxuLnNlYXJjaC1ib3gge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYm94LWJnLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzLjkzNzVyZW07XG59XG5cbi5zZWFyY2gtYm94LmxpZ2h0LXRoZW1lIHtcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNiY2I4Yjg7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcbiAgICBib3JkZXItcmFkaXVzOiAzLjkzNzVyZW07ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBoc2woMCwgMCUsIDE4LjgyJSk7XG4gICAgY29sb3I6IHZhcigtLXNlYXJjaC1pbnB1dC1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZsZXg6IDE7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VhcmNoLWJveCBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYnRuLWJnLWNvbG9yKTtcbiAgICBjb2xvcjogI2RkZGRkZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMy41cmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzLjkzNzVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMuOTM3NXJlbTtcbn1cblxuLnNlYXJjaC1ib3ggaW1nIHtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnNlYXJjaC1ib3ggYnV0dG9uOmhvdmVyLFxuLnNlYXJjaC1ib3ggYnV0dG9uOmFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5sb2dvLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ28tYm94IGltZyB7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cblxuLmxvZ28tYm94OmhvdmVyLFxuLmxvZ28tYm94OmFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5sb2dvLWJveCBhIGgxIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1sb2dvLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLXRvcDogNTBweDsgLyogYWRqdXN0IGFzIG5lZWRlZCB0byBwcmV2ZW50IGNvbnRlbnQgZnJvbSBiZWluZyBvdmVybGFwcGVkIGJ5IHRoZSBoZWFkZXIgKi9cbiAgfVxuXG4ubGVmdC1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0LWJveCAubWVudS1idXR0b24gaW1ne1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuXG4ubWVudS1idXR0b257XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbn1cblxuLm1lbnUtYnV0dG9uOmhvdmVyLFxuLm1lbnUtYnV0dG9uOmFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbS1mb2N1cy1jb2xvcik7XG59XG5cbi50b2dnbGUtc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZS1zd2l0Y2gtYmctY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10b2dnbGUtc3dpdGNoLWJvcmRlci1jb2xvcik7XG59XG4gIFxuLnRvZ2dsZS1zd2l0Y2ggaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4gIFxuLnRvZ2dsZS1zd2l0Y2ggbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICBcbi50b2dnbGUtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbiAgXG4udG9nZ2xlLWljb24tbGlnaHQge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICAgIHJpZ2h0OiA2cHg7XG4gICAgdG9wOiA0LjVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xufVxuICBcbi50b2dnbGUtaWNvbi1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbn1cbiAgXG4uc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgbGVmdDogNXB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNhOWJjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4gIFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIC5zbGlkZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzM3B4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI4YTA5O1xufVxuXG5mb290ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwLjVyZW07IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMi41cmVtOyAgICAgXG59XG5cbmZvb3RlciBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjZyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgY29sb3I6IHZhcigtLWZvb3Rlci1jb2xvcik7XG59XG5cbmZvb3RlciBwIHtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG5mb290ZXIgYTpob3ZlcixcbmZvb3RlciBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWZvb3Rlci1hY3RpdmUpO1xufVxuXG5mb290ZXIubGlnaHQtdGhlbWUgYTpob3ZlciBpbWcsXG5mb290ZXIubGlnaHQtdGhlbWUgYTphY3RpdmUgaW1nIHtcbiAgICBmaWx0ZXI6IGludmVydCgwLjQpO1xufVxuXG5cbmZvb3RlciBhOmhvdmVyIGltZyxcbmZvb3RlciBhOmFjdGl2ZSBpbWcge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4uYXQtc3ltYm9sIHtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuZm9vdGVyIGltZyB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jcGFnZS1jb250ZW50IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9wYWdlTG9hZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsU0FBUztJQUNULFVBQVU7SUFDVixtSkFBbUo7SUFDbkosY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMsa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsMENBQTBDO0lBQzFDLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLG1KQUFtSjtBQUN2Sjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsNkNBQTZDO0lBQzdDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixPQUFPO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTs7SUFFWjtRQUNJLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsMEJBQTBCO0lBQzlCOztJQUVBO01BQ0UsVUFBVTtNQUNWLFdBQVc7SUFDYjs7SUFFQTtNQUNFLHNCQUFzQjtNQUN0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QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUpBQW1KO0FBQ3ZKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIC0tc2lkZWJhci1iZy1jb2xvcjogIzE1MjAyYjtcXG4gICAgLS1jb250ZW50LXRleHQtY29sb3I6ICNkZGRkZGQ7XFxuICAgIC0tdGl0bGUtYm94LWNvbG9yOiAjZGRkZGRkO1xcbiAgICAtLWl0ZW0tZm9jdXMtY29sb3I6ICMxZjI5Mzc7XFxuICAgIC0tc2VhcmNoLWJveC1iZy1jb2xvcjogIzE5MjczNDtcXG4gICAgLS1zZWFyY2gtaW5wdXQtY29sb3I6ICNkZGRkZGQ7XFxuICAgIC0tc2VhcmNoLWJ0bi1iZy1jb2xvcjogIzMxM2U0YjtcXG4gICAgLS1sb2dvLWNvbG9yOiAjZGRkZGRkO1xcbiAgICAtLXRvZ2dsZS1zd2l0Y2gtYmctY29sb3I6ICM2Yjc1N2U7XFxuICAgIC0tdG9nZ2xlLXN3aXRjaC1ib3JkZXItY29sb3I6ICMyY2E5YmM7XFxuICAgIC0tZm9vdGVyLWNvbG9yOiAjZGRkZGRkO1xcbiAgICAtLWZvb3Rlci1hY3RpdmU6ICNmZmZmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIwMmI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogI2RkZGRkZDtcXG59XFxuXFxuYm9keS5saWdodC10aGVtZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgLS1zaWRlYmFyLWJnLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIC0tY29udGVudC10ZXh0LWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICAtLXRpdGxlLWJveC1jb2xvcjogIzAwMDAwMDtcXG4gICAgLS1pdGVtLWZvY3VzLWNvbG9yOiByZ2IoMTMxIDEzMSAxMzEgLyAzMCUpO1xcbiAgICAtLXNlYXJjaC1ib3gtYmctY29sb3I6ICNmZmZmZmY7XFxuICAgIC0tc2VhcmNoLWlucHV0LWNvbG9yOiAjMDAwMDAwO1xcbiAgICAtLXNlYXJjaC1idG4tYmctY29sb3I6ICNlOWU1ZTU7XFxuICAgIC0tbG9nby1jb2xvcjogIzAwMDAwMDtcXG4gICAgLS10b2dnbGUtc3dpdGNoLWJnLWNvbG9yOiAjZmZmZmZmO1xcbiAgICAtLXRvZ2dsZS1zd2l0Y2gtYm9yZGVyLWNvbG9yOiAjZmI4YTA5O1xcbiAgICAtLWZvb3Rlci1jb2xvcjogIzAwMDAwMDtcXG4gICAgLS1mb290ZXItYWN0aXZlOiAjODk4ZDkxO1xcbn1cXG5cXG5ib2R5LmxpZ2h0LXRoZW1lIGltZzpub3QoLmxvZ28tYm94IGltZyl7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG5kaXYjY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGNvbG9yOiB2YXIoLS1jb250ZW50LXRleHQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRlbnQge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmctY29sb3IpO1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gICAgICAgIHNjcm9sbGJhci1jb2xvcjogI2FhYSAjZWVlO1xcbiAgICB9XFxuICBcXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgIHdpZHRoOiA4cHg7XFxuICAgICAgaGVpZ2h0OiA4cHg7XFxuICAgIH1cXG4gIFxcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG5cXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxufVxcblxcbi5ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLmJveDpmaXJzdC1vZi10eXBlIHtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxufVxcblxcbi50aXRsZS1ib3gge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGl0bGUtYm94LWNvbG9yKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGl0bGUtYm94IGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXG59XFxuXFxuLml0ZW1zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5pdGVtIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIG1hcmdpbjogMCAwLjI1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pdGVtLXJvdyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246cm93O1xcbn1cXG5cXG4uaXRlbS1jb2x1bW4ge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuXFxuLml0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWZvY3VzLWNvbG9yKTtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWZvY3VzLWNvbG9yKTtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5ub3QtYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5pdGVtIGltZyB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXRlbTpudGgtb2YtdHlwZSgzKSB7XFxuICAgIHBhZGRpbmctbGVmdDogMC4zNzVyZW07XFxufVxcblxcbi5pdGVtOm50aC1vZi10eXBlKDMpIGltZyB7XFxuICAgIHdpZHRoOiAxLjhyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLml0ZW0gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXRlbS1yZWcge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5pdGVtLXJlZyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5pdGVtLW1pbmkgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgLyogLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDhweCAwcHggcmdiYSgwLDAsMCwwLjc2KTsgXFxuICAgIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuNzYpOyAqL1xcbn1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYm94LWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMy45Mzc1cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJveC5saWdodC10aGVtZSB7XFxuICAgYm9yZGVyOiAxcHggc29saWQgI2JjYjhiODtcXG59XFxuXFxuLnNlYXJjaC1ib3ggaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxOTI3MzQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMuOTM3NXJlbTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogaHNsKDAsIDAlLCAxOC44MiUpO1xcbiAgICBjb2xvcjogdmFyKC0tc2VhcmNoLWlucHV0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFyY2gtYnRuLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6ICNkZGRkZGQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDMuNXJlbTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMuOTM3NXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMuOTM3NXJlbTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggaW1nIHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBidXR0b246aG92ZXIsXFxuLnNlYXJjaC1ib3ggYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcbn1cXG5cXG4ubG9nby1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nby1ib3ggaW1nIHtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5cXG4ubG9nby1ib3g6aG92ZXIsXFxuLmxvZ28tYm94OmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcbn1cXG5cXG4ubG9nby1ib3ggYSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogdmFyKC0tbG9nby1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7IC8qIGFkanVzdCBhcyBuZWVkZWQgdG8gcHJldmVudCBjb250ZW50IGZyb20gYmVpbmcgb3ZlcmxhcHBlZCBieSB0aGUgaGVhZGVyICovXFxuICB9XFxuXFxuLmxlZnQtYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGVmdC1ib3ggLm1lbnUtYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuXFxuLm1lbnUtYnV0dG9ue1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLm1lbnUtYnV0dG9uOmhvdmVyLFxcbi5tZW51LWJ1dHRvbjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbS1mb2N1cy1jb2xvcik7XFxufVxcblxcbi50b2dnbGUtc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGUtc3dpdGNoLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdG9nZ2xlLXN3aXRjaC1ib3JkZXItY29sb3IpO1xcbn1cXG4gIFxcbi50b2dnbGUtc3dpdGNoIGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuICBcXG4udG9nZ2xlLXN3aXRjaCBsYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiAgXFxuLnRvZ2dsZS1pY29uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG4gIFxcbi50b2dnbGUtaWNvbi1saWdodCB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL2ltZy9zdW4uc3ZnJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcXG4gICAgcmlnaHQ6IDZweDtcXG4gICAgdG9wOiA0LjVweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG59XFxuICBcXG4udG9nZ2xlLWljb24tZGFyayB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL2ltZy9tb29uLnN2ZycpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxuICAgIGxlZnQ6IDVweDtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxufVxcbiAgXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIGxlZnQ6IDVweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjYTliYztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4gIFxcbmlucHV0OmNoZWNrZWQgKyBsYWJlbCAuc2xpZGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMzcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI4YTA5O1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwLjVyZW07IFxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07ICAgICBcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgY29sb3I6IHZhcigtLWZvb3Rlci1jb2xvcik7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIsXFxuZm9vdGVyIGE6YWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWZvb3Rlci1hY3RpdmUpO1xcbn1cXG5cXG5mb290ZXIubGlnaHQtdGhlbWUgYTpob3ZlciBpbWcsXFxuZm9vdGVyLmxpZ2h0LXRoZW1lIGE6YWN0aXZlIGltZyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDAuNCk7XFxufVxcblxcblxcbmZvb3RlciBhOmhvdmVyIGltZyxcXG5mb290ZXIgYTphY3RpdmUgaW1nIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5hdC1zeW1ib2wge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jcGFnZS1jb250ZW50IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2VMb2FkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFnZUxvYWQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2l0SHViIGZyb20gJy4uL2Fzc2V0cy9pbWcvZ2l0LnN2Zyc7XG5cbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBnaXRIdWJQcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdpdEh1YlByb2ZpbGUuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3JztcblxuICAgIGNvbnN0IGdpdEh1YlByb2ZpbGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBnaXRIdWJQcm9maWxlSW1nLnNyYyA9IEdpdEh1YjtcbiAgICBnaXRIdWJQcm9maWxlSW1nLmFsdCA9ICdnaXRIdWIgTG9nbyc7XG4gICAgXG5cbiAgICBjb25zdCBnaXRIdWJQcm9maWxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBhdFN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhdFN5bWJvbC5jbGFzc0xpc3QuYWRkKCdhdC1zeW1ib2wnKTtcbiAgICBhdFN5bWJvbC50ZXh0Q29udGVudCA9ICdAJztcbiAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB1c2VybmFtZS50ZXh0Q29udGVudCA9ICdTaGFoaXItNDcnO1xuICAgIGdpdEh1YlByb2ZpbGVUZXh0LmFwcGVuZENoaWxkKGF0U3ltYm9sKTtcbiAgICBnaXRIdWJQcm9maWxlVGV4dC5hcHBlbmRDaGlsZCh1c2VybmFtZSk7XG4gICAgXG4gICAgZ2l0SHViUHJvZmlsZS5hcHBlbmRDaGlsZChnaXRIdWJQcm9maWxlSW1nKTtcbiAgICBnaXRIdWJQcm9maWxlLmFwcGVuZENoaWxkKGdpdEh1YlByb2ZpbGVUZXh0KTtcblxuICAgIGNvbnN0IHNlcGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzZXBlcmF0b3IudGV4dENvbnRlbnQgPSAnfCc7XG5cbiAgICBjb25zdCBnaXRIdWJSZXBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdpdEh1YlJlcG8uaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L1RvZG8tTGlzdCc7XG4gICAgZ2l0SHViUmVwby50ZXh0Q29udGVudCA9ICdTb3VyY2UgQ29kZSc7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0SHViUHJvZmlsZSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHNlcGVyYXRvcik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlJlcG8pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7IiwiaW1wb3J0IEljb24gZnJvbSAnLi4vYXNzZXRzL2ltZy9pY29uLnN2Zyc7XG5pbXBvcnQgbWVudSBmcm9tICcuLi9hc3NldHMvaW1nL21lbnUuc3ZnJztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vYXNzZXRzL2ltZy9zZWFyY2guc3ZnJztcblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJyk7XG5cbiAgICBjb25zdCBsZWZ0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdEJveC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWJveCcpO1xuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKTtcbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnVJY29uLnNyYyA9IG1lbnU7XG4gICAgbWVudUljb24uYWx0ID0gJ01lbnUgaWNvbic7XG4gICAgbWVudUJ1dHRvbi5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gICAgbGVmdEJveC5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICAgIGNvbnN0IGxvZ29Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvQm94LmNsYXNzTGlzdC5hZGQoJ2xvZ28tYm94Jyk7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ28uc3JjID0gSWNvbjtcbiAgICBsb2dvLmFsdCA9ICdUb2RvIExpc3QgbG9nbyc7XG4gICAgY29uc3QgbG9nb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbG9nb0xpbmsuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgbG9nb0JveC5hcHBlbmRDaGlsZChsb2dvTGluayk7XG4gICAgY29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxvZ29UZXh0LnRleHRDb250ZW50ID0gJ1RvZG8gTGlzdCc7XG4gICAgY29uc3QgbG9nb0xpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxvZ29MaW5rMi5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XG4gICAgbG9nb0JveC5hcHBlbmRDaGlsZChsb2dvTGluazIpO1xuICAgIGxlZnRCb3guYXBwZW5kQ2hpbGQobG9nb0JveCk7XG5cbiAgICBiYXIuYXBwZW5kQ2hpbGQobGVmdEJveCk7XG5cbiAgICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWFyY2hCb3guY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJveCcpO1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtaW5wdXQnKTtcbiAgICBzZWFyY2hJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaCc7XG4gICAgc2VhcmNoQm94LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ1dHRvbicpO1xuICAgIHNlYXJjaEJveC5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xuICAgIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzZWFyY2hJY29uLnNyYyA9IHNlYXJjaDtcbiAgICBzZWFyY2hJY29uLmFsdCA9ICdTZWFyY2ggaWNvbic7XG4gICAgc2VhcmNoQnV0dG9uLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuXG4gICAgYmFyLmFwcGVuZENoaWxkKHNlYXJjaEJveCk7XG5cbiAgICBjb25zdCB0b2dnbGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2dnbGVCb3guY2xhc3NMaXN0LmFkZCgndG9nZ2xlLXN3aXRjaCcpO1xuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja0JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RoZW1lLXRvZ2dsZScpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aGVtZS10b2dnbGUnKTtcbiAgICBjb25zdCBsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBsaWdodC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaWNvbicpO1xuICAgIGxpZ2h0LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1pY29uLWxpZ2h0Jyk7XG4gICAgY29uc3QgZGFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkYXJrLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1pY29uJyk7XG4gICAgZGFyay5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaWNvbi1kYXJrJyk7XG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKCdzbGlkZXInKTtcblxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxpZ2h0KTtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChkYXJrKTtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChzbGlkZXIpO1xuXG4gICAgdG9nZ2xlQm94LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICB0b2dnbGVCb3guYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG5cbiAgICBiYXIuYXBwZW5kQ2hpbGQodG9nZ2xlQm94KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50JykuYXBwZW5kQ2hpbGQoYmFyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyOyIsImltcG9ydCB7c2lkZWJhcn0gZnJvbSAnLi9zaWRlYmFyLmpzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IGZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5cblxuY29uc3QgcGFnZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1jb250ZW50Jyk7XG4gICAgbGV0IHdpZHRoID0gc2lkZWJhckNvbnRlbnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc29sZS5sb2cod2lkdGgpO1xuICAgIGxldCB0b3AgPSBzaWRlYmFyQ29udGVudC5zdHlsZS5tYXJnaW5Ub3A7XG4gICAgbGV0IGhlaWdodCA9IHNpZGViYXJDb250ZW50LnN0eWxlLmhlaWdodDtcbiAgICBjb25zdCBmb290ZXJIID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG4gICAgbGV0IGJvdHRvbSA9IGZvb3Rlckgub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlQ29udGVudC5pZCA9ICdwYWdlLWNvbnRlbnQnO1xuICAgIHBhZ2VDb250ZW50LnN0eWxlLm1hcmdpbkxlZnQgPSB3aWR0aCArICdweCc7XG4gICAgcGFnZUNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gdG9wO1xuICAgIHBhZ2VDb250ZW50LnN0eWxlLm1pbkhlaWdodCA9ICdjYWxjKDEwMHZoIC0gJyArICh0b3AgKyBib3R0b20gKyAncHgnKSArICcpJztcbiAgICBwYWdlQ29udGVudC5zdHlsZS53aWR0aCA9ICdjYWxjKDEwMHZ3IC0gJyArICh3aWR0aCArICdweCcpICsgJyknO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKS5hcHBlbmRDaGlsZChwYWdlQ29udGVudCk7XG59XG5cbmNvbnN0IGFkanVzdFBhZ2VDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNpZGViYXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItY29udGVudCcpO1xuICAgIGxldCB3aWR0aCA9IHNpZGViYXJDb250ZW50Lm9mZnNldFdpZHRoO1xuICAgIGNvbnNvbGUubG9nKHdpZHRoKTtcbiAgICBsZXQgdG9wID0gc2lkZWJhckNvbnRlbnQuc3R5bGUubWFyZ2luVG9wO1xuICAgIGxldCBoZWlnaHQgPSBzaWRlYmFyQ29udGVudC5zdHlsZS5oZWlnaHQ7XG4gICAgY29uc3QgZm9vdGVySCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICAgIGxldCBib3R0b20gPSBmb290ZXJILm9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtY29udGVudCcpO1xuICAgIHBhZ2VDb250ZW50LnN0eWxlLm1hcmdpbkxlZnQgPSB3aWR0aCArICdweCc7XG4gICAgcGFnZUNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gdG9wO1xuICAgIHBhZ2VDb250ZW50LnN0eWxlLm1pbkhlaWdodCA9ICdjYWxjKDEwMHZoIC0gJyArICh0b3AgKyBib3R0b20gKyAncHgnKSArICcpJztcbiAgICBwYWdlQ29udGVudC5zdHlsZS53aWR0aCA9ICdjYWxjKDEwMHZ3IC0gJyArICh3aWR0aCArICdweCcpICsgJyknO1xufVxuXG5jb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcbiAgICBoZWFkZXIoKTtcbiAgICBzaWRlYmFyKCk7XG4gICAgZm9vdGVyKCk7XG4gICAgcGFnZUNvbnRlbnQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7XG5leHBvcnQge2FkanVzdFBhZ2VDb250ZW50fTsiLCIvLyBpbXBvcnQgYWxsIHRoZSBpY29uc1xuaW1wb3J0IEFsbCBmcm9tICcuLi9hc3NldHMvaW1nL2FsbC5zdmcnO1xuaW1wb3J0IFRvZGF5IGZyb20gJy4uL2Fzc2V0cy9pbWcvdG9kYXkuc3ZnJztcbmltcG9ydCBXZWVrIGZyb20gJy4uL2Fzc2V0cy9pbWcvd2Vlay5zdmcnO1xuaW1wb3J0IEltcG9ydGFudCBmcm9tICcuLi9hc3NldHMvaW1nL2ltcG9ydGFudC5zdmcnO1xuaW1wb3J0IENvbXBsZXRlZCBmcm9tICcuLi9hc3NldHMvaW1nL2NvbXBsZXRlZC5zdmcnO1xuaW1wb3J0IG5ld05vdGUgZnJvbSAnLi4vYXNzZXRzL2ltZy9uZXdOb3RlLnN2Zyc7XG5pbXBvcnQgbmV3UHJvamVjdCBmcm9tICcuLi9hc3NldHMvaW1nL25ld1Byb2plY3Quc3ZnJztcbmltcG9ydCBhbGxQcm9qZWN0cyBmcm9tICcuLi9hc3NldHMvaW1nL2FsbFByb2plY3RzLnN2Zyc7XG5pbXBvcnQgc3RhcnJlZFByb2plY3RzIGZyb20gJy4uL2Fzc2V0cy9pbWcvc3RhcnJlZFByb2plY3RzLnN2Zyc7XG5pbXBvcnQgYWxsTm90ZXMgZnJvbSAnLi4vYXNzZXRzL2ltZy9hbGxOb3Rlcy5zdmcnO1xuaW1wb3J0IHN0YXJyZWROb3RlcyBmcm9tICcuLi9hc3NldHMvaW1nL3N0YXJyZWROb3RlLnN2Zyc7XG5cbi8vIENyZWF0ZSBhIHNpZGViYXIgaXRlbVxuY29uc3QgY3JlYXRlU2lkZWJhckl0ZW1zID0gKGljb24sIHRleHQsIGJhclR5cGUpID0+IHsgXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgIGlmIChiYXJUeXBlID09PSAnbWluaScpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtLXJvdycpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29sdW1uJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1taW5pJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1yZWcnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1jb2x1bW4nKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtLXJvdycpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcmVnJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1taW5pJyk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaXRlbUljb24uc3JjID0gaWNvbjtcbiAgICBpdGVtSWNvbi5hbHQgPSB0ZXh0O1xuICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1UZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1JY29uKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgICByZXR1cm4gaXRlbTtcbn1cblxuLy8gQWxsIHRoZSBkYXRhIHUgd2FudCB0byBkaXNwbGF5IGluIHRoZSBzaWRlYmFyIGdldHMgYWRkZWQgYW5kIGFjY2Vzc2VkIGZyb20gaGVyZVxuY29uc3Qgc2lkZWJhckRhdGEgPSAoKCkgPT4ge1xuICAgIFxuICAgIGxldCBzaWRlYmFyTG9nID0gW11cblxuICAgIGNvbnN0IGdldFNpZGViYXJEYXRhID0gKCkgPT4gc2lkZWJhckxvZztcblxuICAgIGNvbnN0IHJlbW92ZUFsbCA9ICgpID0+IHtcbiAgICAgICAgc2lkZWJhckxvZyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVNpZGViYXJDYXRlZ29yeSA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRpdGxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaXRsZSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2lkZWJhckxvZyA9IHNpZGViYXJMb2cuZmlsdGVyKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkudGl0bGUgIT09IHRpdGxlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVTaWRlYmFySXRlbSA9ICh0aXRsZSwgdGV4dCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRpdGxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaXRsZSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUZXh0IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHNpZGViYXJMb2cuZmluZCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5LnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIGlmICghY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0ZWdvcnkuaXRlbXMgPSBjYXRlZ29yeS5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udGV4dCAhPT0gdGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkU2lkZWJhckNhdGVnb3J5ID0gKHRpdGxlLCBpdGVtcyA9IFtdKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGl0bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpdGxlIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0ZW1zIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICBzaWRlYmFyTG9nLnB1c2goeyB0aXRsZSwgaXRlbXMgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkU2lkZWJhckl0ZW0gPSAodGl0bGUsIGljb24sIHRleHQpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aXRsZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGl0bGUgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaWNvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWNvbiBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUZXh0IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBzaWRlYmFyTG9nLmZpbmQoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS50aXRsZSA9PT0gdGl0bGUpO1xuICAgICAgICBpZiAoIWNhdGVnb3J5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhdGVnb3J5IG5vdCBmb3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGVnb3J5Lml0ZW1zLnB1c2goeyBpY29uLCB0ZXh0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0U2lkZWJhckRhdGEsIGFkZFNpZGViYXJDYXRlZ29yeSwgYWRkU2lkZWJhckl0ZW0sIHJlbW92ZVNpZGViYXJDYXRlZ29yeSwgcmVtb3ZlU2lkZWJhckl0ZW0sIHJlbW92ZUFsbCB9XG5cbn0pKCk7XG5cbmNvbnN0IGNyZWF0ZVNpZGViYXJDYXRlZ29yeSA9IChkYXRhLCBiYXJUeXBlID0gXCJmdWxsXCIpID0+IHtcbiAgICAvLyBmaW5kIHRoZSBoZWlnaHQgb2YgdGhlIG5hdi1iYXJcbiAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJhcicpLm9mZnNldEhlaWdodDtcblxuICAgIC8vIGFkanVzdCB0aGUgaGVpZ2h0IGFuZCBwb3NpdGlvbiBhY2NvcmRpbmcgdG8gdGhlIGhlYWRlciBoZWlnaHRcbiAgICBjb25zdCBzaWRlYmFyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItY29udGVudCcpO1xuICAgIHNpZGViYXJDb250ZW50LnN0eWxlLmhlaWdodCA9ICdjYWxjKDEwMHZoIC0gJyArICh0b3AgLSAwLjUpICsgJ3B4KSc7XG4gICAgc2lkZWJhckNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gKHRvcCAtIDAuNSkgKyAncHgnO1xuXG4gICAgaWYgKGJhclR5cGUgPT09ICdtaW5pJykge1xuICAgICAgICBzaWRlYmFyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtaW5pJyk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwnKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuc3R5bGUucGFkZGluZyA9ICcwJ1xuICAgICAgICBzaWRlYmFyQ29udGVudC5zdHlsZS53aWR0aCA9ICc4N3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdmdWxsJyk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21pbmknKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnMXJlbSc7XG4gICAgICAgIHNpZGViYXJDb250ZW50LnN0eWxlLndpZHRoID0gJzI1MHB4JztcbiAgICB9XG5cbiAgICAvL2NyZWF0ZSBhIGRpdiBmb3IgZWFjaCBjYXRlZ29yeVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBCb3guY2xhc3NMaXN0LmFkZCgnYm94Jyk7XG5cbiAgICAgICAgaWYgKGJhclR5cGUgIT09ICdtaW5pJykge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlQm94LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveCcpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBkYXRhW2ldLnRpdGxlO1xuICAgICAgICAgICAgdGl0bGVCb3guYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgQm94LmFwcGVuZENoaWxkKHRpdGxlQm94KTtcbiAgICAgICAgICAgIEJveC5hcHBlbmRDaGlsZCh0aXRsZUJveCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBJdGVtcy5jbGFzc0xpc3QuYWRkKCdpdGVtcycpO1xuICAgICAgICAvLyBjcmVhdGUgYW4gaXRlbSBmb3IgZWFjaCBpdGVtIGluIHRoZSBjYXRlZ29yeVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFbaV0uaXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVTaWRlYmFySXRlbXMoZGF0YVtpXS5pdGVtc1tqXS5pY29uLCBkYXRhW2ldLml0ZW1zW2pdLnRleHQsIGJhclR5cGUpO1xuICAgICAgICAgICAgSXRlbXMuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBCb3guYXBwZW5kQ2hpbGQoSXRlbXMpO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZChCb3gpO1xuICAgIH1cbiAgICByZXR1cm4gc2lkZWJhckNvbnRlbnQ7XG5cbn1cblxuY29uc3Qgc2lkZWJhciA9ICgpID0+IHtcblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1jb250ZW50JykpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWNvbnRlbnQnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2Z1bGwnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItY29udGVudCcpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFkZCBob21lLCBwcm9qZWN0cywgYW5kIG5vdGVzIHRvIHNpZGViYXJcbiAgICBzaWRlYmFyRGF0YS5yZW1vdmVBbGwoKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFyQ2F0ZWdvcnkoJ0hvbWUnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIEFsbCwgJ0FsbCcpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgVG9kYXksICdUb2RheScpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgV2VlaywgJ1dlZWsnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIEltcG9ydGFudCwgJ0ltcG9ydGFudCcpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgQ29tcGxldGVkLCAnQ29tcGxldGVkJyk7XG5cbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFyQ2F0ZWdvcnkoJ1Byb2plY3RzJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ1Byb2plY3RzJywgbmV3UHJvamVjdCwgJ05ldyBQcm9qZWN0Jyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ1Byb2plY3RzJywgYWxsUHJvamVjdHMsICdBbGwgUHJvamVjdHMnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnUHJvamVjdHMnLCBzdGFycmVkUHJvamVjdHMsICdTdGFycmVkIFByb2plY3RzJyk7XG5cbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFyQ2F0ZWdvcnkoJ05vdGVzJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ05vdGVzJywgbmV3Tm90ZSwgJ05ldyBOb3RlJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ05vdGVzJywgYWxsTm90ZXMsICdBbGwgTm90ZXMnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnTm90ZXMnLCBzdGFycmVkTm90ZXMsICdTdGFycmVkIE5vdGVzJyk7ICBcblxuICAgIC8vIEFkZCBzaWRlYmFyIHRvIGNvbnRlbnRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGViYXJDYXRlZ29yeShzaWRlYmFyRGF0YS5nZXRTaWRlYmFyRGF0YSgpKSk7XG59XG5cbmNvbnN0IG1pbmlTaWRlYmFyID0gKCkgPT4ge1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWNvbnRlbnQnKSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItY29udGVudCcpLmNsYXNzTGlzdC5jb250YWlucygnbWluaScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1jb250ZW50JykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaWRlYmFyRGF0YS5yZW1vdmVBbGwoKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFyQ2F0ZWdvcnkoJ0hvbWUnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIEFsbCwgJ0FsbCcpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgVG9kYXksICdUb2RheScpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgV2VlaywgJ1dlZWsnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIEltcG9ydGFudCwgJ0ltcG9ydGFudCcpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgQ29tcGxldGVkLCAnQ29tcGxldGVkJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyQ2F0ZWdvcnkoc2lkZWJhckRhdGEuZ2V0U2lkZWJhckRhdGEoKSwgJ21pbmknKSk7XG4gICAgXG59XG5cbmV4cG9ydCB7c2lkZWJhciwgbWluaVNpZGViYXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9pbXBvcnQgYWxsIGNzcyBmaWxlc1xuLy9pbXBvcnQgcmVxdWlyZWQgcGljc1xuaW1wb3J0ICcuL2Nzcy9wYWdlTG9hZC5jc3MnO1xuaW1wb3J0IHtzaWRlYmFyLCBtaW5pU2lkZWJhcn0gZnJvbSAnLi9mdW5jdGlvbnMvc2lkZWJhci5qcyc7XG5pbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi9mdW5jdGlvbnMvcGFnZUxvYWQnO1xuaW1wb3J0IHthZGp1c3RQYWdlQ29udGVudH0gZnJvbSAnLi9mdW5jdGlvbnMvcGFnZUxvYWQnO1xuY29uc29sZS5sb2coJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzIScpO1xuXG4vLyBMb2FkIGhlYWRlciwgc2lkZWJhciwgYW5kIGZvb3RlclxucGFnZUxvYWQoKTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gbWF4aW1pemUvbWluaW1pemUgc2lkZWJhclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLm1lbnUtYnV0dG9uJykpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1jb250ZW50Jyk7XG4gICAgICAgIGlmIChzaWRlYmFyQ29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Z1bGwnKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Z1bGwnKTtcbiAgICAgICAgICAgIG1pbmlTaWRlYmFyKCk7XG4gICAgICAgICAgICBhZGp1c3RQYWdlQ29udGVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHNpZGViYXJDb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnbWluaScpKSB7XG4gICAgICAgICAgICBzaWRlYmFyKCk7XG4gICAgICAgICAgICBhZGp1c3RQYWdlQ29udGVudCgpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyIHRvIGNoYW5nZSBjb2xvciB0aGVtZVxuY29uc3QgdGhlbWVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtdG9nZ2xlJyk7XG50aGVtZVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdsaWdodC10aGVtZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYm94JykuY2xhc3NMaXN0LnRvZ2dsZSgnbGlnaHQtdGhlbWUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdsaWdodC10aGVtZScpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=