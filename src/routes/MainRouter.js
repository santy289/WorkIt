import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ROUTE_HOME, ROUTE_PURCHASER, ROUTE_SELLER, ROUTE_USERPROFILE, ROUTE_LOGIN, ROUTE_SIGNUP,
  ROUTE_CREATESERVICE, ROUTE_ACTIVATE, ROUTE_SERVICEDETAIL, ROUTE_CHECKOUT,
} from './routes';
import Home from '../pages/Home/Home';
import Page404 from '../pages/Page404/Page404';
import Purchaser from '../pages/Purchaser/Purchaser';
import Seller from '../pages/Seller/Seller';
import UserProfile from '../pages/UserProfile/UserProfile';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import CheckoutPage from '../pages/CheckoutPage';
import Activate from '../pages/Activate/Activate';
import CreateService from '../pages/CreateService/CreateService';
import ServiceDetail from '../pages/ServiceDetail/ServiceDetail';
import Checkout from '../pages/Checkout/Checkout';
function Mainrouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_PURCHASER} element={<Purchaser />} />
        <Route path={ROUTE_SELLER} element={<Seller />} />
        <Route path={ROUTE_USERPROFILE} element={<UserProfile />} />
        <Route path={ROUTE_LOGIN} element={<LoginPage />} />
        <Route path={ROUTE_SIGNUP} element={<SignUpPage />} />
        <Route path={ROUTE_CREATESERVICE} element={<CreateService />} />
        <Route path={ROUTE_ACTIVATE} element={<Activate />} />
        <Route path={ROUTE_SERVICEDETAIL} element={<ServiceDetail />} />
        <Route path={ROUTE_CHECKOUT} element={<Checkout />} />
          path="/privacy-policy"
          component={() => {
            window.location.replace('https://google.com');
            return null;
          }}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainrouter;
