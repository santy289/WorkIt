/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTE_HOME } from '../../routes/routes';
import Button from '../Button/Button';
import Schedule from '../Schedule/Schedule';

import './Checkout.styles.scss';

function Checkout() {
  const activeproducts = useSelector((state) => state.activeproducts);
  const { status, paymentId, paymentType } = activeproducts;
  return (
    <section className="checkoutbox">
      <div className="containercheck">
        <h1 className="summary">RESUMEN DE LA COMPRA</h1>
        <h2 className="items">Estado de la compra:</h2>
        <h2 className="itemsdata">{status}</h2>
        <h2 className="items">Metodo de pago:</h2>
        <h2 className="itemsdata">{paymentType}</h2>
        <h2 className="items">Id de transaccion:</h2>
        <h2 className="itemsdata">{paymentId}</h2>
        <br />
      </div>
      <div className="checkout__schedule">
        <h1 className="summary">AGENDA TU SERVICIO</h1>
        <Schedule />
      </div>
      <div className="checkoutbox__button">
        <Link to={ROUTE_HOME}>
          <Button text="VOLVER A INICIO" />
        </Link>
      </div>
    </section>
  );
}

export default Checkout;
