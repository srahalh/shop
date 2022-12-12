import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./shop/routers/AppRouter";
import {store} from "./shop/redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
