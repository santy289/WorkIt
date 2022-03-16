import './Header.styles.scss';
import Sidebar from '../SideBar/Sidebar';

function Header(){
    return(
      <header className ="Header_Container">
        <Sidebar/>
          <ul className ="Header_nav">
            <img className ="Header_img" src="https://raw.githubusercontent.com/santy289/WorkIt/develop/frontend/reactapp/src/assets/smalllogowithe.jpg" alt="" />
            <a to="#" className ="Header_nav--item">Home</a>
            <a to="#" className ="Header_nav--item">Comprar</a>
            <a to="#" className ="Header_nav--item">Vender</a>
            <a to="#" className ="Header_nav--item">Calendario</a>
            <a to="#" className ="Header_nav--item">Carrito</a>
            <a to="#" className ="Header_nav--item perfil_text">Mi perfil</a>
          </ul>
      </header>
    )
}
export default Header;
