import React from 'react';
import queryString from 'query-string';
import Header from '../../components/Header/Header';
import CheckoutCard from '../../components/CheckoutCard';

// eslint-disable-next-line no-restricted-globals
const value = queryString.parse(location.search);
const { status, paymentId, paymentType } = value;

function CheckoutPage() {
  if (status === 'success') {
    return (
      <div>
        <CheckoutCard
          paymentId={paymentId}
          status={status}
          paymentType={paymentType}
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
