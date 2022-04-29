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
  console.log(services, 'services');
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
