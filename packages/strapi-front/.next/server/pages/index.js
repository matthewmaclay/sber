module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/romanrytikov/Documents/Hakaton/sber/packages/strapi-front/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst StyledIndexPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"pages__StyledIndexPage\",\n  componentId: \"tuxmp8-0\"\n})([\"display:flex;height:100%;\"]);\nconst StyledBlockRole = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"pages__StyledBlockRole\",\n  componentId: \"tuxmp8-1\"\n})([\"display:flex;background:linear-gradient(180deg,#5F5FE3 0%,#2B2BB3 100%);align-items:center;justify-content:center;height:100%;width:50%;cursor:pointer;h3{font-family:Roboto;font-style:normal;font-weight:500;font-size:48px;line-height:54px;color:#FFFFFF;opacity:0.5;}&:hover{h3{opacity:1;}}\"]);\nconst StyledSplit = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"pages__StyledSplit\",\n  componentId: \"tuxmp8-2\"\n})([\"width:1px;background-color:rgba(225,225,225,1);\"]);\n\nconst BlockRole = ({\n  role\n}) => {\n  return __jsx(StyledBlockRole, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 3\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 4\n    }\n  }, role));\n};\n\nconst IndexPage = () => {\n  return __jsx(StyledIndexPage, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 3\n    }\n  }, __jsx(BlockRole, {\n    role: \"\\u042F \\u0430\\u0432\\u0442\\u043E\\u0440\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 4\n    }\n  }), __jsx(StyledSplit, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 4\n    }\n  }), __jsx(BlockRole, {\n    role: \"\\u042F \\u0440\\u0435\\u0434\\u0430\\u043A\\u0442\\u043E\\u0440\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 4\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJTdHlsZWRJbmRleFBhZ2UiLCJzdHlsZSIsImRpdiIsIlN0eWxlZEJsb2NrUm9sZSIsIlN0eWxlZFNwbGl0IiwiQmxvY2tSb2xlIiwicm9sZSIsIkluZGV4UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxlQUFlLEdBQUdDLHdEQUFLLENBQUNDLEdBQVQ7QUFBQTtBQUFBO0FBQUEsaUNBQXJCO0FBS0EsTUFBTUMsZUFBZSxHQUFHRix3REFBSyxDQUFDQyxHQUFUO0FBQUE7QUFBQTtBQUFBLHlTQUFyQjtBQTBCQSxNQUFNRSxXQUFXLEdBQUdILHdEQUFLLENBQUNDLEdBQVQ7QUFBQTtBQUFBO0FBQUEsdURBQWpCOztBQUtBLE1BQU1HLFNBQVMsR0FBRyxDQUFFO0FBQUVDO0FBQUYsQ0FBRixLQUFnQjtBQUNqQyxTQUNDLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFQSxJQURGLENBREQsQ0FERDtBQU9BLENBUkQ7O0FBVUEsTUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDdkIsU0FDQyxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsU0FBRDtBQUFXLFFBQUksRUFBQyx1Q0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQUdDLE1BQUMsU0FBRDtBQUFXLFFBQUksRUFBQyx5REFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELENBREQ7QUFPQSxDQVJEOztBQVVlQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTdHlsZWRJbmRleFBhZ2UgPSBzdHlsZS5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGhlaWdodDogMTAwJTtcbmBcblxuY29uc3QgU3R5bGVkQmxvY2tSb2xlID0gc3R5bGUuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNUY1RkUzIDAlLCAjMkIyQkIzIDEwMCUpO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogNTAlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cblx0aDMge1xuXHRcdGZvbnQtZmFtaWx5OiBSb2JvdG87XG5cdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0Zm9udC1zaXplOiA0OHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA1NHB4O1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdG9wYWNpdHk6IDAuNTtcblx0fVxuXG5cdCY6aG92ZXIge1xuXHRcdGgzIHtcblx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0fVxuXHR9XG5gXG5cbmNvbnN0IFN0eWxlZFNwbGl0ID0gc3R5bGUuZGl2YFxuXHR3aWR0aDogMXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjI1LCAyMjUsIDIyNSwgMSk7XG5gXG5cbmNvbnN0IEJsb2NrUm9sZSA9ICggeyByb2xlIH0gKSA9PiB7XG5cdHJldHVybihcblx0XHQ8U3R5bGVkQmxvY2tSb2xlPlxuXHRcdFx0PGgzPlxuXHRcdFx0XHR7cm9sZX1cblx0XHRcdDwvaDM+XG5cdFx0PC9TdHlsZWRCbG9ja1JvbGU+XG5cdClcbn1cblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PFN0eWxlZEluZGV4UGFnZT5cblx0XHRcdDxCbG9ja1JvbGUgcm9sZT1cItCvINCw0LLRgtC+0YBcIiAvPlxuXHRcdFx0PFN0eWxlZFNwbGl0IC8+XG5cdFx0XHQ8QmxvY2tSb2xlIHJvbGU9XCLQryDRgNC10LTQsNC60YLQvtGAXCIgLz5cblx0XHQ8L1N0eWxlZEluZGV4UGFnZT5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });