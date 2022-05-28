import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
  CREATE_PRODUCT,
  CLEAR_PRODUCT,
  SAVE_PRODUCT,
  DELETE_PRODUCT
} from "../types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        size: action.payload.size,
        filteredItems: action.payload.items,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };
    case CREATE_PRODUCT:
        return { items: action.payload };
    case SAVE_PRODUCT:
        return {product: action.payload};
    case DELETE_PRODUCT:
        return {product: action.payload};
    case CLEAR_PRODUCT:
      return { items: null };
    default:
      return state;
  }
};


