/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './CardService.styles.scss';

function CardService(props) {
  const {
    _id, title, image, cost, username,
  } = props.eachService;
  return (
    <div className="cardservice">
      <Link to={`/detail/${_id}`}>
        <div className="cardservice__content">
          <div className="cardservice__figure">
            <img className="cardservice__image" src={image} alt={title} />
          </div>
          <div className="cardservice__info">
            <p className="cardservice__title">
              {title}
            </p>
            <p className="cardservice__user">
              {`Por: ${username}`}
            </p>
          </div>
          <div className="cardservice__footer">
            <p className="cardservice__price">{`Desde: $${cost}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default CardService;
