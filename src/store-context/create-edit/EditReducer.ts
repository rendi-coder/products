import {
  SET_TITLE,
  SET_PRICE,
  SET_DESCRIPTION,
  SET_ERRORS,
  INIT_VALUES,
  CLEAR_REDUCER,
  SET_EDIT_MODE,
} from "../actionType";

export const initialState = {
  id: undefined,
  title: "",
  price: undefined,
  description: "",
  inCart: false,
  errors: {},
  editMode: false,
};

export const CREATE_EDIT_REDUCER = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TITLE:
      return { ...state, title: payload };
    case SET_PRICE:
      return { ...state, price: payload };
    case SET_DESCRIPTION:
      return { ...state, description: payload };
    case SET_ERRORS:
      return { ...state, errors: payload };
    case SET_EDIT_MODE:
      return { ...state, editMode: payload };
    case INIT_VALUES:
      return {
        ...state,
        id: payload.id,
        title: payload.title,
        description: payload.description,
        price: payload.price,
        inCart: payload.inCart,
      };
    case CLEAR_REDUCER: {
      return initialState;
    }
    default:
      return state;
  }
};
