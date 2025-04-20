/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/garage.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/garage.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background-color: black;\n  color: white;\n  font-family: sans-serif;\n  padding: 20px;\n  margin: 0;\n}\n\nbutton {\n  padding: 6px 10px;\n  cursor: pointer;\n  font-weight: bold;\n  border: none;\n  border-radius: 4px;\n  background: #eee;\n  box-shadow: 0 2px 0 #0071ff;\n}\n\nbutton:hover {\n  background: #ccc;\n}\n\n.garage-header,\n.garage-controls,\n.form-inline,\n.garage-buttons {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n}\n\ninput[type=\"text\"] {\n  width: 140px;\n  padding: 5px;\n}\n\n.garage-title {\n  font-size: 24px;\n  margin-bottom: 5px;\n}\n\n.garage-page {\n  margin-bottom: 20px;\n}\n\n.garage-list {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.car-row {\n  display: flex;\n  flex-direction: column;\n  border-bottom: 2px dashed white;\n  padding: 10px 0;\n  gap: 10px;\n}\n\n.car-top-panel {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.car-buttons {\n  display: flex;\n  gap: 5px;\n}\n\n.car-name {\n  font-weight: bold;\n  color: gold;\n  font-size: 18px;\n}\n\n.car-bottom-panel {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.engine-buttons {\n  display: flex;\n  gap: 8px;\n}\n\n.car-track {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-grow: 1;\n  position: relative;\n}\n\n.car-icon {\n  width: 150px;\n  height: 100px;\n  transition: transform 0s linear;\n  will-change: transform;\n}\n\n.car-icon svg {\n  width: 100%;\n  height: 100%;\n  display: block;\n  fill: currentColor;\n  stroke: none;\n}\n\n.car-icon.mirrored svg {\n  transform: scaleX(-1);\n  transform-origin: center;\n}\n\n.flag {\n  margin-left: auto;\n  margin-right: 150px;\n  font-size: 24px;\n}\n\n.pagination {\n  margin-top: 20px;\n  display: flex;\n  gap: 10px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://async-race/./src/styles/garage.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://async-race/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://async-race/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api/carsApi.ts":
/*!****************************!*\
  !*** ./src/api/carsApi.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteCar = exports.updateCar = exports.getCar = exports.createCar = exports.getCars = void 0;\nconst types_1 = __webpack_require__(/*! ../types/types */ \"./src/types/types.ts\");\nconst getCars = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* ({ page = 1, limit = 7, } = {}) {\n    const response = yield fetch(`${types_1.BASE_URL}/garage?_page=${page}&_limit=${limit}`);\n    const cars = yield response.json();\n    const total = Number(response.headers.get('X-Total-Count'));\n    return { cars, total };\n});\nexports.getCars = getCars;\nconst createCar = (car) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`${types_1.BASE_URL}/garage`, {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(car),\n    });\n    return response.json();\n});\nexports.createCar = createCar;\nconst getCar = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`${types_1.BASE_URL}/garage/${id}`);\n    return response.json();\n});\nexports.getCar = getCar;\nconst updateCar = (id, car) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`${types_1.BASE_URL}/garage/${id}`, {\n        method: 'PUT',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(car),\n    });\n    return response.json();\n});\nexports.updateCar = updateCar;\nconst deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    yield fetch(`${types_1.BASE_URL}/garage/${id}`, { method: 'DELETE' });\n});\nexports.deleteCar = deleteCar;\n\n\n//# sourceURL=webpack://async-race/./src/api/carsApi.ts?");

/***/ }),

/***/ "./src/api/engineApi.ts":
/*!******************************!*\
  !*** ./src/api/engineApi.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.driveCar = exports.stopEngine = exports.startEngine = void 0;\nconst types_1 = __webpack_require__(/*! ../types/types */ \"./src/types/types.ts\");\nconst startEngine = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`${types_1.BASE_URL}/engine?id=${id}&status=started`, {\n        method: 'PATCH',\n    });\n    return response.json();\n});\nexports.startEngine = startEngine;\nconst stopEngine = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`${types_1.BASE_URL}/engine?id=${id}&status=stopped`, {\n        method: 'PATCH',\n    });\n    return response.json();\n});\nexports.stopEngine = stopEngine;\nconst driveCar = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`${types_1.BASE_URL}/engine?id=${id}&status=drive`, {\n        method: 'PATCH',\n    });\n    if (response.status !== 200)\n        return { success: false };\n    return { success: true };\n});\nexports.driveCar = driveCar;\n\n\n//# sourceURL=webpack://async-race/./src/api/engineApi.ts?");

/***/ }),

