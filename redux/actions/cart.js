import { ADD_ITEM, REMOVE_ITEM, CHECKOUT, SET_ORDERS } from "./types";
import instance from "./instance";

export const addItemToCart = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

// export const checkoutCart = (order) => ({
//   type: CHECKOUT,
//   payload: order,
// });
export const checkoutCart = (order) => {
  return async (dispatch) => {
    try {
      await instance.post("order/create/", order);
      dispatch({
        type: CHECKOUT,
      });
    } catch (err) {
      console.error("Error while creating order", err);
    }
  };
};

export const getOrders = () => async (dispatch) => {
  try {
    const res = await instance.get(`orders/`);
    const orders = res.data;
    dispatch({
      type: SET_ORDERS,
      payload: orders,
    });
  } catch (err) {
    console.error("Error while fetching Orders", err);
  }
};
