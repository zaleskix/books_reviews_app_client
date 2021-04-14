import React, { useState, useEffect } from "react";

import styles from "./AddBook.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import From from "../../components/UI/Form/Form";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import axiosInstance from "../../axios";
import { Roller } from "react-awesome-spinners";
import BookFormTemplate from "./formTemplate/formTemplate";

const AddBook = (props) => {
  if (!props.token) props.history.push("/login")
  const authors = [];
  const [bookForm, setBookForm] = useState();
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  props.authors.map((author) =>
      authors.push({
        value: author.authorExternalId,
        displayValue: author.firstName + " " + author.lastName,
      })
  );

  useEffect(() => {
    setBookForm(BookFormTemplate({authors: authors}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFormSubmitted && !props.loading) {
    setTimeout(() => {
      props.history.push("/books/ranking")
    }, 2000)
  }

  const submitted = (bookData) => {
    props.onBookAdd(bookData);
    setFormSubmitted(true);
  };

  return (
    <div className={styles.AddBook}>
      <PageHeader caption={"Dodaj książkę"} />
      {isFormSubmitted && !props.loading ? (
        <div className={styles.Success}>Książka została pomyślnie dodana</div>
      ) : null}
      {props.loading ? (
        <Roller />
      ) : (
        <div className={styles.PageContent}>
          <From
            submited={submitted}
            formTemplate={bookForm}
            setFormTemplate={setBookForm}
            isFormValid={isFormValid}
            setIsFormValid={setIsFormValid}
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    loading: state.book.loading,
    authors: state.author.authors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBookAdd: (bookData) => dispatch(actions.addBook(bookData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(AddBook, axiosInstance));
