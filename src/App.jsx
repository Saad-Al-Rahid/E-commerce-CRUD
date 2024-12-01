import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import ProductView from "./features/products/ProductView";
import AddProduct from "./features/products/AddProduct";

const App = () => {
  return (
    <Provider store={store}>
      <h1>E-Commerce CRUD Application</h1>
      <AddProduct />
      <ProductView />
    </Provider>
  );
};

export default App;
