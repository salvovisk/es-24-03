import { SET_DARK, SET_LIGHT } from "./constant";

export const SetLight = () => {
  return {
    type: SET_LIGHT,
    payload: "light",
  };
};

export const SetDark = () => {
  return {
    type: SET_DARK,
    payload: "dark",
  };
};
