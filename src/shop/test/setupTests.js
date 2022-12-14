/* eslint-disable react/prop-types */
import React from "react";
import { render } from "@testing-library/react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom"
import fetchMock from "jest-fetch-mock";
import { rootReducer } from "../redux/store/store";
import { productAPI } from "../redux/API/productsAPI";
import "@testing-library/jest-dom/extend-expect";

fetchMock.enableMocks();

//Wrapper
function Wrapper({ children, store }) {
  return (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
}

const APIStore = (api, extraReducers = {}) => {
  const initialStore = configureStore({
    reducer: combineReducers({
      [api.reducerPath]: api.reducer,
      ...extraReducers,
    }),
    middleware: (gdm) =>
      gdm({ serializableCheck: false, immutableCheck: false }).concat(
        api.middleware
      ),
  });
  return {
    api,
    store: initialStore,
    wrapper: Wrapper({ initialStore }),
  };
};

const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productAPI.middleware),
  })
}

const renderWithProviders = (ui, options = {} ) => {
  const {preloadedState = {}, route = "/"} = options
  const store = setupStore(preloadedState);

  const uiTree = (
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    </Provider>
  )
  return render (uiTree, options)
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithProviders, APIStore, setupStore };
