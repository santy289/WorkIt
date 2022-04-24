import React, { useState, useEffect } from 'react';
import { allService } from '../../services/index';
import CardService from '../../components/CardService/CardService';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';
import './Purchaser.styles.scss';

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
        <div className="purchaser__filter">
          <Filter />
        </div>
        <div className="purchaser__body">
          <div className="purcasher_list">
            {
              services.map((service) => (
                // eslint-disable-next-line no-underscore-dangle
                <CardService key={service._id} eachService={service} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Purchaser;
