import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk } from "../store";
import { getSingleProduct, getDiscountPercent } from "../api/mockApi";
import { Product } from "../slices/products";

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
  discountPercent: number;
  discountedPrice: number;
}

const initialState: CartInitialState = {
  isLoading: false,
  items: [],
  error: false,
  total: 0,
  discountPercent: 0,
  discountedPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartStart(state) {
      state.isLoading = true;
    },
    addToCartSuccess(state, action: PayloadAction<any>) {
      const { id, title, price } = action.payload;

      const existingProduct = state.items.find(
        (item: CartItem) => item.id === id
      );

      state.isLoading = false;

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
    addToCartFailure(state, action) {
      state.error = true;
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
      const discountPercent = action.payload;
      state.discountPercent = discountPercent;
    },
    countTotal(state) {
      state.total = state.items.reduce(
        (total: number, current: CartItem) =>
          (total += current.price * current.quantity),
        0
      );
    },
    countDiscount(state) {
      if (state.discountPercent > 0) {
        state.discountedPrice =
          state.total - (state.total / 100) * state.discountPercent;
      }
    },
  },
});

export const {
  addToCartStart,
  addToCartSuccess,
  addToCartFailure,
  removeFromCart,
  setDiscountPercent,
  countTotal,
  countDiscount,
} = cartSlice.actions;

export const addSingleProductToCart = (id: number): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(addToCartStart());
    const singleProduct = await getSingleProduct(id);
    dispatch(addToCartSuccess(singleProduct));
    dispatch(countTotal());
    dispatch(countDiscount());
  } catch (err) {
    dispatch(addToCartFailure(err));
  }
};

export const applyDiscount = (): AppThunk => async (dispatch) => {
  try {
    const discountPercent = await getDiscountPercent();
    console.log(discountPercent);
    dispatch(setDiscountPercent(discountPercent));
    dispatch(countDiscount());
  } catch (err) {
    dispatch(addToCartFailure(err));
  }
};
