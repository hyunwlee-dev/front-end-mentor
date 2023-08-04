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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "GalleryContainer": function() { return /* binding */ GalleryContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/gallery */ "./src/components/gallery/index.ts");\n/* harmony import */ var _hyunwlee_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hyunwlee/hook */ "../../packages/hook/src/index.ts");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components */ "./src/components/index.ts");\n/* harmony import */ var _hyunwlee_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hyunwlee/ui */ "../../packages/ui/src/index.ts");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "../../.yarn/__virtual__/next-virtual-f9f3e99ae8/0/cache/next-npm-13.4.4-eea4a310b2-d84686f3ca.zip/node_modules/next/image.js");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst GalleryContainer = (param)=>{\n    let { artData  } = param;\n    _s();\n    const { isShown , toggle  } = (0,_hyunwlee_hook__WEBPACK_IMPORTED_MODULE_3__.useModal)();\n    const modalContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        className: "relative",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hyunwlee_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                className: "text-sm text-white tracking-widest uppercase absolute -top-9 right-0 hover:text-dark-gray",\n                children: "close"\n            }, void 0, false, {\n                fileName: "/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                src: artData.images.gallery,\n                width: artData.sizes.gallery.width,\n                height: artData.sizes.gallery.height,\n                alt: artData.name\n            }, void 0, false, {\n                fileName: "/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: "/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "large-desktop:flex large-desktop:flex-row large-desktop:flex-nowrap large-desktop:h-full large-desktop:gap-10",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gallery__WEBPACK_IMPORTED_MODULE_2__.Art, {\n                        className: "large-desktop:flex-auto large-desktop:min-w-[400px]",\n                        artData: artData,\n                        toggle: toggle\n                    }, void 0, false, {\n                        fileName: "/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gallery__WEBPACK_IMPORTED_MODULE_2__.Description, {\n                        className: "large-desktop:flex large-desktop:flex-col large-desktop:h-full large-desktop:items-space; large-desktop:pr-10 large-desktop:min-w-[400px] large-desktop:w-[40%]",\n                        artData: artData\n                    }, void 0, false, {\n                        fileName: "/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: "/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                isShown: isShown,\n                hide: toggle,\n                modalContent: modalContent,\n                headerText: artData.name\n            }, void 0, false, {\n                fileName: "/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(GalleryContainer, "YX7lPo5VJ9T61KJpUrXTXDdrxCk=", false, function() {\n    return [\n        _hyunwlee_hook__WEBPACK_IMPORTED_MODULE_3__.useModal\n    ];\n});\n_c = GalleryContainer;\n\nvar _c;\n$RefreshReg$(_c, "GalleryContainer");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9HYWxsZXJ5Q29udGFpbmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1U7QUFDZDtBQUNMO0FBQ0M7QUFDUDtBQUkvQixNQUFNTyxtQkFBcUM7UUFBQyxFQUFFQyxRQUFPLEVBQUU7O0lBQ3JELE1BQU0sRUFBQ0MsUUFBTyxFQUFFQyxPQUFNLEVBQUMsR0FBR1Asd0RBQVFBO0lBQ2xDLE1BQU1RLDZCQUNKLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1IsZ0RBQU1BO2dCQUFDUSxXQUFVOzBCQUE0Rjs7Ozs7OzBCQUc5Ryw4REFBQ1AsbURBQUtBO2dCQUFDUSxLQUFLTixRQUFRTyxPQUFPQztnQkFBU0MsT0FBT1QsUUFBUVUsTUFBTUYsUUFBUUM7Z0JBQU9FLFFBQVFYLFFBQVFVLE1BQU1GLFFBQVFHO2dCQUFRQyxLQUFLWixRQUFRYTs7Ozs7Ozs7Ozs7O0lBRy9ILHFCQUNFOzswQkFDRSw4REFBQ1Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDWixvREFBR0E7d0JBQUNZLFdBQVU7d0JBQXNETCxTQUFTQTt3QkFBU0UsUUFBUUE7Ozs7OztrQ0FDL0YsOERBQUNSLDREQUFXQTt3QkFDVlcsV0FBVTt3QkFDVkwsU0FBU0E7Ozs7Ozs7Ozs7OzswQkFHYiw4REFBQ0osOENBQUtBO2dCQUNKSyxTQUFTQTtnQkFDVGEsTUFBTVo7Z0JBQ05DLGNBQWNBO2dCQUNkWSxZQUFZZixRQUFRYTs7Ozs7Ozs7QUFJNUI7R0EzQk1kOztRQUNzQkosb0RBQVFBOzs7S0FEOUJJO0FBNkJzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVycy9HYWxsZXJ5Q29udGFpbmVyLnRzeD8wZjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFydCwgRGVzY3JpcHRpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvZ2FsbGVyeSc7XG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BoeXVud2xlZS9ob29rJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnQC9jb21wb25lbnRzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BoeXVud2xlZS91aSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgYXJ0RGF0YTogSUFydERhdGE7XG59XG5jb25zdCBHYWxsZXJ5Q29udGFpbmVyOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgYXJ0RGF0YSB9KSA9PiB7XG4gIGNvbnN0IHtpc1Nob3duLCB0b2dnbGV9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LXdoaXRlIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgYWJzb2x1dGUgLXRvcC05IHJpZ2h0LTAgaG92ZXI6dGV4dC1kYXJrLWdyYXknPlxuICAgICAgICBjbG9zZVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8SW1hZ2Ugc3JjPXthcnREYXRhLmltYWdlcy5nYWxsZXJ5fSB3aWR0aD17YXJ0RGF0YS5zaXplcy5nYWxsZXJ5LndpZHRofSBoZWlnaHQ9e2FydERhdGEuc2l6ZXMuZ2FsbGVyeS5oZWlnaHR9IGFsdD17YXJ0RGF0YS5uYW1lfS8+XG4gICAgPC9kaXY+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtZGVza3RvcDpmbGV4IGxhcmdlLWRlc2t0b3A6ZmxleC1yb3cgbGFyZ2UtZGVza3RvcDpmbGV4LW5vd3JhcCBsYXJnZS1kZXNrdG9wOmgtZnVsbCBsYXJnZS1kZXNrdG9wOmdhcC0xMFwiPlxuICAgICAgICA8QXJ0IGNsYXNzTmFtZT1cImxhcmdlLWRlc2t0b3A6ZmxleC1hdXRvIGxhcmdlLWRlc2t0b3A6bWluLXctWzQwMHB4XVwiIGFydERhdGE9e2FydERhdGF9IHRvZ2dsZT17dG9nZ2xlfS8+XG4gICAgICAgIDxEZXNjcmlwdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImxhcmdlLWRlc2t0b3A6ZmxleCBsYXJnZS1kZXNrdG9wOmZsZXgtY29sIGxhcmdlLWRlc2t0b3A6aC1mdWxsIGxhcmdlLWRlc2t0b3A6aXRlbXMtc3BhY2U7IGxhcmdlLWRlc2t0b3A6cHItMTAgbGFyZ2UtZGVza3RvcDptaW4tdy1bNDAwcHhdIGxhcmdlLWRlc2t0b3A6dy1bNDAlXVwiXG4gICAgICAgICAgYXJ0RGF0YT17YXJ0RGF0YX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzU2hvd249e2lzU2hvd259XG4gICAgICAgIGhpZGU9e3RvZ2dsZX1cbiAgICAgICAgbW9kYWxDb250ZW50PXttb2RhbENvbnRlbnR9XG4gICAgICAgIGhlYWRlclRleHQ9e2FydERhdGEubmFtZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgeyBHYWxsZXJ5Q29udGFpbmVyIH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcnQiLCJEZXNjcmlwdGlvbiIsInVzZU1vZGFsIiwiTW9kYWwiLCJCdXR0b24iLCJJbWFnZSIsIkdhbGxlcnlDb250YWluZXIiLCJhcnREYXRhIiwiaXNTaG93biIsInRvZ2dsZSIsIm1vZGFsQ29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImltYWdlcyIsImdhbGxlcnkiLCJ3aWR0aCIsInNpemVzIiwiaGVpZ2h0IiwiYWx0IiwibmFtZSIsImhpZGUiLCJoZWFkZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/GalleryContainer.tsx\n'
        )
      );

      /***/
    },
});
