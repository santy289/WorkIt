/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './CardService.styles.scss';

function CardService(props) {
  const {
    title, image, cost, costType,
  } = props.eachService;
  return (
    <div className="cardService">
      <div className="cardService_containerImageService">
        <img className="cardService_containerImageService--image" src={image} alt={title} />
      </div>
      <div className="cardService_infoServiceList">
        <div className="cardService_serviceTitle">
          <h2 className="card_tittle">Servicio:</h2>
          <p className="card_info">{title}</p>
        </div>
        <div className="cardService_infoServiceList--pricing">
          <h2 className="card_tittle">Precio:</h2>
          <p className="card_info">{cost}</p>
          <h2 className="card_tittle">Tipo de cobro:</h2>
          <p className="card_info">{costType}</p>
        </div>
      </div>
    </div>
  );
}
export default CardService;
