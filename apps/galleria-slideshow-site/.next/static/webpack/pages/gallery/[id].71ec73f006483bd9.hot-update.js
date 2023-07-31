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

/***/ "./src/containers/GalleryContainer.tsx":
/*!*********************************************!*\
  !*** ./src/containers/GalleryContainer.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GalleryContainer\": function() { return /* binding */ GalleryContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"../../.yarn/__virtual__/next-virtual-f9f3e99ae8/0/cache/next-npm-13.4.4-eea4a310b2-d84686f3ca.zip/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hyunwlee_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hyunwlee/ui */ \"../../packages/ui/src/index.ts\");\n/* harmony import */ var _db_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/db/data.json */ \"./src/db/data.json\");\n/* harmony import */ var _components_gallery_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/gallery/Footer */ \"./src/components/gallery/Footer.tsx\");\n\n\n\n\n\n\nconst GalleryContainer = (param)=>{\n    let { artData  } = param;\n    const dataSize = _db_data_json__WEBPACK_IMPORTED_MODULE_4__.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"p-10 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"desktop:hidden\",\n                        src: artData.images.hero.small,\n                        width: artData.sizes.hero.small.width,\n                        height: artData.sizes.hero.small.height,\n                        alt: \"\".concat(artData.name, \" image\")\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"hidden desktop:block\",\n                        src: artData.images.hero.large,\n                        width: artData.sizes.hero.large.width,\n                        height: artData.sizes.hero.large.height,\n                        alt: \"\".concat(artData.name, \" image\")\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hyunwlee_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        type: \"button\",\n                        className: \"px-7 py-4 flex flex-nowrap justify-between items-center gap-5 bg-black absolute top-20 tablet:top-auto tablet:bottom-20 left-20 hover:opacity-70 hover:bg-dark-gray\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/shared/icon-view-image.svg\",\n                                width: 16,\n                                height: 16,\n                                alt: \"view-image\"\n                            }, void 0, false, {\n                                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white font-sans text-xs font-bold tracking-widest uppercase\",\n                                children: \"view image\"\n                            }, void 0, false, {\n                                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: \"bg-transparent w-full max-w-3xl absolute bottom-10 left-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white px-10 py-5 w-3/4 flex flex-col flex-nowrap gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-5 text-3xl font-bold\",\n                                    children: artData.name\n                                }, void 0, false, {\n                                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"px-5 text-dark-gray\",\n                                    children: artData.artist.name\n                                }, void 0, false, {\n                                    fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: \"absolute -bottom-32\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: artData.artist.image,\n                            width: artData.sizes.artist.width,\n                            height: artData.sizes.artist.height,\n                            alt: \"\".concat(artData.name, \" image\")\n                        }, void 0, false, {\n                            fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"text-dark-gray mt-32 px-10 py-20 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-9xl text-light-gray font-bold absolute top-0 right-10 -z-10\",\n                        children: artData.year\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl leading-9 font-bold\",\n                        children: artData.description\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"inline-block text-sm px-5 pt-20 uppercase underline\",\n                        href: artData.source,\n                        children: \"go to source\"\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gallery_Footer__WEBPACK_IMPORTED_MODULE_5__.Footer, {\n                artData: artData\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = GalleryContainer;\n\nvar _c;\n$RefreshReg$(_c, \"GalleryContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9HYWxsZXJ5Q29udGFpbmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNmO0FBQ29CO0FBQ2pCO0FBQ21CO0FBSXJELE1BQU1LLG1CQUFxQztRQUFDLEVBQUVDLFFBQU8sRUFBRTtJQUNyRCxNQUFNQyxXQUFXSixpREFBV0s7SUFDNUIscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBUUMsV0FBVTs7a0NBQ2pCLDhEQUFDVCxtREFBS0E7d0JBQ0pTLFdBQVU7d0JBQ1ZDLEtBQUtMLFFBQVFNLE9BQU9DLEtBQUtDO3dCQUN6QkMsT0FBT1QsUUFBUVUsTUFBTUgsS0FBS0MsTUFBTUM7d0JBQ2hDRSxRQUFRWCxRQUFRVSxNQUFNSCxLQUFLQyxNQUFNRzt3QkFDakNDLEtBQUssR0FBZ0IsT0FBYlosUUFBUWEsTUFBSzs7Ozs7O2tDQUV2Qiw4REFBQ2xCLG1EQUFLQTt3QkFDSlMsV0FBVTt3QkFDVkMsS0FBS0wsUUFBUU0sT0FBT0MsS0FBS087d0JBQ3pCTCxPQUFPVCxRQUFRVSxNQUFNSCxLQUFLTyxNQUFNTDt3QkFDaENFLFFBQVFYLFFBQVFVLE1BQU1ILEtBQUtPLE1BQU1IO3dCQUNqQ0MsS0FBSyxHQUFnQixPQUFiWixRQUFRYSxNQUFLOzs7Ozs7a0NBRXZCLDhEQUFDakIsZ0RBQU1BO3dCQUNMbUIsTUFBSzt3QkFDTFgsV0FBVTs7MENBRVYsOERBQUNULG1EQUFLQTtnQ0FBQ1UsS0FBSTtnQ0FBOEJJLE9BQU87Z0NBQUlFLFFBQVE7Z0NBQUlDLEtBQUk7Ozs7OzswQ0FDcEUsOERBQUNJO2dDQUFLWixXQUFVOzBDQUFtRTs7Ozs7Ozs7Ozs7O2tDQUVyRiw4REFBQ2E7d0JBQVFiLFdBQVU7a0NBQ2pCLDRFQUFDYzs0QkFBSWQsV0FBVTs7OENBQ2IsOERBQUNZO29DQUFLWixXQUFVOzhDQUEyQkosUUFBUWE7Ozs7Ozs4Q0FDbkQsOERBQUNHO29DQUFLWixXQUFVOzhDQUF1QkosUUFBUW1CLE9BQU9OOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHMUQsOERBQUNJO3dCQUFRYixXQUFVO2tDQUNqQiw0RUFBQ1QsbURBQUtBOzRCQUNKVSxLQUFLTCxRQUFRbUIsT0FBT0M7NEJBQ3BCWCxPQUFPVCxRQUFRVSxNQUFNUyxPQUFPVjs0QkFDNUJFLFFBQVFYLFFBQVFVLE1BQU1TLE9BQU9SOzRCQUM3QkMsS0FBSyxHQUFnQixPQUFiWixRQUFRYSxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJM0IsOERBQUNWO2dCQUFRQyxXQUFVOztrQ0FDakIsOERBQUNZO3dCQUFLWixXQUFVO2tDQUFvRUosUUFBUXFCOzs7Ozs7a0NBQzVGLDhEQUFDQzt3QkFBRWxCLFdBQVU7a0NBQStCSixRQUFRdUI7Ozs7OztrQ0FDcEQsOERBQUNDO3dCQUFFcEIsV0FBVTt3QkFBc0RxQixNQUFNekIsUUFBUTBCO2tDQUFROzs7Ozs7Ozs7Ozs7MEJBSTNGLDhEQUFDNUIsOERBQU1BO2dCQUFDRSxTQUFTQTs7Ozs7Ozs7QUFHdkI7S0FuRE1EO0FBcURzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVycy9HYWxsZXJ5Q29udGFpbmVyLnRzeD8wZjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IEJ1dHRvbiwgUHJvZ3Jlc3NCYXIgfSBmcm9tICdAaHl1bndsZWUvdWknO1xuaW1wb3J0IGRhdGEgZnJvbSAnQC9kYi9kYXRhLmpzb24nO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2dhbGxlcnkvRm9vdGVyJztcbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICBhcnREYXRhOiBJQXJ0RGF0YTtcbn1cbmNvbnN0IEdhbGxlcnlDb250YWluZXI6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBhcnREYXRhIH0pID0+IHtcbiAgY29uc3QgZGF0YVNpemUgPSBkYXRhLmxlbmd0aDtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicC0xMCByZWxhdGl2ZVwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9XCJkZXNrdG9wOmhpZGRlblwiXG4gICAgICAgICAgc3JjPXthcnREYXRhLmltYWdlcy5oZXJvLnNtYWxsfVxuICAgICAgICAgIHdpZHRoPXthcnREYXRhLnNpemVzLmhlcm8uc21hbGwud2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXthcnREYXRhLnNpemVzLmhlcm8uc21hbGwuaGVpZ2h0fVxuICAgICAgICAgIGFsdD17YCR7YXJ0RGF0YS5uYW1lfSBpbWFnZWB9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBkZXNrdG9wOmJsb2NrXCJcbiAgICAgICAgICBzcmM9e2FydERhdGEuaW1hZ2VzLmhlcm8ubGFyZ2V9XG4gICAgICAgICAgd2lkdGg9e2FydERhdGEuc2l6ZXMuaGVyby5sYXJnZS53aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2FydERhdGEuc2l6ZXMuaGVyby5sYXJnZS5oZWlnaHR9XG4gICAgICAgICAgYWx0PXtgJHthcnREYXRhLm5hbWV9IGltYWdlYH1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTcgcHktNCBmbGV4IGZsZXgtbm93cmFwIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZ2FwLTUgYmctYmxhY2sgYWJzb2x1dGUgdG9wLTIwIHRhYmxldDp0b3AtYXV0byB0YWJsZXQ6Ym90dG9tLTIwIGxlZnQtMjAgaG92ZXI6b3BhY2l0eS03MCBob3ZlcjpiZy1kYXJrLWdyYXlcIlxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9zaGFyZWQvaWNvbi12aWV3LWltYWdlLnN2Z1wiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gYWx0PVwidmlldy1pbWFnZVwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNhbnMgdGV4dC14cyBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZVwiPnZpZXcgaW1hZ2U8L3NwYW4+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCB3LWZ1bGwgbWF4LXctM3hsIGFic29sdXRlIGJvdHRvbS0xMCBsZWZ0LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB4LTEwIHB5LTUgdy0zLzQgZmxleCBmbGV4LWNvbCBmbGV4LW5vd3JhcCBnYXAtMlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtNSB0ZXh0LTN4bCBmb250LWJvbGRcIj57YXJ0RGF0YS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTUgdGV4dC1kYXJrLWdyYXlcIj57YXJ0RGF0YS5hcnRpc3QubmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS0zMlwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXthcnREYXRhLmFydGlzdC5pbWFnZX1cbiAgICAgICAgICAgIHdpZHRoPXthcnREYXRhLnNpemVzLmFydGlzdC53aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17YXJ0RGF0YS5zaXplcy5hcnRpc3QuaGVpZ2h0fVxuICAgICAgICAgICAgYWx0PXtgJHthcnREYXRhLm5hbWV9IGltYWdlYH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmstZ3JheSBtdC0zMiBweC0xMCBweS0yMCByZWxhdGl2ZVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTl4bCB0ZXh0LWxpZ2h0LWdyYXkgZm9udC1ib2xkIGFic29sdXRlIHRvcC0wIHJpZ2h0LTEwIC16LTEwXCI+e2FydERhdGEueWVhcn08L3NwYW4+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbGVhZGluZy05IGZvbnQtYm9sZFwiPnthcnREYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtc20gcHgtNSBwdC0yMCB1cHBlcmNhc2UgdW5kZXJsaW5lXCIgaHJlZj17YXJ0RGF0YS5zb3VyY2V9PlxuICAgICAgICAgIGdvIHRvIHNvdXJjZVxuICAgICAgICA8L2E+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Rm9vdGVyIGFydERhdGE9e2FydERhdGF9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgeyBHYWxsZXJ5Q29udGFpbmVyIH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkJ1dHRvbiIsImRhdGEiLCJGb290ZXIiLCJHYWxsZXJ5Q29udGFpbmVyIiwiYXJ0RGF0YSIsImRhdGFTaXplIiwibGVuZ3RoIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInNyYyIsImltYWdlcyIsImhlcm8iLCJzbWFsbCIsIndpZHRoIiwic2l6ZXMiLCJoZWlnaHQiLCJhbHQiLCJuYW1lIiwibGFyZ2UiLCJ0eXBlIiwic3BhbiIsImFydGljbGUiLCJkaXYiLCJhcnRpc3QiLCJpbWFnZSIsInllYXIiLCJwIiwiZGVzY3JpcHRpb24iLCJhIiwiaHJlZiIsInNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/containers/GalleryContainer.tsx\n"));

/***/ })

});