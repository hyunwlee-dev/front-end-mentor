'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('pages/gallery/[id]', {
  /***/ './src/containers/GalleryContainer.tsx':
    /*!*********************************************!*\
  !*** ./src/containers/GalleryContainer.tsx ***!
  \*********************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "GalleryContainer": function() { return /* binding */ GalleryContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/gallery */ "./src/components/gallery/index.ts");\n/* harmony import */ var _hyunwlee_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hyunwlee/hook */ "../../packages/hook/src/index.ts");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components */ "./src/components/index.ts");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst GalleryContainer = (param)=>{\n    let { artData  } = param;\n    _s();\n    const { isShown , toggle  } = (0,_hyunwlee_hook__WEBPACK_IMPORTED_MODULE_3__.useModal)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "large-desktop:flex large-desktop:flex-row large-desktop:flex-nowrap large-desktop:h-full large-desktop:gap-10",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gallery__WEBPACK_IMPORTED_MODULE_2__.Art, {\n                        className: "large-desktop:flex-auto large-desktop:min-w-[400px]",\n                        artData: artData,\n                        isShown: isShown,\n                        toggle: toggle\n                    }, void 0, false, {\n                        fileName: "/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gallery__WEBPACK_IMPORTED_MODULE_2__.Description, {\n                        className: "large-desktop:flex large-desktop:flex-col large-desktop:h-full large-desktop:items-space; large-desktop:pr-10 large-desktop:min-w-[400px] large-desktop:w-[40%]",\n                        artData: artData\n                    }, void 0, false, {\n                        fileName: "/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    isShown\n                ]\n            }, void 0, true, {\n                fileName: "/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                isShown: isShown,\n                hide: toggle,\n                modalContent: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                headerText: artData.name\n            }, void 0, false, {\n                fileName: "/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(GalleryContainer, "YX7lPo5VJ9T61KJpUrXTXDdrxCk=", false, function() {\n    return [\n        _hyunwlee_hook__WEBPACK_IMPORTED_MODULE_3__.useModal\n    ];\n});\n_c = GalleryContainer;\n\nvar _c;\n$RefreshReg$(_c, "GalleryContainer");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9HYWxsZXJ5Q29udGFpbmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1U7QUFDZDtBQUNMO0FBSXJDLE1BQU1LLG1CQUFxQztRQUFDLEVBQUVDLFFBQU8sRUFBRTs7SUFDckQsTUFBTSxFQUFDQyxRQUFPLEVBQUVDLE9BQU0sRUFBQyxHQUFHTCx3REFBUUE7SUFDbEMscUJBQ0U7OzBCQUNFLDhEQUFDTTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNULG9EQUFHQTt3QkFBQ1MsV0FBVTt3QkFBc0RKLFNBQVNBO3dCQUFTQyxTQUFTQTt3QkFBU0MsUUFBUUE7Ozs7OztrQ0FDakgsOERBQUNOLDREQUFXQTt3QkFDVlEsV0FBVTt3QkFDVkosU0FBU0E7Ozs7OztvQkFFVkM7Ozs7Ozs7MEJBRUgsOERBQUNILDhDQUFLQTtnQkFDSkcsU0FBU0E7Z0JBQ1RJLE1BQU1IO2dCQUNOSSw0QkFDRTtnQkFFRkMsWUFBWVAsUUFBUVE7Ozs7Ozs7O0FBSTVCO0dBdEJNVDs7UUFDc0JGLG9EQUFRQTs7O0tBRDlCRTtBQXdCc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvR2FsbGVyeUNvbnRhaW5lci50c3g/MGYwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcnQsIERlc2NyaXB0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2dhbGxlcnknO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAaHl1bndsZWUvaG9vayc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0AvY29tcG9uZW50cyc7XG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgYXJ0RGF0YTogSUFydERhdGE7XG59XG5jb25zdCBHYWxsZXJ5Q29udGFpbmVyOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgYXJ0RGF0YSB9KSA9PiB7XG4gIGNvbnN0IHtpc1Nob3duLCB0b2dnbGV9ID0gdXNlTW9kYWwoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS1kZXNrdG9wOmZsZXggbGFyZ2UtZGVza3RvcDpmbGV4LXJvdyBsYXJnZS1kZXNrdG9wOmZsZXgtbm93cmFwIGxhcmdlLWRlc2t0b3A6aC1mdWxsIGxhcmdlLWRlc2t0b3A6Z2FwLTEwXCI+XG4gICAgICAgIDxBcnQgY2xhc3NOYW1lPVwibGFyZ2UtZGVza3RvcDpmbGV4LWF1dG8gbGFyZ2UtZGVza3RvcDptaW4tdy1bNDAwcHhdXCIgYXJ0RGF0YT17YXJ0RGF0YX0gaXNTaG93bj17aXNTaG93bn0gdG9nZ2xlPXt0b2dnbGV9Lz5cbiAgICAgICAgPERlc2NyaXB0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibGFyZ2UtZGVza3RvcDpmbGV4IGxhcmdlLWRlc2t0b3A6ZmxleC1jb2wgbGFyZ2UtZGVza3RvcDpoLWZ1bGwgbGFyZ2UtZGVza3RvcDppdGVtcy1zcGFjZTsgbGFyZ2UtZGVza3RvcDpwci0xMCBsYXJnZS1kZXNrdG9wOm1pbi13LVs0MDBweF0gbGFyZ2UtZGVza3RvcDp3LVs0MCVdXCJcbiAgICAgICAgICBhcnREYXRhPXthcnREYXRhfVxuICAgICAgICAvPlxuICAgICAgICB7aXNTaG93bn1cbiAgICAgIDwvZGl2PlxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzU2hvd249e2lzU2hvd259XG4gICAgICAgIGhpZGU9e3RvZ2dsZX1cbiAgICAgICAgbW9kYWxDb250ZW50PXtcbiAgICAgICAgICA8PjwvPlxuICAgICAgICB9XG4gICAgICAgIGhlYWRlclRleHQ9e2FydERhdGEubmFtZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgeyBHYWxsZXJ5Q29udGFpbmVyIH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcnQiLCJEZXNjcmlwdGlvbiIsInVzZU1vZGFsIiwiTW9kYWwiLCJHYWxsZXJ5Q29udGFpbmVyIiwiYXJ0RGF0YSIsImlzU2hvd24iLCJ0b2dnbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoaWRlIiwibW9kYWxDb250ZW50IiwiaGVhZGVyVGV4dCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/GalleryContainer.tsx\n'
        )
      );

      /***/
    },
});
