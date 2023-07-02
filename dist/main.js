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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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
    padding: 0 1rem;
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

.switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
}
  
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}
  
.slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 24px;
    transition: background-color 0.3s;
}
  
.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
}
  
input:checked + .slider {
    background-color: #2196F3;
}
  
input:checked + .slider:before {
    transform: translateX(24px);
}
  
`, "",{"version":3,"sources":["webpack://./src/css/pageLoad.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    background-color: #15202b;\n    margin: 0;\n    padding: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #dddddd;\n}\n\ndiv#content {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    min-height: 100vh;\n    color: #dddddd;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.sidebar-content {\n    width: 250px;\n    background-color: #15202b;\n    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */\n    transition: all 0.3s ease-in-out;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: stretch;\n    padding: 0 1rem;\n    position: fixed;\n    left: 0;\n    height: 100%;\n    overflow-y: hidden;\n    z-index: 1;\n    flex-grow: 1;\n  \n    &:hover {\n        overflow-y: auto;\n        scrollbar-width: thin;\n        scrollbar-color: #aaa #eee;\n    }\n  \n    &::-webkit-scrollbar {\n      width: 8px;\n      height: 8px;\n    }\n  \n    &::-webkit-scrollbar-track {\n      background-color: #eee;\n      border-radius: 4px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: #aaa;\n      border-radius: 4px;\n    }\n}\n\n.box {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem 0;\n}\n\n.box:first-of-type {\n    padding-top: 0;\n}\n\n.title-box {\n    border-bottom: 2px solid #dddddd;\n}\n\n.title-box h2 {\n    font-size: 1.4rem;\n    font-weight: 900;\n    margin-bottom: 0.25rem;\n    margin-top: 0;\n    padding-left: 0.25rem;\n}\n\n.items {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.item {\n    align-items: center;\n    gap: 1rem;\n    padding: 0.5rem;\n    transition: all 0.3s ease;\n    border-radius: 0.25rem;\n    margin: 0 0.25rem;\n}\n\n.item-row {\n    display:flex;\n    flex-direction:row;\n}\n\n.item-column {\n    display:flex;\n    flex-direction:column;\n}\n\n.item:hover {\n    background-color: #1f2937;\n    filter: brightness(1.2);\n}\n\n.active {\n    background-color: #1f2937;\n    filter: brightness(1.2);\n}\n\n.not-active {\n    background-color: transparent;\n}\n\n.item img {\n    width: 1.5rem;\n    height: auto;\n    cursor: pointer;\n}\n\n.item:nth-of-type(3) {\n    padding-left: 0.375rem;\n}\n\n.item:nth-of-type(3) img {\n    width: 1.8rem;\n    height: auto;\n}\n\n.item p {\n    font-weight: 500;\n    margin: 0;\n    cursor: pointer;\n}\n\n.item-reg p {\n    font-size: 1.1rem;\n}\n\n.item-mini p {\n    font-size: 0.8rem;\n}\n\n.nav-bar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: #15202b;\n    width: calc(100% - 2rem);\n    z-index: 2;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 2rem;\n    padding: 0 1rem;\n    /* -webkit-box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76); \n    box-shadow: 0px 7px 8px 0px rgba(0,0,0,0.76); */\n}\n\n.search-box {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    padding: 0 1rem;\n    padding-right: 0;\n    background-color: #192734;\n    border-radius: 3.9375rem;\n}\n\n.search-box input {\n    border: none;\n    /* background-color: #192734;\n    border-radius: 3.9375rem; */\n    background-color: transparent;\n    border: hsl(0, 0%, 18.82%);\n    color: #dddddd;\n    font-size: 1rem;\n    font-weight: 500;\n    padding: 0.5rem;\n    flex: 1;\n}\n\n.search-box input:focus {\n    outline: none;\n}\n\n.search-box button {\n    border: none;\n    background-color: #313e4b;\n    color: #dddddd;\n    font-size: 1rem;\n    font-weight: 500;\n    padding: 0.5rem;\n    cursor: pointer;\n    height: 100%;\n    width: 3.5rem;\n    border-top-right-radius: 3.9375rem;\n    border-bottom-right-radius: 3.9375rem;\n}\n\n.search-box img {\n    width: 1.5rem;\n    height: auto;\n}\n\n.search-box button:hover,\n.search-box button:active {\n    filter: brightness(1.2);\n}\n\n.logo-box {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    cursor: pointer;\n}\n\n.logo-box img {\n    width: 2.5rem;\n    height: auto;\n}\n\n\n.logo-box:hover,\n.logo-box:active {\n    filter: brightness(1.2);\n}\n\n.logo-box a h1 {\n    font-size: 1.6rem;\n    font-weight: 700;\n    color: #dddddd;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    margin-top: 10px;\n}\n\n.container {\n    display: flex;\n    flex-direction: row;\n    margin-top: 50px; /* adjust as needed to prevent content from being overlapped by the header */\n  }\n\n.left-box {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n.left-box .menu-button img{\n    width: 2rem;\n    height: auto;\n}\n\n\n.menu-button{\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: transparent;\n    color: inherit;\n    font: inherit;\n    cursor: pointer;\n    outline: none;\n    border-radius: 50%;\n    width: 3rem;\n    height: 3rem;\n}\n\n.menu-button:hover,\n.menu-button:active {\n    filter: brightness(1.2);\n    background-color: #1f2937;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 48px;\n    height: 24px;\n}\n  \n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n  \n.slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    border-radius: 24px;\n    transition: background-color 0.3s;\n}\n  \n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 18px;\n    width: 18px;\n    left: 3px;\n    bottom: 3px;\n    background-color: white;\n    border-radius: 50%;\n    transition: transform 0.3s;\n}\n  \ninput:checked + .slider {\n    background-color: #2196F3;\n}\n  \ninput:checked + .slider:before {\n    transform: translateX(24px);\n}\n  \n"],"sourceRoot":""}]);
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

    const slider = document.createElement('label');
    slider.classList.add('switch');
    const sliderInput = document.createElement('input');
    sliderInput.type = 'checkbox';
    sliderInput.classList.add('theme-toggle');
    const sliderSpan = document.createElement('span');
    sliderSpan.classList.add('slider');

    slider.appendChild(sliderInput);
    slider.appendChild(sliderSpan);

    bar.appendChild(slider);



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
        sidebarContent.style.padding = '0 1rem';
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

document.querySelector('.menu-button').addEventListener('click', (event) => {
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssT0FBTyxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLHlCQUF5QixPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVks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V0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQzRCO0FBQ2dDO0FBQ2pCO0FBQzNDOztBQUVBLGdFQUFNO0FBQ04sOERBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0VBQVc7QUFDdkIsVUFBVTtBQUNWLFlBQVksOERBQU87QUFDbkI7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MvcGFnZUxvYWQuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9wYWdlTG9hZC5jc3M/YTdlNSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMDJiO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2RkZGRkZDtcbn1cblxuZGl2I2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgY29sb3I6ICNkZGRkZGQ7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4uc2lkZWJhci1jb250ZW50IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7ICovXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjYWFhICNlZWU7XG4gICAgfVxuICBcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgfVxuICBcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxufVxuXG4uYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbn1cblxuLmJveDpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnRpdGxlLWJveCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbi50aXRsZS1ib3ggaDIge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbn1cblxuLml0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5pdGVtIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIG1hcmdpbjogMCAwLjI1cmVtO1xufVxuXG4uaXRlbS1yb3cge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG59XG5cbi5pdGVtLWNvbHVtbiB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbn1cblxuLml0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjI5Mzc7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjI5Mzc7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5ub3QtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLml0ZW0gaW1nIHtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdGVtOm50aC1vZi10eXBlKDMpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMzc1cmVtO1xufVxuXG4uaXRlbTpudGgtb2YtdHlwZSgzKSBpbWcge1xuICAgIHdpZHRoOiAxLjhyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaXRlbSBwIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdGVtLXJlZyBwIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLml0ZW0tbWluaSBwIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLm5hdi1iYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMDJiO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAvKiAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggOHB4IDBweCByZ2JhKDAsMCwwLDAuNzYpOyBcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAwcHggcmdiYSgwLDAsMCwwLjc2KTsgKi9cbn1cblxuLnNlYXJjaC1ib3gge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyNzM0O1xuICAgIGJvcmRlci1yYWRpdXM6IDMuOTM3NXJlbTtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyNzM0O1xuICAgIGJvcmRlci1yYWRpdXM6IDMuOTM3NXJlbTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IGhzbCgwLCAwJSwgMTguODIlKTtcbiAgICBjb2xvcjogI2RkZGRkZDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZmxleDogMTtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTNlNGI7XG4gICAgY29sb3I6ICNkZGRkZGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDMuNXJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMy45Mzc1cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzLjkzNzVyZW07XG59XG5cbi5zZWFyY2gtYm94IGltZyB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zZWFyY2gtYm94IGJ1dHRvbjpob3Zlcixcbi5zZWFyY2gtYm94IGJ1dHRvbjphY3RpdmUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4ubG9nby1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dvLWJveCBpbWcge1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG5cbi5sb2dvLWJveDpob3Zlcixcbi5sb2dvLWJveDphY3RpdmUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4ubG9nby1ib3ggYSBoMSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI2RkZGRkZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLXRvcDogNTBweDsgLyogYWRqdXN0IGFzIG5lZWRlZCB0byBwcmV2ZW50IGNvbnRlbnQgZnJvbSBiZWluZyBvdmVybGFwcGVkIGJ5IHRoZSBoZWFkZXIgKi9cbiAgfVxuXG4ubGVmdC1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0LWJveCAubWVudS1idXR0b24gaW1ne1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuXG4ubWVudS1idXR0b257XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbn1cblxuLm1lbnUtYnV0dG9uOmhvdmVyLFxuLm1lbnUtYnV0dG9uOmFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjkzNztcbn1cblxuLnN3aXRjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG59XG4gIFxuLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG59XG4gIFxuLnNsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuICBcbi5zbGlkZXI6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgbGVmdDogM3B4O1xuICAgIGJvdHRvbTogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cbiAgXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cbiAgXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNHB4KTtcbn1cbiAgXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcGFnZUxvYWQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUpBQW1KO0lBQ25KLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1KQUFtSjtBQUN2Sjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsNkNBQTZDO0lBQzdDLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGVBQWU7SUFDZixPQUFPO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTs7SUFFWjtRQUNJLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsMEJBQTBCO0lBQzlCOztJQUVBO01BQ0UsVUFBVTtNQUNWLFdBQVc7SUFDYjs7SUFFQTtNQUNFLHNCQUFzQjtNQUN0QixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxzQkFBc0I7TUFDdEIsa0JBQWtCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsaUJB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QkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIwMmI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogI2RkZGRkZDtcXG59XFxuXFxuZGl2I2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBjb2xvcjogI2RkZGRkZDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2lkZWJhci1jb250ZW50IHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMDJiO1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7ICovXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICAgICAgICBzY3JvbGxiYXItY29sb3I6ICNhYWEgI2VlZTtcXG4gICAgfVxcbiAgXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICB3aWR0aDogOHB4O1xcbiAgICAgIGhlaWdodDogOHB4O1xcbiAgICB9XFxuICBcXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcbn1cXG5cXG4uYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5ib3g6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbn1cXG5cXG4udGl0bGUtYm94IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGRkZGQ7XFxufVxcblxcbi50aXRsZS1ib3ggaDIge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcbn1cXG5cXG4uaXRlbXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLml0ZW0ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAuMjVyZW07XFxufVxcblxcbi5pdGVtLXJvdyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246cm93O1xcbn1cXG5cXG4uaXRlbS1jb2x1bW4ge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuXFxuLml0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyOTM3O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjI5Mzc7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcbn1cXG5cXG4ubm90LWFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaXRlbSBpbWcge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLml0ZW06bnRoLW9mLXR5cGUoMykge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMzc1cmVtO1xcbn1cXG5cXG4uaXRlbTpudGgtb2YtdHlwZSgzKSBpbWcge1xcbiAgICB3aWR0aDogMS44cmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5pdGVtIHAge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLml0ZW0tcmVnIHAge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLml0ZW0tbWluaSBwIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMDJiO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIC8qIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA4cHggMHB4IHJnYmEoMCwwLDAsMC43Nik7IFxcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAwcHggcmdiYSgwLDAsMCwwLjc2KTsgKi9cXG59XFxuXFxuLnNlYXJjaC1ib3gge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcXG4gICAgYm9yZGVyLXJhZGl1czogMy45Mzc1cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcXG4gICAgYm9yZGVyLXJhZGl1czogMy45Mzc1cmVtOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBoc2woMCwgMCUsIDE4LjgyJSk7XFxuICAgIGNvbG9yOiAjZGRkZGRkO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTNlNGI7XFxuICAgIGNvbG9yOiAjZGRkZGRkO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzLjVyZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzLjkzNzVyZW07XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzLjkzNzVyZW07XFxufVxcblxcbi5zZWFyY2gtYm94IGltZyB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLnNlYXJjaC1ib3ggYnV0dG9uOmhvdmVyLFxcbi5zZWFyY2gtYm94IGJ1dHRvbjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLmxvZ28tYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZ28tYm94IGltZyB7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuXFxuLmxvZ28tYm94OmhvdmVyLFxcbi5sb2dvLWJveDphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLmxvZ28tYm94IGEgaDEge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6ICNkZGRkZGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7IC8qIGFkanVzdCBhcyBuZWVkZWQgdG8gcHJldmVudCBjb250ZW50IGZyb20gYmVpbmcgb3ZlcmxhcHBlZCBieSB0aGUgaGVhZGVyICovXFxuICB9XFxuXFxuLmxlZnQtYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGVmdC1ib3ggLm1lbnUtYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuXFxuLm1lbnUtYnV0dG9ue1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLm1lbnUtYnV0dG9uOmhvdmVyLFxcbi5tZW51LWJ1dHRvbjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjkzNztcXG59XFxuXFxuLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNDhweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbn1cXG4gIFxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG4gIFxcbi5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG4gIFxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgbGVmdDogM3B4O1xcbiAgICBib3R0b206IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcbiAgXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbn1cXG4gIFxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNHB4KTtcXG59XFxuICBcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlTG9hZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2VMb2FkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEljb24gZnJvbSAnLi4vYXNzZXRzL2ltZy9pY29uLnN2Zyc7XG5pbXBvcnQgbWVudSBmcm9tICcuLi9hc3NldHMvaW1nL21lbnUuc3ZnJztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vYXNzZXRzL2ltZy9zZWFyY2guc3ZnJztcblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJyk7XG5cbiAgICBjb25zdCBsZWZ0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdEJveC5jbGFzc0xpc3QuYWRkKCdsZWZ0LWJveCcpO1xuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKTtcbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnVJY29uLnNyYyA9IG1lbnU7XG4gICAgbWVudUljb24uYWx0ID0gJ01lbnUgaWNvbic7XG4gICAgbWVudUJ1dHRvbi5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gICAgbGVmdEJveC5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICAgIGNvbnN0IGxvZ29Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvQm94LmNsYXNzTGlzdC5hZGQoJ2xvZ28tYm94Jyk7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ28uc3JjID0gSWNvbjtcbiAgICBsb2dvLmFsdCA9ICdUb2RvIExpc3QgbG9nbyc7XG4gICAgY29uc3QgbG9nb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbG9nb0xpbmsuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgbG9nb0JveC5hcHBlbmRDaGlsZChsb2dvTGluayk7XG4gICAgY29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxvZ29UZXh0LnRleHRDb250ZW50ID0gJ1RvZG8gTGlzdCc7XG4gICAgY29uc3QgbG9nb0xpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxvZ29MaW5rMi5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XG4gICAgbG9nb0JveC5hcHBlbmRDaGlsZChsb2dvTGluazIpO1xuICAgIGxlZnRCb3guYXBwZW5kQ2hpbGQobG9nb0JveCk7XG5cbiAgICBiYXIuYXBwZW5kQ2hpbGQobGVmdEJveCk7XG5cbiAgICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWFyY2hCb3guY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJveCcpO1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtaW5wdXQnKTtcbiAgICBzZWFyY2hJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaCc7XG4gICAgc2VhcmNoQm94LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ1dHRvbicpO1xuICAgIHNlYXJjaEJveC5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xuICAgIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzZWFyY2hJY29uLnNyYyA9IHNlYXJjaDtcbiAgICBzZWFyY2hJY29uLmFsdCA9ICdTZWFyY2ggaWNvbic7XG4gICAgc2VhcmNoQnV0dG9uLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuXG4gICAgYmFyLmFwcGVuZENoaWxkKHNlYXJjaEJveCk7XG5cbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcbiAgICBjb25zdCBzbGlkZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2xpZGVySW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgc2xpZGVySW5wdXQuY2xhc3NMaXN0LmFkZCgndGhlbWUtdG9nZ2xlJyk7XG4gICAgY29uc3Qgc2xpZGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzbGlkZXJTcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicpO1xuXG4gICAgc2xpZGVyLmFwcGVuZENoaWxkKHNsaWRlcklucHV0KTtcbiAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoc2xpZGVyU3Bhbik7XG5cbiAgICBiYXIuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcblxuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpLmFwcGVuZENoaWxkKGJhcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjsiLCIvLyBpbXBvcnQgYWxsIHRoZSBpY29uc1xuaW1wb3J0IEFsbCBmcm9tICcuLi9hc3NldHMvaW1nL2FsbC5zdmcnO1xuaW1wb3J0IFRvZGF5IGZyb20gJy4uL2Fzc2V0cy9pbWcvdG9kYXkuc3ZnJztcbmltcG9ydCBXZWVrIGZyb20gJy4uL2Fzc2V0cy9pbWcvd2Vlay5zdmcnO1xuaW1wb3J0IEltcG9ydGFudCBmcm9tICcuLi9hc3NldHMvaW1nL2ltcG9ydGFudC5zdmcnO1xuaW1wb3J0IENvbXBsZXRlZCBmcm9tICcuLi9hc3NldHMvaW1nL2NvbXBsZXRlZC5zdmcnO1xuaW1wb3J0IG5ld05vdGUgZnJvbSAnLi4vYXNzZXRzL2ltZy9uZXdOb3RlLnN2Zyc7XG5pbXBvcnQgbmV3UHJvamVjdCBmcm9tICcuLi9hc3NldHMvaW1nL25ld1Byb2plY3Quc3ZnJztcbmltcG9ydCBhbGxQcm9qZWN0cyBmcm9tICcuLi9hc3NldHMvaW1nL2FsbFByb2plY3RzLnN2Zyc7XG5pbXBvcnQgc3RhcnJlZFByb2plY3RzIGZyb20gJy4uL2Fzc2V0cy9pbWcvc3RhcnJlZFByb2plY3RzLnN2Zyc7XG5pbXBvcnQgYWxsTm90ZXMgZnJvbSAnLi4vYXNzZXRzL2ltZy9hbGxOb3Rlcy5zdmcnO1xuaW1wb3J0IHN0YXJyZWROb3RlcyBmcm9tICcuLi9hc3NldHMvaW1nL3N0YXJyZWROb3RlLnN2Zyc7XG5cbi8vIENyZWF0ZSBhIHNpZGViYXIgaXRlbVxuY29uc3QgY3JlYXRlU2lkZWJhckl0ZW1zID0gKGljb24sIHRleHQsIGJhclR5cGUpID0+IHsgXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgIGlmIChiYXJUeXBlID09PSAnbWluaScpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtLXJvdycpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29sdW1uJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1taW5pJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1yZWcnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1jb2x1bW4nKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtLXJvdycpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcmVnJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1taW5pJyk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaXRlbUljb24uc3JjID0gaWNvbjtcbiAgICBpdGVtSWNvbi5hbHQgPSB0ZXh0O1xuICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1UZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1JY29uKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgICByZXR1cm4gaXRlbTtcbn1cblxuLy8gQWxsIHRoZSBkYXRhIHUgd2FudCB0byBkaXNwbGF5IGluIHRoZSBzaWRlYmFyIGdldHMgYWRkZWQgYW5kIGFjY2Vzc2VkIGZyb20gaGVyZVxuY29uc3Qgc2lkZWJhckRhdGEgPSAoKCkgPT4ge1xuICAgIFxuICAgIGxldCBzaWRlYmFyTG9nID0gW11cblxuICAgIGNvbnN0IGdldFNpZGViYXJEYXRhID0gKCkgPT4gc2lkZWJhckxvZztcblxuICAgIGNvbnN0IHJlbW92ZUFsbCA9ICgpID0+IHtcbiAgICAgICAgc2lkZWJhckxvZyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVNpZGViYXJDYXRlZ29yeSA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRpdGxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaXRsZSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2lkZWJhckxvZyA9IHNpZGViYXJMb2cuZmlsdGVyKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkudGl0bGUgIT09IHRpdGxlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVTaWRlYmFySXRlbSA9ICh0aXRsZSwgdGV4dCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRpdGxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaXRsZSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUZXh0IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHNpZGViYXJMb2cuZmluZCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5LnRpdGxlID09PSB0aXRsZSk7XG4gICAgICAgIGlmICghY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0ZWdvcnkuaXRlbXMgPSBjYXRlZ29yeS5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udGV4dCAhPT0gdGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkU2lkZWJhckNhdGVnb3J5ID0gKHRpdGxlLCBpdGVtcyA9IFtdKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGl0bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpdGxlIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0ZW1zIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICBzaWRlYmFyTG9nLnB1c2goeyB0aXRsZSwgaXRlbXMgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkU2lkZWJhckl0ZW0gPSAodGl0bGUsIGljb24sIHRleHQpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aXRsZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGl0bGUgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaWNvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWNvbiBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUZXh0IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBzaWRlYmFyTG9nLmZpbmQoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS50aXRsZSA9PT0gdGl0bGUpO1xuICAgICAgICBpZiAoIWNhdGVnb3J5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhdGVnb3J5IG5vdCBmb3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGVnb3J5Lml0ZW1zLnB1c2goeyBpY29uLCB0ZXh0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0U2lkZWJhckRhdGEsIGFkZFNpZGViYXJDYXRlZ29yeSwgYWRkU2lkZWJhckl0ZW0sIHJlbW92ZVNpZGViYXJDYXRlZ29yeSwgcmVtb3ZlU2lkZWJhckl0ZW0sIHJlbW92ZUFsbCB9XG5cbn0pKCk7XG5cbmNvbnN0IGNyZWF0ZVNpZGViYXJDYXRlZ29yeSA9IChkYXRhLCBiYXJUeXBlID0gXCJmdWxsXCIpID0+IHtcbiAgICAvLyBmaW5kIHRoZSBoZWlnaHQgb2YgdGhlIG5hdi1iYXJcbiAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJhcicpLm9mZnNldEhlaWdodDtcblxuICAgIC8vIGFkanVzdCB0aGUgaGVpZ2h0IGFuZCBwb3NpdGlvbiBhY2NvcmRpbmcgdG8gdGhlIGhlYWRlciBoZWlnaHRcbiAgICBjb25zdCBzaWRlYmFyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItY29udGVudCcpO1xuICAgIHNpZGViYXJDb250ZW50LnN0eWxlLmhlaWdodCA9ICdjYWxjKDEwMHZoIC0gJyArIHRvcCArICdweCknO1xuICAgIHNpZGViYXJDb250ZW50LnN0eWxlLm1hcmdpblRvcCA9IHRvcCArICdweCc7XG5cbiAgICBpZiAoYmFyVHlwZSA9PT0gJ21pbmknKSB7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21pbmknKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbCcpO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5zdHlsZS5wYWRkaW5nID0gJzAnXG4gICAgICAgIHNpZGViYXJDb250ZW50LnN0eWxlLndpZHRoID0gJzg3cHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Z1bGwnKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWluaScpO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5zdHlsZS5wYWRkaW5nID0gJzAgMXJlbSc7XG4gICAgICAgIHNpZGViYXJDb250ZW50LnN0eWxlLndpZHRoID0gJzI1MHB4JztcbiAgICB9XG5cbiAgICAvL2NyZWF0ZSBhIGRpdiBmb3IgZWFjaCBjYXRlZ29yeVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBCb3guY2xhc3NMaXN0LmFkZCgnYm94Jyk7XG5cbiAgICAgICAgaWYgKGJhclR5cGUgIT09ICdtaW5pJykge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlQm94LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveCcpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBkYXRhW2ldLnRpdGxlO1xuICAgICAgICAgICAgdGl0bGVCb3guYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgQm94LmFwcGVuZENoaWxkKHRpdGxlQm94KTtcbiAgICAgICAgICAgIEJveC5hcHBlbmRDaGlsZCh0aXRsZUJveCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBJdGVtcy5jbGFzc0xpc3QuYWRkKCdpdGVtcycpO1xuICAgICAgICAvLyBjcmVhdGUgYW4gaXRlbSBmb3IgZWFjaCBpdGVtIGluIHRoZSBjYXRlZ29yeVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFbaV0uaXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVTaWRlYmFySXRlbXMoZGF0YVtpXS5pdGVtc1tqXS5pY29uLCBkYXRhW2ldLml0ZW1zW2pdLnRleHQsIGJhclR5cGUpO1xuICAgICAgICAgICAgSXRlbXMuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBCb3guYXBwZW5kQ2hpbGQoSXRlbXMpO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZChCb3gpO1xuICAgIH1cbiAgICByZXR1cm4gc2lkZWJhckNvbnRlbnQ7XG5cbn1cblxuY29uc3Qgc2lkZWJhciA9ICgpID0+IHtcblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1jb250ZW50JykpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWNvbnRlbnQnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2Z1bGwnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItY29udGVudCcpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFkZCBob21lLCBwcm9qZWN0cywgYW5kIG5vdGVzIHRvIHNpZGViYXJcbiAgICBzaWRlYmFyRGF0YS5yZW1vdmVBbGwoKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFyQ2F0ZWdvcnkoJ0hvbWUnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIEFsbCwgJ0FsbCcpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgVG9kYXksICdUb2RheScpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgV2VlaywgJ1dlZWsnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIEltcG9ydGFudCwgJ0ltcG9ydGFudCcpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgQ29tcGxldGVkLCAnQ29tcGxldGVkJyk7XG5cbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFyQ2F0ZWdvcnkoJ1Byb2plY3RzJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ1Byb2plY3RzJywgbmV3UHJvamVjdCwgJ05ldyBQcm9qZWN0Jyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ1Byb2plY3RzJywgYWxsUHJvamVjdHMsICdBbGwgUHJvamVjdHMnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnUHJvamVjdHMnLCBzdGFycmVkUHJvamVjdHMsICdTdGFycmVkIFByb2plY3RzJyk7XG5cbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFyQ2F0ZWdvcnkoJ05vdGVzJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ05vdGVzJywgbmV3Tm90ZSwgJ05ldyBOb3RlJyk7XG4gICAgc2lkZWJhckRhdGEuYWRkU2lkZWJhckl0ZW0oJ05vdGVzJywgYWxsTm90ZXMsICdBbGwgTm90ZXMnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnTm90ZXMnLCBzdGFycmVkTm90ZXMsICdTdGFycmVkIE5vdGVzJyk7ICBcblxuICAgIC8vIEFkZCBzaWRlYmFyIHRvIGNvbnRlbnRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGViYXJDYXRlZ29yeShzaWRlYmFyRGF0YS5nZXRTaWRlYmFyRGF0YSgpKSk7XG59XG5cbmNvbnN0IG1pbmlTaWRlYmFyID0gKCkgPT4ge1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWNvbnRlbnQnKSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItY29udGVudCcpLmNsYXNzTGlzdC5jb250YWlucygnbWluaScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1jb250ZW50JykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaWRlYmFyRGF0YS5yZW1vdmVBbGwoKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFyQ2F0ZWdvcnkoJ0hvbWUnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIEFsbCwgJ0FsbCcpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgVG9kYXksICdUb2RheScpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgV2VlaywgJ1dlZWsnKTtcbiAgICBzaWRlYmFyRGF0YS5hZGRTaWRlYmFySXRlbSgnSG9tZScsIEltcG9ydGFudCwgJ0ltcG9ydGFudCcpO1xuICAgIHNpZGViYXJEYXRhLmFkZFNpZGViYXJJdGVtKCdIb21lJywgQ29tcGxldGVkLCAnQ29tcGxldGVkJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyQ2F0ZWdvcnkoc2lkZWJhckRhdGEuZ2V0U2lkZWJhckRhdGEoKSwgJ21pbmknKSk7XG4gICAgXG59XG5cbmV4cG9ydCB7c2lkZWJhciwgbWluaVNpZGViYXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9pbXBvcnQgYWxsIGNzcyBmaWxlc1xuLy9pbXBvcnQgcmVxdWlyZWQgcGljc1xuaW1wb3J0ICcuL2Nzcy9wYWdlTG9hZC5jc3MnO1xuaW1wb3J0IHtzaWRlYmFyLCBtaW5pU2lkZWJhcn0gZnJvbSAnLi9mdW5jdGlvbnMvc2lkZWJhci5qcyc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vZnVuY3Rpb25zL2hlYWRlci5qcyc7XG5jb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XG5cbmhlYWRlcigpO1xuc2lkZWJhcigpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLm1lbnUtYnV0dG9uJykpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1jb250ZW50Jyk7XG4gICAgICAgIGlmIChzaWRlYmFyQ29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Z1bGwnKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Z1bGwnKTtcbiAgICAgICAgICAgIG1pbmlTaWRlYmFyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2lkZWJhckNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaW5pJykpIHtcbiAgICAgICAgICAgIHNpZGViYXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==