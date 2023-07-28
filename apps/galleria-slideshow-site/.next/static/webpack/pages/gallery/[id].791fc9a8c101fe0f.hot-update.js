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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"../../.yarn/__virtual__/next-virtual-f9f3e99ae8/0/cache/next-npm-13.4.4-eea4a310b2-d84686f3ca.zip/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hyunwlee_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hyunwlee/ui */ \"../../packages/ui/src/index.ts\");\n\n\n\n\nconst Gallery = (param)=>{\n    let { artData  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.BaseLayout, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hyunwlee_ui__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                    as: \"section\",\n                    className: \"p-10 flex flex-col relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: \"desktop:hidden\",\n                            src: artData.images.hero.small,\n                            width: artData.sizes.hero.small.width,\n                            height: artData.sizes.hero.small.height,\n                            alt: artData.description\n                        }, void 0, false, {\n                            fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: \"hidden desktop:block\",\n                            src: artData.images.hero.large,\n                            width: artData.sizes.hero.large.width,\n                            height: artData.sizes.hero.large.height,\n                            alt: artData.description\n                        }, void 0, false, {\n                            fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hyunwlee_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            className: \"px-7 py-4 flex flex-nowrap justify-between items-center gap-5 bg-black absolute top-20 left-20 hover:opacity-70 hover:bg-dark-gray\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/shared/icon-view-image.svg\",\n                                    width: 16,\n                                    height: 16,\n                                    alt: \"view-image\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white font-sans text-xs font-bold tracking-widest uppercase\",\n                                    children: \"view image\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-5 flex flex-col flex-nowrap gap-2 translate-x-30\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-3xl font-bold\",\n                                    children: artData.name\n                                }, void 0, false, {\n                                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-dark-gray z-10\",\n                                    children: artData.artist.name\n                                }, void 0, false, {\n                                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = Gallery;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FsbGVyeS9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUVXO0FBQ087QUFFakQsTUFBTUksVUFBVTtRQUFDLEVBQUVDLFFBQU8sRUFBb0I7SUFDNUMscUJBQ0U7a0JBQ0UsNEVBQUNKLG1EQUFVQTs7OEJBQ1QsOERBQUNFLG1EQUFTQTtvQkFBQ0csSUFBRztvQkFBVUMsV0FBVTs7c0NBQ2hDLDhEQUFDUCxtREFBS0E7NEJBQ0pPLFdBQVU7NEJBQ1ZDLEtBQUtILFFBQVFJLE9BQU9DLEtBQUtDOzRCQUN6QkMsT0FBT1AsUUFBUVEsTUFBTUgsS0FBS0MsTUFBTUM7NEJBQ2hDRSxRQUFRVCxRQUFRUSxNQUFNSCxLQUFLQyxNQUFNRzs0QkFDakNDLEtBQUtWLFFBQVFXOzs7Ozs7c0NBRWYsOERBQUNoQixtREFBS0E7NEJBQ0pPLFdBQVU7NEJBQ1ZDLEtBQUtILFFBQVFJLE9BQU9DLEtBQUtPOzRCQUN6QkwsT0FBT1AsUUFBUVEsTUFBTUgsS0FBS08sTUFBTUw7NEJBQ2hDRSxRQUFRVCxRQUFRUSxNQUFNSCxLQUFLTyxNQUFNSDs0QkFDakNDLEtBQUtWLFFBQVFXOzs7Ozs7c0NBRWYsOERBQUNkLGdEQUFNQTs0QkFBQ0ssV0FBVTs7OENBQ2hCLDhEQUFDUCxtREFBS0E7b0NBQ0pRLEtBQUk7b0NBQ0pJLE9BQU87b0NBQ1BFLFFBQVE7b0NBQ1JDLEtBQUk7Ozs7Ozs4Q0FFTiw4REFBQ0c7b0NBQUtYLFdBQVU7OENBQW1FOzs7Ozs7Ozs7Ozs7c0NBRXJGLDhEQUFDWTs0QkFBSVosV0FBVTs7OENBQ2IsOERBQUNXO29DQUFLWCxXQUFVOzhDQUFzQkYsUUFBUWU7Ozs7Ozs4Q0FDOUMsOERBQUNGO29DQUFLWCxXQUFVOzhDQUF1QkYsUUFBUWdCLE9BQU9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRzFELDhEQUFDRTs7Ozs7Ozs7Ozs7O0FBTVQ7S0F2Q01sQjs7QUEyRE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvW2lkXS50c3g/NGYyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBnZXRBbGxBcnRJZHMsIGdldEFydCB9IGZyb20gJ0AvdXRpbHMnO1xuaW1wb3J0IHsgQmFzZUxheW91dCB9IGZyb20gJ0AvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciB9IGZyb20gJ0BoeXVud2xlZS91aSc7XG5cbmNvbnN0IEdhbGxlcnkgPSAoeyBhcnREYXRhIH06IHsgYXJ0RGF0YTogQXJ0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJhc2VMYXlvdXQ+XG4gICAgICAgIDxDb250YWluZXIgYXM9J3NlY3Rpb24nIGNsYXNzTmFtZT0ncC0xMCBmbGV4IGZsZXgtY29sIHJlbGF0aXZlJz5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZGVza3RvcDpoaWRkZW4nXG4gICAgICAgICAgICBzcmM9e2FydERhdGEuaW1hZ2VzLmhlcm8uc21hbGx9XG4gICAgICAgICAgICB3aWR0aD17YXJ0RGF0YS5zaXplcy5oZXJvLnNtYWxsLndpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXthcnREYXRhLnNpemVzLmhlcm8uc21hbGwuaGVpZ2h0fVxuICAgICAgICAgICAgYWx0PXthcnREYXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9J2hpZGRlbiBkZXNrdG9wOmJsb2NrJ1xuICAgICAgICAgICAgc3JjPXthcnREYXRhLmltYWdlcy5oZXJvLmxhcmdlfVxuICAgICAgICAgICAgd2lkdGg9e2FydERhdGEuc2l6ZXMuaGVyby5sYXJnZS53aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17YXJ0RGF0YS5zaXplcy5oZXJvLmxhcmdlLmhlaWdodH1cbiAgICAgICAgICAgIGFsdD17YXJ0RGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdweC03IHB5LTQgZmxleCBmbGV4LW5vd3JhcCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGdhcC01IGJnLWJsYWNrIGFic29sdXRlIHRvcC0yMCBsZWZ0LTIwIGhvdmVyOm9wYWNpdHktNzAgaG92ZXI6YmctZGFyay1ncmF5Jz5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9Jy9zaGFyZWQvaWNvbi12aWV3LWltYWdlLnN2ZydcbiAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgICAgICAgICBhbHQ9J3ZpZXctaW1hZ2UnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGZvbnQtc2FucyB0ZXh0LXhzIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlJz52aWV3IGltYWdlPC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSBwLTUgZmxleCBmbGV4LWNvbCBmbGV4LW5vd3JhcCBnYXAtMiB0cmFuc2xhdGUteC0zMCc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYm9sZCc+e2FydERhdGEubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZGFyay1ncmF5IHotMTAnPnthcnREYXRhLmFydGlzdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgXG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9CYXNlTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGdldEFsbEFydElkcygpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9OiB7IHBhcmFtczogQXJ0IH0pID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xuICBjb25zdCBhcnREYXRhID0gYXdhaXQgZ2V0QXJ0KGlkKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0RGF0YSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkJhc2VMYXlvdXQiLCJCdXR0b24iLCJDb250YWluZXIiLCJHYWxsZXJ5IiwiYXJ0RGF0YSIsImFzIiwiY2xhc3NOYW1lIiwic3JjIiwiaW1hZ2VzIiwiaGVybyIsInNtYWxsIiwid2lkdGgiLCJzaXplcyIsImhlaWdodCIsImFsdCIsImRlc2NyaXB0aW9uIiwibGFyZ2UiLCJzcGFuIiwiZGl2IiwibmFtZSIsImFydGlzdCIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/gallery/[id].tsx\n"));

/***/ })

});