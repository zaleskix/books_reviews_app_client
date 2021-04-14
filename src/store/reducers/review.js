import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utils";

const initialState = {
  reviews: [],
  reviewDetails: {},
  loading: false,
  actionFinished: false,
  ratedReviews: [],
};

const addReviewStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const addReviewSuccess = (state, action) => {
  const newReview = updateObject(action.reviewData, { id: action.reviewId });
  return updateObject(state, {
    loading: false,
    reviews: state.reviews.concat(newReview),
    actionFinished: true,
  });
};

const addReviewFail = (state) => {
  return updateObject(state, { loading: false });
};

const getReviewsStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const getReviewsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    reviews: action.reviewData,
    actionFinished: true,
  });
};

const getReviewsFail = (state) => {
  return updateObject(state, { loading: false });
};

const getReviewDetailsStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const getReviewDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    reviewDetails: action.reviewData,
    actionFinished: true,
  });
};

const getReviewDetailsFail = (state) => {
  return updateObject(state, { loading: false });
};

const editReviewStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const editReviewSuccess = (state) => {
  return updateObject(state, { loading: false, actionFinished: true });
};

const editReviewFail = (state) => {
  return updateObject(state, { loading: false });
};

const removeReviewStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const removeReviewSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    actionFinished: true,
  });
};

const removeReviewFail = (state) => {
  return updateObject(state, { loading: false });
};

const upvoteReviewStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const upvoteReviewSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    ratedReviews: state.ratedReviews
      ? state.ratedReviews.includes(action.reviewId)
        ? null
        : state.ratedReviews.concat(action.reviewId)
      : [action.reviewId],
  });
};

const upvoteReviewFail = (state) => {
  return updateObject(state, { loading: false });
};

const downvoteReviewStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const downvoteReviewSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    ratedReviews: state.ratedReviews
      ? state.ratedReviews.includes(action.reviewId)
        ? null
        : state.ratedReviews.concat(action.reviewId)
      : [action.reviewId],
    actionFinished: true
  });
};

const downvoteReviewFail = (state) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_REVIEW_START:
      return addReviewStart(state);
    case actionTypes.ADD_REVIEW_SUCCESS:
      return addReviewSuccess(state, action);
    case actionTypes.ADD_REVIEW_FAIL:
      return addReviewFail(state);
    case actionTypes.GET_REVIEWS_START:
      return getReviewsStart(state);
    case actionTypes.GET_REVIEWS_SUCCESS:
      return getReviewsSuccess(state, action);
    case actionTypes.GET_REVIEWS_FAIL:
      return getReviewsFail(state);
    case actionTypes.GET_REVIEW_DETAILS_START:
      return getReviewDetailsStart(state);
    case actionTypes.GET_REVIEW_DETAILS_SUCCESS:
      return getReviewDetailsSuccess(state, action);
    case actionTypes.GET_REVIEW_DETAILS_FAIL:
      return getReviewDetailsFail(state);
    case actionTypes.EDIT_REVIEW_START:
      return editReviewStart(state);
    case actionTypes.EDIT_REVIEW_SUCCESS:
      return editReviewSuccess(state);
    case actionTypes.EDIT_REVIEW_FAIL:
      return editReviewFail(state);
    case actionTypes.REMOVE_REVIEW_START:
      return removeReviewStart(state);
    case actionTypes.REMOVE_REVIEW_SUCCESS:
      return removeReviewSuccess(state);
    case actionTypes.REMOVE_REVIEW_FAIL:
      return removeReviewFail(state);
    case actionTypes.UPVOTE_REVIEW_START:
      return upvoteReviewStart(state);
    case actionTypes.UPVOTE_REVIEW_SUCCESS:
      return upvoteReviewSuccess(state, action);
    case actionTypes.UPVOTE_REVIEW_FAIL:
      return upvoteReviewFail(state);
    case actionTypes.DOWNVOTE_REVIEW_START:
      return downvoteReviewStart(state);
    case actionTypes.DOWNVOTE_REVIEW_SUCCESS:
      return downvoteReviewSuccess(state, action);
    case actionTypes.DOWNVOTE_REVIEW_FAIL:
      return downvoteReviewFail(state);
    default:
      return state;
  }
};

export default reducer;
