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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"../../.yarn/__virtual__/next-virtual-f9f3e99ae8/0/cache/next-npm-13.4.4-eea4a310b2-d84686f3ca.zip/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hyunwlee_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hyunwlee/ui */ \"../../packages/ui/src/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _db_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/db/data.json */ \"./src/db/data.json\");\n\n\n\n\n\n\nconst Gallery = (param)=>{\n    let { artData  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.BaseLayout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"p-10 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"desktop:hidden\",\n                        src: artData.images.hero.small,\n                        width: artData.sizes.hero.small.width,\n                        height: artData.sizes.hero.small.height,\n                        alt: \"\".concat(artData.name, \" image\")\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"hidden desktop:block\",\n                        src: artData.images.hero.large,\n                        width: artData.sizes.hero.large.width,\n                        height: artData.sizes.hero.large.height,\n                        alt: \"\".concat(artData.name, \" image\")\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hyunwlee_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        type: \"button\",\n                        className: \"px-7 py-4 flex flex-nowrap justify-between items-center gap-5 bg-black absolute top-20 tablet:top-auto tablet:bottom-20 left-20 hover:opacity-70 hover:bg-dark-gray\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/shared/icon-view-image.svg\",\n                                width: 16,\n                                height: 16,\n                                alt: \"view-image\"\n                            }, void 0, false, {\n                                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white font-sans text-xs font-bold tracking-widest uppercase\",\n                                children: \"view image\"\n                            }, void 0, false, {\n                                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: \"bg-transparent w-full max-w-3xl absolute bottom-10 left-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white px-10 py-5 w-3/4 flex flex-col flex-nowrap gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-5 text-3xl font-bold\",\n                                    children: artData.name\n                                }, void 0, false, {\n                                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-5 text-dark-gray\",\n                                    children: artData.artist.name\n                                }, void 0, false, {\n                                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: \"absolute -bottom-32\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: artData.artist.image,\n                            width: artData.sizes.artist.width,\n                            height: artData.sizes.artist.height,\n                            alt: \"\".concat(artData.name, \" image\")\n                        }, void 0, false, {\n                            fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"text-dark-gray mt-32 px-10 py-20 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-9xl text-light-gray font-bold absolute top-0 right-10 -z-10\",\n                        children: artData.year\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl leading-9 font-bold\",\n                        children: artData.description\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"inline-block text-sm px-5 pt-20 uppercase underline\",\n                        href: artData.source,\n                        children: \"go to source\"\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"px-10 pb-32 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hyunwlee_ui__WEBPACK_IMPORTED_MODULE_3__.ProgressBar, {\n                        className: \"h-[2px] w-auto bg-med-gray [&>div]:h-[2px] [&>div]:bg-black\",\n                        completed: (artData.index + 1) / _db_data_json__WEBPACK_IMPORTED_MODULE_5__.length * 100\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-2xl absolute top-8\",\n                        children: artData.name\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm absolute top-20\",\n                        children: artData.artist.name\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hyunwlee_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        className: \"absolute top-14 right-24\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/shared/icon-back-button.svg\",\n                            width: 24,\n                            height: 24,\n                            alt: \"slide back button\"\n                        }, void 0, false, {\n                            fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hyunwlee_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        className: \"absolute top-14 right-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/shared/icon-next-button.svg\",\n                            width: 24,\n                            height: 24,\n                            alt: \"slide next button\"\n                        }, void 0, false, {\n                            fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/pages/gallery/[id].tsx\",\n        lineNumber: 14,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Gallery;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGVyeS9baWRdLnRzeD80ZjI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IGdldEFsbEFydElkcywgZ2V0QXJ0IH0gZnJvbSAnQC91dGlscyc7XG5pbXBvcnQgeyBCYXNlTGF5b3V0IH0gZnJvbSAnQC9jb21wb25lbnRzJztcbmltcG9ydCB7IEJ1dHRvbiwgUHJvZ3Jlc3NCYXIgfSBmcm9tICdAaHl1bndsZWUvdWknO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRhdGEgZnJvbSAnQC9kYi9kYXRhLmpzb24nO1xuXG5pbnRlcmZhY2UgSUFydERhdGEgZXh0ZW5kcyBBcnQge1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5jb25zdCBHYWxsZXJ5ID0gKHsgYXJ0RGF0YSB9OiB7IGFydERhdGE6IElBcnREYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICAgIDxCYXNlTGF5b3V0PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLTEwIHJlbGF0aXZlXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNrdG9wOmhpZGRlblwiXG4gICAgICAgICAgICBzcmM9e2FydERhdGEuaW1hZ2VzLmhlcm8uc21hbGx9XG4gICAgICAgICAgICB3aWR0aD17YXJ0RGF0YS5zaXplcy5oZXJvLnNtYWxsLndpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXthcnREYXRhLnNpemVzLmhlcm8uc21hbGwuaGVpZ2h0fVxuICAgICAgICAgICAgYWx0PXtgJHthcnREYXRhLm5hbWV9IGltYWdlYH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGRlc2t0b3A6YmxvY2tcIlxuICAgICAgICAgICAgc3JjPXthcnREYXRhLmltYWdlcy5oZXJvLmxhcmdlfVxuICAgICAgICAgICAgd2lkdGg9e2FydERhdGEuc2l6ZXMuaGVyby5sYXJnZS53aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17YXJ0RGF0YS5zaXplcy5oZXJvLmxhcmdlLmhlaWdodH1cbiAgICAgICAgICAgIGFsdD17YCR7YXJ0RGF0YS5uYW1lfSBpbWFnZWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJweC03IHB5LTQgZmxleCBmbGV4LW5vd3JhcCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGdhcC01IGJnLWJsYWNrIGFic29sdXRlIHRvcC0yMCB0YWJsZXQ6dG9wLWF1dG8gdGFibGV0OmJvdHRvbS0yMCBsZWZ0LTIwIGhvdmVyOm9wYWNpdHktNzAgaG92ZXI6YmctZGFyay1ncmF5XCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3NoYXJlZC9pY29uLXZpZXctaW1hZ2Uuc3ZnXCIgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBhbHQ9XCJ2aWV3LWltYWdlXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zYW5zIHRleHQteHMgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2VcIj52aWV3IGltYWdlPC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHctZnVsbCBtYXgtdy0zeGwgYWJzb2x1dGUgYm90dG9tLTEwIGxlZnQtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweC0xMCBweS01IHctMy80IGZsZXggZmxleC1jb2wgZmxleC1ub3dyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtNSB0ZXh0LTN4bCBmb250LWJvbGRcIj57YXJ0RGF0YS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtNSB0ZXh0LWRhcmstZ3JheVwiPnthcnREYXRhLmFydGlzdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLTMyXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXthcnREYXRhLmFydGlzdC5pbWFnZX1cbiAgICAgICAgICAgICAgd2lkdGg9e2FydERhdGEuc2l6ZXMuYXJ0aXN0LndpZHRofVxuICAgICAgICAgICAgICBoZWlnaHQ9e2FydERhdGEuc2l6ZXMuYXJ0aXN0LmhlaWdodH1cbiAgICAgICAgICAgICAgYWx0PXtgJHthcnREYXRhLm5hbWV9IGltYWdlYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtZGFyay1ncmF5IG10LTMyIHB4LTEwIHB5LTIwIHJlbGF0aXZlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC05eGwgdGV4dC1saWdodC1ncmF5IGZvbnQtYm9sZCBhYnNvbHV0ZSB0b3AtMCByaWdodC0xMCAtei0xMFwiPnthcnREYXRhLnllYXJ9PC9zcGFuPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbGVhZGluZy05IGZvbnQtYm9sZFwiPnthcnREYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC1zbSBweC01IHB0LTIwIHVwcGVyY2FzZSB1bmRlcmxpbmVcIiBocmVmPXthcnREYXRhLnNvdXJjZX0+XG4gICAgICAgICAgICBnbyB0byBzb3VyY2VcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJweC0xMCBwYi0zMiByZWxhdGl2ZVwiPlxuICAgICAgICAgIDxQcm9ncmVzc0JhclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1bMnB4XSB3LWF1dG8gYmctbWVkLWdyYXkgWyY+ZGl2XTpoLVsycHhdIFsmPmRpdl06YmctYmxhY2tcIlxuICAgICAgICAgICAgY29tcGxldGVkPXsoKGFydERhdGEuaW5kZXggKyAxKSAvIGRhdGEubGVuZ3RoKSAqIDEwMH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGFic29sdXRlIHRvcC04XCI+e2FydERhdGEubmFtZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBhYnNvbHV0ZSB0b3AtMjBcIj57YXJ0RGF0YS5hcnRpc3QubmFtZX08L3NwYW4+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMTQgcmlnaHQtMjRcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc2hhcmVkL2ljb24tYmFjay1idXR0b24uc3ZnXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSBhbHQ9XCJzbGlkZSBiYWNrIGJ1dHRvblwiIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMTQgcmlnaHQtMTBcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc2hhcmVkL2ljb24tbmV4dC1idXR0b24uc3ZnXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSBhbHQ9XCJzbGlkZSBuZXh0IGJ1dHRvblwiIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9CYXNlTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGdldEFsbEFydElkcygpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9OiB7IHBhcmFtczogQXJ0IH0pID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xuICBjb25zdCBhcnREYXRhID0gYXdhaXQgZ2V0QXJ0KGlkKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0RGF0YSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkJhc2VMYXlvdXQiLCJCdXR0b24iLCJQcm9ncmVzc0JhciIsIlJlYWN0IiwiZGF0YSIsIkdhbGxlcnkiLCJhcnREYXRhIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInNyYyIsImltYWdlcyIsImhlcm8iLCJzbWFsbCIsIndpZHRoIiwic2l6ZXMiLCJoZWlnaHQiLCJhbHQiLCJuYW1lIiwibGFyZ2UiLCJ0eXBlIiwic3BhbiIsImFydGljbGUiLCJkaXYiLCJhcnRpc3QiLCJpbWFnZSIsInllYXIiLCJwIiwiZGVzY3JpcHRpb24iLCJhIiwiaHJlZiIsInNvdXJjZSIsImZvb3RlciIsImNvbXBsZXRlZCIsImluZGV4IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/gallery/[id].tsx\n"));

/***/ })

});