import { Header } from "../../components/Header";
import { OrderTracking } from "./OrderTracking";
import { useParams } from "react-router";
import { Link } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import "./TrackingPage.css";
import { calculateDeliveryPercent } from "../../utils/deliveryUtils";

export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();

  const [trackInfo, setTrackInfo] = useState(null);

  useEffect(() => {
    const fetchTrackInfo = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`,
      );
      setTrackInfo(response.data);
    };
    fetchTrackInfo();
  }, [orderId]);

  if (!trackInfo) {
    return null;
  }

  const orderedProduct = trackInfo.products.find(
    (item) => item.product.id === productId,
  );

  const deliveryInfo = calculateDeliveryPercent({ orderedProduct, trackInfo });

  return (
    <>
      <link rel="icon" href="images/tracking-favicon.png" />
      <title>Track Orders</title>
      <Header cart={cart} />

      <div className="tracking-page">
        <OrderTracking
          orderedProduct={orderedProduct}
          deliveryInfo={deliveryInfo}
        />
      </div>
    </>
  );
}
