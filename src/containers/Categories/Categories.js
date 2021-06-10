import React, { useEffect } from "react";

import styles from "./Categories.module.css";
import Category from "../../components/Category/Category";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import TextButton from "../../components/UI/Buttons/TextButton/TextButton";
import * as actions from "../../store/actions";
import { connect } from "react-redux";

const Categories = (props) => {
  if (!props.token) props.history.push("/login")
  const { onCategoriesGet } = props;

  useEffect(() => {
    let searchCriteria = {
      "sort.sortBy": "votes",
      "sort.sortDirection": "ASC",
    };
    onCategoriesGet(searchCriteria);
  }, [onCategoriesGet]);


  let categories = props.categories.map((category) => (
    <Category
      key={category.name}
      category={category}
      onClick={() =>
        props.history.push("/categories/" + category.categoryExternalId)
      }
    />
  ));

  const addButtonClicked = () => {
    props.history.push("/categories/new");
  };

  return (
    <div className={styles.Categories}>
      <PageHeader caption={"Kategorie"} />
      <div className={styles.PageContent}>
        <div className={styles.AddButton}>
          <TextButton
            isPrimary
            text={"Dodaj kategorie"}
            clicked={addButtonClicked}
          />
        </div>
        {categories}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    categories: state.category.categories,
    loading: state.category.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCategoriesGet: (searchCriteria) =>
      dispatch(actions.getCategories(searchCriteria)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
