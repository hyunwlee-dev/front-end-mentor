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

/***/ "./src/components/Modal.tsx":
/*!**********************************!*\
  !*** ./src/components/Modal.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": function() { return /* binding */ Modal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"../../.yarn/__virtual__/react-dom-virtual-47080b5603/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Modal = (param)=>{\n    let { isShown , hide , modalContent , headerText  } = param;\n    const modal = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed w-full h-full top-0 left-0 bg-black/90 z-10\",\n                onClick: hide\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/Modal.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-auto outline-0\",\n                \"aria-modal\": true,\n                \"aria-labelledby\": headerText,\n                tabIndex: -1,\n                role: \"dialog\",\n                children: modalContent\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/Modal.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n    return isShown ? /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(modal, document.body) : null;\n};\n_c = Modal;\n\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDeEI7QUFTakMsTUFBTUUsUUFBMEI7UUFBQyxFQUFFQyxRQUFPLEVBQUVDLEtBQUksRUFBRUMsYUFBWSxFQUFFQyxXQUFVLEVBQUU7SUFDMUUsTUFBTUMsc0JBQ0o7OzBCQUNFLDhEQUFDQztnQkFBSUMsV0FBVztnQkFBcURDLFNBQVNOOzs7Ozs7MEJBQzlFLDhEQUFDSTtnQkFDQ0MsV0FBVztnQkFDWEUsWUFBVTtnQkFDVkMsbUJBQWlCTjtnQkFDakJPLFVBQVUsQ0FBQztnQkFDWEMsTUFBSzswQkFFSlQ7Ozs7Ozs7O0lBSVAsT0FBT0Ysd0JBQVVGLDZEQUFxQmMsQ0FBQ1IsT0FBT1MsU0FBU0MsUUFBUTtBQUNqRTtLQWhCTWY7QUFrQlciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwudHN4P2I5N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIGlzU2hvd246IGJvb2xlYW47XG4gIGhpZGU6ICgpID0+IHZvaWQ7XG4gIG1vZGFsQ29udGVudDogUmVhY3ROb2RlO1xuICBoZWFkZXJUZXh0OiBzdHJpbmc7XG59XG5cbmNvbnN0IE1vZGFsOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgaXNTaG93biwgaGlkZSwgbW9kYWxDb250ZW50LCBoZWFkZXJUZXh0IH0pID0+IHtcbiAgY29uc3QgbW9kYWwgPSAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZml4ZWQgdy1mdWxsIGgtZnVsbCB0b3AtMCBsZWZ0LTAgYmctYmxhY2svOTAgei0xMCd9IG9uQ2xpY2s9e2hpZGV9IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17J2ZpeGVkIHRvcC0xLzIgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHotMjAgdy1hdXRvIG91dGxpbmUtMCd9XG4gICAgICAgIGFyaWEtbW9kYWxcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtoZWFkZXJUZXh0fVxuICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgPlxuICAgICAgICB7bW9kYWxDb250ZW50fVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG4gIHJldHVybiBpc1Nob3duID8gUmVhY3RET00uY3JlYXRlUG9ydGFsKG1vZGFsLCBkb2N1bWVudC5ib2R5KSA6IG51bGw7XG59O1xuXG5leHBvcnQgeyBNb2RhbCB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJNb2RhbCIsImlzU2hvd24iLCJoaWRlIiwibW9kYWxDb250ZW50IiwiaGVhZGVyVGV4dCIsIm1vZGFsIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImFyaWEtbW9kYWwiLCJhcmlhLWxhYmVsbGVkYnkiLCJ0YWJJbmRleCIsInJvbGUiLCJjcmVhdGVQb3J0YWwiLCJkb2N1bWVudCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Modal.tsx\n"));

/***/ }),

