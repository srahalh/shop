import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/",
  }),
  keepUnusedDataFor: 3600, // Delete data when past a hour
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "product",
    }),
    getProductById: builder.query({
      query: (productId) => `product/${productId}`,
    }),
    addProductToCart: builder.mutation({
      query: (body) => ({
        url: "cart",
        method: "POST",
        body: body
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductToCartMutation,
} = productAPI;
