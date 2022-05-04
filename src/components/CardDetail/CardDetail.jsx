/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './CardDetail.styles.scss';
import { Link } from 'react-router-dom';

function CardService(props) {
  const {
    _id, title, username, cost, image,
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
            <Link to={`/edit-service/${_id}`} className="card-detail__text">
              Editar Servicio
            </Link>

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
