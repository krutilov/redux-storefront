import { createSlice } from "@reduxjs/toolkit";
import { mockProducts } from "../mockProducts";

export const productsSlice = createSlice({
  name: "products",
  initialState: mockProducts,
  reducers: {},
});
