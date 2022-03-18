import './Header.styles.scss';
import { NavLink } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';
import smallLogo from '../../assets/smalllogowithe.jpg';
import {
  ROUTE_HOME, ROUTE_PURCHASER, ROUTE_SELLER, ROUTE_USERPROFILE,
} from '../Constants/Routes';

function Header() {
  return (
    <header className="Header_Container">
      <Sidebar />
      <ul className="Header_nav">
<<<<<<< HEAD
        <img className="Header_img" src="https://raw.githubusercontent.com/santy289/WorkIt/develop/frontend/reactapp/src/assets/smalllogowithe.jpg" alt="" />
        <a to="#" className="Header_nav--item">Home</a>
        <a to="#" className="Header_nav--item">Comprar</a>
        <a to="#" className="Header_nav--item">Vender</a>
        <a to="#" className="Header_nav--item">Calendario</a>
        <a to="#" className="Header_nav--item">Carrito</a>
        <a to="#" className="Header_nav--item perfil_text">Iniciar Sesión</a>
=======
        <img className="Header_img" src={smallLogo} alt="" />
        <NavLink to={ROUTE_HOME} className="Header_nav--item">Home</NavLink>
        <NavLink to={ROUTE_PURCHASER} className="Header_nav--item">Comprar</NavLink>
        <NavLink to={ROUTE_SELLER} className="Header_nav--item">Vender</NavLink>
        <NavLink to="#" className="Header_nav--item">Calendario</NavLink>
        <NavLink to="#" className="Header_nav--item">Carrito</NavLink>
        <NavLink to={ROUTE_USERPROFILE} className="Header_nav--item perfil_text">Mi perfil</NavLink>
>>>>>>> 070ca9322f486a295b268e666219ae59de5a84fd
      </ul>
    </header>
  );
}
export default Header;
