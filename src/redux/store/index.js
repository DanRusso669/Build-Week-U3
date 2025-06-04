import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchedExpReducer from "../reducers/fetchedExpReducer";
import fetchedProfile from "../reducers/fetchedProfile";

const rootReducer = combineReducers({
  experiences: fetchedExpReducer,
  profile: fetchedProfile,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
