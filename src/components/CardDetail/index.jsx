/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './cardDetail.scss';

function CardService(props) {
  const {
    title, username, cost, image,
  } = props.eachService;
  return (
    <div className="card-detail">
      <div>
        <div className="card-detail__content">
          <div className="card-detail__figure">
            <img className="card-detail__image" src={image} alt={title} />
          </div>
          <div className="card-detail__info">
            <p className="card-detail__title">
              {title}
            </p>
            <p className="card-detail__text">
              Editar Servicio
            </p>

            <p className="card-detail__user">
              {`Por: ${username}`}
            </p>
          </div>
          <div className="card-detail__footer">
            <p className="card-detail__price">{`Desde: $${cost}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardService;
