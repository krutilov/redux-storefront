import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // TODO: actual type check here for state and action

    addToCart(state: any, action) {
      const { id, title, price } = action.payload;

      // Check if current product already in cart

      const current = state.find((item: any) => item.id === id);

      if (current) {
        current.quantity = current.quantity + 1;
      } else {
        state.push({ id, title, price, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      console.log(action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
