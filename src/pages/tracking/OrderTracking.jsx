import { Link } from "react-router";
import dayjs from "dayjs";

export function OrderTracking({ deliveryInfo, orderedProduct }) {
  return (
    <div className="order-tracking">
      <Link className="back-to-orders-link link-primary" to="/orders">
        View all orders
      </Link>

      <div className="delivery-date">
        {deliveryInfo.isDelivered ? "Delivered on: " : "Arriving on: "}
        {dayjs(orderedProduct.estimatedDeliveryTimeMs).format("MMMM D, YYYY")}
      </div>

      <div className="product-info">{orderedProduct.product.name}</div>

      <div className="product-info">Quantity: {orderedProduct.quantity}</div>

      <img className="product-image" src={orderedProduct.product.image} />

      <div className="progress-labels-container">
        <div
          className={`progress-label ${deliveryInfo.isPreparing && "current-status"}`}
        >
          Preparing
        </div>
        <div
          className={`progress-label ${deliveryInfo.isShipped && "current-status"}`}
        >
          Shipped
        </div>
        <div
          className={`progress-label ${deliveryInfo.isDelivered && "current-status"}`}
        >
          Delivered
        </div>
      </div>

      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${deliveryInfo.deliveryPercent}%` }}
        ></div>
      </div>
    </div>
  );
}
