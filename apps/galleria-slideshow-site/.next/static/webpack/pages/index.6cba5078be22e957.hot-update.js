"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Logo */ \"./src/components/Logo.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"../../.yarn/__virtual__/next-virtual-166a536635/0/cache/next-npm-12.3.4-cdaf2db0a7-d96fc4f5bc.zip/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    var artList = param.artList;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {\n                className: \"border border-solid border-med-gray\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_2__.Logo, {\n                    className: \"p-4 flex flex-row, flex-nowrap justify-between\"\n                }, void 0, false, {\n                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"p-4 columns-1 mobile:columns-2 tablet:columns-3 desktop:columns-4\",\n                    children: artList === null || artList === void 0 ? void 0 : artList.map(function(art) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"relative mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: art.images.thumbnail,\n                                    width: art.sizes.thumbnail.width,\n                                    height: art.sizes.thumbnail.height,\n                                    alt: art.description\n                                }, void 0, false, {\n                                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/index.tsx\",\n                                    lineNumber: 16,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"absolute text-white bottom-12 left-6\",\n                                    children: art.name\n                                }, void 0, false, {\n                                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/index.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute text-xs text-med-gray bottom-8 left-6\",\n                                    children: art.artist.name\n                                }, void 0, false, {\n                                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/index.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, art.id, true, {\n                            fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/index.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkM7QUFDSjtBQUVWOztBQUVoQixTQUFTRyxJQUFJLENBQUMsS0FBK0IsRUFBRTtRQUFqQyxPQUFTLEdBQVQsS0FBK0IsQ0FBN0JDLE9BQU87O0lBQ3BDLHFCQUNFOzswQkFDRSw4REFBQ0osc0RBQU07Z0JBQUNLLFNBQVMsRUFBQyxxQ0FBcUM7MEJBQ3JELDRFQUFDSixrREFBSTtvQkFBQ0ksU0FBUyxFQUFDLGdEQUFnRDs7Ozs7d0JBQUc7Ozs7O29CQUM1RDswQkFDVCw4REFBQ0MsTUFBSTswQkFDSCw0RUFBQ0MsSUFBRTtvQkFBQ0YsU0FBUyxFQUFDLG1FQUFtRTs4QkFDOUVELE9BQU8sYUFBUEEsT0FBTyxXQUFLLEdBQVpBLEtBQUFBLENBQVksR0FBWkEsT0FBTyxDQUFFSSxHQUFHLENBQUNDLFNBQUFBLEdBQUc7NkNBQ2YsOERBQUNDLElBQUU7NEJBQUNMLFNBQVMsRUFBRSxlQUFlOzs4Q0FDNUIsOERBQUNILG1EQUFLO29DQUFDUyxHQUFHLEVBQUVGLEdBQUcsQ0FBQ0csTUFBTSxDQUFDQyxTQUFTO29DQUFFQyxLQUFLLEVBQUVMLEdBQUcsQ0FBQ00sS0FBSyxDQUFDRixTQUFTLENBQUNDLEtBQUs7b0NBQUVFLE1BQU0sRUFBRVAsR0FBRyxDQUFDTSxLQUFLLENBQUNGLFNBQVMsQ0FBQ0csTUFBTTtvQ0FBRUMsR0FBRyxFQUFFUixHQUFHLENBQUNTLFdBQVc7Ozs7O3lDQUFJOzhDQUNoSSw4REFBQ0MsSUFBRTtvQ0FBQ2QsU0FBUyxFQUFFLHNDQUFzQzs4Q0FBR0ksR0FBRyxDQUFDVyxJQUFJOzs7Ozt5Q0FBTTs4Q0FDdEUsOERBQUNDLEdBQUM7b0NBQUNoQixTQUFTLEVBQUUsZ0RBQWdEOzhDQUFHSSxHQUFHLENBQUNhLE1BQU0sQ0FBQ0YsSUFBSTs7Ozs7eUNBQUs7OzJCQUhsRFgsR0FBRyxDQUFDYyxFQUFFOzs7O2lDQUl0QztxQkFDTixDQUFDOzs7Ozt3QkFDQzs7Ozs7b0JBQ0E7O29CQUNOLENBQ0g7QUFDSixDQUFDO0FBbkJ1QnBCLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgTG9nbyB9IGZyb20gJ0AvY29tcG9uZW50cy9Mb2dvJztcbmltcG9ydCB7IGdldEFsbEFydERhdGEsIHNvcnRNYW5zb25yeUFycmF5IH0gZnJvbSAnQC91dGlscyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBhcnRMaXN0IH06IHsgYXJ0TGlzdDogQXJ0W10gfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLW1lZC1ncmF5XCI+XG4gICAgICAgIDxMb2dvIGNsYXNzTmFtZT1cInAtNCBmbGV4IGZsZXgtcm93LCBmbGV4LW5vd3JhcCBqdXN0aWZ5LWJldHdlZW5cIiAvPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0ncC00IGNvbHVtbnMtMSBtb2JpbGU6Y29sdW1ucy0yIHRhYmxldDpjb2x1bW5zLTMgZGVza3RvcDpjb2x1bW5zLTQnPlxuICAgICAgICAgIHthcnRMaXN0Py5tYXAoYXJ0ID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eydyZWxhdGl2ZSBtYi0zJ30ga2V5PXthcnQuaWR9PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXthcnQuaW1hZ2VzLnRodW1ibmFpbH0gd2lkdGg9e2FydC5zaXplcy50aHVtYm5haWwud2lkdGh9IGhlaWdodD17YXJ0LnNpemVzLnRodW1ibmFpbC5oZWlnaHR9IGFsdD17YXJ0LmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXsnYWJzb2x1dGUgdGV4dC13aGl0ZSBib3R0b20tMTIgbGVmdC02J30+e2FydC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17J2Fic29sdXRlIHRleHQteHMgdGV4dC1tZWQtZ3JheSBib3R0b20tOCBsZWZ0LTYnfT57YXJ0LmFydGlzdC5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsQXJ0RGF0YSgpO1xuICAgIGNvbnN0IGFydExpc3QgPSBzb3J0TWFuc29ucnlBcnJheShkYXRhLCA0KTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYXJ0TGlzdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlXG4gICAgfVxuICB9XG59O1xuIl0sIm5hbWVzIjpbIkhlYWRlciIsIkxvZ28iLCJJbWFnZSIsIkhvbWUiLCJhcnRMaXN0IiwiY2xhc3NOYW1lIiwibWFpbiIsInVsIiwibWFwIiwiYXJ0IiwibGkiLCJzcmMiLCJpbWFnZXMiLCJ0aHVtYm5haWwiLCJ3aWR0aCIsInNpemVzIiwiaGVpZ2h0IiwiYWx0IiwiZGVzY3JpcHRpb24iLCJoMiIsIm5hbWUiLCJwIiwiYXJ0aXN0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});