/***/ "./src/api/winnersApi.ts":
/*!*******************************!*\
  !*** ./src/api/winnersApi.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.updateWinner = exports.createWinner = exports.getWinner = void 0;\nconst types_1 = __webpack_require__(/*! ../types/types */ \"./src/types/types.ts\");\nconst getWinner = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`${types_1.BASE_URL}/winners/${id}`);\n    if (!response.ok)\n        throw new Error('Winner not found');\n    return response.json();\n});\nexports.getWinner = getWinner;\nconst createWinner = (winner) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`${types_1.BASE_URL}/winners`, {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(winner),\n    });\n    return response.json();\n});\nexports.createWinner = createWinner;\nconst updateWinner = (id, winner) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`${types_1.BASE_URL}/winners/${id}`, {\n        method: 'PUT',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(winner),\n    });\n    return response.json();\n});\nexports.updateWinner = updateWinner;\n\n\n//# sourceURL=webpack://async-race/./src/api/winnersApi.ts?");

/***/ }),

/***/ "./src/api/winnersTableApi.ts":
/*!************************************!*\
  !*** ./src/api/winnersTableApi.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getWinners = void 0;\nconst types_1 = __webpack_require__(/*! ../types/types */ \"./src/types/types.ts\");\nconst getWinners = (sort_1, order_1, ...args_1) => __awaiter(void 0, [sort_1, order_1, ...args_1], void 0, function* (sort, order, page = 1, limit = 10) {\n    const url = new URL(`${types_1.BASE_URL}/winners`);\n    url.searchParams.set('_page', page.toString());\n    url.searchParams.set('_limit', limit.toString());\n    if (sort)\n        url.searchParams.set('_sort', sort);\n    if (order)\n        url.searchParams.set('_order', order);\n    const response = yield fetch(url.toString());\n    const winners = yield response.json();\n    const total = Number(response.headers.get('X-Total-Count'));\n    return { winners, total };\n});\nexports.getWinners = getWinners;\n\n\n//# sourceURL=webpack://async-race/./src/api/winnersTableApi.ts?");

/***/ }),

/***/ "./src/components/garage/carIcon.ts":
/*!******************************************!*\
  !*** ./src/components/garage/carIcon.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.carSvg = void 0;\nexports.carSvg = `\n<svg fill=\"currentColor\" viewBox=\"0 -43.92 122.88 122.88\" xmlns=\"http://www.w3.org/2000/svg\"\n     style=\"enable-background:new 0 0 122.88 35.03\"\n     transform=\"rotate(180)matrix(1, 0, 0, -1, 0, 0)\">\n  <g>\n    <path class=\"st0\" d=\"M99.42,13.57c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73 \n      C88.69,18.37,93.49,13.57,99.42,13.57z M79.05,5c-0.59,1.27-1.06,2.69-1.42,4.23c-0.82,2.57,0.39,3.11,3.19,2.06 \n      c2.06-1.23,4.12-2.47,6.18-3.7c1.05-0.74,1.55-1.47,1.38-2.19c-0.34-1.42-3.08-2.16-5.33-2.6C80.19,2.23,80.39,2.11,79.05,5z \n      M23.86,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99c-2.75,0-4.99-2.23-4.99-4.99 \n      C18.87,21.54,21.1,19.31,23.86,19.31z M99.42,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99 \n      c-2.75,0-4.99-2.23-4.99-4.99C94.43,21.54,96.66,19.31,99.42,19.31z M46.14,12.5c2.77-2.97,5.97-4.9,9.67-6.76 \n      c8.1-4.08,13.06-3.58,21.66-3.58l-2.89,7.5c-1.21,1.6-2.58,2.73-4.66,2.84H46.14z M23.86,13.57 \n      c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73C13.13,18.37,17.93,13.57,23.86,13.57z \n      M40.82,10.3c3.52-2.19,7.35-4.15,11.59-5.82c12.91-5.09,22.78-6,36.32-1.9c4.08,1.55,8.16,3.1,12.24,4.06 \n      c4.03,0.96,21.48,1.88,21.91,4.81l-4.31,5.15c1.57,1.36,2.85,3.03,3.32,5.64c-0.13,1.61-0.57,2.96-1.33,4.04 \n      c-1.29,1.85-5.07,3.76-7.11,2.67c-0.65-0.35-1.02-1.05-1.01-2.24c0.06-23.9-28.79-21.18-26.62,2.82H35.48 \n      C44.8,5.49,5.04,5.4,12.1,28.7C9.62,31.38,3.77,27.34,0,18.75c1.03-1.02,2.16-1.99,3.42-2.89 \n      c-0.06-0.05,0.06,0.19-0.15-0.17c-0.21-0.36,0.51-1.87,1.99-2.74C13.02,8.4,31.73,8.52,40.82,10.3z\"/>\n  </g>\n</svg>\n`;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/carIcon.ts?");

/***/ }),

