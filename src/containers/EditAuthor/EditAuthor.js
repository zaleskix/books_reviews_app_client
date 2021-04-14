import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import styles from "./EditAuthor.module.css";
import { Roller } from "react-awesome-spinners";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import axiosInstance from "../../axios";
import From from "../../components/UI/Form/Form";
import formTemplate from "./formTemplate/formTemplate";

const EditAuthor = (props) => {
  if (!props.token) props.history.push("/login")
  const location = useLocation();
  let authorId = location.pathname.split("/")[2];
  const [isFormValid, setIsFormValid] = useState(true);
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [authorForm, setAuthorForm] = useState();

  useEffect(() => {
    setAuthorForm(formTemplate({ authorDetails: props.authorDetails }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFormSubmitted && !props.loading) {
    setTimeout(() => {
      props.history.push("/authors/" + authorId)
    }, 2000)
  }

  let form = (
    <React.Fragment>
      <PageHeader />
      <div className={styles.PageContent}>
        <Roller />
      </div>
    </React.Fragment>
  );

  if (!props.loading) {
    const submitted = (authorData) => {
      const changedData = authorData;
      for (let key in authorData) {
        if (!authorForm[key].touched) {
          delete changedData[key];
        }
      }
      props.onEditAuthor(authorId, authorData);
      setFormSubmitted(true);
    };

    form = (
      <div className={styles.EditAuthor}>
        <PageHeader caption={"Edytuj autora"} />
        {isFormSubmitted && !props.loading ? (
          <div className={styles.Success}>Autor został pomyślnie edytowany</div>
        ) : null}

        <div className={styles.PageContent}>
          <From
            submited={submitted}
            formTemplate={authorForm}
            setFormTemplate={setAuthorForm}
            isFormValid={isFormValid}
            setIsFormValid={setIsFormValid}
          />
        </div>
      </div>
    );
  }

  return <div className={styles.AuthorDetails}>{form}</div>;
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    loading: state.author.loading,
    authorDetails: state.author.authorDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditAuthor: (authorId, authorData) =>
      dispatch(actions.editAuthor(authorId, authorData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(EditAuthor, axiosInstance));
