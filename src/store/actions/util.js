import axiosInstance from "../../axios";

import * as actionTypes from "./actionTypes";

export const getUserInfoStart = () => {
  return {
    type: actionTypes.GET_USER_INFO_START,
  };
};

export const getUserInfoSuccess = (token) => {
  return {
    type: actionTypes.GET_USER_INFO_SUCCESS,
    idToken: token,
  };
};

export const getUserInfoFail = (error) => {
  return {
    type: actionTypes.GET_USER_INFO_FAIL,
    error: error,
  };
};

export const getUserInfo = (token) => {
  return (dispatch) => {
    dispatch(getUserInfoStart());
    let url = "http://localhost:6080/me";
    axiosInstance
      .get(url, {
        headers: {
          "Authorization": token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        dispatch(getUserInfoSuccess(response));
      })
      .catch((err) => {
        dispatch(getUserInfoFail(err.response.data.error));
      });
  };
};
