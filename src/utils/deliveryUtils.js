import dayjs from "dayjs";

export function calculateDeliveryPercent({orderedProduct, trackInfo}) {
  const totalDeliveryTimeMs =
    orderedProduct.estimatedDeliveryTimeMs - trackInfo.orderTimeMs;

  const timePassedMs = dayjs().valueOf() - trackInfo.orderTimeMs;

  let deliveryPercent = Math.floor((timePassedMs / totalDeliveryTimeMs) * 100);

  const isPreparing = deliveryPercent < 33;
  const isShipped = deliveryPercent >= 33 && deliveryPercent < 100;

  if (deliveryPercent > 100) {
    deliveryPercent = 100;
  }
  return {
    deliveryPercent,
    isPreparing,
    isShipped,
  };
}