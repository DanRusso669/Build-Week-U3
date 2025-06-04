import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchedExpReducer from "../reducers/fetchedExpReducer";
import fetchedProfile from "../reducers/fetchedProfile";
import isHoverOnReducer from "../reducers/isHoverOnReducer";

const rootReducer = combineReducers({
  experiences: fetchedExpReducer,
  profile: fetchedProfile,
  isHoverOn: isHoverOnReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
