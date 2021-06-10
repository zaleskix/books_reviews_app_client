import React, { useEffect } from "react";

import styles from "./CategoryDetails.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import Details from "../../components/Common/Details/Details";

import { useLocation } from "react-router-dom";
import { Roller } from "react-awesome-spinners";
import * as actions from "../../store/actions";
import { connect } from "react-redux";

const CategoryDetails = (props) => {
  if (!props.token) props.history.push("/login")
  const { onGetCategoryDetails } = props;
  const location = useLocation();
  let categoryId = location.pathname.split("/").pop();

  useEffect(() => {
    onGetCategoryDetails(categoryId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onGetCategoryDetails]);

  const editButton = {
    text: "Edytuj kategorie",
    clicked: () => props.history.push("/categories/" + categoryId + "/edit"),
  };

  const removeButton = {
    text: "Usuń kategorie",
    clicked: () => {
      props.onCategoryRemove(categoryId);
      props.history.push("/");
    },
  };

  let categoryDetails = (
    <React.Fragment>
      <PageHeader caption={""} />
      <div className={styles.PageContent}>
        <Roller />
      </div>
    </React.Fragment>
  );

  if (!props.loading && props.actionFinished) {
    const authors = [];
    if (props.categoryDetails.authors) {
      // eslint-disable-next-line array-callback-return
      props.categoryDetails.authors.map((author) => {
        authors.push(author.firstName + " " + author.lastName);
      });
    }

    const books = [];
    if (props.categoryDetails.books) {
      // eslint-disable-next-line array-callback-return
      props.categoryDetails.books.map((book) => {
        books.push(book.title);
      });
    }

    categoryDetails = (
      <React.Fragment>
        <PageHeader caption={props.categoryDetails.name} />
        <div className={styles.PageContent}>
          <Details
            name={props.categoryDetails.name}
            photo={props.categoryDetails.image}
            editButton={editButton}
            removeButton={removeButton}
          />
        </div>
      </React.Fragment>
    );
  }

  return <div className={styles.CategoryDetails}>{categoryDetails}</div>;
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    loading: state.category.loading,
    categoryDetails: state.category.categoryDetails,
    actionFinished: state.category.actionFinished,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCategoryDetails: (categoryId) =>
      dispatch(actions.getCategoryDetails(categoryId)),
    onCategoryRemove: (categoryId) =>
      dispatch(actions.removeCategory(categoryId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDetails);
