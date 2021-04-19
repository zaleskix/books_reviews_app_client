import * as actionTypes from "./actionTypes";
import axiosInstance from "../../axios";

const CATEGORY_URL = "http://localhost:6080/categories";

export const addCategorySuccess = (id, categoryData) => {
  return {
    type: actionTypes.ADD_CATEGORY_SUCCESS,
    categoryId: id,
    categoryData: categoryData,
  };
};

export const addCategoryFail = (error) => {
  return {
    type: actionTypes.ADD_CATEGORY_FAIL,
    error: error,
  };
};

export const addCategoryStart = () => {
  return {
    type: actionTypes.ADD_CATEGORY_START,
  };
};

export const addCategory = (categoryData) => {
  return (dispatch) => {
    dispatch(addCategoryStart());
    axiosInstance
      .post(CATEGORY_URL, categoryData)
      .then((response) => {
        dispatch(addCategorySuccess(response.data.id, categoryData));
      })
      .catch((error) => {
        dispatch(addCategoryFail(error));
      });
  };
};

export const getCategoriesStart = () => {
  return {
    type: actionTypes.GET_CATEGORIES_START,
  };
};

export const getCategoriesFail = (error) => {
  return {
    type: actionTypes.GET_CATEGORIES_FAIL,
    error: error,
  };
};

export const getCategoriesSuccess = (response) => {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    categoryData: response.data,
  };
};

export const getCategories = (searchCriteria) => {
  return (dispatch) => {
    dispatch(getCategoriesStart());
    axiosInstance
      .get(CATEGORY_URL, {
        params: {
          ...searchCriteria,
        },
      })
      .then((response) => {
        dispatch(getCategoriesSuccess(response));
      })
      .catch((error) => {
        dispatch(getCategoriesFail(error));
      });
  };
};

export const getCategoryDetailsStart = () => {
  return {
    type: actionTypes.GET_CATEGORY_DETAILS_START,
  };
};

export const getCategoryDetailsFail = (error) => {
  return {
    type: actionTypes.GET_CATEGORY_DETAILS_FAIL,
    error: error,
  };
};

export const getCategoryDetailsSuccess = (response) => {
  return {
    type: actionTypes.GET_CATEGORY_DETAILS_SUCCESS,
    categoryData: response.data,
  };
};

export const getCategoryDetails = (categoryId) => {
  return (dispatch) => {
    dispatch(getCategoryDetailsStart());
    axiosInstance
      .get(CATEGORY_URL + "/" + categoryId)
      .then((response) => {
        dispatch(getCategoryDetailsSuccess(response));
      })
      .catch((error) => {
        dispatch(getCategoryDetailsFail(error));
      });
  };
};

export const editCategoryStart = () => {
  return {
    type: actionTypes.EDIT_CATEGORY_START,
  };
};

export const editCategoryFail = (error) => {
  return {
    type: actionTypes.EDIT_CATEGORY_FAIL,
    error: error,
  };
};

export const editCategorySuccess = () => {
  return {
    type: actionTypes.EDIT_CATEGORY_SUCCESS,
  };
};

export const editCategory = (categoryId, categoryData) => {
  return (dispatch) => {
    dispatch(editCategoryStart());
    axiosInstance
      .put(CATEGORY_URL + "/" + categoryId, categoryData)
      .then(() => {
        dispatch(editCategorySuccess());
      })
      .catch((error) => {
        dispatch(editCategoryFail(error));
      });
  };
};

export const removeCategoryStart = () => {
  return {
    type: actionTypes.REMOVE_CATEGORY_START,
  };
};

export const removeCategoryFail = (error) => {
  return {
    type: actionTypes.REMOVE_CATEGORY_FAIL,
    error: error,
  };
};

export const removeCategorySuccess = () => {
  return {
    type: actionTypes.REMOVE_CATEGORY_SUCCESS,
    categoryData: null,
  };
};

export const removeCategory = (categoryId) => {
  return (dispatch) => {
    dispatch(removeCategoryStart());
    axiosInstance
      .delete(CATEGORY_URL + "/" + categoryId)
      .then(() => {
        dispatch(removeCategorySuccess());
      })
      .catch((error) => {
        dispatch(removeCategoryFail(error));
      });
  };
};
