/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findByQuery } from '../../store/actions';
import Header from '../../components/Header/Header';
import CardService from '../../components/CardService/CardService';
import './Seller.styles.scss';

function Seller() {
  const dispatch = useDispatch();
  const id = localStorage.getItem('id');
  const reduxServices = useSelector((state) => state.ofertservice);
  useEffect(() => {
    dispatch(findByQuery(id));
  }, []);

  return (
    <div>
      <Header />
      <div className="seller">
        <div className="seller_Title">MIS SERVICIOS</div>
        <Link to="/create-service">
          <span className="seller__create">
            <p type="button">+</p>
          </span>
        </Link>
        <div className="bodySeller">
          <section className="servicesList">
            <h1>Servicios Publicados</h1>
            <div className="servicesList_cardViewer">
              {reduxServices.map((service) => (
                <CardService key={service._id} eachService={service} />
              ))}
            </div>
          </section>
          <section className="activeClientsList">
            <h1>Clientes interesados en los servicios</h1>
            <div className="activeClientsList_cardViewer">
              <h1>holaaa</h1>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}

export default Seller;
