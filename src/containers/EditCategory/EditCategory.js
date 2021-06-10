import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import styles from "./EditCategory.module.css";
import { Roller } from "react-awesome-spinners";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import From from "../../components/UI/Form/Form";
import formTemplate from "./formTemplate/formTemplate";

const EditCategory = (props) => {
  if (!props.token) props.history.push("/login")
  const location = useLocation();
  let categoryId = location.pathname.split("/")[2];
  const [isFormValid, setIsFormValid] = useState(true);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const [categoryForm, setCategoryForm] = useState();
  useEffect(() => {
    setCategoryForm(formTemplate({ categoryDetails: props.categoryDetails }));
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

  if (isFormSubmitted && !props.loading) {
    setTimeout(() => {
      props.history.push("/categories/" + categoryId)
    }, 1500)
  }

  const submitted = (categoryData) => {
    const changedData = categoryData;
    for (let key in categoryData) {
      if (!categoryForm[key].touched) {
        delete changedData[key];
      }
    }
    props.onEditCategory(categoryId, categoryData);
    setFormSubmitted(true);
  };

  if (!props.loading) {
    form = (
      <React.Fragment>
        <PageHeader caption={"Edytuj kategorie"} />
        {isFormSubmitted && !props.loading ? (
          <div className={styles.Success}>
            Kategoria została pomyślnie edytowana
          </div>
        ) : null}

        <div className={styles.PageContent}>
          <From
            submited={submitted}
            formTemplate={categoryForm}
            setFormTemplate={setCategoryForm}
            isFormValid={isFormValid}
            setIsFormValid={setIsFormValid}
          />
        </div>
      </React.Fragment>
    );
  }

  return <React.Fragment>{form}</React.Fragment>;
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    loading: state.category.loading,
    categoryDetails: state.category.categoryDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditCategory: (categoryId, categoryData) =>
      dispatch(actions.editCategory(categoryId, categoryData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategory);
