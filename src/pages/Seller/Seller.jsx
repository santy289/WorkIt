/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findByQuery, getInfoBuyerThunk } from '../../store/actions';
import Header from '../../components/Header/Header';
import CardDetail from '../../components/CardDetail';
import './Seller.styles.scss';

function Seller() {
  const dispatch = useDispatch();
  const id = localStorage.getItem('id');
  const reduxServices = useSelector((state) => state.ofertservice);
  const reduxBuyer = useSelector((state) => state.infoBuyer);
  useEffect(() => {
    dispatch(findByQuery(id));
    dispatch(getInfoBuyerThunk(id));
  }, []);
  return (
    <>
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
                <CardDetail key={service._id} eachService={service} />
              ))}
            </div>
          </section>
          <section className="activeClientsList">
            <h1>Clientes interesados en los servicios</h1>
            <div className="activeClientsList_cardViewer">
              {
                reduxBuyer.map((buyer) => (
                  <CardDetail key={buyer._id} eachBuyer={buyer} />
              }
            </div>
          </section>
        </div>

      </div>
    </>
  );
}

export default Seller;
