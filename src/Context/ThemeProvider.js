import { createContext, useReducer } from "react";
import themeReducer from "./themeReducer";
import { SET_DARK, SET_LIGHT } from "./constants";

const defaultState = { theme: "light" };

export const ThemeChangerContext = createContext(defaultState);

export default ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, defaultState);

  const SetDark = () => {
    dispatch({
      type: SET_DARK,
      payload: "dark",
    });
  };
  const SetLight = () => {
    dispatch({
      type: SET_LIGHT,
      payload: "light",
    });
  };

  const value = { state, SetDark, SetLight };

  return (
    <ThemeChangerContext.Provider value={value}>
      {children}
    </ThemeChangerContext.Provider>
  );
};
