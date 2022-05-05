/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './CardBoughtService.styles.scss';

function CardBoughtService(props) {
  const {
    name, last, imageprofile, username, title, date, purchasedId,
  } = props.eachBoughtService;
  const newDate = new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
  return (
    <div className="cardBought">
      <div className="cardBought__imagebuyer">
        <img className="cardBought__imagebuyer--userprofile" src={imageprofile} alt="profile" />
      </div>
      <div className="cardBought__infobuyer">
        <h3>Servicio Comprado:</h3>
        {title}
        <h3>Datos del vendedor</h3>
        <h3>Usuario:</h3>
        {username}
        <h3>Nombre:</h3>
        {' '}
        {name}
        {' '}
        {last}
        <h3>Fecha de compra:</h3>
        {newDate}
      </div>
      <div className="cardBought__buttonsBar">
        <Link to={`/chat/${purchasedId}`}>
          <Button text="Chat" />
        </Link>
        <Button text="Agenda" />
      </div>
    </div>
  );
}

export default CardBoughtService;
