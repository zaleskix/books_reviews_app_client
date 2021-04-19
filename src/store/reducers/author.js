import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utils";

const initialState = {
  authors: [],
  authorDetails: {},
  loading: false,
  actionFinished: false,
  ratedAuthors: [],
};

const addAuthorStart = (state, action) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const addAuthorSuccess = (state, action) => {
  const newAuthor = updateObject(action.authorData, { id: action.authorId });
  return updateObject(state, {
    loading: false,
    authors: state.authors.concat(newAuthor),
    actionFinished: true,
  });
};

const addAuthorFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const getAuthorsStart = (state, action) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const getAuthorsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    authors: action.authorData,
    actionFinished: true,
  });
};

const getAuthorsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const getAuthorDetailsStart = (state, action) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const getAuthorDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    authorDetails: action.authorData,
    actionFinished: true,
  });
};

const getAuthorDetailsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const editAuthorStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const editAuthorSuccess = (state) => {
  return updateObject(state, {loading: false, actionFinished: true});
};

const editAuthorFail = (state) => {
  return updateObject(state, { loading: false });
};

const removeAuthorStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const removeAuthorSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    actionFinished: true
  });
};

const removeAuthorFail = (state) => {
  return updateObject(state, { loading: false });
};

const upvoteAuthorStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const upvoteAuthorSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    ratedAuthors: state.ratedAuthors
        ? state.ratedAuthors.includes(action.authorId)
            ? null
            : state.ratedAuthors.concat(action.authorId)
        : [action.authorId],
    actionFinished: true
  });
};

const upvoteAuthorFail = (state) => {
  return updateObject(state, { loading: false });
};

const downvoteAuthorStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const downvoteAuthorSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    ratedAuthors: state.ratedAuthors
        ? state.ratedAuthors.includes(action.authorId)
            ? null
            : state.ratedAuthors.concat(action.authorId)
        : [action.authorId],
    actionFinished: true
  });
};

const downvoteAuthorFail = (state) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_AUTHOR_START:
      return addAuthorStart(state, action);
    case actionTypes.ADD_AUTHOR_SUCCESS:
      return addAuthorSuccess(state, action);
    case actionTypes.ADD_AUTHOR_FAIL:
      return addAuthorFail(state, action);
    case actionTypes.GET_AUTHORS_START:
      return getAuthorsStart(state, action);
    case actionTypes.GET_AUTHORS_SUCCESS:
      return getAuthorsSuccess(state, action);
    case actionTypes.GET_AUTHORS_FAIL:
      return getAuthorsFail(state, action);
    case actionTypes.GET_AUTHOR_DETAILS_START:
      return getAuthorDetailsStart(state, action);
    case actionTypes.GET_AUTHOR_DETAILS_SUCCESS:
      return getAuthorDetailsSuccess(state, action);
    case actionTypes.GET_AUTHOR_DETAILS_FAIL:
      return getAuthorDetailsFail(state, action);
    case actionTypes.EDIT_AUTHOR_START:
      return editAuthorStart(state);
    case actionTypes.EDIT_AUTHOR_SUCCESS:
      return editAuthorSuccess(state);
    case actionTypes.EDIT_AUTHOR_FAIL:
      return editAuthorFail(state);
    case actionTypes.REMOVE_AUTHOR_START:
      return removeAuthorStart(state);
    case actionTypes.REMOVE_AUTHOR_SUCCESS:
      return removeAuthorSuccess(state);
    case actionTypes.REMOVE_AUTHOR_FAIL:
      return removeAuthorFail(state);
    case actionTypes.UPVOTE_AUTHOR_START:
      return upvoteAuthorStart(state);
    case actionTypes.UPVOTE_AUTHOR_SUCCESS:
      return upvoteAuthorSuccess(state, action);
    case actionTypes.UPVOTE_AUTHOR_FAIL:
      return upvoteAuthorFail(state);
    case actionTypes.DOWNVOTE_AUTHOR_START:
      return downvoteAuthorStart(state);
    case actionTypes.DOWNVOTE_AUTHOR_SUCCESS:
      return downvoteAuthorSuccess(state, action);
    case actionTypes.DOWNVOTE_AUTHOR_FAIL:
      return downvoteAuthorFail(state);
    default:
      return state;
  }
};

export default reducer;
