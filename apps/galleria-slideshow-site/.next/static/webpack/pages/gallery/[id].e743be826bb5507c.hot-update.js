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

/***/ "./src/components/gallery/Description.tsx":
/*!************************************************!*\
  !*** ./src/components/gallery/Description.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Description\": function() { return /* binding */ Description; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Description = (param)=>{\n    let { artData  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"text-dark-gray mt-32 px-10 py-20 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-9xl text-light-gray font-bold absolute top-0 right-10 -z-10\",\n                children: artData.year\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/Description.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xl leading-9 font-bold\",\n                children: artData.description\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/Description.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"inline-block text-sm px-5 pt-20 uppercase underline\",\n                href: artData.source,\n                children: \"go to source\"\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/Description.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/Description.tsx\",\n        lineNumber: 8,\n        columnNumber: 11\n    }, undefined);\n};\n_c = Description;\n\nvar _c;\n$RefreshReg$(_c, \"Description\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5L0Rlc2NyaXB0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFNOUMsTUFBTUMsY0FBZ0M7UUFBQyxFQUFDQyxRQUFPLEVBQUM7SUFDOUMscUJBQVEsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNyQiw4REFBQ0M7Z0JBQUtELFdBQVU7MEJBQW9FRixRQUFRSTs7Ozs7OzBCQUM1Riw4REFBQ0M7Z0JBQUVILFdBQVU7MEJBQStCRixRQUFRTTs7Ozs7OzBCQUNwRCw4REFBQ0M7Z0JBQUVMLFdBQVU7Z0JBQXNETSxNQUFNUixRQUFRUzswQkFBUTs7Ozs7Ozs7Ozs7O0FBSWpHO0tBUk1WO0FBVWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeS9EZXNjcmlwdGlvbi50c3g/OTUyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIGFydERhdGE6IElBcnREYXRhO1xufVxuXG5jb25zdCBEZXNjcmlwdGlvbjogUmVhY3QuRkM8SVByb3BzPiA9ICh7YXJ0RGF0YX0pID0+IHtcbiAgcmV0dXJuICg8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmstZ3JheSBtdC0zMiBweC0xMCBweS0yMCByZWxhdGl2ZVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTl4bCB0ZXh0LWxpZ2h0LWdyYXkgZm9udC1ib2xkIGFic29sdXRlIHRvcC0wIHJpZ2h0LTEwIC16LTEwXCI+e2FydERhdGEueWVhcn08L3NwYW4+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbGVhZGluZy05IGZvbnQtYm9sZFwiPnthcnREYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtc20gcHgtNSBwdC0yMCB1cHBlcmNhc2UgdW5kZXJsaW5lXCIgaHJlZj17YXJ0RGF0YS5zb3VyY2V9PlxuICAgICAgICAgIGdvIHRvIHNvdXJjZVxuICAgICAgICA8L2E+XG4gICAgICA8L3NlY3Rpb24+KVxufVxuXG5leHBvcnQge0Rlc2NyaXB0aW9ufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRlc2NyaXB0aW9uIiwiYXJ0RGF0YSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzcGFuIiwieWVhciIsInAiLCJkZXNjcmlwdGlvbiIsImEiLCJocmVmIiwic291cmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/gallery/Description.tsx\n"));

/***/ })

});