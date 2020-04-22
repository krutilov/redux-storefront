import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const id = action.payload;
      console.log(id);
    },
    removeFromCart(state, action) {
      console.log(action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
