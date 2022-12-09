import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productAPI } from '../API/productsAPI';

const rootReducer = combineReducers({
  [productAPI.reducerPath]: productAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware),
});
