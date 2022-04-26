import React from 'react';

function CheckoutCard(props) {
  // eslint-disable-next-line react/prop-types
  const { paymentId, status, paymentType } = props;
  return (
    <div>
      <h1>Id de pago</h1>
      <p>{paymentId}</p>
      <h1>Estado de pago</h1>
      <p>{status}</p>
      <h1>Tipo de pago</h1>
      <p>{paymentType}</p>
    </div>
  );
}

export default CheckoutCard;
