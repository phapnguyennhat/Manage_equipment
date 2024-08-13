import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isError } from "react-query";
import { getCartAPI } from "~/api/cartAPI";
import instance from "~/config/axiosConfig";
import { useCartData } from "~/hooks/useCart";

const initialState = {
  cartList: [],
  count: 0,
  total: 0,
  isLoading: false,
  isError: false,
};

export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async () => {
    if (localStorage.getItem("token")) {
      const response = await instance.get("cartItem");
      return response.data;
    }
  },
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.cartList = action.payload.data;
        state.count = action.payload.count;
        state.total = action.payload.total;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log(action.error);
      });
  },
});

export default cartSlice.reducer;
