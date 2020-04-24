import { createSlice } from "@reduxjs/toolkit";
import { mockProducts } from "../mockProducts";

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
  items: mockProducts,
  error: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsStart(state, action) {
      //
    },
    getProductsSuccess(state, action) {
      //
    },
    getProductsFailure(state, action) {
      //
    },
  },
});
