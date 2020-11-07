export const successAuth = (token) => {
  return {
    type: "AUTH_SUCCESS",
    token,
  };
};

export const authFailure = (error) => {
  return {
    type: "AUTH_FAILURE",
    error,
  };
};
