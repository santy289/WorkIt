/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './CardService.styles.scss';

function CardService(props) {
  const {
    service, image, price, priceType,
  } = props.eachService;
  return (
    <div className="cardService">
      <div className="cardService_containerImageService">
        <img className="cardService_containerImageService--image" src={image} alt={service} />
      </div>
      <div className="cardService_infoServiceList">
        <div className="cardService_serviceTitle">
          <h1>Servicio:</h1>
          {service}
        </div>
        <div className="cardService_infoServiceList--pricing">
          <h2>Costo:</h2>
          {price}
          <h2>Tipo de costo:</h2>
          {priceType}
        </div>
      </div>
    </div>
  );
}
export default CardService;
