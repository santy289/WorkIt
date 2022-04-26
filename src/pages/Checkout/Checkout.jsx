import { useSearchParams } from 'react-router-dom';
import UseDispatch from 'redux';
import CheckoutComp from '../../components/Checkout/Checkout';
import Header from '../../components/Header/Header';
import './checkout.scss';

function Checkout() {
  const dispatch = UseDispatch();

  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const paymentId = searchParams.get('payment_id');
  const paymentType = searchParams.get('payment_type');
  if (status === 'success') {
    return (
      <div>
        <Header />
        <div className="checkout-container">
          <CheckoutComp
            status={status}
            paymentMethod={paymentType}
            paymentId={paymentId}
          />
        </div>
      </div>
    );
  }
  return (
    <h1>
      {' '}
      Status payment
      {status}
    </h1>
  );
}

export default Checkout;
