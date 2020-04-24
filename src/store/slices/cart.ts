import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartAddPayload {
  id: number;
  title: string;
  price: number;
}

export interface CartInitialState {
  isLoading: boolean;
  items: CartItem[];
  error: boolean;
  total: number;
}

const initialState: CartInitialState = {
  isLoading: false,
  items: [],
  error: false,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartAddPayload>) {
      const { id, title, price } = action.payload;

      const existingProduct = state.items.find(
        (item: CartItem) => item.id === id
      );

      if (existingProduct) {
        existingProduct.quantity = existingProduct.quantity + 1;
      } else {
        state.items.push({
          id,
          title,
          price,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, action) {
      const index = state.items.findIndex(
        (item: CartItem) => item.id === action.payload
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
