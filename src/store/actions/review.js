import * as actionTypes from "./actionTypes";
import axiosInstance from "../../axios";

const REVIEW_URL = "http://localhost:6080/reviews";

export const addReviewSuccess = (id, reviewData) => {
  return {
    type: actionTypes.ADD_REVIEW_SUCCESS,
    reviewId: id,
    reviewData: reviewData,
  };
};

export const addReviewFail = (error) => {
  return {
    type: actionTypes.ADD_REVIEW_FAIL,
    error: error,
  };
};

export const addReviewStart = () => {
  return {
    type: actionTypes.ADD_REVIEW_START,
  };
};

export const addReview = (reviewData) => {
  return (dispatch) => {
    dispatch(addReviewStart());
    axiosInstance
      .post(REVIEW_URL, reviewData)
      .then((response) => {
        dispatch(addReviewSuccess(response.data.id, reviewData));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(addReviewFail(error));
      });
  };
};

export const getReviewsStart = () => {
  return {
    type: actionTypes.GET_REVIEWS_START,
  };
};

export const getReviewsFail = (error) => {
  return {
    type: actionTypes.GET_REVIEWS_FAIL,
    error: error,
  };
};

export const getReviewsSuccess = (response) => {
  return {
    type: actionTypes.GET_REVIEWS_SUCCESS,
    reviewData: response.data,
  };
};

export const getReviews = (searchCriteria) => {
  return (dispatch) => {
    dispatch(getReviewsStart());
    axiosInstance
      .get(REVIEW_URL, {
        params: {
          ...searchCriteria,
        },
      })
      .then((response) => {
        dispatch(getReviewsSuccess(response));
      })
      .catch((error) => {
        dispatch(getReviewsFail(error));
      });
  };
};

export const getReviewDetailsStart = () => {
  return {
    type: actionTypes.GET_REVIEW_DETAILS_START,
  };
};

export const getReviewDetailsFail = (error) => {
  return {
    type: actionTypes.GET_REVIEW_DETAILS_FAIL,
    error: error,
  };
};

export const getReviewDetailsSuccess = (response) => {
  return {
    type: actionTypes.GET_REVIEW_DETAILS_SUCCESS,
    reviewData: response.data,
  };
};

export const getReviewDetails = (reviewId) => {
  return (dispatch) => {
    dispatch(getReviewDetailsStart());
    axiosInstance
      .get(REVIEW_URL + "/" + reviewId)
      .then((response) => {
        dispatch(getReviewDetailsSuccess(response));
      })
      .catch((error) => {
        dispatch(getReviewDetailsFail(error));
      });
  };
};

export const editReviewStart = () => {
  return {
    type: actionTypes.EDIT_REVIEW_START,
  };
};

export const editReviewFail = (error) => {
  return {
    type: actionTypes.EDIT_REVIEW_FAIL,
    error: error,
  };
};

export const editReviewSuccess = () => {
  return {
    type: actionTypes.EDIT_REVIEW_SUCCESS,
  };
};

export const editReview = (reviewId, reviewData) => {
  return (dispatch) => {
    dispatch(editReviewStart());
    axiosInstance
      .put(REVIEW_URL + "/" + reviewId, reviewData)
      .then(() => {
        dispatch(editReviewSuccess());
      })
      .catch((error) => {
        dispatch(editReviewFail(error));
      });
  };
};

export const removeReviewStart = () => {
  return {
    type: actionTypes.REMOVE_REVIEW_START,
  };
};

export const removeReviewFail = (error) => {
  return {
    type: actionTypes.REMOVE_REVIEW_FAIL,
    error: error,
  };
};

export const removeReviewSuccess = () => {
  return {
    type: actionTypes.REMOVE_REVIEW_SUCCESS,
    reviewData: null,
  };
};

export const removeReview = (reviewId) => {
  return (dispatch) => {
    dispatch(removeReviewStart());
    axiosInstance
      .delete(REVIEW_URL + "/" + reviewId)
      .then(() => {
        dispatch(removeReviewSuccess());
      })
      .catch((error) => {
        dispatch(removeReviewFail(error));
      });
  };
};

export const upvoteReviewStart = () => {
  return {
    type: actionTypes.UPVOTE_REVIEW_START,
  };
};

export const upvoteReviewFail = (error) => {
  return {
    type: actionTypes.UPVOTE_REVIEW_FAIL,
    error: error,
  };
};

export const upvoteReviewSuccess = (reviewId) => {
  return {
    type: actionTypes.UPVOTE_REVIEW_SUCCESS,
    reviewId: reviewId,
  };
};

export const upvoteReview = (reviewId) => {
  return (dispatch) => {
    dispatch(upvoteReviewStart());
    axiosInstance
      .post(REVIEW_URL + "/" + reviewId + "/upvote")
      .then((response) => {
        dispatch(upvoteReviewSuccess(reviewId));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(upvoteReviewFail(error));
      });
  };
};

export const downvoteReviewStart = () => {
  return {
    type: actionTypes.DOWNVOTE_REVIEW_START,
  };
};

export const downvoteReviewFail = (error) => {
  return {
    type: actionTypes.DOWNVOTE_REVIEW_FAIL,
    error: error,
  };
};

export const downvoteReviewSuccess = (reviewId) => {
  return {
    type: actionTypes.DOWNVOTE_REVIEW_SUCCESS,
    reviewId: reviewId,
  };
};

export const downvoteReview = (reviewId) => {
  return (dispatch) => {
    dispatch(downvoteReviewStart());
    axiosInstance
      .post(REVIEW_URL + "/" + reviewId + "/downvote")
      .then((response) => {
        dispatch(downvoteReviewSuccess(reviewId));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(downvoteReviewFail(error));
      });
  };
};
