import './Header.styles.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import useModal from '../../hooks/useModal';
import smallLogo from '../../assets/smalllogowithe.jpg';
import {
  ROUTE_HOME, ROUTE_PURCHASER, ROUTE_SELLER, ROUTE_USERPROFILE,
} from '../../routes/routes';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/');
  };

  const { toggle: toggleLogin, show: showLogin } = useModal();
  const { toggle: toggleSignup, show: showSignup } = useModal();

  if (localStorage.getItem('token') === null) {
    return (
      <>
        <Modal handleClick={toggleLogin} show={showLogin}>
          <Login />
        </Modal>
        <Modal handleClick={toggleSignup} show={showSignup}>
          <SignUp />
        </Modal>
        <header className="Header_Container">
          <Sidebar />
          <ul className="Header_nav">
            <img className="Header_img" src={smallLogo} alt="" />
            <NavLink to={ROUTE_HOME} className="Header_nav--item">Home</NavLink>
            <NavLink to={ROUTE_PURCHASER} className="Header_nav--item">Explorar</NavLink>
            <a onClick={toggleLogin} href="/" className="Header_nav--item">Iniciar Sesión</a>
            <a onClick={toggleSignup} href="/" className="Header_nav--item">Registrarse</a>
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
        <NavLink to={ROUTE_SELLER} className="Header_nav--item">Vender</NavLink>
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
