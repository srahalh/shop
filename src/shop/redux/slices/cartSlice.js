import { createSlice } from "@reduxjs/toolkit";
import { getWithExpiry, setWithExpiry } from "../../helpers/ttl";
import { productAPI } from "../API/productsAPI";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    isAddingToCart: false,
    cartCount: getWithExpiry("cart") || 0,
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
          (state.cartCount += payload.products.length),
          setWithExpiry("cart", payload.products.length, 3600000);
        }
      );
  },
});

export default CartSlice.reducer;
