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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Description\": function() { return /* binding */ Description; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Description = (param)=>{\n    let { className , artData  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(className, \" pt-24 large-desktop:pt-0 text-dark-gray relative\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-8xl large-desktop:text-[200px] text-light-gray font-bold absolute tablet:top-10 large-desktop:top-0 left-0 -z-10\",\n                children: artData.year\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/Description.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm leading-8 font-bold\",\n                children: artData.description\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/Description.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"inline-block text-sm px-5 pt-20 uppercase underline\",\n                href: artData.source,\n                children: \"go to source\"\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/Description.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/Description.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Description;\n\nvar _c;\n$RefreshReg$(_c, \"Description\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5L0Rlc2NyaXB0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFPOUMsTUFBTUMsY0FBZ0M7UUFBQyxFQUFFQyxVQUFTLEVBQUVDLFFBQU8sRUFBRTtJQUMzRCxxQkFDRSw4REFBQ0M7UUFBUUYsV0FBVyxHQUFhLE9BQVZBLFdBQVU7OzBCQUMvQiw4REFBQ0c7Z0JBQUtILFdBQVU7MEJBQXlIQyxRQUFRRzs7Ozs7OzBCQUNqSiw4REFBQ0M7Z0JBQUVMLFdBQVU7MEJBQStCQyxRQUFRSzs7Ozs7OzBCQUNwRCw4REFBQ0M7Z0JBQUVQLFdBQVU7Z0JBQXNEUSxNQUFNUCxRQUFRUTswQkFBUTs7Ozs7Ozs7Ozs7O0FBSy9GO0tBVk1WO0FBWWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2dhbGxlcnkvRGVzY3JpcHRpb24udHN4Pzk1MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBhcnREYXRhOiBJQXJ0RGF0YTtcbn1cblxuY29uc3QgRGVzY3JpcHRpb246IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBjbGFzc05hbWUsIGFydERhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBwdC0yNCBsYXJnZS1kZXNrdG9wOnB0LTAgdGV4dC1kYXJrLWdyYXkgcmVsYXRpdmVgfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtOHhsIGxhcmdlLWRlc2t0b3A6dGV4dC1bMjAwcHhdIHRleHQtbGlnaHQtZ3JheSBmb250LWJvbGQgYWJzb2x1dGUgdGFibGV0OnRvcC0xMCBsYXJnZS1kZXNrdG9wOnRvcC0wIGxlZnQtMCAtei0xMFwiPnthcnREYXRhLnllYXJ9PC9zcGFuPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTggZm9udC1ib2xkXCI+e2FydERhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtc20gcHgtNSBwdC0yMCB1cHBlcmNhc2UgdW5kZXJsaW5lXCIgaHJlZj17YXJ0RGF0YS5zb3VyY2V9PlxuICAgICAgICBnbyB0byBzb3VyY2VcbiAgICAgIDwvYT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgeyBEZXNjcmlwdGlvbiB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRGVzY3JpcHRpb24iLCJjbGFzc05hbWUiLCJhcnREYXRhIiwic2VjdGlvbiIsInNwYW4iLCJ5ZWFyIiwicCIsImRlc2NyaXB0aW9uIiwiYSIsImhyZWYiLCJzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/gallery/Description.tsx\n"));

/***/ })

});