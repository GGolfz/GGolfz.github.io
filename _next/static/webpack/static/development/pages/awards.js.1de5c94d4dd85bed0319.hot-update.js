webpackHotUpdate("static/development/pages/awards.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return nav; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ggolfz/Desktop/portfolio/components/nav.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction nav() {\n  _s();\n\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var url = \"/\";\n\n  if (router.query.id) {\n    url = \"/\" + router.route.split(\"/\")[1];\n  } else {\n    url = router.pathname;\n  }\n\n  var linkStyle = function linkStyle(href) {\n    return {\n      color: url === href ? \"red\" : \"black\"\n    };\n  };\n\n  var hrStyle = function hrStyle(href) {\n    return {\n      background: \"red\",\n      height: \"3px\",\n      border: \"none\",\n      display: url === href ? \"block\" : \"none\"\n    };\n  };\n\n  var navItems = function navItems() {\n    var list = [\"home\", \"about\", \"education\", \"projects\", \"awards\"];\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }\n    }, lis);\n  };\n\n  var listItem = function listItem(name) {\n    var url = \"/\" + name;\n\n    if (name === \"home\") {\n      url = \"/\";\n    }\n\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      style: linkStyle(url),\n      className: \"jsx-3333648052\" + \" \" + \"nav-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }\n    }, name[0].toUpperCase() + name.substring(1), __jsx(\"hr\", {\n      style: hrStyle(url),\n      className: \"jsx-3333648052\" + \" \" + \"hrLink\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }\n    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      id: \"3333648052\",\n      __self: _this\n    }, \".nav-item.jsx-3333648052{cursor:pointer;font-size:1.2em !important;margin-right:10px;padding:10px 20px;border:1px solid black;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ29sZnovRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENhLEFBR2dDLGVBQ1ksMkJBQ1Qsa0JBQ0Esa0JBQ0ssdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9nZ29sZnovRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXYoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgdXJsID0gXCIvXCI7XG4gIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcbiAgICB1cmwgPSBcIi9cIiArIHJvdXRlci5yb3V0ZS5zcGxpdChcIi9cIilbMV07XG4gIH0gZWxzZSB7XG4gICAgdXJsID0gcm91dGVyLnBhdGhuYW1lO1xuICB9XG4gIGNvbnN0IGxpbmtTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiB1cmwgPT09IGhyZWYgPyBcInJlZFwiIDogXCJibGFja1wiLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGhyU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kOiBcInJlZFwiLFxuICAgICAgaGVpZ2h0OiBcIjNweFwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIGRpc3BsYXk6IHVybCA9PT0gaHJlZiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IG5hdkl0ZW1zID0gKCkgPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IFtcImhvbWVcIixcImFib3V0XCIsXCJlZHVjYXRpb25cIixcInByb2plY3RzXCIsXCJhd2FyZHNcIl1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIHtsaXN9XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApXG4gIH1cbiAgY29uc3QgbGlzdEl0ZW0gPSAobmFtZSkgPT4ge1xuICAgIGxldCB1cmwgPSBcIi9cIiArIG5hbWU7XG4gICAgaWYgKG5hbWUgPT09IFwiaG9tZVwiKSB7XG4gICAgICB1cmwgPSBcIi9cIjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPExpbmsgaHJlZj17dXJsfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZSh1cmwpfT5cbiAgICAgICAgICAgIHtuYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cmluZygxKX1cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZSh1cmwpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgIDx0aXRsZT5HR29sZnouY29tPC90aXRsZT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYXYtdGl0bGVcIj5HR29sZnouY29tPC9oMj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1zXCI+XG4gICAgICAgIHtsaXN0SXRlbShcImhvbWVcIil9XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvXCIpfT5cbiAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9cIil9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2Fib3V0XCIpfT5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvYWJvdXRcIil9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9lZHVjYXRpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9lZHVjYXRpb25cIil9PlxuICAgICAgICAgICAgRWR1Y2F0aW9uXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvZWR1Y2F0aW9uXCIpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL3Byb2plY3RcIil9PlxuICAgICAgICAgICAgUHJvamVjdFxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKFwiL3Byb2plY3RcIil9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hd2FyZHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9hd2FyZHNcIil9PlxuICAgICAgICAgICAgQXdhcmRzXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvYXdhcmRzXCIpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtaXRlbXMge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\\n/*@ sourceURL=/Users/ggolfz/Desktop/portfolio/components/nav.js */\"));\n  };\n\n  return __jsx(\"div\", {\n    className: \"jsx-1511662679\" + \" \" + \"nav\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-1511662679\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, \"GGolfz.com\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-1511662679\" + \" \" + \"nav-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, \"GGolfz.com\")), __jsx(\"div\", {\n    className: \"jsx-1511662679\" + \" \" + \"nav-items\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, listItem(\"home\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/\"),\n    className: \"jsx-1511662679\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, \"Home\", __jsx(\"hr\", {\n    style: hrStyle(\"/\"),\n    className: \"jsx-1511662679\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/about\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/about\"),\n    className: \"jsx-1511662679\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, \"About\", __jsx(\"hr\", {\n    style: hrStyle(\"/about\"),\n    className: \"jsx-1511662679\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/education\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/education\"),\n    className: \"jsx-1511662679\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, \"Education\", __jsx(\"hr\", {\n    style: hrStyle(\"/education\"),\n    className: \"jsx-1511662679\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/project\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/project\"),\n    className: \"jsx-1511662679\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, \"Project\", __jsx(\"hr\", {\n    style: hrStyle(\"/project\"),\n    className: \"jsx-1511662679\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/awards\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/awards\"),\n    className: \"jsx-1511662679\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }, \"Awards\", __jsx(\"hr\", {\n    style: hrStyle(\"/awards\"),\n    className: \"jsx-1511662679\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"4215426270\",\n    __self: this\n  }, \".nav.jsx-1511662679{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:2%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav-title.jsx-1511662679{margin-block-start:0;margin-block-end:0;cursor:pointer;}.nav-items.jsx-1511662679{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ29sZnovRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdTLEFBRzBCLEFBS1EsQUFLSixpQkFDSixJQUxNLG1CQUNKLGVBQ2pCLG1CQVBhLFdBQ1EsTUFVckIsdUZBVEEiLCJmaWxlIjoiL1VzZXJzL2dnb2xmei9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCB1cmwgPSBcIi9cIjtcbiAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xuICAgIHVybCA9IFwiL1wiICsgcm91dGVyLnJvdXRlLnNwbGl0KFwiL1wiKVsxXTtcbiAgfSBlbHNlIHtcbiAgICB1cmwgPSByb3V0ZXIucGF0aG5hbWU7XG4gIH1cbiAgY29uc3QgbGlua1N0eWxlID0gKGhyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IHVybCA9PT0gaHJlZiA/IFwicmVkXCIgOiBcImJsYWNrXCIsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaHJTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tncm91bmQ6IFwicmVkXCIsXG4gICAgICBoZWlnaHQ6IFwiM3B4XCIsXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgZGlzcGxheTogdXJsID09PSBocmVmID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgbmF2SXRlbXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gW1wiaG9tZVwiLFwiYWJvdXRcIixcImVkdWNhdGlvblwiLFwicHJvamVjdHNcIixcImF3YXJkc1wiXVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAge2xpc31cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgIClcbiAgfVxuICBjb25zdCBsaXN0SXRlbSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHVybCA9IFwiL1wiICsgbmFtZTtcbiAgICBpZiAobmFtZSA9PT0gXCJob21lXCIpIHtcbiAgICAgIHVybCA9IFwiL1wiO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TGluayBocmVmPXt1cmx9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKHVybCl9PlxuICAgICAgICAgICAge25hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpfVxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKHVybCl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgPHRpdGxlPkdHb2xmei5jb208L3RpdGxlPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hdi10aXRsZVwiPkdHb2xmei5jb208L2gyPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXNcIj5cbiAgICAgICAge2xpc3RJdGVtKFwiaG9tZVwiKX1cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9cIil9PlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKFwiL1wiKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvYWJvdXRcIil9PlxuICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9hYm91dFwiKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2VkdWNhdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2VkdWNhdGlvblwiKX0+XG4gICAgICAgICAgICBFZHVjYXRpb25cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9lZHVjYXRpb25cIil9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvcHJvamVjdFwiKX0+XG4gICAgICAgICAgICBQcm9qZWN0XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvcHJvamVjdFwiKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2F3YXJkc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2F3YXJkc1wiKX0+XG4gICAgICAgICAgICBBd2FyZHNcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9hd2FyZHNcIil9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1pdGVtcyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\\n/*@ sourceURL=/Users/ggolfz/Desktop/portfolio/components/nav.js */\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1789540352\",\n    __self: this\n  }, \"body{margin:0px;padding:0px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ29sZnovRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0h5QixBQUdzQixXQUNDLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2dnb2xmei9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCB1cmwgPSBcIi9cIjtcbiAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xuICAgIHVybCA9IFwiL1wiICsgcm91dGVyLnJvdXRlLnNwbGl0KFwiL1wiKVsxXTtcbiAgfSBlbHNlIHtcbiAgICB1cmwgPSByb3V0ZXIucGF0aG5hbWU7XG4gIH1cbiAgY29uc3QgbGlua1N0eWxlID0gKGhyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IHVybCA9PT0gaHJlZiA/IFwicmVkXCIgOiBcImJsYWNrXCIsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaHJTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tncm91bmQ6IFwicmVkXCIsXG4gICAgICBoZWlnaHQ6IFwiM3B4XCIsXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgZGlzcGxheTogdXJsID09PSBocmVmID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgbmF2SXRlbXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gW1wiaG9tZVwiLFwiYWJvdXRcIixcImVkdWNhdGlvblwiLFwicHJvamVjdHNcIixcImF3YXJkc1wiXVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAge2xpc31cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgIClcbiAgfVxuICBjb25zdCBsaXN0SXRlbSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHVybCA9IFwiL1wiICsgbmFtZTtcbiAgICBpZiAobmFtZSA9PT0gXCJob21lXCIpIHtcbiAgICAgIHVybCA9IFwiL1wiO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TGluayBocmVmPXt1cmx9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKHVybCl9PlxuICAgICAgICAgICAge25hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpfVxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKHVybCl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgPHRpdGxlPkdHb2xmei5jb208L3RpdGxlPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hdi10aXRsZVwiPkdHb2xmei5jb208L2gyPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXNcIj5cbiAgICAgICAge2xpc3RJdGVtKFwiaG9tZVwiKX1cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9cIil9PlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKFwiL1wiKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvYWJvdXRcIil9PlxuICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9hYm91dFwiKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2VkdWNhdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2VkdWNhdGlvblwiKX0+XG4gICAgICAgICAgICBFZHVjYXRpb25cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9lZHVjYXRpb25cIil9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvcHJvamVjdFwiKX0+XG4gICAgICAgICAgICBQcm9qZWN0XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvcHJvamVjdFwiKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2F3YXJkc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2F3YXJkc1wiKX0+XG4gICAgICAgICAgICBBd2FyZHNcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9hd2FyZHNcIil9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1pdGVtcyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\\n/*@ sourceURL=/Users/ggolfz/Desktop/portfolio/components/nav.js */\"));\n}\n\n_s(nav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi5qcz8zMWIyIl0sIm5hbWVzIjpbIm5hdiIsInJvdXRlciIsInVzZVJvdXRlciIsInVybCIsInF1ZXJ5IiwiaWQiLCJyb3V0ZSIsInNwbGl0IiwicGF0aG5hbWUiLCJsaW5rU3R5bGUiLCJocmVmIiwiY29sb3IiLCJoclN0eWxlIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImJvcmRlciIsImRpc3BsYXkiLCJuYXZJdGVtcyIsImxpc3QiLCJsaXMiLCJsaXN0SXRlbSIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUFBOztBQUM1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLEdBQVY7O0FBQ0EsTUFBSUYsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEVBQWpCLEVBQXFCO0FBQ25CRixPQUFHLEdBQUcsTUFBTUYsTUFBTSxDQUFDSyxLQUFQLENBQWFDLEtBQWIsQ0FBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsQ0FBWjtBQUNELEdBRkQsTUFFTztBQUNMSixPQUFHLEdBQUdGLE1BQU0sQ0FBQ08sUUFBYjtBQUNEOztBQUNELE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUMxQixXQUFPO0FBQ0xDLFdBQUssRUFBRVIsR0FBRyxLQUFLTyxJQUFSLEdBQWUsS0FBZixHQUF1QjtBQUR6QixLQUFQO0FBR0QsR0FKRDs7QUFLQSxNQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDRixJQUFELEVBQVU7QUFDeEIsV0FBTztBQUNMRyxnQkFBVSxFQUFFLEtBRFA7QUFFTEMsWUFBTSxFQUFFLEtBRkg7QUFHTEMsWUFBTSxFQUFFLE1BSEg7QUFJTEMsYUFBTyxFQUFFYixHQUFHLEtBQUtPLElBQVIsR0FBZSxP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LFNBQVMsQ0FBQyxZQUFELENBQTFDO0FBQUEsd0NBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUVFO0FBQXVCLFNBQUssRUFBRUcsT0FBTyxDQUFDLFlBQUQsQ0FBckM7QUFBQSx3Q0FBYyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBZEYsRUFvQkUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUEwQixTQUFLLEVBQUVILFNBQVMsQ0FBQyxVQUFELENBQTFDO0FBQUEsd0NBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUVFO0FBQXVCLFNBQUssRUFBRUcsT0FBTyxDQUFDLFVBQUQsQ0FBckM7QUFBQSx3Q0FBYyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBcEJGLEVBMEJFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBMEIsU0FBSyxFQUFFSCxTQUFTLENBQUMsU0FBRCxDQUExQztBQUFBLHdDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVFO0FBQXVCLFNBQUssRUFBRUcsT0FBTyxDQUFDLFNBQUQsQ0FBckM7QUFBQSx3Q0FBYyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBMUJGLENBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdS9KQURGO0FBaUVEOztHQXpIdUJaLEc7VUFDUEUscUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCB1cmwgPSBcIi9cIjtcbiAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xuICAgIHVybCA9IFwiL1wiICsgcm91dGVyLnJvdXRlLnNwbGl0KFwiL1wiKVsxXTtcbiAgfSBlbHNlIHtcbiAgICB1cmwgPSByb3V0ZXIucGF0aG5hbWU7XG4gIH1cbiAgY29uc3QgbGlua1N0eWxlID0gKGhyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IHVybCA9PT0gaHJlZiA/IFwicmVkXCIgOiBcImJsYWNrXCIsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaHJTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tncm91bmQ6IFwicmVkXCIsXG4gICAgICBoZWlnaHQ6IFwiM3B4XCIsXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgZGlzcGxheTogdXJsID09PSBocmVmID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgbmF2SXRlbXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gW1wiaG9tZVwiLFwiYWJvdXRcIixcImVkdWNhdGlvblwiLFwicHJvamVjdHNcIixcImF3YXJkc1wiXVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAge2xpc31cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgIClcbiAgfVxuICBjb25zdCBsaXN0SXRlbSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHVybCA9IFwiL1wiICsgbmFtZTtcbiAgICBpZiAobmFtZSA9PT0gXCJob21lXCIpIHtcbiAgICAgIHVybCA9IFwiL1wiO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TGluayBocmVmPXt1cmx9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKHVybCl9PlxuICAgICAgICAgICAge25hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpfVxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKHVybCl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgPHRpdGxlPkdHb2xmei5jb208L3RpdGxlPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hdi10aXRsZVwiPkdHb2xmei5jb208L2gyPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXNcIj5cbiAgICAgICAge2xpc3RJdGVtKFwiaG9tZVwiKX1cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9cIil9PlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKFwiL1wiKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvYWJvdXRcIil9PlxuICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9hYm91dFwiKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2VkdWNhdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2VkdWNhdGlvblwiKX0+XG4gICAgICAgICAgICBFZHVjYXRpb25cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9lZHVjYXRpb25cIil9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvcHJvamVjdFwiKX0+XG4gICAgICAgICAgICBQcm9qZWN0XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvcHJvamVjdFwiKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2F3YXJkc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2F3YXJkc1wiKX0+XG4gICAgICAgICAgICBBd2FyZHNcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9hd2FyZHNcIil9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1pdGVtcyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav.js\n");

/***/ })

})