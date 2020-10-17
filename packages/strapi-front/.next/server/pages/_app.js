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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lib_apolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/apolloClient */ \"./src/lib/apolloClient.ts\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/romanrytikov/Documents/Hakaton/sber/packages/strapi-front/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\n\n\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"createGlobalStyle\"]`\n\t#__next {\n\t\theight: 100%;\n\t}\n\thtml {\n\t\theight: 100%;\n\t}\n\tbody {\n\t\tmargin: 0px;\n\t\twidth: 100%;\n\t\theight: 100%;\n`; // const theme = {\n//   global: {\n//     styles: {\n// \t  base: css`\n// \t\t\theight: 100%;\n// \t\t\t.demo-editor {\n// \t\t\t\tpadding: 0 20px;\n// \t\t\t}\n// \t\t\t.withoutUnderlineLink {\n// \t\t\t\tposition: relative;\n// \t\t\t}\n// \t\t\t.withoutUnderlineLink > a {\n// \t\t\t\tcolor: inherit;\n// \t\t\t\tfont-size: inherit;\n// \t\t\t\ttext-decoration: none;\n// \t\t\t\twidth: 100%;\n// \t\t\t\theight: 100%;\n// \t\t\t\t&:before {\n// \t\t\t\t\tcontent: \" \";\n// \t\t\t\t\tposition: absolute;\n// \t\t\t\t}\n// \t\t\t}\n// \t\t\t.bb-Button > a {\n// \t\t\t\theight: 100%;\n// \t\t\t}\n// \t\t`,\n//     },\n//   },\n// };\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const apolloClient = Object(lib_apolloClient__WEBPACK_IMPORTED_MODULE_4__[\"useApollo\"])(pageProps.initialApolloState);\n  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n    client: apolloClient,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 6\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"css/medium-editor.css\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"css/themes/bootstrap.css\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  })), __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 6\n    }\n  })), __jsx(GlobalStyle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 6\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG9DbGllbnQiLCJ1c2VBcG9sbG8iLCJpbml0aWFsQXBvbGxvU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyxtRUFBa0I7Ozs7Ozs7Ozs7O0NBQXRDLEMsQ0FhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9lLFNBQVNDLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUE4QztBQUM1RCxRQUFNQyxZQUFZLEdBQUdDLGtFQUFTLENBQUNGLFNBQVMsQ0FBQ0csa0JBQVgsQ0FBOUI7QUFDQSxTQUNDLE1BQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFRixZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUcsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsdUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLDBCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FGSCxFQU1HLE1BQUMsU0FBRCxlQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FOSCxFQU9HLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEgsQ0FERDtBQVlBIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByb3ZpZGVyIGFzIEJ1bWJhZ1Byb3ZpZGVyLCBjc3MgfSBmcm9tIFwiYnVtYmFnXCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHVzZUFwb2xsbyB9IGZyb20gXCJsaWIvYXBvbGxvQ2xpZW50XCI7XG5pbXBvcnQgXCJAYmFiZWwvcG9seWZpbGxcIjtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcblx0I19fbmV4dCB7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG5cdGh0bWwge1xuXHRcdGhlaWdodDogMTAwJTtcblx0fVxuXHRib2R5IHtcblx0XHRtYXJnaW46IDBweDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5gXG5cbi8vIGNvbnN0IHRoZW1lID0ge1xuLy8gICBnbG9iYWw6IHtcbi8vICAgICBzdHlsZXM6IHtcbi8vIFx0ICBiYXNlOiBjc3NgXG4vLyBcdFx0XHRoZWlnaHQ6IDEwMCU7XG4vLyBcdFx0XHQuZGVtby1lZGl0b3Ige1xuLy8gXHRcdFx0XHRwYWRkaW5nOiAwIDIwcHg7XG4vLyBcdFx0XHR9XG4vLyBcdFx0XHQud2l0aG91dFVuZGVybGluZUxpbmsge1xuLy8gXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyBcdFx0XHR9XG4vLyBcdFx0XHQud2l0aG91dFVuZGVybGluZUxpbmsgPiBhIHtcbi8vIFx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XG4vLyBcdFx0XHRcdGZvbnQtc2l6ZTogaW5oZXJpdDtcbi8vIFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gXHRcdFx0XHR3aWR0aDogMTAwJTtcbi8vIFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuLy8gXHRcdFx0XHQmOmJlZm9yZSB7XG4vLyBcdFx0XHRcdFx0Y29udGVudDogXCIgXCI7XG4vLyBcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHR9XG4vLyBcdFx0XHQuYmItQnV0dG9uID4gYSB7XG4vLyBcdFx0XHRcdGhlaWdodDogMTAwJTtcbi8vIFx0XHRcdH1cbi8vIFx0XHRgLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyB9O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRDb21wb25lbnQ6IFJlYWN0LkZDO1xuXHRwYWdlUHJvcHM6IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogUHJvcHMpIHtcblx0Y29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcy5pbml0aWFsQXBvbGxvU3RhdGUpO1xuXHRyZXR1cm4gKFxuXHRcdDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb0NsaWVudH0+XG5cdFx0XHR7LyogPEJ1bWJhZ1Byb3ZpZGVyIHRoZW1lPXt0aGVtZX0+ICovfVxuXHRcdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvbWVkaXVtLWVkaXRvci5jc3NcIi8+XG5cdFx0XHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy90aGVtZXMvYm9vdHN0cmFwLmNzc1wiLz5cblx0XHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdFx0XHRcdDxHbG9iYWxTdHlsZSAvPlxuXHRcdFx0ey8qIDwvQnVtYmFnUHJvdmlkZXI+ICovfVxuXHRcdDwvQXBvbGxvUHJvdmlkZXI+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/lib/apolloClient.ts":
/*!*********************************!*\
  !*** ./src/lib/apolloClient.ts ***!
  \*********************************/
