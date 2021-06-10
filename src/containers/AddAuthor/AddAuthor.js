import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import axiosInstance from "../../axios";
import { Roller } from "react-awesome-spinners";

import styles from "./AddAuthor.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import From from "../../components/UI/Form/Form";
import * as actions from "../../store/actions/index";
import AuthorFormTemplate from "./formTemplate/formTemplate";

const AddAuthor = (props) => {
  if (!props.token) props.history.push("/login")
  const [authorForm, setAuthorForm] = useState();
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    setAuthorForm(AuthorFormTemplate({categories: props.categories}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitted = (authorData) => {
    props.onAuthorAdd(authorData);
    setFormSubmitted(true)
  };

  if (isFormSubmitted && !props.loading) {
    setTimeout(() => {
      props.history.push("/authors/ranking")
    }, 1500)
  }

  return (
    <div className={styles.AddAuthor}>
      <PageHeader caption={"Dodaj autora"} />
      {isFormSubmitted && !props.loading ? <div className={styles.Success}>Autor został pomyślnie dodany</div> : null}
      {props.loading ? (
        <Roller />
      ) : (
        <div className={styles.PageContent}>
          <From
            submited={submitted}
            formTemplate={authorForm}
            setFormTemplate={setAuthorForm}
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
    loading: state.author.loading,
    categories: state.category.categories,
    actionFinished: state.author.actionFinished,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthorAdd: (authorData) =>
      dispatch(actions.addAuthor(authorData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAuthor);
