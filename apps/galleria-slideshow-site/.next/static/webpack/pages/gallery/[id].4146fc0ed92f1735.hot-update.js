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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Description\": function() { return /* binding */ Description; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Description = (param)=>{\n    let { className , artData  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(className, \" pt-24 large-desktop:pt-0 text-dark-gray relative\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-8xl top-8 large-desktop:text-[200px] text-light-gray font-bold absolute tablet:top-10 large-desktop:top-0 right-0 tablet:left-0 -z-10\",\n                children: artData.year\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/Description.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm leading-8 font-bold\",\n                children: artData.description\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/Description.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"inline-block text-sm px-5 pt-20 uppercase underline\",\n                href: artData.source,\n                children: \"go to source\"\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/Description.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/Description.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Description;\n\nvar _c;\n$RefreshReg$(_c, \"Description\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5L0Rlc2NyaXB0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFPOUMsTUFBTUMsY0FBZ0M7UUFBQyxFQUFFQyxVQUFTLEVBQUVDLFFBQU8sRUFBRTtJQUMzRCxxQkFDRSw4REFBQ0M7UUFBUUYsV0FBVyxHQUFhLE9BQVZBLFdBQVU7OzBCQUMvQiw4REFBQ0c7Z0JBQUtILFdBQVU7MEJBQ2JDLFFBQVFHOzs7Ozs7MEJBRVgsOERBQUNDO2dCQUFFTCxXQUFVOzBCQUErQkMsUUFBUUs7Ozs7OzswQkFDcEQsOERBQUNDO2dCQUFFUCxXQUFVO2dCQUFzRFEsTUFBTVAsUUFBUVE7MEJBQVE7Ozs7Ozs7Ozs7OztBQUsvRjtLQVpNVjtBQWNpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5L0Rlc2NyaXB0aW9uLnRzeD85NTI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgYXJ0RGF0YTogSUFydERhdGE7XG59XG5cbmNvbnN0IERlc2NyaXB0aW9uOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgY2xhc3NOYW1lLCBhcnREYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcHQtMjQgbGFyZ2UtZGVza3RvcDpwdC0wIHRleHQtZGFyay1ncmF5IHJlbGF0aXZlYH0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTh4bCB0b3AtOCBsYXJnZS1kZXNrdG9wOnRleHQtWzIwMHB4XSB0ZXh0LWxpZ2h0LWdyYXkgZm9udC1ib2xkIGFic29sdXRlIHRhYmxldDp0b3AtMTAgbGFyZ2UtZGVza3RvcDp0b3AtMCByaWdodC0wIHRhYmxldDpsZWZ0LTAgLXotMTBcIj5cbiAgICAgICAge2FydERhdGEueWVhcn1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy04IGZvbnQtYm9sZFwiPnthcnREYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LXNtIHB4LTUgcHQtMjAgdXBwZXJjYXNlIHVuZGVybGluZVwiIGhyZWY9e2FydERhdGEuc291cmNlfT5cbiAgICAgICAgZ28gdG8gc291cmNlXG4gICAgICA8L2E+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IHsgRGVzY3JpcHRpb24gfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRlc2NyaXB0aW9uIiwiY2xhc3NOYW1lIiwiYXJ0RGF0YSIsInNlY3Rpb24iLCJzcGFuIiwieWVhciIsInAiLCJkZXNjcmlwdGlvbiIsImEiLCJocmVmIiwic291cmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/gallery/Description.tsx\n"));

/***/ }),

/***/ "./src/containers/GalleryContainer.tsx":
/*!*********************************************!*\
  !*** ./src/containers/GalleryContainer.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GalleryContainer\": function() { return /* binding */ GalleryContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/gallery */ \"./src/components/gallery/index.ts\");\n\n\n\nconst GalleryContainer = (param)=>{\n    let { artData  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"large-desktop:flex large-desktop:flex-row large-desktop:flex-nowrap large-desktop:h-full large-desktop:gap-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gallery__WEBPACK_IMPORTED_MODULE_2__.Art, {\n                className: \"large-desktop:flex-auto large-desktop:min-w-[400px]\",\n                artData: artData\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gallery__WEBPACK_IMPORTED_MODULE_2__.Description, {\n                className: \"large-desktop:flex large-desktop:flex-col large-desktop:h-full large-desktop:justify-center large-desktop:items-space; large-desktop:pr-10 large-desktop:min-w-[400px] large-desktop:w-[40%]\",\n                artData: artData\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GalleryContainer;\n\nvar _c;\n$RefreshReg$(_c, \"GalleryContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9HYWxsZXJ5Q29udGFpbmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBQ1U7QUFJeEQsTUFBTUcsbUJBQXFDO1FBQUMsRUFBRUMsUUFBTyxFQUFFO0lBQ3JELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0wsb0RBQUdBO2dCQUFDSyxXQUFVO2dCQUFzREYsU0FBU0E7Ozs7OzswQkFDOUUsOERBQUNGLDREQUFXQTtnQkFDVkksV0FBVTtnQkFDVkYsU0FBU0E7Ozs7Ozs7Ozs7OztBQUlqQjtLQVZNRDtBQVlzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVycy9HYWxsZXJ5Q29udGFpbmVyLnRzeD8wZjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFydCwgRGVzY3JpcHRpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvZ2FsbGVyeSc7XG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgYXJ0RGF0YTogSUFydERhdGE7XG59XG5jb25zdCBHYWxsZXJ5Q29udGFpbmVyOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgYXJ0RGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS1kZXNrdG9wOmZsZXggbGFyZ2UtZGVza3RvcDpmbGV4LXJvdyBsYXJnZS1kZXNrdG9wOmZsZXgtbm93cmFwIGxhcmdlLWRlc2t0b3A6aC1mdWxsIGxhcmdlLWRlc2t0b3A6Z2FwLTEwXCI+XG4gICAgICA8QXJ0IGNsYXNzTmFtZT1cImxhcmdlLWRlc2t0b3A6ZmxleC1hdXRvIGxhcmdlLWRlc2t0b3A6bWluLXctWzQwMHB4XVwiIGFydERhdGE9e2FydERhdGF9IC8+XG4gICAgICA8RGVzY3JpcHRpb25cbiAgICAgICAgY2xhc3NOYW1lPVwibGFyZ2UtZGVza3RvcDpmbGV4IGxhcmdlLWRlc2t0b3A6ZmxleC1jb2wgbGFyZ2UtZGVza3RvcDpoLWZ1bGwgbGFyZ2UtZGVza3RvcDpqdXN0aWZ5LWNlbnRlciBsYXJnZS1kZXNrdG9wOml0ZW1zLXNwYWNlOyBsYXJnZS1kZXNrdG9wOnByLTEwIGxhcmdlLWRlc2t0b3A6bWluLXctWzQwMHB4XSBsYXJnZS1kZXNrdG9wOnctWzQwJV1cIlxuICAgICAgICBhcnREYXRhPXthcnREYXRhfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEdhbGxlcnlDb250YWluZXIgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFydCIsIkRlc2NyaXB0aW9uIiwiR2FsbGVyeUNvbnRhaW5lciIsImFydERhdGEiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/GalleryContainer.tsx\n"));

/***/ })

});