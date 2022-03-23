import React, { useState, useEffect } from 'react';
import { viewUserService } from '../../services/ViewService';
import CardService from '../../components/CardService/CardService';
import Header from '../../components/Header/Header';
import './Purchaser.styles.scss';

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
      <div className="seller">
        <div className="seller_Title">Mis servicios</div>
        <div className="bodySeller">
          <section className="servicesList">
            <h1>Servicios disponibles</h1>
            <div className="servicesList_cardViewer">
              {
                services.map((service) => (
                  <CardService key={service.id} eachService={service} />
                ))
              }
            </div>
          </section>
          <section className="activeClientsList">
            <h1>Panel clientes activos</h1>
          </section>
        </div>
      </div>
    </>
  );
}

export default Purchaser;
