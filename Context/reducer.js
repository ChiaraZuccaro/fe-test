import {
  ADD_TO_CART,
  ADD_TO_WISH,
  DELETE_FROM_CART,
  DELETE_FROM_WISH,
} from "./constant";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_WISH:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case DELETE_FROM_WISH:
      return {
        ...state,
        wishlist: [
          ...state.wishlist.filter(
            (el, i) => i != action.payload.i || el.id != action.payload.id
          ),
        ],
      };
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
