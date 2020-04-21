import { SET_ORDERS } from "../actions/types";

export default (orders = [], { type, payload }) => {
  switch (type) {
    case SET_ORDERS:
      return payload;

    default:
      return orders;
  }
};
