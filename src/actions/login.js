import { baseApi, loginApi } from "../api/index.js";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { successAuth, authFailure } from "../helper/authActionHelper";

const login = (credential) => {
  console.log("done");
  console.log(credential, `${baseApi}`);
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${baseApi}${loginApi}`, {
        ...credential,
      });
      await AsyncStorage.setItem("access_token", data.access_token);
      dispatch(successAuth(data.access_token));
    } catch (e) {
      console.log(e);
      dispatch(authFailure(e.message));
    }
  };
};

export default login;
