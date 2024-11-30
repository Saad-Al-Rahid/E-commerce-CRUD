import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import ProductView from "./features/products/ProductView";

const App = () => {
  return (
    <Provider store={store}>
      <ProductView />
    </Provider>
  );
};

export default App;
