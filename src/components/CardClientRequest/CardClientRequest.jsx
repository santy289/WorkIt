/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button/Button';
import './CardClientRequest.styles.scss';

function CardClientRequest(props) {
  const {
    name, last, imageprofile, username,
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
      </div>
      <div className="clientRequest__buttonsBar">
        <Button text="Chat" />
      </div>
    </div>
  );
}
export default CardClientRequest;
