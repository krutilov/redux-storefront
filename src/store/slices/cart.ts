import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => state,
    removeFromCart: (state, action) => state,
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
