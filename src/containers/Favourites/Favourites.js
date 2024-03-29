import React from "react";

import styles from "./Favourites.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import Favourite from "../../components/Favourite/Favourite";
import * as actions from "../../store/actions";
import { connect } from "react-redux";

const Favourites = (props) => {
  if (!props.token) props.history.push("/login");
  const favouritesData = [];

  if (props.favouriteBooks) {
    // eslint-disable-next-line array-callback-return
    props.favouriteBooks.map((fav) => {
      favouritesData.push({
        identifier: fav.bookExternalId,
        caption: fav.title,
        image: fav.cover,
      });
    });
  }
  if (props.favouriteAuthors) {
    // eslint-disable-next-line array-callback-return
    props.favouriteAuthors.map((fav) => {
      favouritesData.push({
        identifier: fav.authorExternalId,
        caption: fav.firstName + " " + fav.lastName,
        image: fav.photo,
      });
    })
  }

  const showDetails = (favId) => {
    if (favId.match("^book")) {
      props.history.push("/books/" + favId);
    } else {
      props.history.push("/authors/" + favId);
    }
  };
  const revmoeFromFavourites = (favId) => {
    props.onRemoveFavourite(props.userId, favId);
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };
  let favourites = favouritesData.map((favourite) => (
    <Favourite
      key={favourite.caption}
      identifier={favourite.identifier}
      caption={favourite.caption}
      subcaption={favourite.subcaption}
      rating={favourite.rating}
      image={favourite.image}
      showDetails={showDetails}
      revmoeFromFavourites={revmoeFromFavourites}
    />
  ));

  return (
    <div className={styles.Favourites}>
      <PageHeader caption={"Ulubione"} />
      <div className={styles.PageContent}>{favourites}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    favouriteBooks: state.util.userDetails.favouriteBooks,
    favouriteAuthors: state.util.userDetails.favouriteAuthors,
    userId: state.util.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFavourite: (userId, favId) =>
      dispatch(actions.removeFavToUser(userId, favId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);
