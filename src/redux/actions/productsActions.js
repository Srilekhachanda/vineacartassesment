import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const cartProduct = (product) => {
  return {
    type: ActionTypes.CART_PRODUCT,
    payload: product,
  }
}
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export const setCartData = (product) => {
  return {
    type: ActionTypes.SET_CART_ITEMS,
    payload: product
  };
};
