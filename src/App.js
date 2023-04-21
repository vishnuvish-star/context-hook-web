import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Checkout from "./components/checkout/checkout";
import Products from "./components/products/products";
import { CartProvider } from "./components/context/cartContext";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
