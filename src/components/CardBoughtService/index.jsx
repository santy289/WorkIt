/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button/Button';
import './CardBoughtService.styles.scss';

function CardBoughtService(props) {
  const {
    name, last, imageprofile, username, title, date,
  } = props.eachBoughtService;
  return (
    <div className="cardBought">
      <div className="cardBought__imagebuyer">
        <img className="cardBought__imagebuyer--userprofile" src={imageprofile} alt="profile" />
      </div>
      <div className="cardBought__infobuyer">
        <h3>Servicio Comprado:</h3>
        <h3>Datos del vendedor</h3>
        <h3>Usuario:</h3>
        <h3>Nombre:</h3>
        {' '}
        {name}
        {' '}
        {last}
        {username}
        {title}
        <h3>Fecha de compra:</h3>
        {date}
      </div>
      <div className="cardBought__buttonsBar">
        <Button text="Chat" />
        <Button text="Agenda" />
      </div>
    </div>
  );
}

export default CardBoughtService;
