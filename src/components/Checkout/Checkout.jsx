/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button/Button';

import './Checkout.styles.scss';

function Checkout(props) {
  const {
    status, paymentMethod, paymentId,
  } = props;
  return (
    <div className="containercheck">
      <h1 className="summary">RESUMEN DE LA COMPRA</h1>
      <h2 className="items">Estado de la compra:</h2>
      <h2 className="itemsdata">{status}</h2>
      <h2 className="items">Metodo de pago:</h2>
      <h2 className="itemsdata">{paymentMethod}</h2>
      <h2 className="items">Id de transaccion:</h2>
      <h2 className="itemsdata">{paymentId}</h2>
      <br />
      <Button text="FINALIZAR Y VOLVER" />
    </div>
  );
}

export default Checkout;
