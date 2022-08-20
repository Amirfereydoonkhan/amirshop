import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import Products from "./Pages/Products";
import ShoppingCart from "./Pages/ShoppingCart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
