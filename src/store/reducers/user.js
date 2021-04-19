import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utils";

const initialState = {
  users: [],
  userDetails: {},
  loading: false,
  actionFinished: false,
  registerProcess: false
};

const addUserStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false});
};

const addUserSuccess = (state, action) => {
  const newUser = updateObject(action.userData, { id: action.userId });
  return updateObject(state, {
    loading: false,
    users: state.users.concat(newUser),
    actionFinished: true,
    registerProcess: true
  });
};

const addUserFail = (state) => {
  return updateObject(state, { loading: false});
};

const getUsersStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const getUsersSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    users: action.userData,
    actionFinished: true,
  });
};

const getUsersFail = (state) => {
  return updateObject(state, { loading: false });
};

const getUserDetailsStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const getUserDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    userDetails: action.userData,
    actionFinished: true,
  });
};

const getUserDetailsFail = (state) => {
  return updateObject(state, { loading: false });
};

const editUserStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const editUserSuccess = (state) => {
  return updateObject(state, { loading: false, actionFinished: true });
};

const editUserFail = (state) => {
  return updateObject(state, { loading: false });
};

const removeUserStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const removeUserSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    actionFinished: true,
  });
};

const removeUserFail = (state) => {
  return updateObject(state, { loading: false });
};

const finishRegistration = (state) => {
  return updateObject(state, { registerProcess: false });
};

const addFavToUserStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const addFavToUserSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    actionFinished: true,
  });
};

const addFavToUserFail = (state) => {
  return updateObject(state, { loading: false });
};

const removeFavToUserStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const removeFavToUserSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    actionFinished: true,
  });
};

const removeFavToUserFail = (state) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER_START:
      return addUserStart(state);
    case actionTypes.ADD_USER_SUCCESS:
      return addUserSuccess(state, action);
    case actionTypes.ADD_USER_FAIL:
      return addUserFail(state);
    case actionTypes.GET_USERS_START:
      return getUsersStart(state);
    case actionTypes.GET_USERS_SUCCESS:
      return getUsersSuccess(state, action);
    case actionTypes.GET_USERS_FAIL:
      return getUsersFail(state);
    case actionTypes.GET_USER_DETAILS_START:
      return getUserDetailsStart(state);
    case actionTypes.GET_USER_DETAILS_SUCCESS:
      return getUserDetailsSuccess(state, action);
    case actionTypes.GET_USER_DETAILS_FAIL:
      return getUserDetailsFail(state);
    case actionTypes.EDIT_USER_START:
      return editUserStart(state);
    case actionTypes.EDIT_USER_SUCCESS:
      return editUserSuccess(state);
    case actionTypes.EDIT_USER_FAIL:
      return editUserFail(state);
    case actionTypes.REMOVE_USER_START:
      return removeUserStart(state);
    case actionTypes.REMOVE_USER_SUCCESS:
      return removeUserSuccess(state);
    case actionTypes.REMOVE_USER_FAIL:
      return removeUserFail(state);
    case actionTypes.FINISH_REGISTER:
      return finishRegistration(state);
    case actionTypes.ADD_FAV_USER_START:
      return addFavToUserStart(state);
    case actionTypes.ADD_FAV_USER_SUCCESS:
      return addFavToUserSuccess(state);
    case actionTypes.ADD_FAV_USER_FAIL:
      return addFavToUserFail(state);
    case actionTypes.REMOVE_FAV_USER_START:
      return removeFavToUserStart(state);
    case actionTypes.REMOVE_FAV_USER_SUCCESS:
      return removeFavToUserSuccess(state);
    case actionTypes.REMOVE_FAV_USER_FAIL:
      return removeFavToUserFail(state);
    default:
      return state;
  }
};

export default reducer;
