import React, { useState, useEffect } from 'react';
import { viewUserService } from '../../services/ViewService';
import CardService from '../../components/CardService/CardService';
import Header from '../../components/Header/Header';
import Filter from '../../components/FIlter/Filter';
import './Purchaserstyles.scss';

function Purchaser() {
  const [services, setServices] = useState([]);
  const showUserServices = async () => {
    const data = await viewUserService();
    setServices(data);
  };
  useEffect(() => {
    showUserServices();
  }, []);
  return (
    <>
      <Header />
      <Filter />
      <div className="purcasher">
        <div className="purcasher_Title">BUSQUEDA DE SERVICIOS</div>
        <div className="bodypurcasher">
          <section className="purcasher_servicesList">
            <h1>Servicios disponibles</h1>
            <div className="purcasher_servicesList--cardViewer">
              {
                services.map((service) => (
                  <CardService key={service.id} eachService={service} />
                ))
              }
            </div>
          </section>
          <section className="purcasher_servicesList">
            <h1>Carrito de compra</h1>
          </section>
        </div>
      </div>
    </>
  );
}

export default Purchaser;
