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
  /***/ '../../packages/hook/src/useModal/useModal.tsx':
    /*!*****************************************************!*\
  !*** ../../packages/hook/src/useModal/useModal.tsx ***!
  \*****************************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "useModal": function() { return /* binding */ useModal; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useModal = ()=>{\n    _s();\n    const [isShown, setIsShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const toggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{\n        console.log("i clicked");\n        setIsShown(!isShown);\n    }, [\n        isShown\n    ]);\n    const onKeyDown = (event)=>{\n        if (event.key === "Escape" && isShown) setIsShown(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        isShown ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";\n        document.addEventListener("keydown", onKeyDown);\n        return ()=>{\n            document.removeEventListener("keydown", onKeyDown);\n        };\n    }, [\n        isShown\n    ]);\n    return {\n        isShown,\n        toggle\n    };\n};\n_s(useModal, "XQ8wmxwmNDRBA7oHeGk+pOPiPRE=");\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvaG9vay9zcmMvdXNlTW9kYWwvdXNlTW9kYWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUQ7QUFFekQsTUFBTUcsV0FBVzs7SUFDZixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBSUgsK0NBQVFBLENBQVU7SUFDakQsTUFBTUksU0FBU04sa0RBQVdBLENBQUM7UUFDekJPLFFBQVFDLElBQUk7UUFDWkgsV0FBVyxDQUFDRDtJQUNaLEdBQUc7UUFBQ0E7S0FBUTtJQUVkLE1BQU1LLFlBQVksQ0FBQ0M7UUFDakIsSUFBSUEsTUFBTUMsUUFBUSxZQUFZUCxTQUM1QkMsV0FBVztJQUNmO0lBQ0FKLGdEQUFTQSxDQUFDO1FBQ1JHLFVBQ0lRLFNBQVNDLEtBQUtDLE1BQU1DLFdBQVcsV0FDL0JILFNBQVNDLEtBQUtDLE1BQU1DLFdBQVc7UUFDbkNILFNBQVNJLGlCQUFpQixXQUFXUDtRQUNyQyxPQUFRO1lBQ05HLFNBQVNLLG9CQUFvQixXQUFXUjtRQUMxQztJQUNGLEdBQ0U7UUFBQ0w7S0FBUTtJQUNYLE9BQU87UUFDTEE7UUFDQUU7SUFDRjtBQUNGO0dBekJNSDtBQTJCWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi4vLi4vcGFja2FnZXMvaG9vay9zcmMvdXNlTW9kYWwvdXNlTW9kYWwudHN4Pzg0YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1Nob3duLCBzZXRJc1Nob3duXSAgPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaSBjbGlja2VkJyk7XG4gICAgc2V0SXNTaG93bighaXNTaG93bik7XG4gICAgfSwgW2lzU2hvd25dXG4gIClcbiAgY29uc3Qgb25LZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgJiYgaXNTaG93bilcbiAgICAgIHNldElzU2hvd24oZmFsc2UpOyBcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzU2hvd25cbiAgICAgID8gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgICA6IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndW5zZXQnO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xuICAgIHJldHVybiAoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XG4gICAgfSlcbiAgfVxuICAsIFtpc1Nob3duXSlcbiAgcmV0dXJuIHtcbiAgICBpc1Nob3duLFxuICAgIHRvZ2dsZVxuICB9XG59XG5cbmV4cG9ydCB7dXNlTW9kYWx9O1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNb2RhbCIsImlzU2hvd24iLCJzZXRJc1Nob3duIiwidG9nZ2xlIiwiY29uc29sZSIsImxvZyIsIm9uS2V5RG93biIsImV2ZW50Iiwia2V5IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../packages/hook/src/useModal/useModal.tsx\n'
        )
      );

      /***/
    },
});
