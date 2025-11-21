/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const viewDetailSlice = createSlice({
  name: "viewDetail",
  initialState,
  reducers: {
    showPage: (state) => {
      state.value = true;
    },
    closePage: (state) => {
      state.value = false;
    },
  },
});

export const { showPage, closePage } = viewDetailSlice.actions;

export default viewDetailSlice.reducer;