/***/ "./src/components/garage/garageCarMarkup.ts":
/*!**************************************************!*\
  !*** ./src/components/garage/garageCarMarkup.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getCarHTML = void 0;\nconst carIcon_1 = __webpack_require__(/*! ./carIcon */ \"./src/components/garage/carIcon.ts\");\nconst getCarHTML = (car) => `\n  <div class=\"car-row\" data-id=\"${car.id}\">\n    <div class=\"car-top-panel\">\n      <button class=\"select-btn\" data-id=\"${car.id}\">SELECT</button>\n      <button class=\"remove-btn\" data-id=\"${car.id}\">REMOVE</button>\n      <span class=\"car-name\">${car.name}</span>\n    </div>\n    <div class=\"car-bottom-panel\">\n      <button class=\"start-btn\" data-id=\"${car.id}\">A</button>\n      <button class=\"stop-btn\" data-id=\"${car.id}\">B</button>\n      <div class=\"car-track\">\n        <div class=\"car-icon\" style=\"color:${car.color}\">\n          ${carIcon_1.carSvg}\n        </div>\n        <div class=\"flag\">🏁</div>\n      </div>\n    </div>\n  </div>\n`;\nexports.getCarHTML = getCarHTML;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/garageCarMarkup.ts?");

/***/ }),

/***/ "./src/components/garage/garageFormHandlers.ts":
/*!*****************************************************!*\
  !*** ./src/components/garage/garageFormHandlers.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setupGarageForm = void 0;\nconst carsApi_1 = __webpack_require__(/*! ../../api/carsApi */ \"./src/api/carsApi.ts\");\nconst setupGarageForm = (updateCarList) => {\n    var _a, _b;\n    let selectedCarId = null;\n    (_a = document.getElementById('create-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {\n        e.preventDefault();\n        const name = document.getElementById('create-name').value;\n        const color = document.getElementById('create-color').value;\n        yield (0, carsApi_1.createCar)({ name, color });\n        updateCarList();\n    }));\n    (_b = document.getElementById('update-form')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {\n        e.preventDefault();\n        if (selectedCarId === null)\n            return;\n        const name = document.getElementById('update-name').value;\n        const color = document.getElementById('update-color').value;\n        yield (0, carsApi_1.updateCar)(selectedCarId, { name, color });\n        selectedCarId = null;\n        e.target.reset();\n        updateCarList();\n    }));\n    document.querySelectorAll('.select-btn').forEach((btn) => btn.addEventListener('click', () => {\n        selectedCarId = Number(btn.dataset.id);\n    }));\n};\nexports.setupGarageForm = setupGarageForm;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/garageFormHandlers.ts?");

/***/ }),

/***/ "./src/components/garage/garagePagination.ts":
/*!***************************************************!*\
  !*** ./src/components/garage/garagePagination.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setupPagination = void 0;\nconst setupPagination = (updateCarList, getCurrentPage, setCurrentPage) => {\n    var _a, _b;\n    (_a = document.getElementById('prev-page')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {\n        if (getCurrentPage() > 1) {\n            setCurrentPage(getCurrentPage() - 1);\n            updateCarList();\n        }\n    });\n    (_b = document.getElementById('next-page')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {\n        setCurrentPage(getCurrentPage() + 1);\n        updateCarList();\n    });\n};\nexports.setupPagination = setupPagination;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/garagePagination.ts?");

/***/ }),

/***/ "./src/components/garage/handleBrokenCar.ts":
/*!**************************************************!*\
  !*** ./src/components/garage/handleBrokenCar.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handleBrokenCar = void 0;\nconst handleBrokenCar = (carIcon, id) => {\n    const computedStyle = getComputedStyle(carIcon);\n    const matrix = new DOMMatrix(computedStyle.transform);\n    const currentX = matrix.m41;\n    carIcon.style.transition = 'none';\n    carIcon.style.transform = `translateX(${currentX}px)`;\n    console.warn(`Car ${id} broke at ${Math.round(currentX)}px`);\n};\nexports.handleBrokenCar = handleBrokenCar;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/handleBrokenCar.ts?");

/***/ }),

