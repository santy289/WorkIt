import React, { useState, useEffect } from 'react';
import { allUsers } from '../../services';
import CardService from '../../components/CardService/CardService';
import Header from '../../components/Header/Header';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import './Purchaserstyles.scss';

function Purchaser() {
  const [services, setServices] = useState([]);
  const showUserServices = async () => {
    const data = await allUsers();
    setServices(data);
  };
  useEffect(() => {
    showUserServices();
  }, []);
  return (
    <>
      <Header />
      <div className="purcasher">
        <div className="purcasher_Title">BUSQUEDA DE SERVICIOS</div>
        <div className="bodypurcasher">
          <section className="purcasher_servicesList--left">
            <h1>Servicios disponibles</h1>
            <div className="purcasher_servicesList--cardViewer">
              {
                services.map((service) => (
                  <CardService key={service.id} eachService={service} />
                ))
              }
            </div>
          </section>
          <section className="purcasher_servicesList--right">
            <h1>Carrito de compra</h1>
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
