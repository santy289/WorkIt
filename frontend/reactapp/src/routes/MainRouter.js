import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ROUTE_HOME, ROUTE_LANDING, ROUTE_PURCHASER, ROUTE_SELLER, ROUTE_USERPROFILE,
  ROUTE_LOGIN, ROUTE_SIGNUP,
} from './routes';
import Header from '../components/Header/Header';
import Home from '../pages/Home';
import LandingPage from '../pages/LandingPage/LandingPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import Page404 from '../pages/Page404/Page404';
import Purchaser from '../pages/Purchaser/Purchaser';
import Seller from '../pages/Seller/Seller';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import UserProfile from '../pages/UserProfile/UserProfile';

function Mainrouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_LANDING} element={<LandingPage />} />
        <Route path={ROUTE_LOGIN} element={<LoginPage />} />
        <Route path={ROUTE_PURCHASER} element={<Purchaser />} />
        <Route path={ROUTE_SELLER} element={<Seller />} />
        <Route path={ROUTE_SIGNUP} element={<SignUpPage />} />
        <Route path={ROUTE_USERPROFILE} element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainrouter;
