import { Fragment } from "react";

import { OrderSummary } from "./OrderSummary";
import { OrderActions } from "./OrderActions";
import { OrderImage } from "./OrderImage";

export function OrderDetailsGrid({ order, loadCart }) {
  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => {
        return (
          <Fragment key={orderProduct.product.id}>
            <OrderImage orderProduct={orderProduct} />
            <OrderSummary orderProduct={orderProduct} loadCart={loadCart} />

            <OrderActions order={order} product={orderProduct.product} />
          </Fragment>
        );
      })}
    </div>
  );
}
