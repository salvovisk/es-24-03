import { SET_DARK, SET_LIGHT } from "./constants";

const defaultState = { theme: "light" };

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_DARK:
      return {
        theme: action.payload,
      };
    case SET_LIGHT:
      return {
        theme: action.payload,
      };
    default:
      return state;
  }
};
