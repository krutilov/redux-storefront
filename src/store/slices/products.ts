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
}

const initialState: ProductsInitialState = {
  isLoading: true,
  items: mockProducts,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
