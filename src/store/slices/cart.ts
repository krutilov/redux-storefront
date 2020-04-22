import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface IAddPayload {
  id: number;
  title: string;
  price: number;
}

export interface ICartInitialState {
  isLoading: boolean;
  items: ICartItem[];
}

const initialState: ICartInitialState = {
  isLoading: false,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // TODO: actual type check here for state and action

    addToCart(state, action) {
      // addToCart(state, action: PayloadAction<IAddPayload>) {
      console.log(action.payload);

      const { id, title, price } = action.payload;
      const current = state.items.find((item: ICartItem) => item.id === id);

      if (current) {
        current.quantity = current.quantity + 1;
      } else {
        state.items.push({ id, title, price, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const index = state.items.findIndex(
        (item: ICartItem) => item.id === action.payload
      );

      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
