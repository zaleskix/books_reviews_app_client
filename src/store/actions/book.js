import * as actionTypes from "./actionTypes";
import axiosInstance from "../../axios";

const BOOK_URL = "http://localhost:6080/books";

export const addBookSuccess = (id, bookData) => {
  return {
    type: actionTypes.ADD_BOOK_SUCCESS,
    bookId: id,
    bookData: bookData,
  };
};

export const addBookFail = (error) => {
  return {
    type: actionTypes.ADD_BOOK_FAIL,
    error: error,
  };
};

export const addBookStart = () => {
  return {
    type: actionTypes.ADD_BOOK_START,
  };
};

export const addBook = (bookData) => {
  return (dispatch) => {
    dispatch(addBookStart());
    axiosInstance
      .post(BOOK_URL, bookData)
      .then((response) => {
        dispatch(addBookSuccess(response.data.id, bookData));
      })
      .catch((error) => {
        dispatch(addBookFail(error));
      });
  };
};

export const getBooksStart = () => {
  return {
    type: actionTypes.GET_BOOKS_START,
  };
};

export const getBooksFail = (error) => {
  return {
    type: actionTypes.GET_BOOKS_FAIL,
    error: error,
  };
};

export const getBooksSuccess = (response) => {
  return {
    type: actionTypes.GET_BOOKS_SUCCESS,
    bookData: response.data,
  };
};

export const getBooks = (searchCriteria) => {
  return (dispatch) => {
    dispatch(getBooksStart());
    axiosInstance
      .get(BOOK_URL, {
        params: {
          ...searchCriteria,
        },
      })
      .then((response) => {
        dispatch(getBooksSuccess(response));
      })
      .catch((error) => {
        dispatch(getBooksFail(error));
      });
  };
};

export const getBookDetailsStart = () => {
  return {
    type: actionTypes.GET_BOOK_DETAILS_START,
  };
};

export const getBookDetailsFail = (error) => {
  return {
    type: actionTypes.GET_BOOK_DETAILS_FAIL,
    error: error,
  };
};

export const getBookDetailsSuccess = (response) => {
  return {
    type: actionTypes.GET_BOOK_DETAILS_SUCCESS,
    bookData: response.data,
  };
};

export const getBookDetails = (bookId) => {
  return (dispatch) => {
    dispatch(getBookDetailsStart());
    axiosInstance
      .get(BOOK_URL + "/" + bookId)
      .then((response) => {
        dispatch(getBookDetailsSuccess(response));
      })
      .catch((error) => {
        dispatch(getBookDetailsFail(error));
      });
  };
};

export const editBookStart = () => {
  return {
    type: actionTypes.EDIT_BOOK_START,
  };
};

export const editBookFail = (error) => {
  return {
    type: actionTypes.EDIT_BOOK_FAIL,
    error: error,
  };
};

export const editBookSuccess = () => {
  return {
    type: actionTypes.EDIT_BOOK_SUCCESS,
  };
};

export const editBook = (bookId, bookData) => {
  return (dispatch) => {
    dispatch(editBookStart());
    axiosInstance
      .put(BOOK_URL + "/" + bookId, bookData)
      .then(() => {
        dispatch(editBookSuccess());
      })
      .catch((error) => {
        dispatch(editBookFail(error));
      });
  };
};

export const removeBookStart = () => {
  return {
    type: actionTypes.REMOVE_BOOK_START,
  };
};

export const removeBookFail = (error) => {
  return {
    type: actionTypes.REMOVE_BOOK_FAIL,
    error: error,
  };
};

export const removeBookSuccess = () => {
  return {
    type: actionTypes.REMOVE_BOOK_SUCCESS,
    bookData: null,
  };
};

export const removeBook = (bookId) => {
  return (dispatch) => {
    dispatch(removeBookStart());
    axiosInstance
      .delete(BOOK_URL + "/" + bookId)
      .then(() => {
        dispatch(removeBookSuccess());
      })
      .catch((error) => {
        dispatch(removeBookFail(error));
      });
  };
};

export const upvoteBookStart = () => {
  return {
    type: actionTypes.UPVOTE_BOOK_START,
  };
};

export const upvoteBookFail = (error) => {
  return {
    type: actionTypes.UPVOTE_BOOK_FAIL,
    error: error,
  };
};

export const upvoteBookSuccess = (bookId) => {
  return {
    type: actionTypes.UPVOTE_BOOK_SUCCESS,
    bookId: bookId,
  };
};

export const upvoteBook = (bookId) => {
  return (dispatch) => {
    dispatch(upvoteBookStart());
    axiosInstance
        .post(BOOK_URL + "/" + bookId + "/upvote")
        .then((response) => {
          dispatch(upvoteBookSuccess(bookId));
          window.location.reload();
        })
        .catch((error) => {
          dispatch(upvoteBookFail(error));
        });
  };
};

export const downvoteBookStart = () => {
  return {
    type: actionTypes.DOWNVOTE_BOOK_START,
  };
};

export const downvoteBookFail = (error) => {
  return {
    type: actionTypes.DOWNVOTE_BOOK_FAIL,
    error: error,
  };
};

export const downvoteBookSuccess = (bookId) => {
  return {
    type: actionTypes.DOWNVOTE_BOOK_SUCCESS,
    bookId: bookId,
  };
};

export const downvoteBook = (bookId) => {
  return (dispatch) => {
    dispatch(downvoteBookStart());
    axiosInstance
        .post(BOOK_URL + "/" + bookId + "/downvote")
        .then((response) => {
          dispatch(downvoteBookSuccess(bookId));
          window.location.reload();
        })
        .catch((error) => {
          dispatch(downvoteBookFail(error));
        });
  };
};
