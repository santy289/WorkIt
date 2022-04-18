import React, { useState, useEffect } from 'react';
import { allService } from '../../services/index';
import CardService from '../../components/CardService/CardService';
import Header from '../../components/Header/Header';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import Filter from '../../components/Filter/Filter';
import './Purchaserstyles.scss';

function Purchaser() {
  const [services, setServices] = useState([]);
  const showUserServices = async () => {
    const data = await allService();
    setServices(data);
  };
  useEffect(() => {
    showUserServices();
  }, []);

  return (
    <>
      <Header />
      <div className="purcasher">
        <Filter />
        <div className="purcasher_Title">
          BUSQUEDA DE SERVICIOS
        </div>
        <div className="bodypurcasher">
          <section className="purcasher_servicesList--left">
            <h1 className="purcasher_subtitle">Servicios disponibles</h1>
            <div className="purcasher_servicesList--cardViewer">
              {
                services.map((service) => (
                  // eslint-disable-next-line no-underscore-dangle
                  <CardService key={service._id} eachService={service} />
                ))
              }
            </div>
          </section>
          <section className="purcasher_servicesList--right">
            <h1 className="purcasher_subtitle">Carrito de compra</h1>
            <div className="purcasher__shoppingcart">
              <ShoppingCart />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Purchaser;
