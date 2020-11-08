import { ICard, IListReducer } from "./../../types/index";
import {
  SET_PRODUCTS,
  SET_CURRENT_PRODUCTS,
  SET_CURRENT_PAGE,
  UPDATE_STATUS,
} from "../actionType";
export const initialState = {
  products: [],
  currentProducts: [],
  pagination: { currentPage: 1, productsPerPage: 10 },
};

export const LIST_REDUCER = (state: IListReducer, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload, currentProducts: payload };
    case UPDATE_STATUS: {
      let currentProducts = state.currentProducts.slice();
      const candidateIndex = currentProducts.findIndex(
        (p: ICard) => p.id === payload.id
      );
      if (candidateIndex !== -1) {
        currentProducts[candidateIndex].inCart = payload.status;
      }
      return { ...state, currentProducts };
    }

    case SET_CURRENT_PRODUCTS:
      return { ...state, currentProducts: payload };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, currentPage: payload },
      };
    default:
      return state;
  }
};