/***/ "./src/components/garage/handleRace.ts":
/*!*********************************************!*\
  !*** ./src/components/garage/handleRace.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handleRace = void 0;\nconst startCarRace_1 = __webpack_require__(/*! ./startCarRace */ \"./src/components/garage/startCarRace.ts\");\nconst winnerState_1 = __webpack_require__(/*! ../../store/winnerState */ \"./src/store/winnerState.ts\");\nconst handleRace = () => __awaiter(void 0, void 0, void 0, function* () {\n    const carRows = Array.from(document.querySelectorAll('.car-row'));\n    (0, winnerState_1.setWinnerAnnounced)(false);\n    yield Promise.all(carRows.map((row) => (0, startCarRace_1.startCarRace)(row)));\n});\nexports.handleRace = handleRace;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/handleRace.ts?");

/***/ }),

/***/ "./src/components/garage/initGarage.ts":
/*!*********************************************!*\
  !*** ./src/components/garage/initGarage.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initGarage = void 0;\nconst garageViews_1 = __webpack_require__(/*! ../../views/garageViews */ \"./src/views/garageViews.ts\");\nconst renderGarageCars_1 = __webpack_require__(/*! ./renderGarageCars */ \"./src/components/garage/renderGarageCars.ts\");\nconst garageFormHandlers_1 = __webpack_require__(/*! ./garageFormHandlers */ \"./src/components/garage/garageFormHandlers.ts\");\nconst garagePagination_1 = __webpack_require__(/*! ./garagePagination */ \"./src/components/garage/garagePagination.ts\");\nconst setupRaceHandlers_1 = __webpack_require__(/*! ./setupRaceHandlers */ \"./src/components/garage/setupRaceHandlers.ts\");\nlet currentPage = 1;\nconst limit = 7;\nconst initGarage = () => __awaiter(void 0, void 0, void 0, function* () {\n    const app = document.getElementById('app');\n    if (!app)\n        return;\n    app.innerHTML = (0, garageViews_1.renderGarage)();\n    yield (0, renderGarageCars_1.updateCarList)(currentPage, limit);\n    (0, garageFormHandlers_1.setupGarageForm)(() => (0, renderGarageCars_1.updateCarList)(currentPage, limit));\n    (0, garagePagination_1.setupPagination)(() => (0, renderGarageCars_1.updateCarList)(currentPage, limit), () => currentPage, (newPage) => { currentPage = newPage; });\n    (0, setupRaceHandlers_1.setupRaceHandlers)();\n});\nexports.initGarage = initGarage;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/initGarage.ts?");

/***/ }),

/***/ "./src/components/garage/popupHandler.ts":
/*!***********************************************!*\
  !*** ./src/components/garage/popupHandler.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.removePopup = exports.showPopup = void 0;\nlet currentPopup = null;\nconst showPopup = (text) => {\n    if (currentPopup)\n        return;\n    currentPopup = document.createElement('div');\n    currentPopup.textContent = text;\n    currentPopup.className = 'race-popup';\n    Object.assign(currentPopup.style, {\n        position: 'fixed',\n        top: '50%',\n        left: '50%',\n        transform: 'translate(-50%, -50%)',\n        fontSize: '28px',\n        color: '#fff',\n        background: 'rgba(255,165,0,0.9)',\n        padding: '20px 40px',\n        borderRadius: '10px',\n        zIndex: '9999',\n    });\n    document.body.appendChild(currentPopup);\n};\nexports.showPopup = showPopup;\nconst removePopup = () => {\n    currentPopup === null || currentPopup === void 0 ? void 0 : currentPopup.remove();\n    currentPopup = null;\n};\nexports.removePopup = removePopup;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/popupHandler.ts?");

/***/ }),

/***/ "./src/components/garage/renderGarageCars.ts":
/*!***************************************************!*\
  !*** ./src/components/garage/renderGarageCars.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.updateCarList = void 0;\nconst carsApi_1 = __webpack_require__(/*! ../../api/carsApi */ \"./src/api/carsApi.ts\");\nconst garageCarMarkup_1 = __webpack_require__(/*! ./garageCarMarkup */ \"./src/components/garage/garageCarMarkup.ts\");\nconst updateCarList = (currentPage, limit) => __awaiter(void 0, void 0, void 0, function* () {\n    const list = document.getElementById('car-list');\n    const count = document.getElementById('garage-count');\n    const pageSpan = document.getElementById('garage-page');\n    if (!list || !count || !pageSpan)\n        return;\n    const { cars, total } = yield (0, carsApi_1.getCars)({ page: currentPage, limit });\n    count.textContent = total.toString();\n    pageSpan.textContent = currentPage.toString();\n    list.innerHTML = cars.map(garageCarMarkup_1.getCarHTML).join('');\n    document.querySelectorAll('.remove-btn').forEach((btn) => {\n        btn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {\n            yield (0, carsApi_1.deleteCar)(Number(btn.dataset.id));\n            (0, exports.updateCarList)(currentPage, limit);\n        }));\n    });\n    document.querySelectorAll('.select-btn').forEach((btn) => {\n        btn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {\n            const car = yield (0, carsApi_1.getCar)(Number(btn.dataset.id));\n            document.getElementById('update-name').value = car.name;\n            document.getElementById('update-color').value = car.color;\n        }));\n    });\n});\nexports.updateCarList = updateCarList;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/renderGarageCars.ts?");

