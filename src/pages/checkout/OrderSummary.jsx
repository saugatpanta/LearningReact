import { DeliveryOption } from "./DeliveryOption";
import { DeliveryDate } from "./DeliveryDate";
import { CartItemDetails } from "./CartItemDetails";

export default function OrderSummary({ deliveryOptions, cart, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find((option) => {
            return option.id === cartItem.deliveryOptionId;
          });

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

              <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <CartItemDetails cartItem={cartItem} loadCart={loadCart} />

                <DeliveryOption
                  deliveryOptions={deliveryOptions}
                  cartItem={cartItem}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
