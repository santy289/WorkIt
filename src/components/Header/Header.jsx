import './Header.styles.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import useModal from '../../hooks/useModal';
import smallLogo from '../../assets/smalllogo.png';
import {
  ROUTE_HOME, ROUTE_PURCHASER, ROUTE_SELLER, ROUTE_USERPROFILE, ROUTE_SIGNUP,
} from '../../routes/routes';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/');
  };

  const { toggle: toggleLogin, show: showLogin } = useModal();

  if (localStorage.getItem('token') === null) {
    return (
      <>
        <Modal handleClick={toggleLogin} show={showLogin}>
          <Login />
        </Modal>
        <Sidebar />
        <header className="Header_Container">
          <ul className="Header_nav">
            <img className="Header_img" src={smallLogo} alt="" />
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
        <img className="Header_img" src={smallLogo} alt="" />
        <NavLink to={ROUTE_HOME} className="Header_nav--item">Home</NavLink>
        <NavLink to={ROUTE_PURCHASER} className="Header_nav--item">Explorar</NavLink>
        <NavLink to={ROUTE_SELLER} className="Header_nav--item">Administrar Servicios</NavLink>
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
      </ul>
    </header>
  );
}

export default Header;
