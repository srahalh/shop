import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  keepUnusedDataFor: 3600, // it's delete data when past a hour
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getProductById: builder.query({
      query: (productId) => `products/${productId}`,
    }),
    addProductToCart: builder.mutation({
      query: (body) => ({
        url: "/carts/1",
        method: "PUT",
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
