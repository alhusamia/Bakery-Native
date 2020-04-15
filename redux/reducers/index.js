import { combineReducers } from "redux";

import categories from "./categories";
import cart from "./cart";
import user from "./user";
import errors from "./errors";
import orders from "./orders";
import products from "./products";

export default combineReducers({
  categories,
  products,
  cart,
  user,
  errors,
  orders,
});
