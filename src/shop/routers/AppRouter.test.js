import React from "react";
import { renderWithProviders } from "../test/setupTests";
import { AppRouter } from "./AppRouter"

describe('Test AppRouter', () => {
  test('Should move user the ProductListPage to ProductDetailsPage',  () => {
    renderWithProviders(<AppRouter /> );
  })
})
