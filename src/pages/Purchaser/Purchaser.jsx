import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServicesThunk } from '../../store/actions';
import CardService from '../../components/CardService/CardService';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';
import './Purchaser.styles.scss';

function Purchaser() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  console.log(services, 'services');
  useEffect(() => {
    dispatch(getAllServicesThunk());
  }, []);

  return (
    <>
      <Header />
      <div className="purchaser">
        <div className="purchaser__filter">
          <p className="purchaser__title">¿Qué necesitas hoy?</p>
          <Filter />
        </div>
        <div className="purchaser__body">
          <div className="purchaser__list">
            {
              services.map((service) => (
                // eslint-disable-next-line no-underscore-dangle
                <CardService key={service._id} eachService={service} />
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Purchaser;
