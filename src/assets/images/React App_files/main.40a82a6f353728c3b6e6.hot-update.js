webpackHotUpdate("main",{

/***/ "./src/components/quizzesComponent.jsx":
/*!*********************************************!*\
  !*** ./src/components/quizzesComponent.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_ahmed_Work_Work_ColigoTech_Frontend_Challenge_challenge_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _media_ahmed_Work_Work_ColigoTech_Frontend_Challenge_challenge_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _media_ahmed_Work_Work_ColigoTech_Frontend_Challenge_challenge_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _media_ahmed_Work_Work_ColigoTech_Frontend_Challenge_challenge_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _media_ahmed_Work_Work_ColigoTech_Frontend_Challenge_challenge_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_fakeQuizService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/fakeQuizService */ "./src/services/fakeQuizService.js");





var _jsxFileName = "/media/ahmed/Work/Work/ColigoTech/Frontend Challenge/challenge/src/components/quizzesComponent.jsx";



var QuizComponent =
/*#__PURE__*/
function (_Component) {
  Object(_media_ahmed_Work_Work_ColigoTech_Frontend_Challenge_challenge_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QuizComponent, _Component);

  function QuizComponent() {
    var _getPrototypeOf2;

    var _this;

    Object(_media_ahmed_Work_Work_ColigoTech_Frontend_Challenge_challenge_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuizComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_media_ahmed_Work_Work_ColigoTech_Frontend_Challenge_challenge_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_media_ahmed_Work_Work_ColigoTech_Frontend_Challenge_challenge_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QuizComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      quizzes: []
    };
    return _this;
  }

  Object(_media_ahmed_Work_Work_ColigoTech_Frontend_Challenge_challenge_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuizComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var quizzes = _services_fakeQuizService__WEBPACK_IMPORTED_MODULE_6__["default"].getQuizzes();
      this.setState({
        quizzes: quizzes
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Quizzes"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Hllo"));
    }
  }]);

  return QuizComponent;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QuizComponent);

/***/ })

})
//# sourceMappingURL=main.40a82a6f353728c3b6e6.hot-update.js.map