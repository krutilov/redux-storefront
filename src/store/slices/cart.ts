import { createSlice, createSelector } from "@reduxjs/toolkit";

import { AppThunk } from "../store";
import { RootState } from "../rootReducer";
import { getSingleProduct } from "../api/mockApi";
import { productLoadingStart, productLoadingEnd } from "./products";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface CartInitialState {
  isLoading: boolean;
  items: CartItem[];
  error: boolean;
  discountPercent: number;
}

const initialState: CartInitialState = {
  isLoading: false,
  items: [],
  error: false,
  discountPercent: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartStart(state) {
      state.isLoading = true;
    },
    addToCartSuccess(state, action) {
      const { id, title, price } = action.payload;
      const existingProduct = state.items.find(
        (item: CartItem) => item.id === id
      );
      if (existingProduct) {
        existingProduct.quantity = existingProduct.quantity + 1;
      } else {
        state.items.push({ id, title, price, quantity: 1 });
      }
      state.isLoading = false;
    },
    addToCartFailure(state, action) {
      state.error = true;
    },
    increaseItemQuantity(state, action) {
      const productId = action.payload;
      const currentProduct = state.items.find(
        (product: CartItem) => product.id === productId
      );
      if (currentProduct) {
        currentProduct.quantity = currentProduct.quantity += 1;
      }
    },
    decreaseItemQuantity(state, action) {
      const productId = action.payload;
      const currentProduct = state.items.find(
        (product: CartItem) => product.id === productId
      );
      if (currentProduct && currentProduct.quantity > 1) {
        currentProduct.quantity = currentProduct.quantity -= 1;
      }
    },
    setCustomQuantity(state, action) {
      const { id, value } = action.payload;

      const currentProduct = state.items.find(
        (product: CartItem) => product.id === id
      );
      if (currentProduct) {
        currentProduct.quantity = value;
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
    setDiscountPercent(state, action) {
      state.discountPercent = action.payload;
    },
  },
});

export const {
  addToCartStart,
  addToCartSuccess,
  addToCartFailure,
  removeFromCart,
  setDiscountPercent,
  increaseItemQuantity,
  decreaseItemQuantity,
  setCustomQuantity,
} = cartSlice.actions;

// Selectors

export const cartItemsSelector = (state: RootState) => state.cart.items;

export const cartDiscountPercentSelector = (state: RootState) =>
  state.cart.discountPercent;

export const cartTotalSelector = createSelector(cartItemsSelector, (items) =>
  items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
);

export const cartTotalWithDiscountSelector = createSelector(
  [cartTotalSelector, cartDiscountPercentSelector],
  (total, discount) => total - (total / 100) * discount
);

// Thunks

export const addSingleProductToCart = (id: number): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(productLoadingStart(id));
    dispatch(addToCartStart());
    const singleProduct = await getSingleProduct(id);
    dispatch(addToCartSuccess(singleProduct));
    dispatch(productLoadingEnd(id));
  } catch (err) {
    dispatch(addToCartFailure(err));
  }
};