/***/ }),

/***/ "./src/components/garage/saveWinner.ts":
/*!*********************************************!*\
  !*** ./src/components/garage/saveWinner.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.saveWinner = void 0;\nconst winnersApi_1 = __webpack_require__(/*! ../../api/winnersApi */ \"./src/api/winnersApi.ts\");\nconst saveWinner = (id, time) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const existing = yield (0, winnersApi_1.getWinner)(id);\n        yield (0, winnersApi_1.updateWinner)(id, {\n            id,\n            wins: existing.wins + 1,\n            time: Math.min(existing.time, time),\n        });\n    }\n    catch (_a) {\n        yield (0, winnersApi_1.createWinner)({ id, wins: 1, time });\n    }\n});\nexports.saveWinner = saveWinner;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/saveWinner.ts?");

/***/ }),

/***/ "./src/components/garage/setupRaceHandlers.ts":
/*!****************************************************!*\
  !*** ./src/components/garage/setupRaceHandlers.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setupRaceHandlers = void 0;\nconst handleRace_1 = __webpack_require__(/*! ./handleRace */ \"./src/components/garage/handleRace.ts\");\nconst setupResetHandlers_1 = __webpack_require__(/*! ./setupResetHandlers */ \"./src/components/garage/setupResetHandlers.ts\");\nconst setupRaceHandlers = () => {\n    var _a;\n    (_a = document.getElementById('race')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', handleRace_1.handleRace);\n    (0, setupResetHandlers_1.setupResetHandlers)();\n};\nexports.setupRaceHandlers = setupRaceHandlers;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/setupRaceHandlers.ts?");

/***/ }),

/***/ "./src/components/garage/setupResetHandlers.ts":
/*!*****************************************************!*\
  !*** ./src/components/garage/setupResetHandlers.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setupResetHandlers = void 0;\nconst engineApi_1 = __webpack_require__(/*! ../../api/engineApi */ \"./src/api/engineApi.ts\");\nconst popupHandler_1 = __webpack_require__(/*! ./popupHandler */ \"./src/components/garage/popupHandler.ts\");\nconst winnerState_1 = __webpack_require__(/*! ../../store/winnerState */ \"./src/store/winnerState.ts\");\nconst resetCar = (row) => __awaiter(void 0, void 0, void 0, function* () {\n    const id = Number(row.getAttribute('data-id'));\n    const carIcon = row.querySelector('.car-icon');\n    yield (0, engineApi_1.stopEngine)(id);\n    carIcon.style.transition = 'none';\n    carIcon.style.transform = 'translateX(0)';\n});\nconst setupResetHandlers = () => {\n    var _a;\n    (_a = document.getElementById('reset')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {\n        const carRows = Array.from(document.querySelectorAll('.car-row'));\n        yield Promise.all(carRows.map(resetCar));\n        (0, popupHandler_1.removePopup)();\n        (0, winnerState_1.setWinnerAnnounced)(false);\n    }));\n};\nexports.setupResetHandlers = setupResetHandlers;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/setupResetHandlers.ts?");

/***/ }),