/*! exports provided: initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeApollo\", function() { return initializeApollo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useApollo\", function() { return useApollo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// @ts-nocheck\n\n\n\nlet apolloClient;\n\nfunction createApolloClient() {\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloClient\"]({\n    ssrMode: true,\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"HttpLink\"]({\n      uri: 'http://localhost:1337/graphql' // Server URL (must be absolute)\n\n    }),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"InMemoryCache\"]({\n      typePolicies: {\n        Query: {\n          fields: {\n            allPosts: Object(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__[\"concatPagination\"])()\n          }\n        }\n      }\n    })\n  });\n}\n\nfunction initializeApollo(initialState = null) {\n  var _apolloClient2;\n\n  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n  // gets hydrated here\n\n\n  if (initialState) {\n    // Get existing cache, loaded during client side data fetching\n    const existingCache = _apolloClient.extract(); // Restore the cache using the data passed from getStaticProps/getServerSideProps\n    // combined with the existing cached data\n\n\n    _apolloClient.cache.restore(_objectSpread(_objectSpread({}, existingCache), initialState));\n  } // For SSG and SSR always create a new Apollo Client\n\n\n  if (true) return _apolloClient; // Create the Apollo Client once in the client\n\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n}\nfunction useApollo(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeApollo(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2Fwb2xsb0NsaWVudC50cz80NDBlIl0sIm5hbWVzIjpbImFwb2xsb0NsaWVudCIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsImFsbFBvc3RzIiwiY29uY2F0UGFnaW5hdGlvbiIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJyZXN0b3JlIiwidXNlQXBvbGxvIiwic3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFlBQUo7O0FBRUEsU0FBU0Msa0JBQVQsR0FBOEI7QUFDNUIsU0FBTyxJQUFJQywyREFBSixDQUFpQjtBQUN0QkMsV0FBTyxNQURlO0FBRXRCQyxRQUFJLEVBQUUsSUFBSUMsdURBQUosQ0FBYTtBQUNqQkMsU0FBRyxFQUFFLCtCQURZLENBQ3FCOztBQURyQixLQUFiLENBRmdCO0FBS3RCQyxTQUFLLEVBQUUsSUFBSUMsNERBQUosQ0FBa0I7QUFDdkJDLGtCQUFZLEVBQUU7QUFDWkMsYUFBSyxFQUFFO0FBQ0xDLGdCQUFNLEVBQUU7QUFDTkMsb0JBQVEsRUFBRUMsaUZBQWdCO0FBRHBCO0FBREg7QUFESztBQURTLEtBQWxCO0FBTGUsR0FBakIsQ0FBUDtBQWVEOztBQUNNLFNBQVNDLGdCQUFULENBQTBCQyxZQUFZLEdBQUcsSUFBekMsRUFBK0M7QUFBQTs7QUFDcEQsUUFBTUMsYUFBYSxxQkFBR2hCLFlBQUgsMkRBQW1CQyxrQkFBa0IsRUFBeEQsQ0FEb0QsQ0FHcEQ7QUFDQTs7O0FBQ0EsTUFBSWMsWUFBSixFQUFrQjtBQUNoQjtBQUNBLFVBQU1FLGFBQWEsR0FBR0QsYUFBYSxDQUFDRSxPQUFkLEVBQXRCLENBRmdCLENBR2hCO0FBQ0E7OztBQUNBRixpQkFBYSxDQUFDVCxLQUFkLENBQW9CWSxPQUFwQixpQ0FBaUNGLGFBQWpDLEdBQW1ERixZQUFuRDtBQUNELEdBWG1ELENBWXBEOzs7QUFDQSxZQUFtQyxPQUFPQyxhQUFQLENBYmlCLENBY3BEOztBQUNBLE1BQUksQ0FBQ2hCLFlBQUwsRUFBbUJBLFlBQVksR0FBR2dCLGFBQWY7QUFFbkIsU0FBT0EsYUFBUDtBQUNEO0FBRU0sU0FBU0ksU0FBVCxDQUFtQkwsWUFBbkIsRUFBaUM7QUFDdEMsUUFBTU0sS0FBSyxHQUFHQyxxREFBTyxDQUFDLE1BQU1SLGdCQUFnQixDQUFDQyxZQUFELENBQXZCLEVBQXVDLENBQUNBLFlBQUQsQ0FBdkMsQ0FBckI7QUFDQSxTQUFPTSxLQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvbGliL2Fwb2xsb0NsaWVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IGNvbmNhdFBhZ2luYXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudC91dGlsaXRpZXMnO1xuXG5sZXQgYXBvbGxvQ2xpZW50O1xuXG5mdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoKSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyxcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xuICAgICAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2dyYXBocWwnLCAvLyBTZXJ2ZXIgVVJMIChtdXN0IGJlIGFic29sdXRlKVxuICAgIH0pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgICB0eXBlUG9saWNpZXM6IHtcbiAgICAgICAgUXVlcnk6IHtcbiAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgIGFsbFBvc3RzOiBjb25jYXRQYWdpbmF0aW9uKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlID0gbnVsbCkge1xuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpO1xuXG4gIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcbiAgLy8gZ2V0cyBoeWRyYXRlZCBoZXJlXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICAvLyBHZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xuICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBfYXBvbGxvQ2xpZW50LmV4dHJhY3QoKTtcbiAgICAvLyBSZXN0b3JlIHRoZSBjYWNoZSB1c2luZyB0aGUgZGF0YSBwYXNzZWQgZnJvbSBnZXRTdGF0aWNQcm9wcy9nZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAvLyBjb21iaW5lZCB3aXRoIHRoZSBleGlzdGluZyBjYWNoZWQgZGF0YVxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZSh7IC4uLmV4aXN0aW5nQ2FjaGUsIC4uLmluaXRpYWxTdGF0ZSB9KTtcbiAgfVxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG4gIC8vIENyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XG5cbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/apolloClient.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client/utilities\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIj9lNDYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBhcG9sbG8vY2xpZW50L3V0aWxpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L3V0aWxpdGllc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client/utilities\n");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcG9seWZpbGxcIj83MDhkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBiYWJlbC9wb2x5ZmlsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@babel/polyfill\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

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