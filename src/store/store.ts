import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "@/store/slices/themeSlice";
import todoSlice from "@/store/slices/todoSlice";

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  todo: todoSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
