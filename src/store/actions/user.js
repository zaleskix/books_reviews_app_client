import * as actionTypes from "./actionTypes";
import axiosInstance from "../../axios";
import {getUserInfo} from "./util";

const USER_URL = "http://localhost:6080/users";

export const addUserSuccess = (id, userData) => {
  return {
    type: actionTypes.ADD_USER_SUCCESS,
    userId: id,
    userData: userData,
  };
};

export const addUserFail = (error) => {
  return {
    type: actionTypes.ADD_USER_FAIL,
    error: error,
  };
};

export const addUserStart = () => {
  return {
    type: actionTypes.ADD_USER_START,
  };
};

export const addUser = (userData) => {
  return (dispatch) => {
    dispatch(addUserStart());
    axiosInstance
      .post(USER_URL, userData)
      .then((response) => {
        dispatch(addUserSuccess(response.data.id, userData));
      })
      .catch((error) => {
        dispatch(addUserFail(error));
      });
  };
};

export const getUsersStart = () => {
  return {
    type: actionTypes.GET_USERS_START,
  };
};

export const getUsersFail = (error) => {
  return {
    type: actionTypes.GET_USERS_FAIL,
    error: error,
  };
};

export const getUsersSuccess = (response) => {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    userData: response.data,
  };
};

export const getUsers = (searchCriteria) => {
  return (dispatch) => {
    dispatch(getUsersStart());
    axiosInstance
      .get(USER_URL, {
        params: {
          ...searchCriteria,
        },
      })
      .then((response) => {
        dispatch(getUsersSuccess(response));
      })
      .catch((error) => {
        dispatch(getUsersFail(error));
      });
  };
};

export const getUserDetailsStart = () => {
  return {
    type: actionTypes.GET_USER_DETAILS_START,
  };
};

export const getUserDetailsFail = (error) => {
  return {
    type: actionTypes.GET_USER_DETAILS_FAIL,
    error: error,
  };
};

export const getUserDetailsSuccess = (response) => {
  return {
    type: actionTypes.GET_USER_DETAILS_SUCCESS,
    userData: response.data,
  };
};

export const getUserDetails = (userId) => {
  return (dispatch) => {
    dispatch(getUserDetailsStart());
    axiosInstance
      .get(USER_URL + "/" + userId)
      .then((response) => {
        dispatch(getUserDetailsSuccess(response));
      })
      .catch((error) => {
        dispatch(getUserDetailsFail(error));
      });
  };
};

export const editUserStart = () => {
  return {
    type: actionTypes.EDIT_USER_START,
  };
};

export const editUserFail = (error) => {
  return {
    type: actionTypes.EDIT_USER_FAIL,
    error: error,
  };
};

export const editUserSuccess = () => {
  return {
    type: actionTypes.EDIT_USER_SUCCESS,
  };
};

export const editUser = (userId, userData) => {
  return (dispatch) => {
    dispatch(editUserStart());
    axiosInstance
      .put(USER_URL + "/" + userId, userData)
      .then(() => {
        dispatch(editUserSuccess());
        dispatch(getUserInfo())
      })
      .catch((error) => {
        dispatch(editUserFail(error));
      });
  };
};

export const removeUserStart = () => {
  return {
    type: actionTypes.REMOVE_USER_START,
  };
};

export const removeUserFail = (error) => {
  return {
    type: actionTypes.REMOVE_USER_FAIL,
    error: error,
  };
};

export const removeUserSuccess = () => {
  return {
    type: actionTypes.REMOVE_USER_SUCCESS,
    userData: null,
  };
};

export const removeUser = (userId) => {
  return (dispatch) => {
    dispatch(removeUserStart());
    axiosInstance
      .delete(USER_URL + "/" + userId)
      .then(() => {
        dispatch(removeUserSuccess());
      })
      .catch((error) => {
        dispatch(removeUserFail(error));
      });
  };
};

export const finishRegister = () => {
  return {
    type: actionTypes.FINISH_REGISTER,
  };
};

export const addFavToUserStart = () => {
  return {
    type: actionTypes.ADD_FAV_USER_START,
  };
};

export const addFavToUserFail = (error) => {
  return {
    type: actionTypes.ADD_FAV_USER_FAIL,
    error: error,
  };
};

export const addFavToUserSuccess = () => {
  return {
    type: actionTypes.ADD_FAV_USER_SUCCESS,
    userData: null,
  };
};

export const addFavToUser = (userId, favId) => {
  return (dispatch) => {
    dispatch(addFavToUserStart());
    axiosInstance
        .post(USER_URL + "/" + userId + "/addFavourite", {
          "favResourceId": favId
        })
        .then(() => {
          dispatch(addFavToUserSuccess());
          dispatch(getUserInfo())
        })
        .catch((error) => {
          dispatch(addFavToUserFail(error));
        });
  };
};

export const removeFavToUserStart = () => {
  return {
    type: actionTypes.REMOVE_FAV_USER_START,
  };
};

export const removeFavToUserFail = (error) => {
  return {
    type: actionTypes.REMOVE_FAV_USER_FAIL,
    error: error,
  };
};

export const removeFavToUserSuccess = () => {
  return {
    type: actionTypes.REMOVE_FAV_USER_SUCCESS,
    userData: null,
  };
};

export const removeFavToUser = (userId, favId) => {
  return (dispatch) => {
    dispatch(removeFavToUserStart());
    axiosInstance
        .post(USER_URL + "/" + userId + "/removeFavourite", {
          "favResourceId": favId
        })
        .then(() => {
          dispatch(removeFavToUserSuccess());
          dispatch(getUserInfo())
        })
        .catch((error) => {
          dispatch(removeFavToUserFail(error));
        });
  };
};