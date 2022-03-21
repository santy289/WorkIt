import React, { useState, useEffect } from 'react';
import { viewUserService, viewClientRequest } from '../../services/ViewService';
import CardClientRequest from '../../components/CardClientRequest/CardClientRequest';
import CardService from '../../components/CardService/CardService';
import './Seller.styles.scss';

function Seller() {
  const [services, setServices] = useState([]);
  const [requests, setRequests] = useState([]);
  const showUserServices = async () => {
    const data = await viewUserService();
    setServices(data);
  };
  const ClientRequest = async () => {
    const data = await viewClientRequest();
    setRequests(data);
  };
  useEffect(() => {
    showUserServices();
    ClientRequest();
  }, []);
  return (
    <div className="seller">
      <div className="seller_Title">Mis servicios</div>
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
  );
}

export default Seller;
