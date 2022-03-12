import './header.css';

function header(){
    return(
      <header className ="Header_Container">
          <ul className ="Header_nav">
            <img className ="Header_img" src="https://raw.githubusercontent.com/santy289/WorkIt/develop/frontend/reactapp/src/assets/smalllogowithe.jpg" alt="" />
            <a href="#" className ="Header_nav--item">Home</a>
            <a href="#" className ="Header_nav--item">Comprar</a>
            <a href="#" className ="Header_nav--item">Vender</a>
            <a href="#" className ="Header_nav--item">Calendario</a>
            <a href="#" className ="Header_nav--item">Carrito</a>
            <a href="#" className ="Header_nav--item perfil_text">Mi perfil</a>
          </ul>
      </header>
    )
}
export default header;