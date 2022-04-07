/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button/Button';
import './CardClientRequest.styles.scss';

function CardClientRequest(props) {
  const {
    name, last, servicerequested,
  } = props.eachClient;
  return (
    <div className="cardClientRequest">
      <div className="cardClientRequest_userData">
        <h3>Nombre:</h3>
        {name}
        {' '}
        {last}
      </div>
      <div className="cardClientRequest_servicerequested">
        <h3>Servicio Requerido:</h3>
        {servicerequested}
      </div>
      <div className="cardClientRequest_buttonsBar">
        <Button text="Agendar" />
        <Button text="Chat" />
      </div>
    </div>
  );
}
export default CardClientRequest;
