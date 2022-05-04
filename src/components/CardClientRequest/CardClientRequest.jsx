/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';
import Button from '../Button/Button';
import './CardClientRequest.styles.scss';

function CardClientRequest(props) {
  const {
    purchasedId, name, last, imageprofile, username, title,
  } = props.eachBuyer;
  return (
    <div className="clientRequest">
      <div className="clientRequest__imagebuyer">
        <img className="clientRequest__imagebuyer--userprofile" src={imageprofile} alt="profile" />
      </div>
      <div className="clientRequest__infobuyer">
        <h3>Nombre:</h3>
        {' '}
        {name}
        {' '}
        {last}
        <h3>Nombre de Usuario:</h3>
        {username}
        <h3>Servicio adquirido:</h3>
        {title}
      </div>
      <div className="clientRequest__buttonsBar">
        <Link to={`/chat/${purchasedId}`}>
          <Button text="Chat" />
        </Link>
      </div>
    </div>
  );
}
export default CardClientRequest;
