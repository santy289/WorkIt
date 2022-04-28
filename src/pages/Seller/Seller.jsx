import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { findByQuery } from '../../store/actions';
import Header from '../../components/Header/Header';
import CardClientRequest from '../../components/CardClientRequest/CardClientRequest';
import CardService from '../../components/CardService/CardService';
import './Seller.styles.scss';

function Seller() {
  const dispatch = useDispatch();
  const [services, setServices] = useState([]);
  const [requests, setRequests] = useState([]);
  const showUserServices = async () => {
    const data = localStorage.getItem('id');
    dispatch(findByQuery(data));
    setServices(data);
  };
  const ClientRequest = async () => {
    dispatch(setRequests());
  };
  useEffect(() => {
    showUserServices();
    ClientRequest();
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
              {
                services.map((service) => (
                  <CardService key={service.id} eachService={service} />
                ))
              }
            </div>
          </section>
          <section className="activeClientsList">
            <h1>Clientes interesados en los servicios</h1>
            <div className="activeClientsList_cardViewer">
              {
                requests.map((request) => (
                  <CardClientRequest key={request.id} eachClient={request} />
                ))
              }
            </div>
          </section>
        </div>

      </div>
    </>
  );
}

export default Seller;
