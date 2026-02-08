import { HomePage } from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
import "./App.css";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrderPage } from "./pages/order/OrderPage";
import { TrackingPage } from "./pages/tracking/TrackingPage";
import { NotFound } from "./pages/NotFound/NotFound";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("api/cart-items?expand=product");
    setCart(response.data);
  };
  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} loadCart={loadCart} />}
      />
      <Route
        path="orders"
        element={<OrderPage cart={cart} loadCart={loadCart} />}
      />
      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cart={cart} />}
      />

      <Route path="*" element={<NotFound cart={cart} />} />
    </Routes>
  );
}

export default App;
