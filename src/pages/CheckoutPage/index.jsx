/* eslint-disable camelcase */
import React from 'react';
import queryString from 'query-string';
import Header from '../../components/Header/Header';
import CheckoutCard from '../../components/CheckoutCard';

// eslint-disable-next-line no-restricted-globals
const value = queryString.parse(location.search);
const { collection_status, payment_id, payment_type } = value;
const sellerId = localStorage.getItem('id_seller');
const buyerId = localStorage.getItem('id');

function CheckoutPage() {
  if (collection_status === 'approved') {
    return (
      <div>
        <Header />
        <CheckoutCard
          paymentId={payment_id}
          status={collection_status}
          paymentType={payment_type}
          sellerId={sellerId}
          buyerId={buyerId}
        />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <h1>Payment Status Fail</h1>
    </div>
  );
}

export default CheckoutPage;
