webpackHotUpdate("static/development/pages/awards/[id].js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return nav; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ggolfz/Desktop/portfolio/components/nav.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nfunction nav() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var url = \"/\";\n\n  if (router.query.id) {\n    url = \"/\" + router.route.split('/')[1];\n  } else {\n    url = router.pathname;\n  }\n\n  var linkStyle = function linkStyle(href) {\n    return {\n      color: url === href ? \"red\" : \"black\"\n    };\n  };\n\n  var hrStyle = function hrStyle(href) {\n    return {\n      background: \"red\",\n      height: \"3px\",\n      border: \"none\",\n      display: url === href ? \"block\" : \"none\"\n    };\n  };\n\n  return __jsx(\"div\", {\n    className: \"jsx-3431801033\" + \" \" + \"nav\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-3431801033\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, \"GGolfz.com\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-3431801033\" + \" \" + \"nav-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"GGolfz.com\")), __jsx(\"div\", {\n    className: \"jsx-3431801033\" + \" \" + \"nav-items\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/\"),\n    className: \"jsx-3431801033\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, \"Home\", __jsx(\"hr\", {\n    style: hrStyle(\"/\"),\n    className: \"jsx-3431801033\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/about\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/about\"),\n    className: \"jsx-3431801033\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, \"About\", __jsx(\"hr\", {\n    style: hrStyle(\"/about\"),\n    className: \"jsx-3431801033\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/education\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/education\"),\n    className: \"jsx-3431801033\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, \"Education\", __jsx(\"hr\", {\n    style: hrStyle(\"/education\"),\n    className: \"jsx-3431801033\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/project\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/project\"),\n    className: \"jsx-3431801033\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, \"Project\", __jsx(\"hr\", {\n    style: hrStyle(\"/project\"),\n    className: \"jsx-3431801033\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/awards\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: linkStyle(\"/awards\"),\n    className: \"jsx-3431801033\" + \" \" + \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, \"Awards\", __jsx(\"hr\", {\n    style: hrStyle(\"/awards\"),\n    className: \"jsx-3431801033\" + \" \" + \"hrLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"129754080\",\n    __self: this\n  }, \".nav.jsx-3431801033{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:2%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav-title.jsx-3431801033{margin-block-start:0;margin-block-end:0;cursor:pointer;}.nav-items.jsx-3431801033{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.nav-item.jsx-3431801033{cursor:pointer;font-size:1.2em !important;margin-right:10px;padding:10px 20px;border:1px solid black;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ29sZnovRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RTLEFBRzBCLEFBS1EsQUFLSixBQUlGLGVBQ1ksRUFKZCxJQUxNLG1CQUNKLEVBU0csYUFScEIsS0FTb0IsY0FoQlAsSUFpQlksT0FoQkosTUFVckIsVUFPQSw2RUFoQkEiLCJmaWxlIjoiL1VzZXJzL2dnb2xmei9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHVybCA9XCIvXCJcbiAgaWYocm91dGVyLnF1ZXJ5LmlkKXtcbiAgICB1cmwgPSBcIi9cIityb3V0ZXIucm91dGUuc3BsaXQoJy8nKVsxXVxuICB9XG4gIGVsc2Uge1xuICAgIHVybCA9IHJvdXRlci5wYXRobmFtZVxuICB9XG4gIGNvbnN0IGxpbmtTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiB1cmwgPT09IGhyZWYgPyBcInJlZFwiIDogXCJibGFja1wiLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGhyU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIixcbiAgICAgICAgaGVpZ2h0OlwiM3B4XCIsXG4gICAgICAgIGJvcmRlcjpcIm5vbmVcIixcbiAgICAgICAgZGlzcGxheTogdXJsID09PSBocmVmID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgPHRpdGxlPkdHb2xmei5jb208L3RpdGxlPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hdi10aXRsZVwiPkdHb2xmei5jb208L2gyPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXNcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9cIil9PlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKFwiL1wiKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9hYm91dFwiKX0+XG4gICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKFwiL2Fib3V0XCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9lZHVjYXRpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9lZHVjYXRpb25cIil9PlxuICAgICAgICAgICAgRWR1Y2F0aW9uXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvZWR1Y2F0aW9uXCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvcHJvamVjdFwiKX0+XG4gICAgICAgICAgICBQcm9qZWN0XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvcHJvamVjdFwiKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYXdhcmRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvYXdhcmRzXCIpfT5cbiAgICAgICAgICAgIEF3YXJkc1xuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKFwiL2F3YXJkc1wiKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtaXRlbXMge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ockxpbmsgOmhvdmVye1xuICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/ggolfz/Desktop/portfolio/components/nav.js */\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1789540352\",\n    __self: this\n  }, \"body{margin:0px;padding:0px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ29sZnovRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEZ5QixBQUdzQixXQUNDLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2dnb2xmei9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHVybCA9XCIvXCJcbiAgaWYocm91dGVyLnF1ZXJ5LmlkKXtcbiAgICB1cmwgPSBcIi9cIityb3V0ZXIucm91dGUuc3BsaXQoJy8nKVsxXVxuICB9XG4gIGVsc2Uge1xuICAgIHVybCA9IHJvdXRlci5wYXRobmFtZVxuICB9XG4gIGNvbnN0IGxpbmtTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiB1cmwgPT09IGhyZWYgPyBcInJlZFwiIDogXCJibGFja1wiLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IGhyU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIixcbiAgICAgICAgaGVpZ2h0OlwiM3B4XCIsXG4gICAgICAgIGJvcmRlcjpcIm5vbmVcIixcbiAgICAgICAgZGlzcGxheTogdXJsID09PSBocmVmID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgPHRpdGxlPkdHb2xmei5jb208L3RpdGxlPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hdi10aXRsZVwiPkdHb2xmei5jb208L2gyPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXNcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9cIil9PlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKFwiL1wiKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9hYm91dFwiKX0+XG4gICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKFwiL2Fib3V0XCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9lZHVjYXRpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9lZHVjYXRpb25cIil9PlxuICAgICAgICAgICAgRWR1Y2F0aW9uXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvZWR1Y2F0aW9uXCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvcHJvamVjdFwiKX0+XG4gICAgICAgICAgICBQcm9qZWN0XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvcHJvamVjdFwiKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYXdhcmRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHN0eWxlPXtsaW5rU3R5bGUoXCIvYXdhcmRzXCIpfT5cbiAgICAgICAgICAgIEF3YXJkc1xuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyTGlua1wiIHN0eWxlPXtoclN0eWxlKFwiL2F3YXJkc1wiKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtaXRlbXMge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ockxpbmsgOmhvdmVye1xuICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/ggolfz/Desktop/portfolio/components/nav.js */\"));\n}\n\n_s(nav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi5qcz8zMWIyIl0sIm5hbWVzIjpbIm5hdiIsInJvdXRlciIsInVzZVJvdXRlciIsInVybCIsInF1ZXJ5IiwiaWQiLCJyb3V0ZSIsInNwbGl0IiwicGF0aG5hbWUiLCJsaW5rU3R5bGUiLCJocmVmIiwiY29sb3IiLCJoclN0eWxlIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImJvcmRlciIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2UsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQzVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxHQUFHLEdBQUUsR0FBVDs7QUFDQSxNQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsRUFBaEIsRUFBbUI7QUFDakJGLE9BQUcsR0FBRyxNQUFJRixNQUFNLENBQUNLLEtBQVAsQ0FBYUMsS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUFWO0FBQ0QsR0FGRCxNQUdLO0FBQ0hKLE9BQUcsR0FBR0YsTUFBTSxDQUFDTyxRQUFiO0FBQ0Q7O0FBQ0QsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0FBQzFCLFdBQU87QUFDTEMsV0FBSyxFQUFFUixHQUFHLEtBQUtPLElBQVIsR0FBZSxLQUFmLEdBQXVCO0FBRHpCLEtBQVA7QUFHRCxHQUpEOztBQUtBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNGLElBQUQsRUFBVTtBQUN0QixXQUFPO0FBQ0xHLGdCQUFVLEVBQUUsS0FEUDtBQUVMQyxZQUFNLEVBQUMsS0FGRjtBQUdMQyxZQUFNLEVBQUMsTUFIRjtBQUlMQyxhQUFPLEVBQUViLEdBQUcsS0FBS08sSUFBUixHQUFlLE9BQWYsR0FBeUI7QUFKN0IsS0FBUDtBQU1ILEdBUEQ7O0FBUUEsU0FDRTtBQUFBLHdDQUFlLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBYyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FGRixFQUtFO0FBQUEsd0NBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUEwQixTQUFLLEVBQUVELFNBQVMsQ0FBQyxHQUFELENBQTFDO0FBQUEsd0NBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUU7QUFBdUIsU0FBSyxFQUFFRyxPQUFPLENBQUMsR0FBRCxDQUFyQztBQUFBLHdDQUFjLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FERixFQU9FLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBMEIsU0FBSyxFQUFFSCxTQUFTLENBQUMsUUFBRCxDQUExQztBQUFBLHdDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUVFO0FBQXVCLFNBQUssRUFBRUcsT0FBTyxDQUFDLFFBQUQsQ0FBckM7QUFBQSx3Q0FBYyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBUEYsRUFhRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQTBCLFNBQUssRUFBRUgsU0FBUyxDQUFDLFlBQUQsQ0FBMUM7QUFBQSx3Q0FBZSxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRUU7QUFBdUIsU0FBSyxFQUFFRyxPQUFPLENBQUMsWUFBRCxDQUFyQztBQUFBLHdDQUFjLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FiRixFQW1CRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQTBCLFNBQUssRUFBRUgsU0FBUyxDQUFDLFVBQUQsQ0FBMUM7QUFBQSx3Q0FBZSxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRUU7QUFBdUIsU0FBSyxFQUFFRyxPQUFPLENBQUMsVUFBRCxDQUFyQztBQUFBLHdDQUFjLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FuQkYsRUF5QkUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUEwQixTQUFLLEVBQUVILFNBQVMsQ0FBQyxTQUFELENBQTFDO0FBQUEsd0NBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUU7QUFBdUIsU0FBSyxFQUFFRyxPQUFPLENBQUMsU0FBRCxDQUFyQztBQUFBLHdDQUFjLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0F6QkYsQ0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyaElBREY7QUEwRUQ7O0dBaEd1QlosRztVQUNQRSxxRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXYoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgdXJsID1cIi9cIlxuICBpZihyb3V0ZXIucXVlcnkuaWQpe1xuICAgIHVybCA9IFwiL1wiK3JvdXRlci5yb3V0ZS5zcGxpdCgnLycpWzFdXG4gIH1cbiAgZWxzZSB7XG4gICAgdXJsID0gcm91dGVyLnBhdGhuYW1lXG4gIH1cbiAgY29uc3QgbGlua1N0eWxlID0gKGhyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IHVybCA9PT0gaHJlZiA/IFwicmVkXCIgOiBcImJsYWNrXCIsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaHJTdHlsZSA9IChocmVmKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBcInJlZFwiLFxuICAgICAgICBoZWlnaHQ6XCIzcHhcIixcbiAgICAgICAgYm9yZGVyOlwibm9uZVwiLFxuICAgICAgICBkaXNwbGF5OiB1cmwgPT09IGhyZWYgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICA8dGl0bGU+R0dvbGZ6LmNvbTwvdGl0bGU+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmF2LXRpdGxlXCI+R0dvbGZ6LmNvbTwvaDI+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtc1wiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL1wiKX0+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvXCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2Fib3V0XCIpfT5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvYWJvdXRcIil9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2VkdWNhdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBzdHlsZT17bGlua1N0eWxlKFwiL2VkdWNhdGlvblwiKX0+XG4gICAgICAgICAgICBFZHVjYXRpb25cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9lZHVjYXRpb25cIil9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9wcm9qZWN0XCIpfT5cbiAgICAgICAgICAgIFByb2plY3RcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockxpbmtcIiBzdHlsZT17aHJTdHlsZShcIi9wcm9qZWN0XCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hd2FyZHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgc3R5bGU9e2xpbmtTdHlsZShcIi9hd2FyZHNcIil9PlxuICAgICAgICAgICAgQXdhcmRzXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJMaW5rXCIgc3R5bGU9e2hyU3R5bGUoXCIvYXdhcmRzXCIpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1pdGVtcyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhyTGluayA6aG92ZXJ7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/nav.js\n");

/***/ })

})