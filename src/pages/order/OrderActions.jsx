import { Link } from "react-router";

export function OrderActions({ order, product }) {
  return (
    <div className="product-actions">
      <Link to={`/tracking/${order.id}/${product.id}`}>
        <button className="track-package-button button-secondary">
          Track package
        </button>
      </Link>
    </div>
  );
}
