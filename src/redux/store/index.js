import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchedExpReducer from "../reducers/fetchedExpReducer";

const rootReducer = combineReducers({
  experiences: fetchedExpReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
