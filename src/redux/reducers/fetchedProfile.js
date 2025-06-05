import { GET_PROFILE, GET_MY_PROFILE } from "../actions";

const initialState = {
  content: {},
  myProfile: {},
};

const fetchedProfile = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    case GET_MY_PROFILE:
      return {
        ...state,
        myProfile: action.payload,
      };
    default:
      return state;
  }
};

export default fetchedProfile;
