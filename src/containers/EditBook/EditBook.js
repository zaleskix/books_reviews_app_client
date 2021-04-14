import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import styles from "./EditBook.module.css";
import { Roller } from "react-awesome-spinners";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import axiosInstance from "../../axios";
import From from "../../components/UI/Form/Form";
import formTemplate from "./formTemplate/formTemplate";

const EditBook = (props) => {
  if (!props.token) props.history.push("/login")
  const location = useLocation();
  let bookId = location.pathname.split("/")[2];
  const [isFormValid, setIsFormValid] = useState(true);
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [bookForm, setBookForm] = useState();

  let authors = {
    options: [],
    values: [],
  };
  props.authors.map((author) =>
    authors.options.push({
      value: author.authorExternalId,
      displayValue: author.firstName + " " + author.lastName,
    })
  );

  props.bookDetails.authors.map((author) =>
    authors.values.push(author.authorExternalId)
  );

  if (isFormSubmitted && !props.loading) {
    setTimeout(() => {
      props.history.push("/books/" + bookId)
    }, 2000)
  }

  useEffect(() => {
    setBookForm(
      formTemplate({
        bookDetails: props.bookDetails,
        authors: authors,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let form = (
    <React.Fragment>
      <PageHeader />
      <div className={styles.PageContent}>
        <Roller />
      </div>
    </React.Fragment>
  );

  if (!props.loading) {
    const submitted = (bookData) => {
      const changedData = bookData;
      for (let key in bookData) {
        if (!bookForm[key].touched) {
          delete changedData[key];
        }
      }
      props.onEditBook(bookId, bookData);
      setFormSubmitted(true);
    };

    form = (
      <div className={styles.EditAuthor}>
        <PageHeader caption={"Edytuj książkę"} />
        {isFormSubmitted && !props.loading ? (
          <div className={styles.Success}>
            Ksiażka został pomyślnie edytowany
          </div>
        ) : null}

        <div className={styles.PageContent}>
          <From
            submited={submitted}
            formTemplate={bookForm}
            setFormTemplate={setBookForm}
            isFormValid={isFormValid}
            setIsFormValid={setIsFormValid}
          />
        </div>
      </div>
    );
  }

  return <React.Fragment>{form}</React.Fragment>;
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    loading: state.book.loading,
    authors: state.author.authors,
    bookDetails: state.book.bookDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditBook: (bookId, bookData) =>
      dispatch(actions.editBook(bookId, bookData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(EditBook, axiosInstance));
