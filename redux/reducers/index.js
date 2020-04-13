import { combineReducers } from "redux";

import categories from "./categories";
import cart from "./cart";
import user from "./user";
import errors from "./errors";
import orders from "./orders";

export default combineReducers({
  categories,
  cart,
  user,
  errors,
  orders,
});
