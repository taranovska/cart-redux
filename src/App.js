import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./reducer";
const initialStore = {
  cart: cartItems,
  total: 6,
  amount: 5,
};

function App() {
  const store = createStore(reducer, initialStore);

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
