/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SuperBalls } from '@uiball/loaders';
import { getAllServicesThunk } from '../../store/actions';
import CardService from '../../components/CardService/CardService';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';
import './Purchaser.styles.scss';

function Purchaser() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(getAllServicesThunk());
  }, []);

  return (
    <>
      <Header />
      { services.length > 1 ? (
        <div className="purchaser">
          <div className="purchaser__filter">
            <p className="purchaser__title">¿Qué necesitas hoy?</p>
            <Filter />
          </div>
          <div className="purchaser__body">
            <h1>Servicios Disponibles</h1>
            <div className="purcasher--list__container">
              {
              (services.map((service) => (
                <CardService key={service._id} eachService={service} />
              )))
            }
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">
          <SuperBalls />
        </div>
      )}
      <Footer />
    </>
  );
}

export default Purchaser;
