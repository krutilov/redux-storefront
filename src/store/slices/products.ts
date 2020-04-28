import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

import { AppThunk } from "../store";
import { getData } from "../api/mockApi";

export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  isLoading?: boolean;
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
    productLoadingStart(state, action) {
      const product = state.items.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.isLoading = true;
      }
    },
    productLoadingEnd(state, action) {
      const product = state.items.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.isLoading = false;
      }
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  productLoadingStart,
  productLoadingEnd,
} = productsSlice.actions;

// Selectors

export const productsSelector = (state: RootState) => state.products.items;
export const productsLoadingStatusSelector = (state: RootState) =>
  state.products.isLoading;

// Thunks

export const fetchProducts = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getProductsStart());
    const products = await getData();
    dispatch(getProductsSuccess(products));
  } catch (err) {
    dispatch(getProductsFailure(err));
  }
};
