import { createContext, useContext, useReducer } from "react";
import {
  ADD_TO_CART,
  ADD_TO_WISH,
  DELETE_FROM_CART,
  DELETE_FROM_WISH,
} from "./constant";
import reducer from "./reducer";

const defaultState = {
  cart: [],
  totalPrice: 0,
  wishlist: [],
};

const CommerceContext = createContext(defaultState);

export const useCommerceContext = () => useContext(CommerceContext);

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const addCart = async (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };
  const delCart = async (id, i) => {
    dispatch({ type: DELETE_FROM_CART, payload: { id, i } });
  };
  const addWish = async (product) => {
    dispatch({ type: ADD_TO_WISH, payload: product });
  };
  const delWish = async (id, i) => {
    dispatch({ type: DELETE_FROM_WISH, payload: { id, i } });
  };

  const value = { state, addCart, delCart, addWish, delWish };

  return (
    <CommerceContext.Provider value={value}>
      {children}
    </CommerceContext.Provider>
  );
};