/***/ "./src/components/garage/startCarRace.ts":
/*!***********************************************!*\
  !*** ./src/components/garage/startCarRace.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.startCarRace = void 0;\nconst engineApi_1 = __webpack_require__(/*! ../../api/engineApi */ \"./src/api/engineApi.ts\");\nconst popupHandler_1 = __webpack_require__(/*! ./popupHandler */ \"./src/components/garage/popupHandler.ts\");\nconst winnerState_1 = __webpack_require__(/*! ../../store/winnerState */ \"./src/store/winnerState.ts\");\nconst saveWinner_1 = __webpack_require__(/*! ./saveWinner */ \"./src/components/garage/saveWinner.ts\");\nconst handleBrokenCar_1 = __webpack_require__(/*! ./handleBrokenCar */ \"./src/components/garage/handleBrokenCar.ts\");\nconst startCarRace = (row) => __awaiter(void 0, void 0, void 0, function* () {\n    var _a;\n    const id = Number(row.getAttribute('data-id'));\n    const name = ((_a = row.querySelector('.car-name')) === null || _a === void 0 ? void 0 : _a.textContent) || `Car ${id}`;\n    const carIcon = row.querySelector('.car-icon');\n    const track = row.querySelector('.car-track');\n    const startBtn = row.querySelector('.start-btn');\n    startBtn.disabled = true;\n    try {\n        const { velocity } = yield (0, engineApi_1.startEngine)(id);\n        const distance = track.offsetWidth - carIcon.offsetWidth;\n        const time = distance / velocity;\n        carIcon.style.transition = `transform ${time}s linear`;\n        carIcon.style.transform = `translateX(${distance}px)`;\n        const drive = yield (0, engineApi_1.driveCar)(id);\n        if (!drive.success) {\n            (0, handleBrokenCar_1.handleBrokenCar)(carIcon, id);\n            return;\n        }\n        const onFinish = () => {\n            carIcon.removeEventListener('transitionend', onFinish);\n            if (!(0, winnerState_1.isWinnerAnnounced)()) {\n                (0, winnerState_1.setWinnerAnnounced)(true);\n                (0, popupHandler_1.showPopup)(`${name} won! (${time.toFixed(2)}s)`);\n                (0, saveWinner_1.saveWinner)(id, time);\n            }\n        };\n        carIcon.addEventListener('transitionend', onFinish);\n    }\n    catch ( /* Ignored */_b) { /* Ignored */ }\n});\nexports.startCarRace = startCarRace;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/startCarRace.ts?");

/***/ }),

/***/ "./src/components/winners/initializeWinnersPage.ts":
/*!*********************************************************!*\
  !*** ./src/components/winners/initializeWinnersPage.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initializeWinnersPage = void 0;\nconst winnersView_1 = __webpack_require__(/*! ../../views/winnersView */ \"./src/views/winnersView.ts\");\nconst winnersSorting_1 = __webpack_require__(/*! ./winnersSorting */ \"./src/components/winners/winnersSorting.ts\");\nconst loadWinnersData_1 = __webpack_require__(/*! ./loadWinnersData */ \"./src/components/winners/loadWinnersData.ts\");\nlet page = 1;\nconst limit = 10;\nlet sort;\nlet order = 'ASC';\nconst initializeWinnersPage = () => __awaiter(void 0, void 0, void 0, function* () {\n    const app = document.getElementById('app');\n    if (!app)\n        return;\n    app.innerHTML = (0, winnersView_1.renderWinnersView)();\n    const updatePage = (newPage) => {\n        page = newPage;\n        (0, loadWinnersData_1.loadWinnersData)({\n            page, limit, sort, order,\n        }, updatePage);\n    };\n    yield (0, loadWinnersData_1.loadWinnersData)({\n        page, limit, sort, order,\n    }, updatePage);\n    (0, winnersSorting_1.setupSorting)((field) => {\n        sort = field;\n        order = order === 'ASC' ? 'DESC' : 'ASC';\n        (0, loadWinnersData_1.loadWinnersData)({\n            page, limit, sort, order,\n        }, updatePage);\n    });\n});\nexports.initializeWinnersPage = initializeWinnersPage;\n\n\n//# sourceURL=webpack://async-race/./src/components/winners/initializeWinnersPage.ts?");

/***/ }),

/***/ "./src/components/winners/loadWinnersData.ts":
/*!***************************************************!*\
  !*** ./src/components/winners/loadWinnersData.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadWinnersData = void 0;\nconst winnersTableApi_1 = __webpack_require__(/*! ../../api/winnersTableApi */ \"./src/api/winnersTableApi.ts\");\nconst winnersTableRenderer_1 = __webpack_require__(/*! ./winnersTableRenderer */ \"./src/components/winners/winnersTableRenderer.ts\");\nconst winnersPagination_1 = __webpack_require__(/*! ./winnersPagination */ \"./src/components/winners/winnersPagination.ts\");\nconst loadWinnersData = (params, onPageChange) => __awaiter(void 0, void 0, void 0, function* () {\n    const { page, limit, sort, order, } = params;\n    const { winners, total } = yield (0, winnersTableApi_1.getWinners)(sort, order, page, limit);\n    yield (0, winnersTableRenderer_1.renderWinnersTable)(winners, page, limit, total);\n    const totalPages = Math.ceil(total / limit);\n    (0, winnersPagination_1.setupPagination)(() => {\n        if (page > 1)\n            onPageChange(page - 1);\n    }, () => {\n        if (page < totalPages)\n            onPageChange(page + 1);\n    }, page, total, limit);\n});\nexports.loadWinnersData = loadWinnersData;\n\n\n//# sourceURL=webpack://async-race/./src/components/winners/loadWinnersData.ts?");

