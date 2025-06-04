import { GET_EXPERS } from "../actions";

const initialState = {
  content: [],
};

const fetchedExpReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default fetchedExpReducer;
