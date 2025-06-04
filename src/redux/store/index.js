import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchedExpReducer from "../reducers/fetchedExpReducer";
import isHoverOnReducer from "../reducers/isHoverOnReducer";

const rootReducer = combineReducers({
  experiences: fetchedExpReducer,
  isHoverOn: isHoverOnReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
