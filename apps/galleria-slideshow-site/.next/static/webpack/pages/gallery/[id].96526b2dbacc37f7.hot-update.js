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

/***/ "./src/pages/gallery/[id].tsx":
/*!************************************!*\
  !*** ./src/pages/gallery/[id].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _containers_GalleryContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/GalleryContainer */ \"./src/containers/GalleryContainer.tsx\");\n/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/gallery */ \"./src/components/gallery/index.ts\");\n/* harmony import */ var _db_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/db/data.json */ \"./src/db/data.json\");\n\n\n\n\n\n\nconst Gallery = (param)=>{\n    let { artData  } = param;\n    const galleriaListSize = _db_data_json__WEBPACK_IMPORTED_MODULE_5__.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.BaseLayout, {\n        footerSide: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gallery__WEBPACK_IMPORTED_MODULE_4__.Footer, {\n            className: \"px-10\",\n            artData: artData,\n            galleriaListSize: galleriaListSize\n        }, void 0, false, void 0, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_GalleryContainer__WEBPACK_IMPORTED_MODULE_3__.GalleryContainer, {\n            artData: artData\n        }, void 0, false, {\n            fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n            lineNumber: 14,\n            columnNumber: 8\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Gallery;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FsbGVyeS9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ1g7QUFDa0M7QUFDbkI7QUFDWjtBQUVsQyxNQUFNSyxVQUFVO1FBQUMsRUFBRUMsUUFBTyxFQUF5QjtJQUNqRCxNQUFNQyxtQkFBbUJILGlEQUFXSTtJQUNwQyxxQkFDRSw4REFBQ1IsbURBQVVBO1FBQ1RTLDBCQUFZLDhEQUFDTix1REFBTUE7WUFBQ08sV0FBVTtZQUFRSixTQUFTQTtZQUFTQyxrQkFBa0JBOztrQkFFekUsNEVBQUNMLDBFQUFnQkE7WUFBQ0ksU0FBU0E7Ozs7Ozs7Ozs7O0FBR2xDO0tBVE1EOztBQTZCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZ2FsbGVyeS9baWRdLnRzeD80ZjI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFsbEFydElkcywgZ2V0QXJ0IH0gZnJvbSAnQC91dGlscyc7XG5pbXBvcnQgeyBCYXNlTGF5b3V0IH0gZnJvbSAnQC9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdhbGxlcnlDb250YWluZXIgfSBmcm9tICdAL2NvbnRhaW5lcnMvR2FsbGVyeUNvbnRhaW5lcic7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvZ2FsbGVyeSc7XG5pbXBvcnQgZGF0YSBmcm9tICdAL2RiL2RhdGEuanNvbic7XG5cbmNvbnN0IEdhbGxlcnkgPSAoeyBhcnREYXRhIH06IHsgYXJ0RGF0YTogSUFydERhdGEgfSkgPT4ge1xuICBjb25zdCBnYWxsZXJpYUxpc3RTaXplID0gZGF0YS5sZW5ndGg7XG4gIHJldHVybiAoXG4gICAgPEJhc2VMYXlvdXRcbiAgICAgIGZvb3RlclNpZGU9ezxGb290ZXIgY2xhc3NOYW1lPVwicHgtMTBcIiBhcnREYXRhPXthcnREYXRhfSBnYWxsZXJpYUxpc3RTaXplPXtnYWxsZXJpYUxpc3RTaXplfSAvPn1cbiAgICA+XG4gICAgICB7PEdhbGxlcnlDb250YWluZXIgYXJ0RGF0YT17YXJ0RGF0YX0gLz59XG4gICAgPC9CYXNlTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGdldEFsbEFydElkcygpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9OiB7IHBhcmFtczogQXJ0IH0pID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xuICBjb25zdCBhcnREYXRhID0gYXdhaXQgZ2V0QXJ0KGlkKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0RGF0YSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdLCJuYW1lcyI6WyJCYXNlTGF5b3V0IiwiUmVhY3QiLCJHYWxsZXJ5Q29udGFpbmVyIiwiRm9vdGVyIiwiZGF0YSIsIkdhbGxlcnkiLCJhcnREYXRhIiwiZ2FsbGVyaWFMaXN0U2l6ZSIsImxlbmd0aCIsImZvb3RlclNpZGUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/gallery/[id].tsx\n"));

/***/ })

});