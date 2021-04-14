import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utils";

const initialState = {
  books: [],
  bookDetails: {},
  loading: false,
  actionFinished: false,
  ratedBooks: [],
};

const addBookStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const addBookSuccess = (state, action) => {
  const newBook = updateObject(action.bookData, { id: action.bookId });
  return updateObject(state, {
    loading: false,
    books: state.books.concat(newBook),
    actionFinished: true,
  });
};

const addBookFail = (state) => {
  return updateObject(state, { loading: false });
};

const getBooksStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const getBooksSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    books: action.bookData,
    actionFinished: true,
  });
};

const getBooksFail = (state) => {
  return updateObject(state, { loading: false });
};

const getBookDetailsStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const getBookDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    bookDetails: action.bookData,
    actionFinished: true,
  });
};

const getBookDetailsFail = (state) => {
  return updateObject(state, { loading: false });
};

const editBookStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const editBookSuccess = (state) => {
  return updateObject(state, { loading: false, actionFinished: true });
};

const editBookFail = (state) => {
  return updateObject(state, { loading: false });
};

const removeBookStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const removeBookSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    actionFinished: true,
  });
};

const removeBookFail = (state) => {
  return updateObject(state, { loading: false });
};

const upvoteBookStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const upvoteBookSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    ratedBooks: state.ratedBooks
      ? state.ratedBooks.includes(action.bookId)
        ? null
        : state.ratedBooks.concat(action.bookId)
      : [action.bookId],
    actionFinished: true
  });
};

const upvoteBookFail = (state) => {
  return updateObject(state, { loading: false });
};

const downvoteBookStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const downvoteBookSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    ratedBooks: state.ratedBooks
      ? state.ratedBooks.includes(action.bookId)
        ? null
        : state.ratedBooks.concat(action.bookId)
      : [action.bookId],
    actionFinished: true
  });
};

const downvoteBookFail = (state) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK_START:
      return addBookStart(state);
    case actionTypes.ADD_BOOK_SUCCESS:
      return addBookSuccess(state, action);
    case actionTypes.ADD_BOOK_FAIL:
      return addBookFail(state);
    case actionTypes.GET_BOOKS_START:
      return getBooksStart(state);
    case actionTypes.GET_BOOKS_SUCCESS:
      return getBooksSuccess(state, action);
    case actionTypes.GET_BOOKS_FAIL:
      return getBooksFail(state);
    case actionTypes.GET_BOOK_DETAILS_START:
      return getBookDetailsStart(state);
    case actionTypes.GET_BOOK_DETAILS_SUCCESS:
      return getBookDetailsSuccess(state, action);
    case actionTypes.GET_BOOK_DETAILS_FAIL:
      return getBookDetailsFail(state);
    case actionTypes.EDIT_BOOK_START:
      return editBookStart(state);
    case actionTypes.EDIT_BOOK_SUCCESS:
      return editBookSuccess(state);
    case actionTypes.EDIT_BOOK_FAIL:
      return editBookFail(state);
    case actionTypes.REMOVE_BOOK_START:
      return removeBookStart(state);
    case actionTypes.REMOVE_BOOK_SUCCESS:
      return removeBookSuccess(state);
    case actionTypes.REMOVE_BOOK_FAIL:
      return removeBookFail(state);
    case actionTypes.UPVOTE_BOOK_START:
      return upvoteBookStart(state);
    case actionTypes.UPVOTE_BOOK_SUCCESS:
      return upvoteBookSuccess(state, action);
    case actionTypes.UPVOTE_BOOK_FAIL:
      return upvoteBookFail(state);
    case actionTypes.DOWNVOTE_BOOK_START:
      return downvoteBookStart(state);
    case actionTypes.DOWNVOTE_BOOK_SUCCESS:
      return downvoteBookSuccess(state, action);
    case actionTypes.DOWNVOTE_BOOK_FAIL:
      return downvoteBookFail(state);
    default:
      return state;
  }
};

export default reducer;
