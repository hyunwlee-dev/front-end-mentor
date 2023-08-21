"use strict";
exports.id = 502;
exports.ids = [502];
exports.modules = {

/***/ 7058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X8": () => (/* binding */ toggleTheme),
/* harmony export */   "Xx": () => (/* binding */ initTheme),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2744);


const themeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "theme",
    initialState: _types_theme__WEBPACK_IMPORTED_MODULE_1__/* .Theme.LIGHT */ .Q.LIGHT,
    reducers: {
        initTheme: (_, action)=>{
            if (action.payload === _types_theme__WEBPACK_IMPORTED_MODULE_1__/* .Theme.DARK */ .Q.DARK) {
                return _types_theme__WEBPACK_IMPORTED_MODULE_1__/* .Theme.DARK */ .Q.DARK;
            } else {
                return _types_theme__WEBPACK_IMPORTED_MODULE_1__/* .Theme.LIGHT */ .Q.LIGHT;
            }
        },
        toggleTheme: (state)=>{
            let newState = _types_theme__WEBPACK_IMPORTED_MODULE_1__/* .Theme.LIGHT */ .Q.LIGHT;
            if (state === _types_theme__WEBPACK_IMPORTED_MODULE_1__/* .Theme.LIGHT */ .Q.LIGHT) {
                newState = _types_theme__WEBPACK_IMPORTED_MODULE_1__/* .Theme.DARK */ .Q.DARK;
            }
            localStorage.setItem("theme", _types_theme__WEBPACK_IMPORTED_MODULE_1__/* .Theme.toString */ .Q.toString(newState));
            return newState;
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeSlice);
const { initTheme , toggleTheme  } = themeSlice.actions;


/***/ }),

/***/ 1806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CU": () => (/* binding */ updateTodo),
/* harmony export */   "Lw": () => (/* binding */ updateTodoList),
/* harmony export */   "Po": () => (/* binding */ clearTodo),
/* harmony export */   "Xd": () => (/* binding */ removeTodo),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gO": () => (/* binding */ initTodoList),
/* harmony export */   "rk": () => (/* binding */ addTodo)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const todoSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "todo",
    initialState: [],
    reducers: {
        initTodoList: (_, action)=>{
            return action.payload;
        },
        addTodo: (state, action)=>{
            const { text , completed  } = action.payload;
            const updatedTodos = [
                ...state,
                {
                    id: state.length + 1,
                    text,
                    completed
                }
            ];
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        },
        removeTodo: (state, action)=>{
            const { id  } = action.payload;
            const updatedTodos = state.filter(({ id: _id  })=>_id !== id);
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        },
        updateTodo: (state, action)=>{
            const { id , text , completed  } = action.payload;
            const updatedTodos = state.map((todo)=>{
                if (todo.id === id) {
                    return {
                        id,
                        text,
                        completed
                    };
                }
                return todo;
            });
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        },
        updateTodoList: (state, action)=>{
            const updatedTodos = action.payload;
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        },
        clearTodo: ()=>{
            localStorage.setItem("todos", JSON.stringify([]));
            return [];
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoSlice);
const { initTodoList , addTodo , removeTodo , updateTodo , updateTodoList , clearTodo  } = todoSlice.actions;


/***/ }),

/***/ 2744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ Theme)
/* harmony export */ });
var Theme;
(function(Theme) {
    Theme[Theme["LIGHT"] = 0] = "LIGHT";
    Theme[Theme["DARK"] = 1] = "DARK";
})(Theme || (Theme = {}));
(function(Theme1) {
    function toString(theme) {
        return Theme[theme];
    }
    Theme1.toString = toString;
    function fromString(theme) {
        return Theme[theme];
    }
    Theme1.fromString = fromString;
})(Theme || (Theme = {}));


/***/ })

};
;