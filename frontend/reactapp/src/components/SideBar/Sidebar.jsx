import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.styles.scss';

export default props => {
  return (
    <Menu>
      <img className ="Header_imgs" 
      src="https://raw.githubusercontent.com/santy289/WorkIt/develop/frontend/reactapp/src/assets/smalllogowithe.jpg" 
      alt="" />
      <a className="menu-item" to="#">
        Home
      </a>
      <a className="menu-item" to="#">
        Comprar
      </a>
      <a className="menu-item" to="#">
        Vender
      </a>
      <a className="menu-item" to="#">
        Calendario
      </a>
      <a className="menu-item" to="#">
        Carrito
      </a>
      <a className="menu-item" to="#">
        Mi perfil
      </a>
    </Menu>
  );
};
