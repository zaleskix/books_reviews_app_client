import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utils";

const initialState = {
  categories: [],
  categoryDetails: {},
  loading: false,
  actionFinished: false,
};

const addCategoryStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const addCategorySuccess = (state, action) => {
  const newCategory = updateObject(action.categoryData, { id: action.categoryId });
  return updateObject(state, {
    loading: false,
    categories: state.categories.concat(newCategory),
    actionFinished: true,
  });
};

const addCategoryFail = (state) => {
  return updateObject(state, { loading: false });
};

const getCategoriesStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const getCategoriesSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    categories: action.categoryData,
    actionFinished: true,
  });
};

const getCategoriesFail = (state) => {
  return updateObject(state, { loading: false });
};

const getCategoryDetailsStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const getCategoryDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    categoryDetails: action.categoryData,
    actionFinished: true,
  });
};

const getCategoryDetailsFail = (state) => {
  return updateObject(state, { loading: false });
};

const editCategoryStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const editCategorySuccess = (state) => {
  return updateObject(state, { loading: false, actionFinished: true });
};

const editCategoryFail = (state) => {
  return updateObject(state, { loading: false });
};

const removeCategoryStart = (state) => {
  return updateObject(state, { loading: true, actionFinished: false });
};

const removeCategorySuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    actionFinished: true,
  });
};

const removeCategoryFail = (state) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY_START:
      return addCategoryStart(state);
    case actionTypes.ADD_CATEGORY_SUCCESS:
      return addCategorySuccess(state, action);
    case actionTypes.ADD_CATEGORY_FAIL:
      return addCategoryFail(state);
    case actionTypes.GET_CATEGORIES_START:
      return getCategoriesStart(state);
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return getCategoriesSuccess(state, action);
    case actionTypes.GET_CATEGORIES_FAIL:
      return getCategoriesFail(state);
    case actionTypes.GET_CATEGORY_DETAILS_START:
      return getCategoryDetailsStart(state);
    case actionTypes.GET_CATEGORY_DETAILS_SUCCESS:
      return getCategoryDetailsSuccess(state, action);
    case actionTypes.GET_CATEGORY_DETAILS_FAIL:
      return getCategoryDetailsFail(state);
    case actionTypes.EDIT_CATEGORY_START:
      return editCategoryStart(state);
    case actionTypes.EDIT_CATEGORY_SUCCESS:
      return editCategorySuccess(state);
    case actionTypes.EDIT_CATEGORY_FAIL:
      return editCategoryFail(state);
    case actionTypes.REMOVE_CATEGORY_START:
      return removeCategoryStart(state);
    case actionTypes.REMOVE_CATEGORY_SUCCESS:
      return removeCategorySuccess(state);
    case actionTypes.REMOVE_CATEGORY_FAIL:
      return removeCategoryFail(state);
    default:
      return state;
  }
};

export default reducer;
