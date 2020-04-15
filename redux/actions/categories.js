import instance from "./instance";

import { SET_CATEGORIES } from "./types";

export const getCategories = () => async (dispatch) => {
  try {
    const res = await instance.get("");
    const categories = res.data;
    dispatch({
      type: SET_CATEGORIES,
      payload: categories,
    });
  } catch (err) {
    console.error("Error while fetching shops", err);
  }
};
