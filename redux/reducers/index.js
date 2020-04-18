import { combineReducers } from "redux";

import categories from "./categories";
import cart from "./cart";
import user from "./user";
import errors from "./errors";
import orders from "./orders";
import products from "./products";
import profile from "./profile";
import allproducts from "./allproducts";

export default combineReducers({
  allproducts,
  categories,
  products,
  profile,
  cart,
  user,
  errors,
  orders,
});
