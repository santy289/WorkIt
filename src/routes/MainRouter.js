import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ROUTE_HOME, ROUTE_PURCHASER, ROUTE_SELLER, ROUTE_USERPROFILE,
} from './routes';
import Home from '../pages/Home/Home';
import Page404 from '../pages/Page404/Page404';
import Purchaser from '../pages/Purchaser/Purchaser';
import Seller from '../pages/Seller/Seller';
import UserProfile from '../pages/UserProfile/UserProfile';

function Mainrouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_PURCHASER} element={<Purchaser />} />
        <Route path={ROUTE_SELLER} element={<Seller />} />
        <Route path={ROUTE_USERPROFILE} element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainrouter;
