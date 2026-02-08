import axios from "axios";
import { useState, useEffect, Fragment } from "react";

import { Header } from "../../components/Header";
import "./OrderPage.css";
import { OrderHeader } from "./OrderHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";

export function OrderPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  return (
    <>
      <link rel="icon" href="images/orders-favicon.png" />
      <title>Orders</title>
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <OrderHeader order={order} />

                <OrderDetailsGrid order={order} loadCart={loadCart} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
