import { ICard, IErrors } from "../../types";
import {
  SET_TITLE,
  SET_PRICE,
  SET_DESCRIPTION,
  SET_ERRORS,
  INIT_VALUES,
  SET_EDIT_MODE,
  CLEAR_REDUCER,
} from "../actionType";

export const createEditActions = (dispatch: any) => {
  return {
    setTitle: (payload: string) => dispatch({ type: SET_TITLE, payload }),
    setPrice: (payload: string) => dispatch({ type: SET_PRICE, payload }),
    setDescription: (payload: string) =>
      dispatch({ type: SET_DESCRIPTION, payload }),
    setErrors: (payload: IErrors) => dispatch({ type: SET_ERRORS, payload }),
    initValues: (payload: ICard) => dispatch({ type: INIT_VALUES, payload }),
    setEditMode: (payload: boolean) =>
      dispatch({ type: SET_EDIT_MODE, payload }),
    clearEditReducer: () => dispatch({ type: CLEAR_REDUCER }),
  };
};
