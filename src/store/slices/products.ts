import { createSlice } from "@reduxjs/toolkit";

import { AppThunk } from "../store";
import { getData } from "../api/mockApi";

export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface ProductsInitialState {
  isLoading: boolean;
  items: Product[];
  error: boolean;
}

const initialState: ProductsInitialState = {
  isLoading: false,
  items: [],
  error: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsStart(state) {
      state.isLoading = true;
    },
    getProductsSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    getProductsFailure(state, action) {
      state.error = true;
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
} = productsSlice.actions;

export const fetchProducts = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getProductsStart());
    const data = await getData();
    dispatch(getProductsSuccess(data));
  } catch (err) {
    dispatch(getProductsFailure(err));
  }
};