/***/ }),

/***/ "./src/components/winners/winnersPagination.ts":
/*!*****************************************************!*\
  !*** ./src/components/winners/winnersPagination.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setupPagination = void 0;\nconst setupPagination = (onPrevious, onNext, currentPage, totalItems, limit) => {\n    const prevBtn = document.getElementById('prev-winners');\n    const nextBtn = document.getElementById('next-winners');\n    const totalPages = Math.ceil(totalItems / limit);\n    if (prevBtn) {\n        prevBtn.disabled = currentPage <= 1;\n        prevBtn.onclick = () => {\n            if (currentPage > 1)\n                onPrevious();\n        };\n    }\n    if (nextBtn) {\n        nextBtn.disabled = currentPage >= totalPages;\n        nextBtn.onclick = () => {\n            if (currentPage < totalPages)\n                onNext();\n        };\n    }\n};\nexports.setupPagination = setupPagination;\n\n\n//# sourceURL=webpack://async-race/./src/components/winners/winnersPagination.ts?");

/***/ }),

/***/ "./src/components/winners/winnersSorting.ts":
/*!**************************************************!*\
  !*** ./src/components/winners/winnersSorting.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setupSorting = void 0;\nconst setupSorting = (onSort) => {\n    var _a, _b;\n    (_a = document.getElementById('sort-wins')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => onSort('wins'));\n    (_b = document.getElementById('sort-time')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => onSort('time'));\n};\nexports.setupSorting = setupSorting;\n\n\n//# sourceURL=webpack://async-race/./src/components/winners/winnersSorting.ts?");

/***/ }),

/***/ "./src/components/winners/winnersTableRenderer.ts":
/*!********************************************************!*\
  !*** ./src/components/winners/winnersTableRenderer.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderWinnersTable = void 0;\nconst carsApi_1 = __webpack_require__(/*! ../../api/carsApi */ \"./src/api/carsApi.ts\");\nconst renderWinnersTable = (winners, page, limit, total) => __awaiter(void 0, void 0, void 0, function* () {\n    const tbody = document.getElementById('winners-body');\n    const totalCount = document.getElementById('winners-count');\n    const currentPage = document.getElementById('winners-page');\n    if (totalCount)\n        totalCount.textContent = total.toString();\n    if (currentPage)\n        currentPage.textContent = page.toString();\n    if (tbody) {\n        const rows = yield Promise.all(winners.map((winner, idx) => __awaiter(void 0, void 0, void 0, function* () {\n            const car = yield (0, carsApi_1.getCar)(winner.id);\n            return `\n        <tr>\n          <td>${(page - 1) * limit + idx + 1}</td>\n          <td>\n            <div class=\"car-icon\"\n                 style=\"background:${car.color}; width:50px; height:30px; border-radius:5px;\"></div>\n          </td>\n          <td>${car.name}</td>\n          <td>${winner.wins}</td>\n          <td>${winner.time.toFixed(2)}</td>\n        </tr>`;\n        })));\n        tbody.innerHTML = rows.join('');\n    }\n});\nexports.renderWinnersTable = renderWinnersTable;\n\n\n//# sourceURL=webpack://async-race/./src/components/winners/winnersTableRenderer.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./styles/garage.css */ \"./src/styles/garage.css\");\nconst initializeWinnersPage_1 = __webpack_require__(/*! ./components/winners/initializeWinnersPage */ \"./src/components/winners/initializeWinnersPage.ts\");\nconst popupHandler_1 = __webpack_require__(/*! ./components/garage/popupHandler */ \"./src/components/garage/popupHandler.ts\");\nconst initGarage_1 = __webpack_require__(/*! ./components/garage/initGarage */ \"./src/components/garage/initGarage.ts\");\nconst app = document.getElementById('app');\nconst renderView = (view) => __awaiter(void 0, void 0, void 0, function* () {\n    var _a, _b;\n    if (!app)\n        return;\n    (0, popupHandler_1.removePopup)();\n    window.history.pushState({ view }, '', `#${view}`);\n    if (view === 'garage') {\n        yield (0, initGarage_1.initGarage)();\n    }\n    else if (view === 'winners') {\n        yield (0, initializeWinnersPage_1.initializeWinnersPage)();\n    }\n    (_a = document.getElementById('garage-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => renderView('garage'));\n    (_b = document.getElementById('winners-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => renderView('winners'));\n});\nwindow.onpopstate = () => {\n    const view = window.location.hash.replace('#', '') || 'garage';\n    renderView(view);\n};\ndocument.addEventListener('DOMContentLoaded', () => {\n    const view = window.location.hash.replace('#', '') || 'garage';\n    renderView(view);\n});\n\n\n//# sourceURL=webpack://async-race/./src/index.ts?");

