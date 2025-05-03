import axios from "axios";
import { LOGINFAILURE, LOGINLOADING, LOGINSUCCESS, LOGOUTFAILURE, LOGOUTLOADING, LOGOUTSUCCESS } from "./actionType"

import { loginUrl, VENDOR_LOGIN_URL } from "../utils/url";

export const loginFunction = (fromData, showToast, navigate) => {
  return async (dispatch) => {
    dispatch({ type: LOGINLOADING });

    const { role, ...restData } = fromData;


    const url = role === "vendor" ? VENDOR_LOGIN_URL : loginUrl;
    console.log(role)

    try {
      const response = await axios.post(url, restData);
      console.log("this is from loginFunction", response.data);

      if (
        response.data.msg === "please register first or please check email"
      ) {
        showToast(
          "Please register first",
          `${response.data.msg}`,
          "error"
        );
        dispatch({ type: LOGINFAILURE, payload: response.data });
      } else if (response.data.msg === "user login successfully") {
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        showToast("Login successful", `${response.data.msg}`);
        const redirectPath = localStorage.getItem("redirectPath");
        if (redirectPath) {
          localStorage.removeItem("redirectPath");
          navigate(redirectPath);
        } else {
          navigate("/");
        }
        dispatch({ type: LOGINSUCCESS, payload: response.data });
      } else if (response.data.msg === "please check password") {
        showToast("Check password", "Please check password", "error");
        dispatch({ type: LOGINFAILURE, payload: response.data.msg });
      } else {
        showToast(
          `${response.data.mes}`,
          `${response.data.mes}`,
          "error"
        );
        dispatch({ type: LOGINFAILURE, payload: response.data.msg });
      }
    } catch (error) {
      dispatch({ type: LOGINFAILURE, payload: error.message });
    }
  };
};



export function logoutfunction(navigate, showToast) {

  return async (dispatch) => {
    dispatch({ type: LOGOUTLOADING })
    try {
      dispatch({ type: LOGOUTSUCCESS })
      localStorage.removeItem('token');
      localStorage.removeItem('user');


      showToast(`Logout successfully`, "Logout successfully")

      navigate("/login")

    } catch (error) {
      dispatch({ type: LOGOUTFAILURE, payload: error.message })
      showToast(`${error.message}`, `${error.message}`, "error")

    }
  }
}