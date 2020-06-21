webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return nav; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ggolfz/Desktop/portfolio/components/nav.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction nav() {\n  _s();\n\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var url = \"/\";\n\n  if (router.query.id) {\n    url = \"/\" + router.route.split(\"/\")[1];\n  } else {\n    url = router.pathname;\n  }\n\n  var linkStyle = function linkStyle(href) {\n    return {\n      color: url === href ? \"#4FC3F7\" : \"#FFFFFF\"\n    };\n  };\n\n  var hrStyle = function hrStyle(href) {\n    return {\n      background: \"#4FC3F7\",\n      height: \"2px\",\n      border: \"none\",\n      margin: \"3px 0px\",\n      display: url === href ? \"block\" : \"none\"\n    };\n  };\n\n  var navItems = function navItems() {\n    var list = [\"home\", \"about\", \"education\", \"projects\", \"awards\"];\n    var items = [];\n\n    for (var _i = 0, _list = list; _i < _list.length; _i++) {\n      var i = _list[_i];\n      items.push(listItem(i));\n    }\n\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }\n    }, items);\n  };\n\n  var listItem = function listItem(name) {\n    var url = \"/\" + name;\n\n    if (name === \"home\") {\n      url = \"/\";\n    }\n\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      style: linkStyle(url),\n      className: \"jsx-2362978156\" + \" \" + \"nav-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }\n    }, name[0].toUpperCase() + name.substring(1), __jsx(\"hr\", {\n      style: hrStyle(url),\n      className: \"jsx-2362978156\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }\n    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      id: \"2362978156\",\n      __self: _this\n    }, \".nav-item.jsx-2362978156{cursor:pointer;font-size:1.2em !important;margin-right:10px;padding:20px 20px 15px 20px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ29sZnovRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURhLEFBR2dDLGVBQ1ksMkJBQ1Qsa0JBQ1UsNEJBQzlCIiwiZmlsZSI6Ii9Vc2Vycy9nZ29sZnovRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXYoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgdXJsID0gXCIvXCI7XG4gIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcbiAgICB1cmwgPSBcIi9cIiArIHJvdXRlci5yb3V0ZS5zcGxpdChcIi9cIilbMV07XG4gIH0gZWxzZSB7XG4gICAgdXJsID0gcm91dGVyLnBhdGhuYW1lO1xuICB9XG4gIGNvbnN0IGxpbmtTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiB1cmwgPT09IGhyZWYgPyBcIiM0RkMzRjdcIiA6IFwiI0ZGRkZGRlwiLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGhyU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kOiBcIiM0RkMzRjdcIixcbiAgICAgIGhlaWdodDogXCIycHhcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBtYXJnaW46IFwiM3B4IDBweFwiLFxuICAgICAgZGlzcGxheTogdXJsID09PSBocmVmID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgbmF2SXRlbXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gW1wiaG9tZVwiLFwiYWJvdXRcIixcImVkdWNhdGlvblwiLFwicHJvamVjdHNcIixcImF3YXJkc1wiXVxuICAgICAgY29uc3QgaXRlbXMgPSBbXVxuICAgICAgZm9yKGxldCBpIG9mIGxpc3Qpe1xuICAgICAgICBpdGVtcy5wdXNoKGxpc3RJdGVtKGkpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtpdGVtc31cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgIClcbiAgfVxuICBjb25zdCBsaXN0SXRlbSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHVybCA9IFwiL1wiICsgbmFtZTtcbiAgICBpZiAobmFtZSA9PT0gXCJob21lXCIpIHtcbiAgICAgIHVybCA9IFwiL1wiO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TGluayBocmVmPXt1cmx9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKHVybCl9PlxuICAgICAgICAgICAge25hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpfVxuICAgICAgICAgICAgPGhyIHN0eWxlPXtoclN0eWxlKHVybCl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMTVweCAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgIDx0aXRsZT5HR29sZnouY29tPC90aXRsZT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYXYtdGl0bGVcIj5HR29sZnouY29tPC9oMj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1zXCI+XG4gICAgICAgICAge25hdkl0ZW1zKCl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMCUgMiU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFBMjM3RTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi10aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWl0ZW1zIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/ggolfz/Desktop/portfolio/components/nav.js */\"));\n  };\n\n  return __jsx(\"div\", {\n    className: \"jsx-1076427432\" + \" \" + \"nav\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-1076427432\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, \"GGolfz.com\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-1076427432\" + \" \" + \"nav-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, \"GGolfz.com\")), __jsx(\"div\", {\n    className: \"jsx-1076427432\" + \" \" + \"nav-items\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, navItems()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2389174785\",\n    __self: this\n  }, \".nav.jsx-1076427432{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0% 2%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#1A237E;color:white;}.nav-title.jsx-1076427432{margin-block-start:0;margin-block-end:0;cursor:pointer;}.nav-items.jsx-1076427432{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ29sZnovRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVTLEFBRzBCLEFBT1EsQUFLSixpQkFDSixJQUxNLG1CQUNKLGVBQ2pCLG1CQVRnQixjQUNLLEdBWXJCLDBGQVhxQixtQkFDUCxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9nZ29sZnovRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXYoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgdXJsID0gXCIvXCI7XG4gIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcbiAgICB1cmwgPSBcIi9cIiArIHJvdXRlci5yb3V0ZS5zcGxpdChcIi9cIilbMV07XG4gIH0gZWxzZSB7XG4gICAgdXJsID0gcm91dGVyLnBhdGhuYW1lO1xuICB9XG4gIGNvbnN0IGxpbmtTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiB1cmwgPT09IGhyZWYgPyBcIiM0RkMzRjdcIiA6IFwiI0ZGRkZGRlwiLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGhyU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kOiBcIiM0RkMzRjdcIixcbiAgICAgIGhlaWdodDogXCIycHhcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBtYXJnaW46IFwiM3B4IDBweFwiLFxuICAgICAgZGlzcGxheTogdXJsID09PSBocmVmID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgbmF2SXRlbXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gW1wiaG9tZVwiLFwiYWJvdXRcIixcImVkdWNhdGlvblwiLFwicHJvamVjdHNcIixcImF3YXJkc1wiXVxuICAgICAgY29uc3QgaXRlbXMgPSBbXVxuICAgICAgZm9yKGxldCBpIG9mIGxpc3Qpe1xuICAgICAgICBpdGVtcy5wdXNoKGxpc3RJdGVtKGkpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtpdGVtc31cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgIClcbiAgfVxuICBjb25zdCBsaXN0SXRlbSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHVybCA9IFwiL1wiICsgbmFtZTtcbiAgICBpZiAobmFtZSA9PT0gXCJob21lXCIpIHtcbiAgICAgIHVybCA9IFwiL1wiO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TGluayBocmVmPXt1cmx9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKHVybCl9PlxuICAgICAgICAgICAge25hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpfVxuICAgICAgICAgICAgPGhyIHN0eWxlPXtoclN0eWxlKHVybCl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMTVweCAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgIDx0aXRsZT5HR29sZnouY29tPC90aXRsZT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYXYtdGl0bGVcIj5HR29sZnouY29tPC9oMj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1zXCI+XG4gICAgICAgICAge25hdkl0ZW1zKCl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMCUgMiU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFBMjM3RTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi10aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWl0ZW1zIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/ggolfz/Desktop/portfolio/components/nav.js */\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1789540352\",\n    __self: this\n  }, \"body{margin:0px;padding:0px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ29sZnovRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZ5QixBQUdzQixXQUNDLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2dnb2xmei9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCB1cmwgPSBcIi9cIjtcbiAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xuICAgIHVybCA9IFwiL1wiICsgcm91dGVyLnJvdXRlLnNwbGl0KFwiL1wiKVsxXTtcbiAgfSBlbHNlIHtcbiAgICB1cmwgPSByb3V0ZXIucGF0aG5hbWU7XG4gIH1cbiAgY29uc3QgbGlua1N0eWxlID0gKGhyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IHVybCA9PT0gaHJlZiA/IFwiIzRGQzNGN1wiIDogXCIjRkZGRkZGXCIsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaHJTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tncm91bmQ6IFwiIzRGQzNGN1wiLFxuICAgICAgaGVpZ2h0OiBcIjJweFwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIG1hcmdpbjogXCIzcHggMHB4XCIsXG4gICAgICBkaXNwbGF5OiB1cmwgPT09IGhyZWYgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcbiAgICB9O1xuICB9O1xuICBjb25zdCBuYXZJdGVtcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGxpc3QgPSBbXCJob21lXCIsXCJhYm91dFwiLFwiZWR1Y2F0aW9uXCIsXCJwcm9qZWN0c1wiLFwiYXdhcmRzXCJdXG4gICAgICBjb25zdCBpdGVtcyA9IFtdXG4gICAgICBmb3IobGV0IGkgb2YgbGlzdCl7XG4gICAgICAgIGl0ZW1zLnB1c2gobGlzdEl0ZW0oaSkpXG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAge2l0ZW1zfVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKVxuICB9XG4gIGNvbnN0IGxpc3RJdGVtID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdXJsID0gXCIvXCIgKyBuYW1lO1xuICAgIGlmIChuYW1lID09PSBcImhvbWVcIikge1xuICAgICAgdXJsID0gXCIvXCI7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxMaW5rIGhyZWY9e3VybH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUodXJsKX0+XG4gICAgICAgICAgICB7bmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSl9XG4gICAgICAgICAgICA8aHIgc3R5bGU9e2hyU3R5bGUodXJsKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAxNXB4IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgPHRpdGxlPkdHb2xmei5jb208L3RpdGxlPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hdi10aXRsZVwiPkdHb2xmei5jb208L2gyPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXNcIj5cbiAgICAgICAgICB7bmF2SXRlbXMoKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwJSAyJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUEyMzdFO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtaXRlbXMge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\\n/*@ sourceURL=/Users/ggolfz/Desktop/portfolio/components/nav.js */\"));\n}\n\n_s(nav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi5qcz8zMWIyIl0sIm5hbWVzIjpbIm5hdiIsInJvdXRlciIsInVzZVJvdXRlciIsInVybCIsInF1ZXJ5IiwiaWQiLCJyb3V0ZSIsInNwbGl0IiwicGF0aG5hbWUiLCJsaW5rU3R5bGUiLCJocmVmIiwiY29sb3IiLCJoclN0eWxlIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJuYXZJdGVtcyIsImxpc3QiLCJpdGVtcyIsImkiLCJwdXNoIiwibGlzdEl0ZW0iLCJuYW1lIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFDNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxHQUFWOztBQUNBLE1BQUlGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxFQUFqQixFQUFxQjtBQUNuQkYsT0FBRyxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQVo7QUFDRCxHQUZELE1BRU87QUFDTEosT0FBRyxHQUFHRixNQUFNLENBQUNPLFFBQWI7QUFDRDs7QUFDRCxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVU7QUFDMUIsV0FBTztBQUNMQyxXQUFLLEVBQUVSLEdBQUcsS0FBS08sSUFBUixHQUFlLFNBQWYsR0FBMkI7QUFEN0IsS0FBUDtBQUdELEdBSkQ7O0FBS0EsTUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0YsSUFBRCxFQUFVO0FBQ3hCLFdBQU87QUFDTEcsZ0JBQVUsRUFBRSxTQURQO0FBRUxDLFlBQU0sRUFBRSxLQUZIO0FBR0xDLFlBQU0sRUFBRSxNQUhIO0FBSUxDLFlBQU0sRUFBRSxTQUpIO0FBS0xDLGFBQU8sRUFBRWQsR0FBRyxLQUFLTyxJQUFSLEdBQWUsT0FBZixHQUF5QjtBQUw3QixLQUFQO0FBT0QsR0FSRDs7QUFTQSxNQUFNUSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CLFFBQU1DLElBQUksR0FBRyxDQUFDLE1BQUQsRUFBUSxPQUFSLEVBQWdCLFdBQWhCLEVBQTRCLFVBQTVCLEVBQXVDLFFBQXZDLENBQWI7QUFDQSxRQUFNQyxLQUFLLEdBQUcsRUFBZDs7QUFDQSw2QkFBYUQsSUFBYiwyQkFBa0I7QUFBZCxVQUFJRSxDQUFDLFlBQUw7QUFDRkQsV0FBSyxDQUFDRSxJQUFOLENBQVdDLFFBQVEsQ0FBQ0YsQ0FBRCxDQUFuQjtBQUNEOztBQUNELFdBQ0ksTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tELEtBREwsQ0FESjtBQUtILEdBWEQ7O0FBWUEsTUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3pCLFFBQUlyQixHQUFHLEdBQUcsTUFBTXFCLElBQWhCOztBQUNBLFFBQUlBLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CckIsU0FBRyxHQUFHLEdBQU47QUFDRDs7QUFDRCxXQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVBLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQTBCLFdBQUssRUFBRU0sU0FBUyxDQUFDTixHQUFELENBQTFDO0FBQUEsMENBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dxQixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLFdBQVIsS0FBd0JELElBQUksQ0FBQ0UsU0FBTCxDQUFlLENBQWYsQ0FEM0IsRUFFRTtBQUFJLFdBQUssRUFBRWQsT0FBTyxDQUFDVCxHQUFELENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBREYsQ0FERjtBQUFBO0FBQUE7QUFBQSxrekhBREY7QUFvQkQsR0F6QkQ7O0FBMEJBLFNBQ0U7QUFBQSx3Q0FBZSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBRkYsRUFLRTtBQUFBLHdDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLZSxRQUFRLEVBRGIsQ0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyc0hBREY7QUFxQ0Q7O0dBakd1QmxCLEc7VUFDUEUscUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCB1cmwgPSBcIi9cIjtcbiAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xuICAgIHVybCA9IFwiL1wiICsgcm91dGVyLnJvdXRlLnNwbGl0KFwiL1wiKVsxXTtcbiAgfSBlbHNlIHtcbiAgICB1cmwgPSByb3V0ZXIucGF0aG5hbWU7XG4gIH1cbiAgY29uc3QgbGlua1N0eWxlID0gKGhyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IHVybCA9PT0gaHJlZiA/IFwiIzRGQzNGN1wiIDogXCIjRkZGRkZGXCIsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaHJTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tncm91bmQ6IFwiIzRGQzNGN1wiLFxuICAgICAgaGVpZ2h0OiBcIjJweFwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIG1hcmdpbjogXCIzcHggMHB4XCIsXG4gICAgICBkaXNwbGF5OiB1cmwgPT09IGhyZWYgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcbiAgICB9O1xuICB9O1xuICBjb25zdCBuYXZJdGVtcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGxpc3QgPSBbXCJob21lXCIsXCJhYm91dFwiLFwiZWR1Y2F0aW9uXCIsXCJwcm9qZWN0c1wiLFwiYXdhcmRzXCJdXG4gICAgICBjb25zdCBpdGVtcyA9IFtdXG4gICAgICBmb3IobGV0IGkgb2YgbGlzdCl7XG4gICAgICAgIGl0ZW1zLnB1c2gobGlzdEl0ZW0oaSkpXG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAge2l0ZW1zfVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKVxuICB9XG4gIGNvbnN0IGxpc3RJdGVtID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdXJsID0gXCIvXCIgKyBuYW1lO1xuICAgIGlmIChuYW1lID09PSBcImhvbWVcIikge1xuICAgICAgdXJsID0gXCIvXCI7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxMaW5rIGhyZWY9e3VybH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUodXJsKX0+XG4gICAgICAgICAgICB7bmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSl9XG4gICAgICAgICAgICA8aHIgc3R5bGU9e2hyU3R5bGUodXJsKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAxNXB4IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgPHRpdGxlPkdHb2xmei5jb208L3RpdGxlPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hdi10aXRsZVwiPkdHb2xmei5jb208L2gyPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXNcIj5cbiAgICAgICAgICB7bmF2SXRlbXMoKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwJSAyJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUEyMzdFO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtaXRlbXMge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/nav.js\n");

/***/ })

})