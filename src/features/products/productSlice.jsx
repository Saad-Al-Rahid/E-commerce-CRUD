import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5174/products";

export const fetchProducts = createAsyncThunk(
  "productR/fetchProducts",
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  }
);

export const deleteProducts = createAsyncThunk(
  "productR/deleteProducts",
  async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  }
);

export const createProducts = createAsyncThunk(
  "productR/createProducts",
  async (product) => {
    const response = await axios.post(BASE_URL, product);
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
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.error.message;
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(createProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});

export default productSlice.reducer;
