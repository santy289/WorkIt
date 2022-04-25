/* eslint-disable */
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header';


function Checkout() {
  const { id } = useParams();

  const [service, setService] = useState({});

  const [url, setUrl] = useState('/');
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");

  return (
    <>
      <Header />
      <p>{status}</p>
    </>
  );
}

export default Checkout;
