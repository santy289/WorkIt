/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServicesThunk } from '../../store/actions';
import CardService from '../../components/CardService/CardService';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';
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
      <div className="purcasher">
        <div className="purchaser__filter">
          <Filter />
        </div>
        <div className="purchaser__body">
          <h1>Servicios Disponibles</h1>
          <div className="purcasher_list">
            {
              (services.map((service) => (
                <CardService key={service._id} eachService={service} />
              )))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Purchaser;
