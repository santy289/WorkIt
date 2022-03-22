import './Header.styles.scss';
import { NavLink } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';
import smallLogo from '../../assets/smalllogowithe.jpg';
import {
  ROUTE_HOME, ROUTE_PURCHASER, ROUTE_SELLER, ROUTE_USERPROFILE,
} from '../../routes/routes';

function Header() {
  return (
    <header className="Header_Container">
      <Sidebar />
      <ul className="Header_nav">
        <img className="Header_img" src={smallLogo} alt="" />
        <NavLink to={ROUTE_HOME} className="Header_nav--item">Home</NavLink>
        <NavLink to={ROUTE_PURCHASER} className="Header_nav--item">Comprar</NavLink>
        <NavLink to={ROUTE_SELLER} className="Header_nav--item">Vender</NavLink>
        <NavLink to="#" className="Header_nav--item">Carrito</NavLink>
        <a href="/" className="Header_nav--item perfil_text">Iniciar Sesión</a>
        <a href="/" className="Header_nav--item">Registrarse</a>
        <NavLink to={ROUTE_USERPROFILE} className="Header_nav--item">Perfil</NavLink>

      </ul>
    </header>
  );
}
export default Header;
