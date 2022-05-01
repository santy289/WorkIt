import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CheckoutComp from '../../components/Checkout/Checkout';
import { createActiveServices } from '../../store/actions';
import Header from '../../components/Header/Header';
import './checkout.scss';

function Checkout() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const paymentId = searchParams.get('payment_id');
  const paymentType = searchParams.get('payment_type');
  const sellerId = localStorage.getItem('id_seller');
  const buyerId = localStorage.getItem('id');
  const serviceId = localStorage.getItem('id_service');
  const data = {
    status, paymentId, paymentType, sellerId, buyerId, serviceId,
  };
  console.log(data);
  if (status === 'approved') {
    dispatch(createActiveServices(data));
    localStorage.removeItem('id_service');
    localStorage.removeItem('id_seller');
    return (
      <div>
        <Header />
        <div className="checkout-container">
          <CheckoutComp />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <h1>
        Status payment
        {' '}
        {status}
      </h1>
    </div>
  );
}

export default Checkout;
