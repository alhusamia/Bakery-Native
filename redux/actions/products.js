import instance from "./instance";

import { SET_PRODUCTS } from "./types";

export const getProducts = (categoryID) => async (dispatch) => {
  try {
    const res = await instance.get(`/categories/${categoryID}/`);
    const products = res.data;
    dispatch({
      type: SET_PRODUCTS,
      payload: products,
    });
  } catch (err) {
    console.error("Error while fetching Products", err);
  }
};
