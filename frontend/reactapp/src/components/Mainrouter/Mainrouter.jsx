import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Header from '../Header/Header';
import {
  ROUTE_HOME, ROUTE_LANDING, ROUTE_PURCHASER, ROUTE_SELLER, ROUTE_USERPROFILE,
  ROUTE_LOGIN, ROUTE_REGISTER,
} from '../Constants/Routes';
import LandingPage from '../../pages/LandingPage/LandingPage';
import Purchaser from '../../pages/Purchaser/Purchaser';
import Seller from '../../pages/Seller/Seller';
import UserProfile from '../../pages/UserProfile/UserProfile';
import Login from '../Login/Login';
import Register from '../SignUp/SignUp';

function Mainrouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_LANDING} element={<LandingPage />} />
        <Route path={ROUTE_PURCHASER} element={<Purchaser />} />
        <Route path={ROUTE_SELLER} element={<Seller />} />
        <Route path={ROUTE_USERPROFILE} element={<UserProfile />} />
        <Route path={ROUTE_LOGIN} element={<Login />} />
        <Route path={ROUTE_REGISTER} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainrouter;
