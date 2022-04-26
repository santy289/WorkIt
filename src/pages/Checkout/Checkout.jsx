import { useSearchParams } from 'react-router-dom';
import CheckoutComp from '../../components/Checkout/Checkout';
import Header from '../../components/Header/Header';
import './checkout.scss';

function Checkout() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const paymentId = searchParams.get('payment_id');
  const paymentType = searchParams.get('payment_type');
  return (
    <div>
      <Header />
      <div className="checkout-container">
        <CheckoutComp status={status} paymentMethod={paymentType} paymentId={paymentId} />
      </div>
    </div>
  );
}

export default Checkout;
