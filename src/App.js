import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./shop/routers/AppRouter";
import {store} from "./shop/redux/store/store";
import Header from './shop/components/Header/Header'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
