"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gallery/[id]",{

/***/ "./src/components/gallery/art/ArtCompact.tsx":
/*!***************************************************!*\
  !*** ./src/components/gallery/art/ArtCompact.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArtCompact\": function() { return /* binding */ ArtCompact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// <article className=\"bg-white absolute desktop:px-10 desktop:py-5 desktop:top-0 desktop:left-1/2 desktop:right-0; flex flex-col\">\nconst ArtCompact = (param)=>{\n    let { artData  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"bg-white absolute tablet:left-2/5 tablet:px-10 tablet:py-5 tablet:top-0 flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-6xl font-bold\",\n                children: artData.name\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/art/ArtCompact.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"py-10\",\n                children: artData.artist.name\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/art/ArtCompact.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/art/ArtCompact.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ArtCompact;\n\nvar _c;\n$RefreshReg$(_c, \"ArtCompact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5L2FydC9BcnRDb21wYWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFLOUMsbUlBQW1JO0FBQ25JLE1BQU1DLGFBQStCO1FBQUMsRUFBRUMsUUFBTyxFQUFFO0lBQy9DLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFLRCxXQUFVOzBCQUFzQkYsUUFBUUk7Ozs7OzswQkFDOUMsOERBQUNEO2dCQUFLRCxXQUFVOzBCQUFTRixRQUFRSyxPQUFPRDs7Ozs7Ozs7Ozs7O0FBRzlDO0tBUE1MO0FBU2dCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2dhbGxlcnkvYXJ0L0FydENvbXBhY3QudHN4PzI3Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgYXJ0RGF0YTogSUFydERhdGE7XG59XG4vLyA8YXJ0aWNsZSBjbGFzc05hbWU9XCJiZy13aGl0ZSBhYnNvbHV0ZSBkZXNrdG9wOnB4LTEwIGRlc2t0b3A6cHktNSBkZXNrdG9wOnRvcC0wIGRlc2t0b3A6bGVmdC0xLzIgZGVza3RvcDpyaWdodC0wOyBmbGV4IGZsZXgtY29sXCI+XG5jb25zdCBBcnRDb21wYWN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgYXJ0RGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYmctd2hpdGUgYWJzb2x1dGUgdGFibGV0OmxlZnQtMi81IHRhYmxldDpweC0xMCB0YWJsZXQ6cHktNSB0YWJsZXQ6dG9wLTAgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC02eGwgZm9udC1ib2xkXCI+e2FydERhdGEubmFtZX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J3B5LTEwJz57YXJ0RGF0YS5hcnRpc3QubmFtZX08L3NwYW4+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IHsgQXJ0Q29tcGFjdCB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXJ0Q29tcGFjdCIsImFydERhdGEiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwic3BhbiIsIm5hbWUiLCJhcnRpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/gallery/art/ArtCompact.tsx\n"));

/***/ })

});