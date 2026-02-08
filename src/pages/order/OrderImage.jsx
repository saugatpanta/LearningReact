export function OrderImage({ orderProduct }) {
  return (
    <div className="product-image-container">
      <img src={orderProduct.product.image} />
    </div>
  );
}
