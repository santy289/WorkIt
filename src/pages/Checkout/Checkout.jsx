/* eslint-disable */
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import CheckoutComp from '../../components/Checkout/Checkout';
import Header from '../../components/Header/Header';

function Checkout() {
  const { id } = useParams();

  const [service, setService] = useState({});

  const [url, setUrl] = useState('/');
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");
  const payment_id = searchParams.get("payment_id");
  const payment_type = searchParams.get("payment_type");
  return (
    <>
      <Header />
      <CheckoutComp status={status} paymentMethod={payment_type} paymentId={payment_id} />
    </>
  );
}

export default Checkout;
