import React, { useEffect } from "react";
import { useLocation, withRouter } from "react-router-dom";

import styles from "./Profile.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import { connect } from "react-redux";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import axiosInstance from "../../axios";
import { Roller } from "react-awesome-spinners";
import * as actions from "../../store/actions";

const Profile = (props) => {
  if (!props.token) props.history.push("/login");
  const { onGetUserDetails } = props;
  const location = useLocation();
  let userId = location.pathname.split("/").pop();

  useEffect(() => {
    onGetUserDetails(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onGetUserDetails]);

  let userProfile = (
    <React.Fragment>
      <PageHeader caption={""} />{" "}
      <div className={styles.PageContent}>
        <Roller />
      </div>
    </React.Fragment>
  );
  if (!props.loading && props.actionFinished) {
    let favourites = [];
    if (props.favourites) {
      // eslint-disable-next-line array-callback-return
      props.favourites.map((fav) => {
        if (fav.bookExternalId) {
          favourites.push({
            identifier: fav.bookExternalId,
            title: fav.title,
            cover: fav.cover,
          });
        }
      });
    }
    let favs = favourites.map((fav) => (
      <div
        className={styles.FavouriteBook}
        key={fav.title}
        onClick={() => bookClicked(fav.identifier)}
      >
        <img alt={fav.title} src={`data:image/png;base64,${fav.cover}`} />
        <div className={styles.Title}>{fav.title}</div>
      </div>
    ));
    userProfile = (
      <React.Fragment>
        <div className={styles.PageContent}>
          <div className={styles.ProfilePictureSection}>
            <div className={styles.FullSizePhoto}>
              <img alt={props.userDetails.userExternalId} src={`data:image/jpg;base64,${props.userDetails.avatar}`} />
            </div>
          </div>
          <div className={styles.AboutMeSection}>
            <div className={styles.AboutMeCaption}>About me</div>
            <div className={styles.AboutMeContent}>
              {props.userDetails.aboutMe}
            </div>
          </div>
        </div>
        <div className={styles.Favourites}>
          <div className={styles.FavouritesBookCaption}>Favourites books</div>
          <div className={styles.FavouritesBooks}>{favs}</div>
        </div>
      </React.Fragment>
    );
  }
  const bookClicked = (identifier) => {
    props.history.push("/books/" + identifier);
  };

  return (
    <div className={styles.Profile}>
      <PageHeader caption={props.userDetails.username} />
      {userProfile}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    loading: state.user.loading,
    userDetails: state.user.userDetails,
    actionFinished: state.user.actionFinished,
    favourites: state.user.userDetails.favouriteBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserDetails: (userId) => dispatch(actions.getUserDetails(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(withRouter(Profile), axiosInstance));
