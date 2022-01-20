import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const categorySlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    setAppCategories: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAppCategories } = categorySlice.actions;

export const selectCategories = (state) => state.cat.data;

export default categorySlice.reducer;
