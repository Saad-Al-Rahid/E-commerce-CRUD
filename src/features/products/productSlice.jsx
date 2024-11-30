import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productR/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:5174/products");
    return response.data;
  }
);

const initialState = {
  isLoading: false,
  products: [],
  error: null,
};

export const productSlice = createSlice({
  name: "productR",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
