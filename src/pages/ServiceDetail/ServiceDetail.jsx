import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import { getServiceById } from '../../services';
import { postPayment } from './ServiceDetail.services';
import './ServiceDetail.styles.scss';

function ServiceDetail() {
  const { id } = useParams();

  const [service, setService] = useState({});

  const fetchService = async () => {
    const data = await getServiceById(id);
    setService(data);
  };

  useEffect(() => {
    fetchService();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(service);
    try {
      postPayment(id, service.title, service.cost);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="servicedetail">
        <div className="servicedetail__seller">
          <h2 className="servicedetail__subtitle">Vendedor:</h2>
          <p className="servicedetail__text">
            {service.username}
          </p>
        </div>
        <div className="servicedetail__figure">
          <img className="servicedetail__image" src={service.image} alt="service" />
        </div>
        <div className="servicedetail__cart">
          <ShoppingCart
            title={service.title}
            cost={service.cost}
            costType={service.costType}
            handleClick={handleClick}
          />
        </div>
        <div className="servicedetail__desc">
          <h2 className="servicedetail__subtitle">Descripción</h2>
          <p className="servicedetail__text">Descripción</p>
        </div>
        <div className="servicedetail__pyr">
          <h2 className="servicedetail__subtitle">Preguntas y Respuestas</h2>
          <p className="servicedetail__text">Preguntas y Respuestas</p>
        </div>
        <div className="servicedetail__comments">
          <h2 className="servicedetail__subtitle">Comentarios</h2>
          <p className="servicedetail__text">Comentarios</p>
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
