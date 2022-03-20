/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './CardClientRequest.styles.scss';

function CardClientRequest(props) {
  const {
    name, last, servicerequested,
  } = props.eachClient;
  return (
    <div className="cardClientRequest">
      <div className="cardClientRequest_userData">
        <h1>Nombre:</h1>
        {name}
        {' '}
        {last}
      </div>
      <div className="cardClientRequest_servicerequested">
        <h2>Servicio Requerido:</h2>
        {servicerequested}
      </div>
      <div className="cardClientRequest_buttonsBar">
        <button className="cardClientRequest_buttonsBar--button" type="button">Agendar</button>
        <button className="cardClientRequest_buttonsBar--button" type="button">Chat</button>
      </div>
    </div>
  );
}
export default CardClientRequest;
