const initialState = {
  isOn: false,
  selectedRow: null,
};

const isHoverOnReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRUE":
      return {
        isOn: true,
        selectedRow: action.payload,
      };
    case "FALSE":
      return {
        isOn: false,
        selectedRow: null,
      };
    default:
      return state;
  }
};

export default isHoverOnReducer;
