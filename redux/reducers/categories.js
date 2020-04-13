import { SET_CATEGORIES } from "../actions/types";

export default (categories = [], { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return payload;
    default:
      return categories;
  }
};
