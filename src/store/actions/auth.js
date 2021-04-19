import axiosInstance from "../../axios";

import * as actionTypes from "./actionTypes";
import { getUserInfo } from "./util";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const finishLogin = () => {
  return {
    type: actionTypes.FINISH_LOGIN,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(refreshToken());
    }, 5);
  };
};

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      username: username,
      password: password,
    };
    let url = "http://localhost:6080/login";
    axiosInstance
      .post(url, authData)
      .then((response) => {
        let token = response.headers["authorization"];
        localStorage.setItem("token", token);
        dispatch(authSuccess(token));
        dispatch(getUserInfo(token));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const refreshToken = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      let url = "http://localhost:6080/token/refresh";
      axiosInstance
        .get(url)
        .then((response) => {
          let token = response.headers["authorization"];
          localStorage.setItem("token", token);
          dispatch(authSuccess(token));
        })
        .catch((err) => {
          dispatch(authFail(err.response.data.error));
        });
    }
  };
};
