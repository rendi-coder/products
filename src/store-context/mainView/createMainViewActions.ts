import { ICard } from "../../types";
import {
  SET_PRODUCTS,
  SET_CURRENT_PRODUCTS,
  SET_CURRENT_PAGE,
  UPDATE_STATUS,
} from "../actionType";

export const createMainViewActions = (dispatch: any) => {
  return {
    setProducts: (payload: ICard[]) =>
      dispatch({ type: SET_PRODUCTS, payload }),
    setCurrentProducts: (payload: ICard[]) =>
      dispatch({ type: SET_CURRENT_PRODUCTS, payload }),
    setCurrentPage: (payload: number) =>
      dispatch({ type: SET_CURRENT_PAGE, payload }),
    updateStatus: (payload: { id: string; status: boolean }) =>
      dispatch({ type: UPDATE_STATUS, payload }),
  };
};
