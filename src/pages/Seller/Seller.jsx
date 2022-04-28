import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { findByQuery } from '../../store/actions';
import Header from '../../components/Header/Header';
import CardService from '../../components/CardService/CardService';
import './Seller.styles.scss';

function Seller() {
  const dispatch = useDispatch();
  const showUserServices = async () => {
    const data = localStorage.getItem('id');
    console.log(data);
    dispatch(findByQuery(data));
  };
  const ClientRequest = async () => {
    dispatch();
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
              <CardService />
            </div>
          </section>
          <section className="activeClientsList">
            <h1>Clientes interesados en los servicios</h1>
          </section>
        </div>

      </div>
    </>
  );
}

export default Seller;
