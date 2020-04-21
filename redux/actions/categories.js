import instance from "./instance";

import { SET_CATEGORIES } from "./types";

export const getCategories = () => async (dispatch) => {
  try {
    const res = await instance.get("categories/");
    const categories = res.data;
    dispatch({
      type: SET_CATEGORIES,
      payload: categories,
    });
  } catch (err) {
    console.error("Error while fetching Categories", err);
  }
};
