/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';

import './Checkout.styles.scss';

function Checkout() {
  const activeproducts = useSelector((state) => state.activeproducts);
  const { status, paymentId, paymentType } = activeproducts;
  return (
    <div className="containercheck">
      <h1 className="summary">RESUMEN DE LA COMPRA</h1>
      <h2 className="items">Estado de la compra:</h2>
      <h2 className="itemsdata">{status}</h2>
      <h2 className="items">Metodo de pago:</h2>
      <h2 className="itemsdata">{paymentId}</h2>
      <h2 className="items">Id de transaccion:</h2>
      <h2 className="itemsdata">{paymentType}</h2>
      <br />
      <Button text="AGENDAR SERVICIO" />
    </div>
  );
}

export default Checkout;
