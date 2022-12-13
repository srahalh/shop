import { createSlice } from "@reduxjs/toolkit";
import { productAPI } from "../API/productsAPI";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    isAddingToCart: false,
    cartCount: 0,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        productAPI.endpoints.addProductToCart.matchPending,
        (state) => {
          state.isAddingToCart = true;
        }
      )
      .addMatcher(
        productAPI.endpoints.addProductToCart.matchFulfilled,
        (state, { payload }) => {
          (state.isAddingToCart = false),
          (state.cartCount += payload.count)
        }
      );
  },
});

export default CartSlice.reducer;
