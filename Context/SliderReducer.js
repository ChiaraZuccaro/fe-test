import { JUMP, NEXT, PREV, DONE, DRAG } from "./constant";

export const carouselReducer = (state, action) => {
  switch (action.type) {
    case JUMP:
      return {
        ...state,
        desired: action.desired,
      };
    case NEXT:
      return {
        ...state,
        desired: next(action.length, state.active),
      };
    case PREV:
      return {
        ...state,
        desired: previous(action.length, state.active),
      };
    case DONE:
      return {
        ...state,
        offset: NaN,
        active: state.desired,
      };

    case DRAG:
      return {
        ...state,
        offset: action.offset,
      };
    default:
      return state;
  }
};
