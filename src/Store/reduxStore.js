import { createStore } from "redux";
import themeReducer from "./themeReducer";

const defaultStore = { theme: "light" };

export const store = createStore(
  themeReducer,
  defaultStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
