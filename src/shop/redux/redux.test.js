// import React from "react";
// import fetchMock from "jest-fetch-mock";
// import { productAPI, setupStore } from "../src/shop/redux/API/productsAPI";
// import { APIStore, renderWithProviders } from "./shop/test/setupTests";
// import App from "./App";
// const products = require("../mock/products.json");

// beforeEach(() => {
//   fetchMock.resetMocks();
// });

// test("Get all products success request", async () => {
//   const storeRef = APIStore(productAPI);
//   fetchMock.mockResponse(JSON.stringify({}));
//   await storeRef.store.dispatch(
//     productAPI.endpoints.getProducts.initiate(undefined)
//   );
//   expect(fetchMock).toBeCalledTimes(1);
//   const { method, url } = fetchMock.mock.calls[0][0];

//   expect(method).toBe("GET");
//   expect(url).toBe("http://localhost:3001/api/product");
// });
