import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axiosInstance from "../../axios";
import { Roller } from "react-awesome-spinners";

import styles from "./AddCategory.module.css";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import From from "../../components/UI/Form/Form";
import * as actions from "../../store/actions/index";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import CategoryFormTemplate from "./formTemplate/formTemplate";

const AddCategory = (props) => {
  if (!props.token) props.history.push("/login")
  const [categoryForm, setCategoryForm] = useState();
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setCategoryForm(CategoryFormTemplate);
  }, []);

  const submitted = (categoryData) => {
    props.onCategoryAdd(categoryData);
    setFormSubmitted(true);
  };

  if (isFormSubmitted && !props.loading) {
    setTimeout(() => {
      props.history.push("/categories")
    }, 1500)
  }

  return (
    <div className={styles.AddCategory}>
      <PageHeader caption={"Dodaj kategorie"} />
      {isFormSubmitted && !props.loading ? (
        <div className={styles.Success}>Kategoria została pomyślnie dodana</div>
      ) : null}
      {props.loading ? (
        <Roller />
      ) : (
        <div className={styles.PageContent}>
          <From
            submited={submitted}
            formTemplate={categoryForm}
            setFormTemplate={setCategoryForm}
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
    loading: state.category.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCategoryAdd: (categoryData) =>
      dispatch(actions.addCategory(categoryData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(AddCategory, axiosInstance));
