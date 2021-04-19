import React, { useEffect, useState } from "react";

import styles from "./AuthorDetails.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import Details from "../../components/Common/Details/Details";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import axiosInstance from "../../axios";
import { useLocation } from "react-router-dom";
import { Roller } from "react-awesome-spinners";
import AvatarPlaceholder from "../../assets/photos/users/placeholder.png";

const AuthorDetails = (props) => {
  if (!props.token) props.history.push("/login");
  const { onGetAuthorDetails } = props;
  const location = useLocation();
  let authorId = location.pathname.split("/").pop();
  const [addedToFavourites, setAddedToFavourites] = useState(false);

  useEffect(() => {
    onGetAuthorDetails(authorId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onGetAuthorDetails]);

  useEffect(() => {
    if (props.favourites) {
      props.favourites.map((fav) => {
        if (fav.authorExternalId && fav.authorExternalId === authorId)
          setAddedToFavourites(true);
      });
    }
  }, []);
  let reviews = [];
  if (props.authorDetails.reviews) {
    // eslint-disable-next-line array-callback-return
    props.authorDetails.reviews.map((review) => {
      reviews.push({
        author: {
          identifier: review.reviewAuthor.userExternalId,
          name: review.reviewAuthor.username,
          avatar: review.reviewAuthor.avatar
            ? review.reviewAuthor.avatar
            : AvatarPlaceholder,
        },
        reviewId: review.reviewExternalId,
        score: review.score ? review.score : 0,
        content: review.content ? review.content : "",
      });
    });
  }

  const editButton = {
    text: "Edytuj autora",
    clicked: () => props.history.push("/authors/" + authorId + "/edit"),
  };

  const addToFavsButton = {
    text: "Dodaj do ulubionych",
    clicked: () => {
      props.onAddFavourite(props.userId, authorId);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
  };

  const removeFromFavsButton = {
    text: "Usuń do ulubionych",
    clicked: () => {
      props.onRemoveFavourite(props.userId, authorId);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
  };

  const removeButton = {
    text: "Usuń autora",
    clicked: () => {
      props.onAuthorRemove(authorId);
      props.history.push("/");
    },
  };

  let authorDetails = (
    <React.Fragment>
      <PageHeader caption={""} />{" "}
      <div className={styles.PageContent}>
        <Roller />
      </div>
    </React.Fragment>
  );

  const submitReview = (reviewContent) => {
    let review = {
      authorId: authorId,
      content: reviewContent,
      reviewAuthorUsername: props.username,
      score: 0,
    };

    props.onAddReview(review);
  };

  const onUpvote = () => {
    props.onUpvoteAuthor(authorId);
  };

  const onDownvote = () => {
    props.onDownvoteAuthor(authorId);
  };

  if (!props.loading && props.actionFinished) {
    let authorEvaluation = {
      rating: props.authorDetails.rating ? props.authorDetails.rating : 0,
      votes: props.authorDetails.votes ? props.authorDetails.votes : 0,
      reviews: reviews,
    };

    const authorMainInfo = [
      {
        caption: "Imię:",
        value: props.authorDetails.firstName,
      },
      {
        caption: "Nazwisko:",
        value: props.authorDetails.lastName,
      },
      {
        caption: "Kategorie:",
        value: props.authorDetails.categories
          ? props.authorDetails.categories.join(" | ")
          : [],
      },
      { caption: "Strona internetowa:", value: props.authorDetails.website },
    ];

    authorDetails = (
      <React.Fragment>
        <PageHeader
          caption={
            props.authorDetails.firstName + " " + props.authorDetails.lastName
          }
        />
        <div className={styles.PageContent}>
          <Details
            name={
              props.authorDetails.firstName + " " + props.authorDetails.lastName
            }
            photo={props.authorDetails.photo}
            description={{
              caption: "Biografia:",
              content: props.authorDetails.biography,
            }}
            evaluation={authorEvaluation}
            detailsInfos={authorMainInfo}
            editButton={editButton}
            removeButton={removeButton}
            submitReview={submitReview}
            onUpvote={onUpvote}
            onDownvote={onDownvote}
            favsButton={
              addedToFavourites ? removeFromFavsButton : addToFavsButton
            }
            disabled={
              props.ratedAuthors && props.ratedAuthors.includes(authorId)
            }
          />
        </div>
      </React.Fragment>
    );
  }

  return <div className={styles.AuthorDetails}>{authorDetails}</div>;
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    loading: state.author.loading,
    authorDetails: state.author.authorDetails,
    userId: state.util.userId,
    reviews: state.review.reviews,
    username: state.util.username,
    favourites: state.util.userDetails.favouriteAuthors,
    actionFinished: state.author.actionFinished,
    ratedAuthors: state.author.ratedAuthors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAuthorDetails: (authorId) =>
      dispatch(actions.getAuthorDetails(authorId)),
    onAuthorRemove: (authorId) => dispatch(actions.removeAuthor(authorId)),
    onAddReview: (reviewData) => dispatch(actions.addReview(reviewData)),
    onUpvoteAuthor: (authorId) => dispatch(actions.upvoteAuthor(authorId)),
    onDownvoteAuthor: (authorId) => dispatch(actions.downvoteAuthor(authorId)),
    onAddFavourite: (userId, favId) =>
      dispatch(actions.addFavToUser(userId, favId)),
    onRemoveFavourite: (userId, favId) =>
      dispatch(actions.removeFavToUser(userId, favId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(AuthorDetails, axiosInstance));
