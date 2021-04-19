import React, {useEffect, useState} from "react";

import styles from "./BookDetails.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import Details from "../../components/Common/Details/Details";

import { useLocation } from "react-router-dom";
import { Roller } from "react-awesome-spinners";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import axiosInstance from "../../axios";
import AvatarPlaceholder from "../../assets/photos/users/placeholder.png";

const BookDetails = (props) => {
  if (!props.token) props.history.push("/login")
  const { onGetBookDetails } = props;
  const location = useLocation();
  let bookId = location.pathname.split("/").pop();
  const [addedToFavourites, setAddedToFavourites] = useState(false);

  useEffect(() => {
    onGetBookDetails(bookId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onGetBookDetails]);

  useEffect(() => {
    if (props.favourites) {
      props.favourites.map((fav) => {
        if (fav.bookExternalId && fav.bookExternalId === bookId)
          setAddedToFavourites(true);
      });
    }
  }, []);

  let reviews = [];
  if (props.bookDetails.reviews) {
    // eslint-disable-next-line array-callback-return
    props.bookDetails.reviews.map((review) => {
      reviews.push({
        author: {
          identifier: review.reviewAuthor.userExternalId,
          name: review.reviewAuthor.username,
          avatar: review.reviewAuthor.avatar
            ? review.reviewAuthor.avatar
            : AvatarPlaceholder,
        },
        score: review.score ? review.score : 0,
        reviewId: review.reviewExternalId,
        content: review.content ? review.content : "",
      });
    });
  }

  const authors = [];
  if (props.bookDetails.authors) {
    // eslint-disable-next-line array-callback-return
    props.bookDetails.authors.map((author) => {
      authors.push(author.firstName + " " + author.lastName);
    });
  }

  const editButton = {
    text: "Edytuj książkę",
    clicked: () => props.history.push("/books/" + bookId + "/edit"),
  };

  const removeButton = {
    text: "Usuń książkę",
    clicked: () => {
      props.onBookRemove(bookId);
    },
  };
  const addToFavsButton = {
    text: "Dodaj do ulubionych",
    clicked: () => {
      props.onAddFavourite(props.userId, bookId);
      setTimeout(() => {
        window.location.reload();
        onGetBookDetails(bookId)
      }, 1000);
    },
  };

  const removeFromFavsButton = {
    text: "Usuń do ulubionych",
    clicked: () => {
      props.onRemoveFavourite(props.userId, bookId);
      setTimeout(() => {
        window.location.reload();
        onGetBookDetails(bookId)
      }, 1000);
    },
  };

  const submitReview = (reviewContent) => {
    let review = {
      bookId: bookId,
      content: reviewContent,
      reviewAuthorUsername: props.username,
      score: 0
    };

    props.onAddReview(review);
  };

  const onUpvote = () => {
    props.onUpvoteBook(bookId);
  }

  const onDownvote = () => {
    props.onDownvoteBook(bookId);
  }

  let bookDetails = (
    <React.Fragment>
      <PageHeader caption={""} />{" "}
      <div className={styles.PageContent}>
        <Roller />
      </div>
    </React.Fragment>
  );

  if (!props.loading && props.actionFinished) {
    let bookEvaluation = {
      rating: props.bookDetails.rating ? props.bookDetails.rating : 0,
      votes: props.bookDetails.votes ? props.bookDetails.votes : 0,
      reviews: reviews,
    };

    const bookMainInfo = [
      {
        caption: "Autorzy:",
        value: authors.join(" | "),
      },
      {
        caption: "Kategorie:",
        value: props.bookDetails.categories
          ? props.bookDetails.categories.join(" | ")
          : [],
      },
      { caption: "Data publikacji:", value: props.bookDetails.publishingDate },
      { caption: "Wydawnictwo:", value: props.bookDetails.publisher },
      { caption: "ISBN:", value: props.bookDetails.isbn },
    ];

    bookDetails = (
      <React.Fragment>
        <PageHeader caption={props.bookDetails.title} />
        <div className={styles.PageContent}>
          <Details
            name={props.bookDetails.title}
            photo={props.bookDetails.cover}
            description={{
              caption: "Opis:",
              content: props.bookDetails.description,
            }}
            evaluation={bookEvaluation}
            detailsInfos={bookMainInfo}
            editButton={editButton}
            removeButton={removeButton}
            submitReview={submitReview}
            onUpvote={onUpvote}
            onDownvote={onDownvote}
            favsButton={
              addedToFavourites ? removeFromFavsButton : addToFavsButton
            }
            disabled={
              props.ratedBooks && props.ratedBooks.includes(bookId)
            }
          />
        </div>
      </React.Fragment>
    );
  }

  return <div className={styles.BookDetails}>{bookDetails}</div>;
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    loading: state.book.loading,
    bookDetails: state.book.bookDetails,
    username: state.util.username,
    actionFinished: state.book.actionFinished,
    ratedBooks: state.book.ratedBooks,
    favourites: state.util.userDetails.favouriteBooks,
    userId: state.util.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBookDetails: (bookId) =>
      dispatch(actions.getBookDetails(bookId)),
    onBookRemove: (bookId) =>
      dispatch(actions.removeBook(bookId)),
    onAddReview: (reviewData) =>
        dispatch(actions.addReview(reviewData)),
    onUpvoteBook: (bookId) =>
        dispatch(actions.upvoteBook(bookId)),
    onDownvoteBook: (bookId) =>
        dispatch(actions.downvoteBook(bookId)),
    onAddFavourite: (userId, favId) =>
        dispatch(actions.addFavToUser(userId, favId)),
    onRemoveFavourite: (userId, favId) =>
        dispatch(actions.removeFavToUser(userId, favId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(BookDetails, axiosInstance));
