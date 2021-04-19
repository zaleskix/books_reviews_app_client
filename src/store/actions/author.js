import * as actionTypes from "./actionTypes";
import axiosInstance from "../../axios";
const AUTHOR_URL = "http://localhost:6080/authors";

export const addAuthorSuccess = (id, authorData) => {
  return {
    type: actionTypes.ADD_AUTHOR_SUCCESS,
    authorId: id,
    authorData: authorData,
  };
};

export const addAuthorFail = (error) => {
  return {
    type: actionTypes.ADD_AUTHOR_FAIL,
    error: error,
  };
};

export const addAuthorStart = () => {
  return {
    type: actionTypes.ADD_AUTHOR_START,
  };
};

export const addAuthor = (authorData) => {
  return (dispatch) => {
    dispatch(addAuthorStart());
    axiosInstance
      .post(AUTHOR_URL, authorData)
      .then((response) => {
        dispatch(addAuthorSuccess(response.data.id, authorData));
      })
      .catch((error) => {
        dispatch(addAuthorFail(error));
      });
  };
};

export const getAuthorsStart = () => {
  return {
    type: actionTypes.GET_AUTHORS_START,
  };
};

export const getAuthorsFail = (error) => {
  return {
    type: actionTypes.GET_AUTHORS_FAIL,
    error: error,
  };
};

export const getAuthorsSuccess = (response) => {
  return {
    type: actionTypes.GET_AUTHORS_SUCCESS,
    authorData: response.data,
  };
};

export const getAuthors = (searchCriteria) => {
  return (dispatch) => {
    dispatch(getAuthorsStart());
    axiosInstance
      .get(AUTHOR_URL, {
        params: {
          ...searchCriteria,
        },
      })
      .then((response) => {
        dispatch(getAuthorsSuccess(response));
      })
      .catch((error) => {
        dispatch(getAuthorsFail(error));
      });
  };
};

export const getAuthorDetailsStart = () => {
  return {
    type: actionTypes.GET_AUTHOR_DETAILS_START,
  };
};

export const getAuthorDetailsFail = (error) => {
  return {
    type: actionTypes.GET_AUTHOR_DETAILS_FAIL,
    error: error,
  };
};

export const getAuthorDetailsSuccess = (response) => {
  return {
    type: actionTypes.GET_AUTHOR_DETAILS_SUCCESS,
    authorData: response.data,
  };
};

export const getAuthorDetails = (authorId) => {
  return (dispatch) => {
    dispatch(getAuthorDetailsStart());
    axiosInstance
      .get(AUTHOR_URL + "/" + authorId)
      .then((response) => {
        dispatch(getAuthorDetailsSuccess(response));
      })
      .catch((error) => {
        dispatch(getAuthorDetailsFail(error));
      });
  };
};

export const editAuthorStart = () => {
  return {
    type: actionTypes.EDIT_AUTHOR_START,
  };
};

export const editAuthorFail = (error) => {
  return {
    type: actionTypes.EDIT_AUTHOR_FAIL,
    error: error,
  };
};

export const editAuthorSuccess = () => {
  return {
    type: actionTypes.EDIT_AUTHOR_SUCCESS,
  };
};

export const editAuthor = (authorId, authorData) => {
  return (dispatch) => {
    dispatch(editAuthorStart());
    axiosInstance
      .put(AUTHOR_URL + "/" + authorId, authorData)
      .then(() => {
        dispatch(editAuthorSuccess());
      })
      .catch((error) => {
        dispatch(editAuthorFail(error));
      });
  };
};

export const removeAuthorStart = () => {
  return {
    type: actionTypes.REMOVE_AUTHOR_START,
  };
};

export const removeAuthorFail = (error) => {
  return {
    type: actionTypes.REMOVE_AUTHOR_FAIL,
    error: error,
  };
};

export const removeAuthorSuccess = () => {
  return {
    type: actionTypes.REMOVE_AUTHOR_SUCCESS,
    authorData: null,
  };
};

export const removeAuthor = (authorId) => {
  return (dispatch) => {
    dispatch(removeAuthorStart());
    axiosInstance
      .delete(AUTHOR_URL + "/" + authorId)
      .then(() => {
        dispatch(removeAuthorSuccess());
      })
      .catch((error) => {
        dispatch(removeAuthorFail(error));
      });
  };
};

export const upvoteAuthorStart = () => {
  return {
    type: actionTypes.UPVOTE_AUTHOR_START,
  };
};

export const upvoteAuthorFail = (error) => {
  return {
    type: actionTypes.UPVOTE_AUTHOR_FAIL,
    error: error,
  };
};

export const upvoteAuthorSuccess = (authorId) => {
  return {
    type: actionTypes.UPVOTE_AUTHOR_SUCCESS,
    authorId: authorId,
  };
};

export const upvoteAuthor = (authorId) => {
  return (dispatch) => {
    dispatch(upvoteAuthorStart());
    axiosInstance
        .post(AUTHOR_URL + "/" + authorId + "/upvote")
        .then((response) => {
          dispatch(upvoteAuthorSuccess(authorId));
          window.location.reload();
        })
        .catch((error) => {
          dispatch(upvoteAuthorFail(error));
        });
  };
};

export const downvoteAuthorStart = () => {
  return {
    type: actionTypes.DOWNVOTE_AUTHOR_START,
  };
};

export const downvoteAuthorFail = (error) => {
  return {
    type: actionTypes.DOWNVOTE_AUTHOR_FAIL,
    error: error,
  };
};

export const downvoteAuthorSuccess = (authorId) => {
  return {
    type: actionTypes.DOWNVOTE_AUTHOR_SUCCESS,
    authorId: authorId,
  };
};

export const downvoteAuthor = (authorId) => {
  return (dispatch) => {
    dispatch(downvoteAuthorStart());
    axiosInstance
        .post(AUTHOR_URL + "/" + authorId + "/downvote")
        .then((response) => {
          dispatch(downvoteAuthorSuccess(authorId));
          window.location.reload();
        })
        .catch((error) => {
          dispatch(downvoteAuthorFail(error));
        });
  };
};
