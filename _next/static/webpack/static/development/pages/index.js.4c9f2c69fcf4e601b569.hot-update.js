webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return nav; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ggolfz/Desktop/portfolio/components/nav.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nfunction nav() {\n  _s();\n\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var url = \"/\";\n\n  if (router.query.id) {\n    url = \"/\" + router.route.split('/')[1];\n  } else {\n    url = router.pathname;\n  }\n\n  var linkStyle = function linkStyle(href) {\n    return {\n      color: url === href ? \"red\" : \"black\"\n    };\n  };\n\n  var hrStyle = function hrStyle(href) {\n    return {\n      background: \"red\",\n      height: \"3px\",\n      border: \"none\",\n      display: url === href ? \"block\" : \"none\"\n    };\n  };\n\n  var listItem = function listItem(name) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      className: \"nav-item\",\n      style: linkStyle(\"/\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }, name[0].toUpperCase() + name.substring(), __jsx(\"hr\", {\n      className: \"hrLink\",\n      style: hrStyle(\"/\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }\n    })));\n  };\n\n  return __jsx(\"div\", {\n    className: \"jsx-2112161316\" + \" \" + \"nav\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-2112161316\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \"GGolfz.com\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-2112161316\" + \" \" + \"nav-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, \"GGolfz.com\")), __jsx(\"div\", {\n    className: \"jsx-2112161316\" + \" \" + \"nav-items\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/\"),\n    className: \"jsx-2112161316\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, \"Home\", __jsx(\"hr\", {\n    style: hrStyle(\"/\"),\n    className: \"jsx-2112161316\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/about\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/about\"),\n    className: \"jsx-2112161316\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, \"About\", __jsx(\"hr\", {\n    style: hrStyle(\"/about\"),\n    className: \"jsx-2112161316\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/education\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/education\"),\n    className: \"jsx-2112161316\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"Education\", __jsx(\"hr\", {\n    style: hrStyle(\"/education\"),\n    className: \"jsx-2112161316\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/project\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/project\"),\n    className: \"jsx-2112161316\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, \"Project\", __jsx(\"hr\", {\n    style: hrStyle(\"/project\"),\n    className: \"jsx-2112161316\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/awards\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/awards\"),\n    className: \"jsx-2112161316\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, \"Awards\", __jsx(\"hr\", {\n    style: hrStyle(\"/awards\"),\n    className: \"jsx-2112161316\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3105079949\",\n    __self: this\n  }, \".nav.jsx-2112161316{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:2%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav-title.jsx-2112161316{margin-block-start:0;margin-block-end:0;cursor:pointer;}.nav-items.jsx-2112161316{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.nav-item.jsx-2112161316{cursor:pointer;font-size:1.2em !important;margin-right:10px;padding:10px 20px;border:1px solid black;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ29sZnovRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVTLEFBRzBCLEFBS1EsQUFLSixBQUlGLGVBQ1ksRUFKZCxJQUxNLG1CQUNKLEVBU0csYUFScEIsS0FTb0IsY0FoQlAsSUFpQlksT0FoQkosTUFVckIsVUFPQSw2RUFoQkEiLCJmaWxlIjoiL1VzZXJzL2dnb2xmei9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHVybCA9XCIvXCJcbiAgaWYocm91dGVyLnF1ZXJ5LmlkKXtcbiAgICB1cmwgPSBcIi9cIityb3V0ZXIucm91dGUuc3BsaXQoJy8nKVsxXVxuICB9XG4gIGVsc2Uge1xuICAgIHVybCA9IHJvdXRlci5wYXRobmFtZVxuICB9XG4gIGNvbnN0IGxpbmtTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiB1cmwgPT09IGhyZWYgPyBcInJlZFwiIDogXCJibGFja1wiLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGhyU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIixcbiAgICAgICAgaGVpZ2h0OlwiM3B4XCIsXG4gICAgICAgIGJvcmRlcjpcIm5vbmVcIixcbiAgICAgICAgZGlzcGxheTogdXJsID09PSBocmVmID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgICB9XG4gIH1cbiAgY29uc3QgbGlzdEl0ZW0gPSAobmFtZSk9PntcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvXCIpfT5cbiAgICAgICAgICB7bmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoKSB9XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKFwiL1wiKX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICA8dGl0bGU+R0dvbGZ6LmNvbTwvdGl0bGU+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmF2LXRpdGxlXCI+R0dvbGZ6LmNvbTwvaDI+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtc1wiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL1wiKX0+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvXCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2Fib3V0XCIpfT5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvYWJvdXRcIil9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2VkdWNhdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2VkdWNhdGlvblwiKX0+XG4gICAgICAgICAgICBFZHVjYXRpb25cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9lZHVjYXRpb25cIil9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9wcm9qZWN0XCIpfT5cbiAgICAgICAgICAgIFByb2plY3RcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9wcm9qZWN0XCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hd2FyZHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9hd2FyZHNcIil9PlxuICAgICAgICAgICAgQXdhcmRzXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvYXdhcmRzXCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1pdGVtcyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/ggolfz/Desktop/portfolio/components/nav.js */\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1789540352\",\n    __self: this\n  }, \"body{margin:0px;padding:0px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ29sZnovRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0d5QixBQUdzQixXQUNDLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2dnb2xmei9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHVybCA9XCIvXCJcbiAgaWYocm91dGVyLnF1ZXJ5LmlkKXtcbiAgICB1cmwgPSBcIi9cIityb3V0ZXIucm91dGUuc3BsaXQoJy8nKVsxXVxuICB9XG4gIGVsc2Uge1xuICAgIHVybCA9IHJvdXRlci5wYXRobmFtZVxuICB9XG4gIGNvbnN0IGxpbmtTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiB1cmwgPT09IGhyZWYgPyBcInJlZFwiIDogXCJibGFja1wiLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGhyU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIixcbiAgICAgICAgaGVpZ2h0OlwiM3B4XCIsXG4gICAgICAgIGJvcmRlcjpcIm5vbmVcIixcbiAgICAgICAgZGlzcGxheTogdXJsID09PSBocmVmID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgICB9XG4gIH1cbiAgY29uc3QgbGlzdEl0ZW0gPSAobmFtZSk9PntcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvXCIpfT5cbiAgICAgICAgICB7bmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoKSB9XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKFwiL1wiKX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICA8dGl0bGU+R0dvbGZ6LmNvbTwvdGl0bGU+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmF2LXRpdGxlXCI+R0dvbGZ6LmNvbTwvaDI+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtc1wiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL1wiKX0+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvXCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2Fib3V0XCIpfT5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvYWJvdXRcIil9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2VkdWNhdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2VkdWNhdGlvblwiKX0+XG4gICAgICAgICAgICBFZHVjYXRpb25cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9lZHVjYXRpb25cIil9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9wcm9qZWN0XCIpfT5cbiAgICAgICAgICAgIFByb2plY3RcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9wcm9qZWN0XCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hd2FyZHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9hd2FyZHNcIil9PlxuICAgICAgICAgICAgQXdhcmRzXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvYXdhcmRzXCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1pdGVtcyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/ggolfz/Desktop/portfolio/components/nav.js */\"));\n}\n\n_s(nav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi5qcz8zMWIyIl0sIm5hbWVzIjpbIm5hdiIsInJvdXRlciIsInVzZVJvdXRlciIsInVybCIsInF1ZXJ5IiwiaWQiLCJyb3V0ZSIsInNwbGl0IiwicGF0aG5hbWUiLCJsaW5rU3R5bGUiLCJocmVmIiwiY29sb3IiLCJoclN0eWxlIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImJvcmRlciIsImRpc3BsYXkiLCJsaXN0SXRlbSIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDZSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFDNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLEdBQUcsR0FBRSxHQUFUOztBQUNBLE1BQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxFQUFoQixFQUFtQjtBQUNqQkYsT0FBRyxHQUFHLE1BQUlGLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQVY7QUFDRCxHQUZELE1BR0s7QUFDSEosT0FBRyxHQUFHRixNQUFNLENBQUNPLFFBQWI7QUFDRDs7QUFDRCxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVU7QUFDMUIsV0FBTztBQUNMQyxXQUFLLEVBQUVSLEdBQUcsS0FBS08sSUFBUixHQUFlLEtBQWYsR0FBdUI7QUFEekIsS0FBUDtBQUdELEdBSkQ7O0FBS0EsTUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0YsSUFBRCxFQUFVO0FBQ3RCLFdBQU87QUFDTEcsZ0JBQVUsRUFBRSxLQURQO0FBRUxDLFlBQU0sRUFBQyxLQUZGO0FBR0xDLFlBQU0sRUFBQyxNQUhGO0FBSUxDLGFBQU8sRUFBRWIsR0FBRyxLQUFLTyxJQUFSLEdBQWUsT0FBZixHQUF5QjtBQUo3QixLQUFQO0FBTUgsR0FQ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O0FBQUEsSUFGRixDQURGLENBbkJGLEVBeUJFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBMEIsU0FBSyxFQUFFSCxTQUFTLENBQUMsU0FBRCxDQUExQztBQUFBLHdDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVFO0FBQXVCLFNBQUssRUFBRUcsT0FBTyxDQUFDLFNBQUQsQ0FBckM7QUFBQSx3Q0FBYyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBekJGLENBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsKzFJQURGO0FBdUVEOztHQXhHdUJaLEc7VUFDUEUscUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHVybCA9XCIvXCJcbiAgaWYocm91dGVyLnF1ZXJ5LmlkKXtcbiAgICB1cmwgPSBcIi9cIityb3V0ZXIucm91dGUuc3BsaXQoJy8nKVsxXVxuICB9XG4gIGVsc2Uge1xuICAgIHVybCA9IHJvdXRlci5wYXRobmFtZVxuICB9XG4gIGNvbnN0IGxpbmtTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiB1cmwgPT09IGhyZWYgPyBcInJlZFwiIDogXCJibGFja1wiLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGhyU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIixcbiAgICAgICAgaGVpZ2h0OlwiM3B4XCIsXG4gICAgICAgIGJvcmRlcjpcIm5vbmVcIixcbiAgICAgICAgZGlzcGxheTogdXJsID09PSBocmVmID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgICB9XG4gIH1cbiAgY29uc3QgbGlzdEl0ZW0gPSAobmFtZSk9PntcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvXCIpfT5cbiAgICAgICAgICB7bmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoKSB9XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKFwiL1wiKX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICA8dGl0bGU+R0dvbGZ6LmNvbTwvdGl0bGU+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmF2LXRpdGxlXCI+R0dvbGZ6LmNvbTwvaDI+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtc1wiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL1wiKX0+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvXCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2Fib3V0XCIpfT5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvYWJvdXRcIil9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2VkdWNhdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2VkdWNhdGlvblwiKX0+XG4gICAgICAgICAgICBFZHVjYXRpb25cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9lZHVjYXRpb25cIil9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9wcm9qZWN0XCIpfT5cbiAgICAgICAgICAgIFByb2plY3RcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9wcm9qZWN0XCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hd2FyZHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9hd2FyZHNcIil9PlxuICAgICAgICAgICAgQXdhcmRzXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvYXdhcmRzXCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1pdGVtcyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav.js\n");

/***/ })

})