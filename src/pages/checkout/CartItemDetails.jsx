import { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";

export function CartItemDetails({ cartItem, loadCart }) {
  const [isEditing, setIsEditing] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const updateCartItem = async () => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity,
    });
    await loadCart();
    setIsEditing(false);
  };

  return (
    <div className="cart-item-details">
      <div className="product-name">{cartItem.product.name}</div>

      <div className="product-price">
        {formatMoney(cartItem.product.priceCents)}
      </div>

      <div className="product-quantity">
        {!isEditing ? (
          <>
            <span>
              Quantity:{" "}
              <span className="quantity-label">{cartItem.quantity}</span>
            </span>

            <span
              className="update-quantity-link link-primary"
              onClick={() => setIsEditing(true)}
            >
              Update
            </span>

            <span
              className="delete-quantity-link link-primary"
              onClick={deleteCartItem}
            >
              Delete
            </span>
          </>
        ) : (
          <>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="quantity-input"
            />

            <span
              className="save-quantity-link link-primary"
              onClick={updateCartItem}
            >
              Save
            </span>

            <span
              className="cancel-quantity-link link-primary"
              onClick={() => {
                setQuantity(cartItem.quantity);
                setIsEditing(false);
              }}
            >
              Cancel
            </span>
          </>
        )}
      </div>
    </div>
  );
}
