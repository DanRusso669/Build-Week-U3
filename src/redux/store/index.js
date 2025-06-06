import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchedExpReducer from "../reducers/fetchedExpReducer";
import fetchedProfile from "../reducers/fetchedProfile";
import isHoverOnReducer from "../reducers/isHoverOnReducer";
import fetchedPostReducer from "../reducers/fetchedPostReducer";

const rootReducer = combineReducers({
  experiences: fetchedExpReducer,
  profile: fetchedProfile,
  isHoverOn: isHoverOnReducer,
  posts: fetchedPostReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
