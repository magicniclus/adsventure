export const updateErrorModal = (show, message) => {
  return {
    type: "UPDATE_ERROR_MODAL",
    payload: {
      show,
      message,
    },
  };
};

export const updateValidModal = (show, message) => {
  return {
    type: "UPDATE_VALID_MODAL",
    payload: {
      show,
      message,
    },
  };
};
