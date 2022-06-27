import { createContext, useContext, useReducer } from "react";
import { ADD_TO_CART, DELETE_FROM_CART } from "./constant";
import reducer from "./reducer";

const defaultState = {
  cart: [],
  totalPrice: [],
};

const CommerceContext = createContext(defaultState);

export const useVacationContext = () => useContext(CommerceContext);

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const addCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };
  const delCart = (product) => {
    dispatch({ type: DELETE_FROM_CART, payload: { id, i } });
  };

  const value = { state, addCart, delCart };

  return (
    <CommerceContext.Provider value={value}>
      {children}
    </CommerceContext.Provider>
  );
};
