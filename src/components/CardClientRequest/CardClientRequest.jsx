/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button/Button';
import './CardClientRequest.styles.scss';

function CardClientRequest(props) {
  const {
    name, last, imageprofile, username,
  } = props;
  return (
    <div className="cardClientRequest">
      <div className="cardClientRequest_userData">
        <div className="cardClientRequest_userData_image">
          <img src={imageprofile} alt="profile" />
        </div>
        <div className="cardClientRequest_userData_name">
          <h3>Nombre:</h3>
          {' '}
          {name}
          {' '}
          {last}
        </div>
        <div className="cardClientRequest_servicerequested">
          <h3>Nombre de Usuario:</h3>
          {username}
        </div>
        <div className="cardClientRequest_buttonsBar">
          <Button text="Agendar" />
          <Button text="Chat" />
        </div>
      </div>
    </div>
  );
}
export default CardClientRequest;
