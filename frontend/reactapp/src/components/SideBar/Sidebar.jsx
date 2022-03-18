/* eslint-disable jsx-a11y/anchor-is-valid */
/* este comment se arrergla asignando url a los hash en las etiquetas a */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.styles.scss';
import smallLogo from '../../assets/smalllogowithe.jpg';
import { ROUTE_HOME, ROUTE_PURCHASER, ROUTE_SELLER, ROUTE_USERPROFILE } from '../Constants/Routes';

function SideBar() {
  return (
    <Menu>
      <img className="Header_imgs" src={smallLogo} alt="" />
      <a className="menu-item" to={ROUTE_HOME}> Home </a>
      <a className="menu-item" to={ROUTE_PURCHASER}> Comprar </a>
      <a className="menu-item" to={ROUTE_SELLER}> Vender </a>
      <a className="menu-item" to="#"> Calendario </a>
      <a className="menu-item" to="#"> Carrito </a>
      <a className="menu-item" to={ROUTE_USERPROFILE}> Mi perfil </a>
    </Menu>
  );
}

export default SideBar;
