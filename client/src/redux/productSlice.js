// src/redux/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    searchText: "",
  },
  reducers: {
    setProduct(state, action) {
      state.products = action.payload;
    },
    setSearch(state, action) {
      state.searchText = action.payload;
    },
  },
});

export const { setProduct, setSearch } = productSlice.actions;
export default productSlice.reducer;
