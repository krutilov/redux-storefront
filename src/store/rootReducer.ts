import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { cartSlice } from "./slices/cart";
import { productsSlice } from "./slices/products";

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  cart: cartSlice.reducer,
  products: productsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
