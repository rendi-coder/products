import { ICard, IProductCart } from "../../types";
import {
  INIT_CART,
  ADD_PRODUCTS_TO_CART,
  DELETE_PRODUCTS_FROM_CART,
  SET_QUANTITY,
} from "../actionType";

export const createCartActions = (dispatch: any) => {
  return {
    initCart: (payload: IProductCart[]) =>
      dispatch({ type: INIT_CART, payload }),
    addProductToCart: (payload: ICard) =>
      dispatch({ type: ADD_PRODUCTS_TO_CART, payload }),
    deleteProductFromCart: (payload: string) =>
      dispatch({ type: DELETE_PRODUCTS_FROM_CART, payload }),
    setQuantity: (payload: { id: string; quantity: number }) =>
      dispatch({ type: SET_QUANTITY, payload }),
  };
};
