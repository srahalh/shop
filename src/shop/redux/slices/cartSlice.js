import { createSlice } from "@reduxjs/toolkit";
import { fakeStoreAPI } from "../API/productsAPI";

const initialState = {
    isAddingToCart: false,
    countProductInCart: 0
};
//TODO:Cuidado con este slice hay que hacerlo con calma por la forma en la que esta hecha el API
export const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
      builder
      .addMatcher(fakeStoreAPI.endpoints.addProductToCart.matchPending, (state) => {
        state.isAddingToCart = true;
      })
      .addMatcher(fakeStoreAPI.endpoints.addProductToCart.matchFulfilled, (state, {payload}) =>{
        state.isAddingToCart = false,
        state.countProductInCart+= payload.count;
      });

    },
  });
  
export default productSlice.reducer;