/* eslint-disable jsx-a11y/anchor-is-valid */
/* este comment se arrergla asignando url a los hash en las etiquetas a */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.styles.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  ROUTE_HOME, ROUTE_PURCHASER, ROUTE_SELLER, ROUTE_USERPROFILE, ROUTE_LOGIN, ROUTE_SIGNUP,
} from '../../routes/routes';

function SideBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    navigate('/');
  };

  if (localStorage.getItem('token') === null) {
    return (
      <Menu>
        <NavLink to={ROUTE_HOME} className="Header_nav--item">Inicio</NavLink>
        <NavLink to={ROUTE_PURCHASER} className="Header_nav--item">Explorar</NavLink>
        <NavLink to={ROUTE_LOGIN} className="Header_nav--item">Iniciar sesión</NavLink>
        <NavLink to={ROUTE_SIGNUP} className="Header_nav--item">Registrarse</NavLink>
      </Menu>
    );
  }

  return (
    <Menu>
      <NavLink to={ROUTE_HOME} className="Header_nav--item">Home</NavLink>
      <NavLink to={ROUTE_PURCHASER} className="Header_nav--item">Explorar</NavLink>
      <NavLink to={ROUTE_SELLER} className="Header_nav--item">Vender</NavLink>
      <NavLink to="#" className="Header_nav--item">Carrito</NavLink>
      <NavLink to={ROUTE_USERPROFILE} className="Header_nav--item">Perfil</NavLink>
      <span
        tabIndex={0}
        role="button"
        onClick={handleLogout}
        className="Header_nav--item"
        onKeyDown={handleLogout}
      >
        Cerrar sesión
      </span>
    </Menu>
  );
}

export default SideBar;
