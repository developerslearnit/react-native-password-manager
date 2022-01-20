import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./feature/authSlice";
import categorySlice from "./feature/categorySlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cat: categorySlice,
  },
});