/***/ "./src/components/gallery/art/ArtExtensionButton.tsx":
/*!***********************************************************!*\
  !*** ./src/components/gallery/art/ArtExtensionButton.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArtExtensionButton\": function() { return /* binding */ ArtExtensionButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hyunwlee_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hyunwlee/ui */ \"../../packages/ui/src/index.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"../../.yarn/__virtual__/next-virtual-f9f3e99ae8/0/cache/next-npm-13.4.4-eea4a310b2-d84686f3ca.zip/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst ArtExtensionButton = (param)=>{\n    let { toggle  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hyunwlee_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        type: \"button\",\n        onClick: toggle,\n        className: \"absolute top-5 left-5 hover:bg-dark-gray hover:opacity-90 tablet:top-auto tablet:bottom-5 tablet:z-10 bg-black flex px-5 py-3 gap-2 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: \"/shared/icon-view-image.svg\",\n                width: 10,\n                height: 10,\n                alt: \"view-image\"\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/art/ArtExtensionButton.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-white font-sans text-xs font-bold tracking-widest uppercase\",\n                children: \"view image\"\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/art/ArtExtensionButton.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/components/gallery/art/ArtExtensionButton.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ArtExtensionButton;\n\nvar _c;\n$RefreshReg$(_c, \"ArtExtensionButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5L2FydC9BcnRFeHRlbnNpb25CdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQUNSO0FBQ1A7QUFNL0IsTUFBTUcscUJBQXVDO1FBQUMsRUFBRUMsT0FBTSxFQUFFO0lBQ3RELHFCQUNFLDhEQUFDSCxnREFBTUE7UUFDTEksTUFBSztRQUNMQyxTQUFTRjtRQUNURyxXQUFVOzswQkFFViw4REFBQ0wsbURBQUtBO2dCQUFDTSxLQUFJO2dCQUE4QkMsT0FBTztnQkFBSUMsUUFBUTtnQkFBSUMsS0FBSTs7Ozs7OzBCQUNwRSw4REFBQ0M7Z0JBQUtMLFdBQVU7MEJBQW1FOzs7Ozs7Ozs7Ozs7QUFHekY7S0FYTUo7QUFhd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeS9hcnQvQXJ0RXh0ZW5zaW9uQnV0dG9uLnRzeD85NTc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BoeXVud2xlZS91aSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4ge1xuICB0b2dnbGU6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEFydEV4dGVuc2lvbkJ1dHRvbjogUmVhY3QuRkM8SVByb3BzPiA9ICh7IHRvZ2dsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBvbkNsaWNrPXt0b2dnbGV9XG4gICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNSBsZWZ0LTUgaG92ZXI6YmctZGFyay1ncmF5IGhvdmVyOm9wYWNpdHktOTAgdGFibGV0OnRvcC1hdXRvIHRhYmxldDpib3R0b20tNSB0YWJsZXQ6ei0xMCBiZy1ibGFjayBmbGV4IHB4LTUgcHktMyBnYXAtMiBpdGVtcy1jZW50ZXJcIlxuICAgID5cbiAgICAgIDxJbWFnZSBzcmM9XCIvc2hhcmVkL2ljb24tdmlldy1pbWFnZS5zdmdcIiB3aWR0aD17MTB9IGhlaWdodD17MTB9IGFsdD1cInZpZXctaW1hZ2VcIiAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNhbnMgdGV4dC14cyBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZVwiPnZpZXcgaW1hZ2U8L3NwYW4+XG4gICAgPC9CdXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgeyBBcnRFeHRlbnNpb25CdXR0b24gfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkltYWdlIiwiQXJ0RXh0ZW5zaW9uQnV0dG9uIiwidG9nZ2xlIiwidHlwZSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/gallery/art/ArtExtensionButton.tsx\n"));

/***/ }),

