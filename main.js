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
    background-color: #15202b;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #dddddd;
}

div#content {
    display: flex;
    flex-direction: row;
    position: relative;
    min-height: 100vh;
    color: #dddddd;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.sidebar-content {
    width: 250px;
    background-color: #15202b;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    transition: all 0.3s ease-in-out;
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
    border-bottom: 2px solid #dddddd;
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
    background-color: #1f2937;
    filter: brightness(1.2);
}

.active {
    background-color: #1f2937;
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
    background-color: #15202b;
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
    background-color: #192734;
    border-radius: 3.9375rem;
}

.search-box input {
    border: none;
    /* background-color: #192734;
    border-radius: 3.9375rem; */
    background-color: transparent;
    border: hsl(0, 0%, 18.82%);
    color: #dddddd;
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
    background-color: #313e4b;
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
    color: #dddddd;
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
    background-color: #1f2937;
}

.toggle-switch {
    position: relative;
    width: 65px;
    height: 30px;
    background-color: #6b757e;
    border-radius: 26px;
    overflow: hidden;
    border: 3px solid #2ca9bc;
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
  `, "",{"version":3,"sources":["webpack://./src/css/pageLoad.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    background-color: #15202b;\n    margin: 0;\n    padding: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #dddddd;\n}\n\ndiv#content {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    min-height: 100vh;\n    color: #dddddd;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.sidebar-content {\n    width: 250px;\n    background-color: #15202b;\n    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */\n    transition: all 0.3s ease-in-out;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: stretch;\n    padding: 0;\n    padding-left: 1rem;\n    position: fixed;\n    left: 0;\n    height: 100%;\n    overflow-y: hidden;\n    z-index: 1;\n    flex-grow: 1;\n  \n    &:hover {\n        overflow-y: auto;\n        scrollbar-width: thin;\n        scrollbar-color: #aaa #eee;\n    }\n  \n    &::-webkit-scrollbar {\n      width: 8px;\n      height: 8px;\n    }\n  \n    &::-webkit-scrollbar-track {\n      background-color: #eee;\n      border-radius: 4px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: #aaa;\n      border-radius: 4px;\n    }\n}\n\n.box {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem 0;\n}\n\n.box:first-of-type {\n    padding-top: 0;\n}\n\n.title-box {\n    border-bottom: 2px solid #dddddd;\n    margin-right: 1rem;\n}\n\n.title-box h2 {\n    font-size: 1.4rem;\n    font-weight: 900;\n    margin-bottom: 0.25rem;\n    margin-top: 0;\n    padding-left: 0.25rem;\n}\n\n.items {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.item {\n    align-items: center;\n    gap: 1rem;\n    padding: 0.5rem;\n    transition: all 0.3s ease;\n    border-radius: 0.25rem;\n    margin: 0 0.25rem;\n}\n\n.item-row {\n    display:flex;\n    flex-direction:row;\n}\n\n.item-column {\n    display:flex;\n    flex-direction:column;\n}\n\n.item:hover {\n    background-color: #1f2937;\n    filter: brightness(1.2);\n}\n\n.active {\n    background-color: #1f2937;\n    filter: brightness(1.2);\n}\n\n.not-active {\n    background-color: transparent;\n}\n\n.item img {\n    width: 1.5rem;\n    height: auto;\n    cursor: pointer;\n}\n\n.item:nth-of-type(3) {\n    padding-left: 0.375rem;\n}\n\n.item:nth-of-type(3) img {\n    width: 1.8rem;\n    height: auto;\n}\n\n.item p {\n    font-weight: 500;\n    margin: 0;\n    cursor: pointer;\n}\n\n.item-reg {\n    margin-right: 1rem;\n}\n\n.item-reg p {\n    font-size: 1.1rem;\n}\n\n.item-mini p {\n    font-size: 0.8rem;\n}\n\n.nav-bar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: #15202b;\n    width: calc(100% - 2rem);\n    z-index: 2;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 2rem;\n    padding: 0 1rem;\n    /* -webkit-box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76); \n    box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76); */\n}\n\n.search-box {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    padding: 0 1rem;\n    padding-right: 0;\n    background-color: #192734;\n    border-radius: 3.9375rem;\n}\n\n.search-box input {\n    border: none;\n    /* background-color: #192734;\n    border-radius: 3.9375rem; */\n    background-color: transparent;\n    border: hsl(0, 0%, 18.82%);\n    color: #dddddd;\n    font-size: 1rem;\n    font-weight: 500;\n    padding: 0.5rem;\n    flex: 1;\n}\n\n.search-box input:focus {\n    outline: none;\n}\n\n.search-box button {\n    border: none;\n    background-color: #313e4b;\n    color: #dddddd;\n    font-size: 1rem;\n    font-weight: 500;\n    padding: 0.5rem;\n    cursor: pointer;\n    height: 100%;\n    width: 3.5rem;\n    border-top-right-radius: 3.9375rem;\n    border-bottom-right-radius: 3.9375rem;\n}\n\n.search-box img {\n    width: 1.5rem;\n    height: auto;\n}\n\n.search-box button:hover,\n.search-box button:active {\n    filter: brightness(1.2);\n}\n\n.logo-box {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    cursor: pointer;\n}\n\n.logo-box img {\n    width: 2.5rem;\n    height: auto;\n}\n\n\n.logo-box:hover,\n.logo-box:active {\n    filter: brightness(1.2);\n}\n\n.logo-box a h1 {\n    font-size: 1.6rem;\n    font-weight: 700;\n    color: #dddddd;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    margin-top: 10px;\n}\n\n.container {\n    display: flex;\n    flex-direction: row;\n    margin-top: 50px; /* adjust as needed to prevent content from being overlapped by the header */\n  }\n\n.left-box {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n.left-box .menu-button img{\n    width: 2rem;\n    height: auto;\n}\n\n\n.menu-button{\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: transparent;\n    color: inherit;\n    font: inherit;\n    cursor: pointer;\n    outline: none;\n    border-radius: 50%;\n    width: 3rem;\n    height: 3rem;\n}\n\n.menu-button:hover,\n.menu-button:active {\n    filter: brightness(1.2);\n    background-color: #1f2937;\n}\n\n.toggle-switch {\n    position: relative;\n    width: 65px;\n    height: 30px;\n    background-color: #6b757e;\n    border-radius: 26px;\n    overflow: hidden;\n    border: 3px solid #2ca9bc;\n  }\n  \n  .toggle-switch input {\n    display: none;\n  }\n  \n  .toggle-switch label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n  }\n  \n  .toggle-icon {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n    transition: transform 0.3s ease;\n  }\n  \n  .toggle-icon-light {\n    background: url('../assets/img/sun.svg') center/cover no-repeat;\n    right: 6px;\n    top: 4.5px;\n    transform: translateX(0%);\n  }\n  \n  .toggle-icon-dark {\n    background: url('../assets/img/moon.svg') center/cover no-repeat;\n    left: 5px;\n    top: 5px;\n    transform: translateX(0%);\n  }\n  \n  .slider {\n    position: absolute;\n    top: 3px;\n    left: 5px;\n    width: 24px;\n    height: 24px;\n    background-color: #2ca9bc;\n    border-radius: 50%;\n    transition: transform 0.3s ease;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  }\n  \n  input:checked + label .slider {\n    transform: translateX(33px);\n    background-color: #fb8a09;\n  }\n  "],"sourceRoot":""}]);
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
    sidebarContent.style.height = 'calc(100vh - ' + top + 'px)';
    sidebarContent.style.marginTop = top + 'px';

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
//import all css files
//import required pics



console.log('I get called from print.js!');

(0,_functions_header_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_functions_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.sidebar)();

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

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});


// const toggle = document.getElementById('toggle');

// toggle.addEventListener('change', function() {
//   const sun = document.querySelector('.sun');
//   const moon = document.querySelector('.moon');

//   if (toggle.checked) {
//     sun.style.opacity = '0';
//     sun.style.transform = 'translateX(24px)';
//     moon.style.opacity = '1';
//     moon.style.transform = 'translateX(-24px)';
//   } else {
//     sun.style.opacity = '1';
//     sun.style.transform = 'translateX(0)';
//     moon.style.opacity = '0';
//     moon.style.transform = 'translateX(0)';
//   }
// });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHNIQUF3QztBQUNwRiw0Q0FBNEMsd0hBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx1RkFBdUYsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssT0FBTyxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFV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QWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUM0QjtBQUNnQztBQUNqQjtBQUMzQzs7QUFFQSxnRUFBTTtBQUNOLDhEQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtFQUFXO0FBQ3ZCLFVBQVU7QUFDVixZQUFZLDhEQUFPO0FBQ25CO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3BhZ2VMb2FkLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9wYWdlTG9hZC5jc3M/YTdlNSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltZy9zdW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltZy9tb29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIwMmI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjZGRkZGRkO1xufVxuXG5kaXYjY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBjb2xvcjogI2RkZGRkZDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cbi5zaWRlYmFyLWNvbnRlbnQge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMDJiO1xuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgKi9cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgei1pbmRleDogMTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIFxuICAgICY6aG92ZXIge1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gICAgICAgIHNjcm9sbGJhci1jb2xvcjogI2FhYSAjZWVlO1xuICAgIH1cbiAgXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDhweDtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgIH1cbiAgXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbn1cblxuLmJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG59XG5cbi5ib3g6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50aXRsZS1ib3gge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkZGRkO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLnRpdGxlLWJveCBoMiB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xufVxuXG4uaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLml0ZW0ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgbWFyZ2luOiAwIDAuMjVyZW07XG59XG5cbi5pdGVtLXJvdyB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbn1cblxuLml0ZW0tY29sdW1uIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xufVxuXG4uaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjkzNztcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjkzNztcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLm5vdC1hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaXRlbSBpbWcge1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLml0ZW06bnRoLW9mLXR5cGUoMykge1xuICAgIHBhZGRpbmctbGVmdDogMC4zNzVyZW07XG59XG5cbi5pdGVtOm50aC1vZi10eXBlKDMpIGltZyB7XG4gICAgd2lkdGg6IDEuOHJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pdGVtIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLml0ZW0tcmVnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5pdGVtLXJlZyBwIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLml0ZW0tbWluaSBwIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLm5hdi1iYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMDJiO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAvKiAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuNzYpOyBcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAwcHggcmdiYSgwLDAsMCwwLjc2KTsgKi9cbn1cblxuLnNlYXJjaC1ib3gge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyNzM0O1xuICAgIGJvcmRlci1yYWRpdXM6IDMuOTM3NXJlbTtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyNzM0O1xuICAgIGJvcmRlci1yYWRpdXM6IDMuOTM3NXJlbTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IGhzbCgwLCAwJSwgMTguODIlKTtcbiAgICBjb2xvcjogI2RkZGRkZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZmxleDogMTtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTNlNGI7XG4gICAgY29sb3I6ICNkZGRkZGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDMuNXJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMy45Mzc1cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzLjkzNzVyZW07XG59XG5cbi5zZWFyY2gtYm94IGltZyB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zZWFyY2gtYm94IGJ1dHRvbjpob3Zlcixcbi5zZWFyY2gtYm94IGJ1dHRvbjphY3RpdmUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4ubG9nby1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dvLWJveCBpbWcge1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG5cbi5sb2dvLWJveDpob3Zlcixcbi5sb2dvLWJveDphY3RpdmUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4ubG9nby1ib3ggYSBoMSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI2RkZGRkZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLXRvcDogNTBweDsgLyogYWRqdXN0IGFzIG5lZWRlZCB0byBwcmV2ZW50IGNvbnRlbnQgZnJvbSBiZWluZyBvdmVybGFwcGVkIGJ5IHRoZSBoZWFkZXIgKi9cbiAgfVxuXG4ubGVmdC1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0LWJveCAubWVudS1idXR0b24gaW1ne1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuXG4ubWVudS1idXR0b257XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbn1cblxuLm1lbnUtYnV0dG9uOmhvdmVyLFxuLm1lbnUtYnV0dG9uOmFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjkzNztcbn1cblxuLnRvZ2dsZS1zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiNzU3ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzJjYTliYztcbiAgfVxuICBcbiAgLnRvZ2dsZS1zd2l0Y2ggaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC50b2dnbGUtc3dpdGNoIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLnRvZ2dsZS1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICB9XG4gIFxuICAudG9nZ2xlLWljb24tbGlnaHQge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICAgIHJpZ2h0OiA2cHg7XG4gICAgdG9wOiA0LjVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG4gIFxuICAudG9nZ2xlLWljb24tZGFyayB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogNXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbiAgXG4gIC5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDNweDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyY2E5YmM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuICBcbiAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIC5zbGlkZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzM3B4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI4YTA5O1xuICB9XG4gIGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9wYWdlTG9hZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsU0FBUztJQUNULFVBQVU7SUFDVixtSkFBbUo7SUFDbkosY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUpBQW1KO0FBQ3ZKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw2Q0FBNkM7SUFDN0MsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixPQUFPO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTs7SUFFWjtRQUNJLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsMEJBQTBCO0lBQzlCOztJ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Q2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSwwRUFBK0Q7SUFDL0QsVUFBVTtJQUNWLFVBQVU7SUFDVix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSwwRUFBZ0U7SUFDaEUsU0FBUztJQUNULFFBQVE7SUFDUix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQix5QkFBeUI7RUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIwMmI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogI2RkZGRkZDtcXG59XFxuXFxuZGl2I2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBjb2xvcjogI2RkZGRkZDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2lkZWJhci1jb250ZW50IHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMDJiO1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7ICovXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICAgICAgICBzY3JvbGxiYXItY29sb3I6ICNhYWEgI2VlZTtcXG4gICAgfVxcbiAgXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICB3aWR0aDogOHB4O1xcbiAgICAgIGhlaWdodDogOHB4O1xcbiAgICB9XFxuICBcXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcbn1cXG5cXG4uYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5ib3g6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbn1cXG5cXG4udGl0bGUtYm94IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGRkZGQ7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRpdGxlLWJveCBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XFxufVxcblxcbi5pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBtYXJnaW46IDAgMC4yNXJlbTtcXG59XFxuXFxuLml0ZW0tcm93IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XFxufVxcblxcbi5pdGVtLWNvbHVtbiB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG5cXG4uaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjI5Mzc7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjkzNztcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5ub3QtYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5pdGVtIGltZyB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXRlbTpudGgtb2YtdHlwZSgzKSB7XFxuICAgIHBhZGRpbmctbGVmdDogMC4zNzVyZW07XFxufVxcblxcbi5pdGVtOm50aC1vZi10eXBlKDMpIGltZyB7XFxuICAgIHdpZHRoOiAxLjhyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLml0ZW0gcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaXRlbS1yZWcge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5pdGVtLXJlZyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5pdGVtLW1pbmkgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICAvKiAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuNzYpOyBcXG4gICAgYm94LXNoYWRvdzogMHB4IDdweCA4cHggMHB4IHJnYmEoMCwwLDAsMC43Nik7ICovXFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTI3MzQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMuOTM3NXJlbTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxOTI3MzQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMuOTM3NXJlbTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogaHNsKDAsIDAlLCAxOC44MiUpO1xcbiAgICBjb2xvcjogI2RkZGRkZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTRiO1xcbiAgICBjb2xvcjogI2RkZGRkZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMy41cmVtO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMy45Mzc1cmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMy45Mzc1cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBpbWcge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5zZWFyY2gtYm94IGJ1dHRvbjpob3ZlcixcXG4uc2VhcmNoLWJveCBidXR0b246YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5sb2dvLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2dvLWJveCBpbWcge1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcblxcbi5sb2dvLWJveDpob3ZlcixcXG4ubG9nby1ib3g6YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5sb2dvLWJveCBhIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiAjZGRkZGRkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyAvKiBhZGp1c3QgYXMgbmVlZGVkIHRvIHByZXZlbnQgY29udGVudCBmcm9tIGJlaW5nIG92ZXJsYXBwZWQgYnkgdGhlIGhlYWRlciAqL1xcbiAgfVxcblxcbi5sZWZ0LWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnQtYm94IC5tZW51LWJ1dHRvbiBpbWd7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcblxcbi5tZW51LWJ1dHRvbntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi5tZW51LWJ1dHRvbjpob3ZlcixcXG4ubWVudS1idXR0b246YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjI5Mzc7XFxufVxcblxcbi50b2dnbGUtc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI3NTdlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMmNhOWJjO1xcbiAgfVxcbiAgXFxuICAudG9nZ2xlLXN3aXRjaCBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC50b2dnbGUtc3dpdGNoIGxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLnRvZ2dsZS1pY29uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgfVxcbiAgXFxuICAudG9nZ2xlLWljb24tbGlnaHQge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWcvc3VuLnN2ZycpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxuICAgIHJpZ2h0OiA2cHg7XFxuICAgIHRvcDogNC41cHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICB9XFxuICBcXG4gIC50b2dnbGUtaWNvbi1kYXJrIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1nL21vb24uc3ZnJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICB0b3A6IDVweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gIH1cXG4gIFxcbiAgLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIGxlZnQ6IDVweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjYTliYztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpjaGVja2VkICsgbGFiZWwgLnNsaWRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzM3B4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiOGEwOTtcXG4gIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlTG9hZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2VMb2FkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEljb24gZnJvbSAnLi4vYXNzZXRzL2ltZy9pY29uLnN2Zyc7XG5pbXBvcnQgbWVudSBmcm9tICcuLi9hc3NldHMvaW1nL21lbnUuc3ZnJztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vYXNzZXRzL2ltZy9zZWFyY2guc3ZnJztcblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJyk7XG5cbiAgICBjb25zdCBsZWZ0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdEJveC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWJveCcpO1xuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKTtcbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnVJY29uLnNyYyA9IG1lbnU7XG4gICAgbWVudUljb24uYWx0ID0gJ01lbnUgaWNvbic7XG4gICAgbWVudUJ1dHRvbi5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gICAgbGVmdEJveC5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICAgIGNvbnN0IGxvZ29Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvQm94LmNsYXNzTGlzdC5hZGQoJ2xvZ28tYm94Jyk7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ28uc3JjID0gSWNvbjtcbiAgICBsb2dvLmFsdCA9ICdUb2RvIExpc3QgbG9nbyc7XG4gICAgY29uc3QgbG9nb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbG9nb0xpbmsuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgbG9nb0JveC5hcHBlbmRDaGlsZChsb2dvTGluayk7XG4gICAgY29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxvZ29UZXh0LnRleHRDb250ZW50ID0gJ1RvZG8gTGlzdCc7XG4gICAgY29uc3QgbG9nb0xpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxvZ29MaW5rMi5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XG4gICAgbG9nb0JveC5hcHBlbmRDaGlsZChsb2dvTGluazIpO1xuICAgIGxlZnRCb3guYXBwZW5kQ2hpbGQobG9nb0JveCk7XG5cbiAgICBiYXIuYXBwZW5kQ2hpbGQobGVmdEJveCk7XG5cbiAgICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWFyY2hCb3guY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJveCcpO1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtaW5wdXQnKTtcbiAgICBzZWFyY2hJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaCc7XG4gICAgc2VhcmNoQm94LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ1dHRvbicpO1xuICAgIHNlYXJjaEJveC5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xuICAgIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzZWFyY2hJY29uLnNyYyA9IHNlYXJjaDtcbiAgICBzZWFyY2hJY29uLmFsdCA9ICdTZWFyY2ggaWNvbic7XG4gICAgc2VhcmNoQnV0dG9uLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuXG4gICAgYmFyLmFwcGVuZENoaWxkKHNlYXJjaEJveCk7XG5cbiAgICBjb25zdCB0b2dnbGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2dnbGVCb3guY2xhc3NMaXN0LmFkZCgndG9nZ2xlLXN3aXRjaCcpO1xuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja0JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RoZW1lLXRvZ2dsZScpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aGVtZS10b2dnbGUnKTtcbiAgICBjb25zdCBsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBsaWdodC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaWNvbicpO1xuICAgIGxpZ2h0LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1pY29uLWxpZ2h0Jyk7XG4gICAgY29uc3QgZGFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkYXJrLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1pY29uJyk7XG4gICAgZGFyay5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaWNvbi1kYXJrJyk7XG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKCdzbGlkZXInKTtcblxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGxpZ2h0KTtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChkYXJrKTtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChzbGlkZXIpO1xuXG4gICAgdG9nZ2xlQm94LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICB0b2dnbGVCb3guYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG5cbiAgICBiYXIuYXBwZW5kQ2hpbGQodG9nZ2xlQm94KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50JykuYXBwZW5kQ2hpbGQoYmFyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyOyIsIi8vIGltcG9ydCBhbGwgdGhlIGljb25zXG5pbXBvcnQgQWxsIGZyb20gJy4uL2Fzc2V0cy9pbWcvYWxsLnN2Zyc7XG5pbXBvcnQgVG9kYXkgZnJvbSAnLi4vYXNzZXRzL2ltZy90b2RheS5zdmcnO1xuaW1wb3J0IFdlZWsgZnJvbSAnLi4vYXNzZXRzL2ltZy93ZWVrLnN2Zyc7XG5pbXBvcnQgSW1wb3J0YW50IGZyb20gJy4uL2Fzc2V0cy9pbWcvaW1wb3J0YW50LnN2Zyc7XG5pbXBvcnQgQ29tcGxldGVkIGZyb20gJy4uL2Fzc2V0cy9pbWcvY29tcGxldGVkLnN2Zyc7XG5pbXBvcnQgbmV3Tm90ZSBmcm9tICcuLi9hc3NldHMvaW1nL25ld05vdGUuc3ZnJztcbmltcG9ydCBuZXdQcm9qZWN0IGZyb20gJy4uL2Fzc2V0cy9pbWcvbmV3UHJvamVjdC5zdmcnO1xuaW1wb3J0IGFsbFByb2plY3RzIGZyb20gJy4uL2Fzc2V0cy9pbWcvYWxsUHJvamVjdHMuc3ZnJztcbmltcG9ydCBzdGFycmVkUHJvamVjdHMgZnJvbSAnLi4vYXNzZXRzL2ltZy9zdGFycmVkUHJvamVjdHMuc3ZnJztcbmltcG9ydCBhbGxOb3RlcyBmcm9tICcuLi9hc3NldHMvaW1nL2FsbE5vdGVzLnN2Zyc7XG5pbXBvcnQgc3RhcnJlZE5vdGVzIGZyb20gJy4uL2Fzc2V0cy9pbWcvc3RhcnJlZE5vdGUuc3ZnJztcblxuLy8gQ3JlYXRlIGEgc2lkZWJhciBpdGVtXG5jb25zdCBjcmVhdGVTaWRlYmFySXRlbXMgPSAoaWNvbiwgdGV4dCwgYmFyVHlwZSkgPT4geyBcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgaWYgKGJhclR5cGUgPT09ICdtaW5pJykge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0ZW0tcm93Jyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1jb2x1bW4nKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtLW1pbmknKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtLXJlZycpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtLWNvbHVtbicpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcm93Jyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1yZWcnKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtLW1pbmknKTtcbiAgICB9XG4gICAgY29uc3QgaXRlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpdGVtSWNvbi5zcmMgPSBpY29uO1xuICAgIGl0ZW1JY29uLmFsdCA9IHRleHQ7XG4gICAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbVRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUljb24pO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRleHQpO1xuICAgIHJldHVybiBpdGVtO1xufVxuXG4vLyBBbGwgdGhlIGRhdGEgdSB3YW50IHRvIGRpc3BsYXkgaW4gdGhlIHNpZGViYXIgZ2V0cyBhZGRlZCBhbmQgYWNjZXNzZWQgZnJvbSBoZXJlXG5jb25zdCBzaWRlYmFyRGF0YSA9ICgoKSA9PiB7XG4gICAgXG4gICAgbGV0IHNpZGViYXJMb2cgPSBbXVxuXG4gICAgY29uc3QgZ2V0U2lkZWJhckRhdGEgPSAoKSA9PiBzaWRlYmFyTG9nO1xuXG4gICAgY29uc3QgcmVtb3ZlQWxsID0gKCkgPT4ge1xuICAgICAgICBzaWRlYmFyTG9nID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlU2lkZWJhckNhdGVnb3J5ID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGl0bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpdGxlIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBzaWRlYmFyTG9nID0gc2lkZWJhckxvZy5maWx0ZXIoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS50aXRsZSAhPT0gdGl0bGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVNpZGViYXJJdGVtID0gKHRpdGxlLCB0ZXh0KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGl0bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpdGxlIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RleHQgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gc2lkZWJhckxvZy5maW5kKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkudGl0bGUgPT09IHRpdGxlKTtcbiAgICAgICAgaWYgKCFjYXRlZ29yeSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRlZ29yeS5pdGVtcyA9IGNhdGVnb3J5Lml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50ZXh0ICE9PSB0ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRTaWRlYmFyQ2F0ZWdvcnkgPSAodGl0bGUsIGl0ZW1zID0gW10pID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aXRsZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGl0bGUgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSXRlbXMgbXVzdCBiZSBhbiBhcnJheScpO1xuICAgICAgICB9XG4gICAgICAgIHNpZGViYXJMb2cucHVzaCh7IHRpdGxlLCBpdGVtcyB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRTaWRlYmFySXRlbSA9ICh0aXRsZSwgaWNvbiwgdGV4dCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRpdGxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaXRsZSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBpY29uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJY29uIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RleHQgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHNpZGViYXJMb2cuZmluZCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5LnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIGlmICghY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0ZWdvcnkuaXRlbXMucHVzaCh7IGljb24sIHRleHQgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRTaWRlYmFyRGF0YSwgYWRkU2lkZWJhckNhdGVnb3J5LCBhZGRTaWRlYmFySXRlbSwgcmVtb3ZlU2lkZWJhckNhdGVnb3J5LCByZW1vdmVTaWRlYmFySXRlbSwgcmVtb3ZlQWxsIH1cblxufSkoKTtcblxuY29uc3QgY3JlYXRlU2lkZWJhckNhdGVnb3J5ID0gKGRhdGEsIGJhclR5cGUgPSBcImZ1bGxcIikgPT4ge1xuICAgIC8vIGZpbmQgdGhlIGhlaWdodCBvZiB0aGUgbmF2LWJhclxuICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYmFyJykub2Zmc2V0SGVpZ2h0O1xuXG4gICAgLy8gYWRqdXN0IHRoZSBoZWlnaHQgYW5kIHBvc2l0aW9uIGFjY29yZGluZyB0byB0aGUgaGVhZGVyIGhlaWdodFxuICAgIGNvbnN0IHNpZGViYXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1jb250ZW50Jyk7XG4gICAgc2lkZWJhckNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJ2NhbGMoMTAwdmggLSAnICsgdG9wICsgJ3B4KSc7XG4gICAgc2lkZWJhckNvbnRlbnQuc3R5bGUubWFyZ2luVG9wID0gdG9wICsgJ3B4JztcblxuICAgIGlmIChiYXJUeXBlID09PSAnbWluaScpIHtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWluaScpO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsJyk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LnN0eWxlLnBhZGRpbmcgPSAnMCdcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuc3R5bGUud2lkdGggPSAnODdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZnVsbCcpO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdtaW5pJyk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gICAgICAgIHNpZGViYXJDb250ZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzFyZW0nO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5zdHlsZS53aWR0aCA9ICcyNTBweCc7XG4gICAgfVxuXG4gICAgLy9jcmVhdGUgYSBkaXYgZm9yIGVhY2ggY2F0ZWdvcnlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBjb25zdCBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgQm94LmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuXG4gICAgICAgIGlmIChiYXJUeXBlICE9PSAnbWluaScpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aXRsZUJveC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1ib3gnKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gZGF0YVtpXS50aXRsZTtcbiAgICAgICAgICAgIHRpdGxlQm94LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIEJveC5hcHBlbmRDaGlsZCh0aXRsZUJveCk7XG4gICAgICAgICAgICBCb3guYXBwZW5kQ2hpbGQodGl0bGVCb3gpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgSXRlbXMuY2xhc3NMaXN0LmFkZCgnaXRlbXMnKTtcbiAgICAgICAgLy8gY3JlYXRlIGFuIGl0ZW0gZm9yIGVhY2ggaXRlbSBpbiB0aGUgY2F0ZWdvcnlcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhW2ldLml0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gY3JlYXRlU2lkZWJhckl0ZW1zKGRhdGFbaV0uaXRlbXNbal0uaWNvbiwgZGF0YVtpXS5pdGVtc1tqXS50ZXh0LCBiYXJUeXBlKTtcbiAgICAgICAgICAgIEl0ZW1zLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgQm94LmFwcGVuZENoaWxkKEl0ZW1zKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQoQm94KTtcbiAgICB9XG4gICAgcmV0dXJuIHNpZGViYXJDb250ZW50O1xuXG59XG5cbmNvbnN0IHNpZGViYXIgPSAoKSA9PiB7XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItY29udGVudCcpKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1jb250ZW50JykuY2xhc3NMaXN0LmNvbnRhaW5zKCdmdWxsJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWNvbnRlbnQnKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZGQgaG9tZSwgcHJvamVjdHMsIGFuZCBub3RlcyB0byBzaWRlYmFyXG4gICAgc2lkZWJhckRhdGEucmVtb3ZlQWxsKCk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckNhdGVnb3J5KCdIb21lJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ0hvbWUnLCBBbGwsICdBbGwnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIFRvZGF5LCAnVG9kYXknKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIFdlZWssICdXZWVrJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ0hvbWUnLCBJbXBvcnRhbnQsICdJbXBvcnRhbnQnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIENvbXBsZXRlZCwgJ0NvbXBsZXRlZCcpO1xuXG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckNhdGVnb3J5KCdQcm9qZWN0cycpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdQcm9qZWN0cycsIG5ld1Byb2plY3QsICdOZXcgUHJvamVjdCcpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdQcm9qZWN0cycsIGFsbFByb2plY3RzLCAnQWxsIFByb2plY3RzJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ1Byb2plY3RzJywgc3RhcnJlZFByb2plY3RzLCAnU3RhcnJlZCBQcm9qZWN0cycpO1xuXG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckNhdGVnb3J5KCdOb3RlcycpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdOb3RlcycsIG5ld05vdGUsICdOZXcgTm90ZScpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdOb3RlcycsIGFsbE5vdGVzLCAnQWxsIE5vdGVzJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ05vdGVzJywgc3RhcnJlZE5vdGVzLCAnU3RhcnJlZCBOb3RlcycpOyAgXG5cbiAgICAvLyBBZGQgc2lkZWJhciB0byBjb250ZW50XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyQ2F0ZWdvcnkoc2lkZWJhckRhdGEuZ2V0U2lkZWJhckRhdGEoKSkpO1xufVxuXG5jb25zdCBtaW5pU2lkZWJhciA9ICgpID0+IHtcblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1jb250ZW50JykpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWNvbnRlbnQnKS5jbGFzc0xpc3QuY29udGFpbnMoJ21pbmknKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItY29udGVudCcpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2lkZWJhckRhdGEucmVtb3ZlQWxsKCk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckNhdGVnb3J5KCdIb21lJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ0hvbWUnLCBBbGwsICdBbGwnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIFRvZGF5LCAnVG9kYXknKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIFdlZWssICdXZWVrJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ0hvbWUnLCBJbXBvcnRhbnQsICdJbXBvcnRhbnQnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIENvbXBsZXRlZCwgJ0NvbXBsZXRlZCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhckNhdGVnb3J5KHNpZGViYXJEYXRhLmdldFNpZGViYXJEYXRhKCksICdtaW5pJykpO1xuICAgIFxufVxuXG5leHBvcnQge3NpZGViYXIsIG1pbmlTaWRlYmFyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vaW1wb3J0IGFsbCBjc3MgZmlsZXNcbi8vaW1wb3J0IHJlcXVpcmVkIHBpY3NcbmltcG9ydCAnLi9jc3MvcGFnZUxvYWQuY3NzJztcbmltcG9ydCB7c2lkZWJhciwgbWluaVNpZGViYXJ9IGZyb20gJy4vZnVuY3Rpb25zL3NpZGViYXIuanMnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL2Z1bmN0aW9ucy9oZWFkZXIuanMnO1xuY29uc29sZS5sb2coJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzIScpO1xuXG5oZWFkZXIoKTtcbnNpZGViYXIoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLm1lbnUtYnV0dG9uJykpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1jb250ZW50Jyk7XG4gICAgICAgIGlmIChzaWRlYmFyQ29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Z1bGwnKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Z1bGwnKTtcbiAgICAgICAgICAgIG1pbmlTaWRlYmFyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2lkZWJhckNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaW5pJykpIHtcbiAgICAgICAgICAgIHNpZGViYXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jb25zdCB0aGVtZVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS10b2dnbGUnKTtcbnRoZW1lVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmstdGhlbWUnKTtcbn0pO1xuXG5cbi8vIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUnKTtcblxuLy8gdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuLy8gICBjb25zdCBzdW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VuJyk7XG4vLyAgIGNvbnN0IG1vb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbicpO1xuXG4vLyAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xuLy8gICAgIHN1bi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuLy8gICAgIHN1bi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgyNHB4KSc7XG4vLyAgICAgbW9vbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuLy8gICAgIG1vb24uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTI0cHgpJztcbi8vICAgfSBlbHNlIHtcbi8vICAgICBzdW4uc3R5bGUub3BhY2l0eSA9ICcxJztcbi8vICAgICBzdW4uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xuLy8gICAgIG1vb24uc3R5bGUub3BhY2l0eSA9ICcwJztcbi8vICAgICBtb29uLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcbi8vICAgfVxuLy8gfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9