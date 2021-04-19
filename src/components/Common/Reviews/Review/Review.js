import React from "react";

import ScoreButtons from "../../../UI/Buttons/ScoreButtons/ScoreButtons";
import styles from "./Review.module.css";
import * as actions from "../../../../store/actions";
import { connect } from "react-redux";
import ErrorHandler from "../../../../hoc/ErrorHandler/ErrorHandler";
import axiosInstance from "../../../../axios";
import { withRouter } from "react-router-dom";

const Review = (props) => {
  const onUpvote = () => {
    props.onUpvoteReview(props.reviewId);
  };

  const onDownvote = () => {
    props.onDownvoteReview(props.reviewId);
  };

  const userClicked = (userId) => {
    props.history.push("/user/" + userId);
  };

  return (
    <div className={styles.Review}>
      <div className={styles.ReviewInfo}>
        <div
          className={styles.AuthorInfo}
          onClick={() => userClicked(props.author.identifier)}
        >
          <div className={styles.AuthorAvatar}>
            <img src={props.avatar} alt={props.author.name} />
          </div>
          <div className={styles.AuthorName}>{props.author.name}</div>
        </div>
        <div className={styles.Score}>
          <ScoreButtons
            disabled={
              props.ratedReviews && props.ratedReviews.includes(props.reviewId)
            }
            onUpvote={onUpvote}
            onDownvote={onDownvote}
          />
          <div
            className={
              props.score >= 0 ? styles.PositiveScore : styles.NegativeScore
            }
          >
            {props.score}
          </div>
        </div>
      </div>
      <div className={styles.Content}>{props.content}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ratedReviews: state.review.ratedReviews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpvoteReview: (reviewId) =>
      dispatch(actions.upvoteReview(reviewId)),
    onDownvoteReview: (reviewId) =>
      dispatch(actions.downvoteReview(reviewId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(withRouter(Review), axiosInstance));