/***/ "./src/containers/GalleryContainer.tsx":
/*!*********************************************!*\
  !*** ./src/containers/GalleryContainer.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GalleryContainer\": function() { return /* binding */ GalleryContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/gallery */ \"./src/components/gallery/index.ts\");\n/* harmony import */ var _hyunwlee_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hyunwlee/hook */ \"../../packages/hook/src/index.ts\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var _hyunwlee_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hyunwlee/ui */ \"../../packages/ui/src/index.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"../../.yarn/__virtual__/next-virtual-f9f3e99ae8/0/cache/next-npm-13.4.4-eea4a310b2-d84686f3ca.zip/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst GalleryContainer = (param)=>{\n    let { artData  } = param;\n    _s();\n    const { isShown , toggle  } = (0,_hyunwlee_hook__WEBPACK_IMPORTED_MODULE_3__.useModal)();\n    const modalContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hyunwlee_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                className: \"text-sm text-white tracking-widest uppercase absolute -top-9 right-0 hover:text-dark-gray\",\n                onClick: toggle,\n                children: \"close\"\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                src: artData.images.gallery,\n                width: artData.sizes.gallery.width,\n                height: artData.sizes.gallery.height,\n                alt: artData.name\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"large-desktop:flex large-desktop:flex-row large-desktop:flex-nowrap large-desktop:h-full large-desktop:gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gallery__WEBPACK_IMPORTED_MODULE_2__.Art, {\n                        className: \"large-desktop:flex-auto large-desktop:min-w-[400px]\",\n                        artData: artData,\n                        toggle: toggle\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gallery__WEBPACK_IMPORTED_MODULE_2__.Description, {\n                        className: \"large-desktop:flex large-desktop:flex-col large-desktop:h-full large-desktop:items-space; large-desktop:pr-10 large-desktop:min-w-[400px] large-desktop:w-[40%]\",\n                        artData: artData\n                    }, void 0, false, {\n                        fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                isShown: isShown,\n                hide: toggle,\n                modalContent: modalContent,\n                headerText: artData.name\n            }, void 0, false, {\n                fileName: \"/home/hyunwlee/Projects/front-end-mentor/apps/galleria-slideshow-site/src/containers/GalleryContainer.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(GalleryContainer, \"tdM7CkIQtAvgCLFf3RfmGwZqRSE=\", false, function() {\n    return [\n        _hyunwlee_hook__WEBPACK_IMPORTED_MODULE_3__.useModal\n    ];\n});\n_c = GalleryContainer;\n\nvar _c;\n$RefreshReg$(_c, \"GalleryContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9HYWxsZXJ5Q29udGFpbmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1U7QUFDZDtBQUNMO0FBQ0M7QUFDUDtBQUkvQixNQUFNTyxtQkFBcUM7UUFBQyxFQUFFQyxRQUFPLEVBQUU7O0lBQ3JELE1BQU0sRUFBRUMsUUFBTyxFQUFFQyxPQUFNLEVBQUUsR0FBR1Asd0RBQVFBO0lBQ3BDLE1BQU1RLDZCQUNKLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1IsZ0RBQU1BO2dCQUNMUSxXQUFVO2dCQUNWQyxTQUFTSjswQkFDVjs7Ozs7OzBCQUdELDhEQUFDSixtREFBS0E7Z0JBQ0pTLEtBQUtQLFFBQVFRLE9BQU9DO2dCQUNwQkMsT0FBT1YsUUFBUVcsTUFBTUYsUUFBUUM7Z0JBQzdCRSxRQUFRWixRQUFRVyxNQUFNRixRQUFRRztnQkFDOUJDLEtBQUtiLFFBQVFjOzs7Ozs7Ozs7Ozs7SUFJbkIscUJBQ0U7OzBCQUNFLDhEQUFDVjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNaLG9EQUFHQTt3QkFBQ1ksV0FBVTt3QkFBc0RMLFNBQVNBO3dCQUFTRSxRQUFRQTs7Ozs7O2tDQUMvRiw4REFBQ1IsNERBQVdBO3dCQUNWVyxXQUFVO3dCQUNWTCxTQUFTQTs7Ozs7Ozs7Ozs7OzBCQUdiLDhEQUFDSiw4Q0FBS0E7Z0JBQUNLLFNBQVNBO2dCQUFTYyxNQUFNYjtnQkFBUUMsY0FBY0E7Z0JBQWNhLFlBQVloQixRQUFRYzs7Ozs7Ozs7QUFHN0Y7R0E5Qk1mOztRQUN3Qkosb0RBQVFBOzs7S0FEaENJO0FBZ0NzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVycy9HYWxsZXJ5Q29udGFpbmVyLnRzeD8wZjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFydCwgRGVzY3JpcHRpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvZ2FsbGVyeSc7XG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BoeXVud2xlZS9ob29rJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnQC9jb21wb25lbnRzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BoeXVud2xlZS91aSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgYXJ0RGF0YTogSUFydERhdGE7XG59XG5jb25zdCBHYWxsZXJ5Q29udGFpbmVyOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgYXJ0RGF0YSB9KSA9PiB7XG4gIGNvbnN0IHsgaXNTaG93biwgdG9nZ2xlIH0gPSB1c2VNb2RhbCgpO1xuICBjb25zdCBtb2RhbENvbnRlbnQgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSBhYnNvbHV0ZSAtdG9wLTkgcmlnaHQtMCBob3Zlcjp0ZXh0LWRhcmstZ3JheVwiXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZX1cbiAgICAgID5cbiAgICAgICAgY2xvc2VcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17YXJ0RGF0YS5pbWFnZXMuZ2FsbGVyeX1cbiAgICAgICAgd2lkdGg9e2FydERhdGEuc2l6ZXMuZ2FsbGVyeS53aWR0aH1cbiAgICAgICAgaGVpZ2h0PXthcnREYXRhLnNpemVzLmdhbGxlcnkuaGVpZ2h0fVxuICAgICAgICBhbHQ9e2FydERhdGEubmFtZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtZGVza3RvcDpmbGV4IGxhcmdlLWRlc2t0b3A6ZmxleC1yb3cgbGFyZ2UtZGVza3RvcDpmbGV4LW5vd3JhcCBsYXJnZS1kZXNrdG9wOmgtZnVsbCBsYXJnZS1kZXNrdG9wOmdhcC0xMFwiPlxuICAgICAgICA8QXJ0IGNsYXNzTmFtZT1cImxhcmdlLWRlc2t0b3A6ZmxleC1hdXRvIGxhcmdlLWRlc2t0b3A6bWluLXctWzQwMHB4XVwiIGFydERhdGE9e2FydERhdGF9IHRvZ2dsZT17dG9nZ2xlfSAvPlxuICAgICAgICA8RGVzY3JpcHRpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJsYXJnZS1kZXNrdG9wOmZsZXggbGFyZ2UtZGVza3RvcDpmbGV4LWNvbCBsYXJnZS1kZXNrdG9wOmgtZnVsbCBsYXJnZS1kZXNrdG9wOml0ZW1zLXNwYWNlOyBsYXJnZS1kZXNrdG9wOnByLTEwIGxhcmdlLWRlc2t0b3A6bWluLXctWzQwMHB4XSBsYXJnZS1kZXNrdG9wOnctWzQwJV1cIlxuICAgICAgICAgIGFydERhdGE9e2FydERhdGF9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNb2RhbCBpc1Nob3duPXtpc1Nob3dufSBoaWRlPXt0b2dnbGV9IG1vZGFsQ29udGVudD17bW9kYWxDb250ZW50fSBoZWFkZXJUZXh0PXthcnREYXRhLm5hbWV9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgeyBHYWxsZXJ5Q29udGFpbmVyIH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcnQiLCJEZXNjcmlwdGlvbiIsInVzZU1vZGFsIiwiTW9kYWwiLCJCdXR0b24iLCJJbWFnZSIsIkdhbGxlcnlDb250YWluZXIiLCJhcnREYXRhIiwiaXNTaG93biIsInRvZ2dsZSIsIm1vZGFsQ29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcmMiLCJpbWFnZXMiLCJnYWxsZXJ5Iiwid2lkdGgiLCJzaXplcyIsImhlaWdodCIsImFsdCIsIm5hbWUiLCJoaWRlIiwiaGVhZGVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/containers/GalleryContainer.tsx\n"));

/***/ })

});