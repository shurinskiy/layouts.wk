/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/common.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/blocks.js":
/*!**************************!*\
  !*** ./src/js/blocks.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9qcy9ibG9ja3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/blocks.js\n");

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _polyfills_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.js */ \"./src/js/polyfills.js\");\n/* harmony import */ var _polyfills_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks.js */ \"./src/js/blocks.js\");\n/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/* Тут можно писать код общий для всего проекта и требующий единого пространства имен *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uLmpzPzQ0MGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QjtBQUNIOztBQUVyQiIsImZpbGUiOiIuL3NyYy9qcy9jb21tb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3BvbHlmaWxscy5qc1wiO1xyXG5pbXBvcnQgXCIuL2Jsb2Nrcy5qc1wiO1xyXG5cclxuLyog0KLRg9GCINC80L7QttC90L4g0L/QuNGB0LDRgtGMINC60L7QtCDQvtCx0YnQuNC5INC00LvRjyDQstGB0LXQs9C+INC/0YDQvtC10LrRgtCwINC4INGC0YDQtdCx0YPRjtGJ0LjQuSDQtdC00LjQvdC+0LPQviDQv9GA0L7RgdGC0YDQsNC90YHRgtCy0LAg0LjQvNC10L0gKi8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/common.js\n");

/***/ }),

/***/ "./src/js/polyfills.js":
/*!*****************************!*\
  !*** ./src/js/polyfills.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* Polyfills */\n(function (e) {\n  e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;\n  e.closest = e.closest || function closest(selector) {\n    if (!this) return null;\n    if (this.matches(selector)) return this;\n    if (!this.parentElement) {\n      return null;\n    } else return this.parentElement.closest(selector);\n  };\n})(Element.prototype);\n(function (e) {\n  var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;\n  !matches ? e.matches = e.matchesSelector = function matches(selector) {\n    var matches = document.querySelectorAll(selector);\n    var th = this;\n    return Array.prototype.some.call(matches, function (e) {\n      return e === th;\n    });\n  } : e.matches = e.matchesSelector = matches;\n})(Element.prototype);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcG9seWZpbGxzLmpzPzcyNWYiXSwibmFtZXMiOlsiZSIsIm1hdGNoZXMiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJjbG9zZXN0Iiwic2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwiRWxlbWVudCIsInByb3RvdHlwZSIsIm1hdGNoZXNTZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRoIiwiQXJyYXkiLCJzb21lIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQyxXQUFTQSxDQUFDLEVBQUU7RUFDWkEsQ0FBQyxDQUFDQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0MsT0FBTyxJQUFJRCxDQUFDLENBQUNFLGtCQUFrQixJQUFJRixDQUFDLENBQUNHLGlCQUFpQixJQUFJSCxDQUFDLENBQUNJLGdCQUFnQixJQUFJSixDQUFDLENBQUNLLHFCQUFxQjtFQUNySEwsQ0FBQyxDQUFDTSxPQUFPLEdBQUdOLENBQUMsQ0FBQ00sT0FBTyxJQUFJLFNBQVNBLE9BQU9BLENBQUNDLFFBQVEsRUFBRTtJQUNuRCxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sSUFBSTtJQUN0QixJQUFJLElBQUksQ0FBQ04sT0FBTyxDQUFDTSxRQUFRLENBQUMsRUFBRSxPQUFPLElBQUk7SUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQ0MsYUFBYSxFQUFFO01BQUMsT0FBTyxJQUFJO0lBQUEsQ0FBQyxNQUNoQyxPQUFPLElBQUksQ0FBQ0EsYUFBYSxDQUFDRixPQUFPLENBQUNDLFFBQVEsQ0FBQztFQUNqRCxDQUFDO0FBQ0gsQ0FBQyxFQUFDRSxPQUFPLENBQUNDLFNBQVMsQ0FBQztBQUVwQixDQUFDLFVBQVNWLENBQUMsRUFBRTtFQUNaLElBQUlDLE9BQU8sR0FBR0QsQ0FBQyxDQUFDQyxPQUFPLElBQUlELENBQUMsQ0FBQ1csZUFBZSxJQUFJWCxDQUFDLENBQUNLLHFCQUFxQixJQUFJTCxDQUFDLENBQUNFLGtCQUFrQixJQUFJRixDQUFDLENBQUNHLGlCQUFpQixJQUFJSCxDQUFDLENBQUNJLGdCQUFnQjtFQUM1SSxDQUFDSCxPQUFPLEdBQUlELENBQUMsQ0FBQ0MsT0FBTyxHQUFHRCxDQUFDLENBQUNXLGVBQWUsR0FBRyxTQUFTVixPQUFPQSxDQUFDTSxRQUFRLEVBQUU7SUFDdEUsSUFBSU4sT0FBTyxHQUFHVyxRQUFRLENBQUNDLGdCQUFnQixDQUFDTixRQUFRLENBQUM7SUFDakQsSUFBSU8sRUFBRSxHQUFHLElBQUk7SUFDYixPQUFPQyxLQUFLLENBQUNMLFNBQVMsQ0FBQ00sSUFBSSxDQUFDQyxJQUFJLENBQUNoQixPQUFPLEVBQUUsVUFBU0QsQ0FBQyxFQUFFO01BQ3JELE9BQU9BLENBQUMsS0FBS2MsRUFBRTtJQUNoQixDQUFDLENBQUM7RUFDSCxDQUFDLEdBQUtkLENBQUMsQ0FBQ0MsT0FBTyxHQUFHRCxDQUFDLENBQUNXLGVBQWUsR0FBR1YsT0FBUTtBQUMvQyxDQUFDLEVBQUVRLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDIiwiZmlsZSI6Ii4vc3JjL2pzL3BvbHlmaWxscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBvbHlmaWxscyAqL1xyXG4oZnVuY3Rpb24oZSkge1xyXG5cdGUubWF0Y2hlcyA9IGUubWF0Y2hlcyB8fCBlLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGUub01hdGNoZXNTZWxlY3RvciB8fCBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcclxuXHRlLmNsb3Nlc3QgPSBlLmNsb3Nlc3QgfHwgZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xyXG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbnVsbDtcclxuXHRcdGlmICh0aGlzLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gdGhpcztcclxuXHRcdGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7cmV0dXJuIG51bGx9XHJcblx0XHRcdGVsc2UgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKVxyXG5cdFx0fTtcclxufShFbGVtZW50LnByb3RvdHlwZSkpO1xyXG5cclxuKGZ1bmN0aW9uKGUpIHtcclxuXHR2YXIgbWF0Y2hlcyA9IGUubWF0Y2hlcyB8fCBlLm1hdGNoZXNTZWxlY3RvciB8fCBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGUub01hdGNoZXNTZWxlY3RvcjtcclxuXHQhbWF0Y2hlcyA/IChlLm1hdGNoZXMgPSBlLm1hdGNoZXNTZWxlY3RvciA9IGZ1bmN0aW9uIG1hdGNoZXMoc2VsZWN0b3IpIHtcclxuXHRcdHZhciBtYXRjaGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblx0XHR2YXIgdGggPSB0aGlzO1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwobWF0Y2hlcywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRyZXR1cm4gZSA9PT0gdGg7XHJcblx0XHR9KTtcclxuXHR9KSA6IChlLm1hdGNoZXMgPSBlLm1hdGNoZXNTZWxlY3RvciA9IG1hdGNoZXMpO1xyXG59KShFbGVtZW50LnByb3RvdHlwZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/polyfills.js\n");

/***/ })

/******/ });