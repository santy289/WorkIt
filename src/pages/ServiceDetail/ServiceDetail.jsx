import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import { getServiceById, postPayment } from '../../services';
import './ServiceDetail.styles.scss';
import mercadopago from '../../assets/mercadopago.png';

function ServiceDetail() {
  const { id } = useParams();

  const [service, setService] = useState({});

  const [url, setUrl] = useState('/');

  const fetchService = async () => {
    try {
      const data = await getServiceById(id);
      setService(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getURL = async () => {
    try {
      const response = await postPayment(id, service.title, service.cost);
      setUrl(response);
      localStorage.setItem('id_seller', service.userId);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchService();
  }, []);

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
          >
            {url !== '/'
              ? (<a href={url}><img src={mercadopago} alt="mercadopago" width="200" height="70" /></a>)
              : (<Button text="Confirmar compra" handleClick={getURL} />)}
          </ShoppingCart>
        </div>
        <div className="servicedetail__desc">
          <h2 className="servicedetail__subtitle">Descripción</h2>
          <p className="servicedetail__text">
            {service.description}
          </p>
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
