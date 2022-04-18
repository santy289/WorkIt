import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ROUTE_HOME, ROUTE_PURCHASER, ROUTE_SELLER, ROUTE_USERPROFILE, ROUTE_LOGIN, ROUTE_SIGNUP,
  ROUTE_CHECKOUT,
  ROUTE_SERVICECRUD, ROUTE_ACTIVATE,
} from './routes';
import Home from '../pages/Home/Home';
import Page404 from '../pages/Page404/Page404';
import Purchaser from '../pages/Purchaser/Purchaser';
import Seller from '../pages/Seller/Seller';
import UserProfile from '../pages/UserProfile/UserProfile';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import Checkout from '../pages/Checkout/Checkout';
import ServiceCrud from '../components/ServiceCrud/ServiceCrud';
import Activate from '../pages/Activate/Activate';

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
        <Route path={ROUTE_CHECKOUT} element={<Checkout />} />
        <Route path={ROUTE_SERVICECRUD} element={<ServiceCrud />} />
        <Route path={ROUTE_ACTIVATE} element={<Activate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainrouter;
