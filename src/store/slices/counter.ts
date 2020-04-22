import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;

export const getCount = (state: RootState) => state.counter;
