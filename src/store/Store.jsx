import { configureStore } from "@reduxjs/toolkit";
import viewDetailReducer from "../features/ViewDetailSlice"; // import your slice reducer

export const Store = configureStore({
  reducer: {
    viewDetail: viewDetailReducer, // register the slice here
  },
});

