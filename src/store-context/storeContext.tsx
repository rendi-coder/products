import React, { useContext, useReducer } from "react";
import {
  LIST_REDUCER,
  initialState as LIST_PRODUCTS_INTTIAL_STATE,
} from "./mainView/listReducer";
import {
  CREATE_EDIT_REDUCER,
  initialState as CREATE_EDIT_INITIAL_STATE,
} from "./create-edit/EditReducer";
import {
  CART_REDUCER,
  initialState as CART_INITIAL_STATE,
} from "./cart/cart.reducer";
import { createCartActions } from "./cart/createCartActions";
import { createMainViewActions } from "./mainView/createMainViewActions";
import { createEditActions } from "./create-edit/createEditActions";

const StoreContext = React.createContext({});

export const useStore = () => {
  return useContext(StoreContext);
};

export const Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mainView, dispatchToListReducer] = useReducer(
    LIST_REDUCER,
    LIST_PRODUCTS_INTTIAL_STATE
  );
  const [editView, dispatchToEditReducer] = useReducer(
    CREATE_EDIT_REDUCER,
    CREATE_EDIT_INITIAL_STATE
  );
  const [cartView, dispatchToCart] = useReducer(
    CART_REDUCER,
    CART_INITIAL_STATE
  );

  const mainViewActions = createMainViewActions(dispatchToListReducer);
  const editActions = createEditActions(dispatchToEditReducer);
  const cartActions = createCartActions(dispatchToCart);

  return (
    <StoreContext.Provider
      value={{
        MAIN_VIEW: {
          state: mainView,
          actions: mainViewActions,
        },
        CREATE_EDIT_VIEW: {
          state: editView,
          actions: editActions,
        },
        CART_VIEW: {
          state: cartView,
          actions: cartActions,
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
