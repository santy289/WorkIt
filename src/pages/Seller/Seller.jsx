/* eslint-disable no-underscore-dangle */
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findByQuery } from '../../store/actions';
import Header from '../../components/Header/Header';
import CardService from '../../components/CardService/CardService';
import './Seller.styles.scss';

function Seller() {
  const dispatch = useDispatch();
  const data = localStorage.getItem('id');
  dispatch(findByQuery(data));
  const ofertservice = useSelector((state) => state.ofertservice);
  console.log(ofertservice);

  return (
    <>
      <Header />
      <div className="seller">
        <div className="seller_Title">MIS SERVICIOS</div>
        <Link to="/create-service">
          <span className="seller__create">
            <p type="button">+</p>
          </span>
        </Link>
        <div className="bodySeller">
          <section className="servicesList">
            <h1>Servicios Publicados</h1>
            <div className="servicesList_cardViewer">
              {ofertservice.map((service) => (
                <CardService
                  key={service._id}
                  _id={service._id}
                  title={service.title}
                  username={service.username}
                  cost={service.cost}
                  image={service.image}
                />
              ))}
            </div>
          </section>
          <section className="activeClientsList">
            <h1>Clientes interesados en los servicios</h1>
          </section>
        </div>

      </div>
    </>
  );
}

export default Seller;
