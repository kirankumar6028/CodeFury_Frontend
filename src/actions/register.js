import { baseApi, registerApi } from "../api/index.js";
import axios from "axios";
import { successAuth, authFailure } from "../helper/authActionHelper";
import AsyncStorage from "@react-native-community/async-storage";

const register = (credential) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${baseApi}${registerApi}`, {
        ...credential,
      });
      await AsyncStorage.setItem("access_token", data.access_token);
      dispatch(successAuth(data.access_token));
    } catch (e) {
      dispatch(authFailure(e.message));
    }
  };
};

export default register;
