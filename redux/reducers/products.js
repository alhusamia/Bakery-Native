import { SET_PRODUCTS } from "../actions/types";

export default (products = [], { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return payload;
    default:
      return products;
  }
};