import {
  ADD_PRODUCTS_TO_CART,
  DELETE_PRODUCTS_FROM_CART,
  SET_QUANTITY,
  INIT_CART,
} from "../actionType";
import { IProductCart } from "../../types";
import { callculateSumCart } from "../../helpers/callculateSumCart";

export const initialState = {
  cart: [],
  sumCart: undefined,
};

export const CART_REDUCER = (state: { cart: IProductCart[] }, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_CART:
      return { ...state, cart: payload, sumCart: callculateSumCart(payload) };
    case ADD_PRODUCTS_TO_CART:
      return { ...state, cart: state.cart.concat(payload) };
    case DELETE_PRODUCTS_FROM_CART: {
      const cart = state.cart.filter((p) => p.id !== payload);
      const sumCart = callculateSumCart(cart);
      return {
        ...state,
        cart,
        sumCart,
      };
    }
    case SET_QUANTITY: {
      let currentProducts = state.cart.slice();
      const candidateIndex = currentProducts.findIndex(
        (p) => p.id === payload.id
      );
      if (candidateIndex !== -1) {
        currentProducts[candidateIndex].quantity = payload.quantity;
      }
      const sumCart = callculateSumCart(currentProducts);
      return { ...state, cart: currentProducts, sumCart };
    }
    default:
      return state;
  }
};
