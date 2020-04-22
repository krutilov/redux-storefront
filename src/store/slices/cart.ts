import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state: any, action) {
      const { id, title, price } = action.payload;
      state.push({ id, title, price });
    },
    removeFromCart(state, action) {
      console.log(action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
