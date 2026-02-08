import dayjs from "dayjs";
import axios from "axios";

export function OrderSummary({ orderProduct, loadCart }) {
  const updateCart = async () => {
    await axios.post("/api/cart-items", {
      productId: orderProduct.product.id,
      quantity: 1,
    });
    loadCart();
  };
  return (
    <div className="product-details">
      <div className="product-name">{orderProduct.product.name}</div>
      <div className="product-delivery-date">
        Arriving on:{" "}
        {dayjs(orderProduct.estimatedDeliveryTimeMs).format("MMMM D")}
      </div>
      <div className="product-quantity">Quantity: {orderProduct.quantity}</div>
      <button className="buy-again-button button-primary" onClick={updateCart}>
        <img className="buy-again-icon" src="images/icons/buy-again.png" />
        <span className="buy-again-message">Add to Cart</span>
      </button>
    </div>
  );
}
