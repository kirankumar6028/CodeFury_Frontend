import { authFailure } from "../helper/authActionHelper";

const INITIAL_STATE = {
  accessToken: "",
  errorMessage: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return { ...state, accessToken: action.token, errorMessage: "" };
    case "AUTH_FAILURE":
      return { ...state, errorMessage: action.error };
    default:
      return state;
  }
};

export default authReducer;
