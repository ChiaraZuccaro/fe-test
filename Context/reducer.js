import { ADD_TO_CART, DELETE_FROM_CART } from "./constant";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            (el, i) => i != action.payload.i || el.id != action.payload.id
          ),
        ],
        totalPrice: [
          ...state.cart.filter(
            (el, i) => i != action.payload.i || el.id != action.payload.id
          ),
        ].reduce((a, b) => a + b.price, 0),
      };
    default:
      return state;
  }
};