/***/ }),

/***/ "./src/store/winnerState.ts":
/*!**********************************!*\
  !*** ./src/store/winnerState.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setWinnerAnnounced = exports.isWinnerAnnounced = void 0;\nlet winnerAnnounced = false;\nconst isWinnerAnnounced = () => winnerAnnounced;\nexports.isWinnerAnnounced = isWinnerAnnounced;\nconst setWinnerAnnounced = (value) => {\n    winnerAnnounced = value;\n};\nexports.setWinnerAnnounced = setWinnerAnnounced;\n\n\n//# sourceURL=webpack://async-race/./src/store/winnerState.ts?");

/***/ }),

/***/ "./src/styles/garage.css":
/*!*******************************!*\
  !*** ./src/styles/garage.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_garage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./garage.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/garage.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_garage_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_garage_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_garage_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_garage_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://async-race/./src/styles/garage.css?");

/***/ }),

/***/ "./src/types/types.ts":
/*!****************************!*\
  !*** ./src/types/types.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BASE_URL = void 0;\nexports.BASE_URL = 'http://localhost:3000';\n\n\n//# sourceURL=webpack://async-race/./src/types/types.ts?");

/***/ }),

/***/ "./src/views/garageViews.ts":
/*!**********************************!*\
  !*** ./src/views/garageViews.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderGarage = void 0;\nconst renderGarage = () => `\n  <div class=\"top-panel\">\n    <div class=\"nav-buttons\">\n      <button id=\"garage-btn\">TO GARAGE</button>\n      <button id=\"winners-btn\">TO WINNERS</button>\n    </div>\n\n    <div class=\"form-row\">\n      <form id=\"create-form\" class=\"form-inline\">\n        <input type=\"text\" id=\"create-name\" placeholder=\"Car name\" required />\n        <input type=\"color\" id=\"create-color\" value=\"#ffffff\" />\n        <button type=\"submit\">CREATE</button>\n      </form>\n\n      <form id=\"update-form\" class=\"form-inline\">\n        <input type=\"text\" id=\"update-name\" placeholder=\"New name\" />\n        <input type=\"color\" id=\"update-color\" value=\"#000000\" />\n        <button type=\"submit\">UPDATE</button>\n      </form>\n    </div>\n\n    <div class=\"action-buttons\">\n      <button id=\"race\">RACE</button>\n      <button id=\"reset\">RESET</button>\n      <button id=\"generate-cars\">GENERATE CARS</button>\n    </div>\n  </div>\n\n  <h2 class=\"garage-title\">Garage (<span id=\"garage-count\">0</span>)</h2>\n  <h3 class=\"garage-page\">Page #<span id=\"garage-page\">1</span></h3>\n\n  <div id=\"car-list\" class=\"garage-list\"></div>\n\n  <div class=\"pagination\">\n    <button id=\"prev-page\">← Prev</button>\n    <button id=\"next-page\">Next →</button>\n  </div>\n`;\nexports.renderGarage = renderGarage;\n\n\n//# sourceURL=webpack://async-race/./src/views/garageViews.ts?");

/***/ }),

/***/ "./src/views/winnersView.ts":
/*!**********************************!*\
  !*** ./src/views/winnersView.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderWinnersView = void 0;\nconst renderWinnersView = () => `\n  <div class=\"winners-header\">\n    <button id=\"garage-btn\">TO GARAGE</button>\n    <h2 class=\"winners-title\">Winners (<span id=\"winners-count\">0</span>)</h2>\n    <h3 class=\"winners-page\">Page #<span id=\"winners-page\">1</span></h3>\n  </div>\n\n  <table class=\"winners-table\">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Car</th>\n        <th>Name</th>\n        <th id=\"sort-wins\">Wins ⬍</th>\n        <th id=\"sort-time\">Best time (seconds) ⬍</th>\n      </tr>\n    </thead>\n    <tbody id=\"winners-body\"></tbody>\n  </table>\n\n  <div class=\"pagination\">\n    <button id=\"prev-winners\">← Prev</button>\n    <button id=\"next-winners\">Next →</button>\n  </div>\n`;\nexports.renderWinnersView = renderWinnersView;\n\n\n//# sourceURL=webpack://async-race/./src/views/winnersView.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;