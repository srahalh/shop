import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productAPI } from '../API/productsAPI';
import CartSlice from '../slices/cartSlice';

const rootReducer = combineReducers({
  [productAPI.reducerPath]: productAPI.reducer,
  cart: CartSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware),
});
