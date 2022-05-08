import './Header.styles.scss';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import socket from '../../utils/socket';
import Sidebar from '../SideBar/Sidebar';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import useModal from '../../hooks/useModal';
import LogoShort from '../LogoShort/LogoShort';
import {
  ROUTE_HOME, ROUTE_PURCHASER, ROUTE_SELLER, ROUTE_USERPROFILE, ROUTE_SIGNUP,
} from '../../routes/routes';

function Header() {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/');
  };
  const { toggle: toggleLogin, show: showLogin } = useModal();
  useEffect(() => {
    socket.on('Notification:getAll', async (id) => {
      setNotification(id);
    });
    return () => socket.off('Notification:getAll');
  }, []);
  if (localStorage.getItem('token') === null) {
    return (
      <>
        <Modal handleClick={toggleLogin} show={showLogin}>
          <Login />
        </Modal>
        <Sidebar />
        <header className="Header_Container">
          <ul className="Header_nav">
            <LogoShort />
            <NavLink to={ROUTE_HOME} className="Header_nav--item">Inicio</NavLink>
            <NavLink to={ROUTE_PURCHASER} className="Header_nav--item">Explorar</NavLink>
            <a onClick={toggleLogin} href="/" className="Header_nav--item">Iniciar sesión</a>
            <NavLink to={ROUTE_SIGNUP} className="Header_nav--item">Registrarse</NavLink>
          </ul>
        </header>
      </>
    );
  }

  return (
    <header className="Header_Container">
      <Sidebar />
      <ul className="Header_nav">
        <LogoShort />
        <NavLink to={ROUTE_HOME} className="Header_nav--item">Inicio</NavLink>
        <NavLink to={ROUTE_PURCHASER} className="Header_nav--item">Explorar</NavLink>
        <NavLink to={ROUTE_SELLER} className="Header_nav--item">Administrar servicios</NavLink>
        <NavLink to={ROUTE_USERPROFILE} className="Header_nav--item">Perfil</NavLink>
        {
          notification ? (
            <Link to={`/chat/${notification}`} className="Header_nav--item">
              <img className="Header-nav__image" src="https://res.cloudinary.com/dbsumvu1d/image/upload/v1651866737/path3572_liisng.png" alt="Chat" />
            </Link>
          ) : null
        }
        <span
          tabIndex={0}
          role="button"
          onClick={handleLogout}
          className="Header_nav--item"
          onKeyDown={handleLogout}
        >
          <a href="https://work-it.vercel.app/" className="header-nav__link">Cerrar sesión</a>
        </span>
      </ul>
    </header>
  );
}

export default Header;
