"use strict";
exports.id = 314;
exports.ids = [314];
exports.modules = {

/***/ 3314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ DirectionContextProvider),
/* harmony export */   "v": () => (/* binding */ useDirectionState)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1261);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const DirectionStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
DirectionStateContext.displayName = "DirectionStateContext";
const DirectionContextProvider = ({ children  })=>{
    const [direction, setDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1000);
    const [exitDirection, setExitDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const directionStateValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            direction,
            setDirection,
            exitDirection,
            setExitDirection
        }), [
        direction,
        exitDirection
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DirectionStateContext.Provider, {
        value: directionStateValue,
        children: children
    });
};
const useDirectionState = ()=>{
    const directionState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DirectionStateContext);
    if (!directionState) {
        throw new ReferenceError("useDirectionState 훅은 DirectionState 컨텍스트 내부에서만 호출해야 합니다.");
    }
    return directionState;
};



/***/ })

};
;