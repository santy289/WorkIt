/* eslint-disable react/prop-types */
import React from 'react';

function CheckoutCard(props) {
  // eslint-disable-next-line react/prop-types
  const {
    paymentId,
    status,
    paymentType,
    buyerId,
    sellerId,
  } = props;
  return (
    <div>
      <h2>Id de pago</h2>
      <p>{paymentId}</p>
      <h2>Estado de pago</h2>
      <p>{status}</p>
      <h2>Tipo de pago</h2>
      <p>{paymentType}</p>
      <h2>Id de comprador</h2>
      <p>{buyerId}</p>
      <h2>Id de vendedor</h2>
      <p>{sellerId}</p>
    </div>
  );
}

export default CheckoutCard;
