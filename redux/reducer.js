const initState = {
  errorModal: {
    show: false,
    message: "",
  },
  validModal: {
    show: false,
    message: "",
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_ERROR_MODAL":
      return {
        ...state,
        errorModal: {
          show: action.payload.show,
          message: action.payload.message,
        },
      };
    case "UPDATE_VALID_MODAL":
      return {
        ...state,
        validModal: {
          show: action.payload.show,
          message: action.payload.message,
        },
      };
    default:
      return state;
  }
};

export default reducer;
