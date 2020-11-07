import { combineReducers } from "redux";

import authReducer from "./authReducer";

// Remove while having a real reducer
const test = (state = {}, action) => state;

export default combineReducers({
  test,
  auth: authReducer,
});
