import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./cart-slice";
import showCartReducer from "./ui-slice";

const store = configureStore({
  reducer: { cart: counterReducer, ui: showCartReducer },
});

export default store;
