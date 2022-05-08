/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { SuperBalls } from '@uiball/loaders';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getServicesByUserThunk, getInfoBuyerThunk, findBoughtServicesThunk } from '../../store/actions';
import Header from '../../components/Header/Header';
import CardDetail from '../../components/CardDetail/CardDetail';
import CardClientRequest from '../../components/CardClientRequest/CardClientRequest';
import Footer from '../../components/Footer/Footer';
import CardBoughtService from '../../components/CardBoughtService';
import CalendarSeller from '../../components/CalendarSeller/CalendarSeller';
import './Seller.styles.scss';

function Seller() {
  const dispatch = useDispatch();
  const id = localStorage.getItem('id');
  const reduxServices = useSelector((state) => state.ofertservice);
  const reduxBuyer = useSelector((state) => state.infoBuyer);
  const reduxBoughtServices = useSelector((state) => state.boughtservice);
  useEffect(() => {
    dispatch(getServicesByUserThunk(id));
    dispatch(getInfoBuyerThunk(id));
    dispatch(findBoughtServicesThunk(id));
  }, []);
  return (
    <div>
      <Header />
      { reduxServices || reduxBuyer || reduxBoughtServices ? (
        <div className="seller">
          <Link to="/create-service">
            <div className="seller__create">
              <p className="seller__create--card">
                Crear Servicio
              </p>
            </div>
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
            <section>
              <h1>Servicios Agendados</h1>
              <div className="home__calendar">
                {
                localStorage.getItem('id') ? <CalendarSeller /> : null
              }
              </div>
            </section>
            <section className="activeClientsList">
              <h1>Clientes interesados en los servicios</h1>
              <div className="activeClientsList_cardViewer">
                {
                  reduxBuyer.map((buyer) => (
                    <CardClientRequest key={buyer.purchasedId} eachBuyer={buyer} />
                  ))
                }
              </div>
            </section>
            <section className="boughtServicesList">
              <h1>Servicios Comprados</h1>
              <div className="boughtServicesList_cardViewer">
                {
                  reduxBoughtServices ? (reduxBoughtServices.map((boughtService) => (
                    <CardBoughtService
                      key={boughtService.purchasedId}
                      eachBoughtService={boughtService}
                    />
                  ))) : <h3>Sin servicios adquiridos</h3>
                }
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div className="loading">
          <SuperBalls />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Seller;
