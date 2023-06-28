import { configureStore, combineReducers } from "@reduxjs/toolkit";
import stepSlice from "./slices/stepSlice";

const rootReducer = combineReducers({
  step: stepSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
