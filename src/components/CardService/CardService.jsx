/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CardService.styles.scss';

function CardService() {
  const ofertservice = useSelector((state) => state.ofertservice);
  const {
    _id, title, username, cost, image,
  } = ofertservice;
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
