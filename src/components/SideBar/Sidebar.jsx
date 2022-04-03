/* eslint-disable jsx-a11y/anchor-is-valid */
/* este comment se arrergla asignando url a los hash en las etiquetas a */
import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.styles.scss';
import { NavLink } from 'react-router-dom';
import smallLogo from '../../assets/smalllogowithe.jpg';
import {
  ROUTE_HOME, ROUTE_PURCHASER, ROUTE_SELLER, ROUTE_USERPROFILE,
} from '../../routes/routes';

function SideBar({ toggleLogin, toggleSignUp }) {
  return (
    <Menu>
      <img className="Header_imgs" src={smallLogo} alt="" />
      <NavLink to={ROUTE_HOME} className="Header_nav--item">Home</NavLink>
      <NavLink to={ROUTE_PURCHASER} className="Header_nav--item">Comprar</NavLink>
      <NavLink to={ROUTE_SELLER} className="Header_nav--item">Vender</NavLink>
      <NavLink to="#" className="Header_nav--item">Carrito</NavLink>
      <a onClick={toggleLogin} href="/" className="Header_nav--item perfil_text">Iniciar Sesión</a>
      <a onClick={toggleSignUp} href="/" className="Header_nav--item">Registrarse</a>
      <NavLink to={ROUTE_USERPROFILE} className="Header_nav--item">Perfil</NavLink>
    </Menu>
  );
}
SideBar.propTypes = {
  toggleLogin: PropTypes.func,
  toggleSignUp: PropTypes.func,
};

SideBar.defaultProps = {
  toggleLogin: null,
  toggleSignUp: null,
};

export default SideBar;
