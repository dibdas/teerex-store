import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetching/products", async () => {
  try {
    const response = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    const productsData = await response.json();
    console.log(productsData);
    return productsData;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
});

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
  },
  reducers: {
    loadProducts: (state, action) => {
      console.log(action.payload);
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log(action.payload);
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
