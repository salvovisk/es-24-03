import { createStore } from "redux";
import themeReducer from "./themeReducer";

const defaultStore = { theme: "light" };

export const store = createStore(themeReducer, defaultStore);
