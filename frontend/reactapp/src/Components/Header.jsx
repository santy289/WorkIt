import './header.css';

function header(){
    return(
      <header className ="Header_Container">
          <ul className ="Header_nav">
            <a href="http://" className ="Header_nav--item">Home</a>
            <a href="http://" className ="Header_nav--item">Comprar</a>
            <a href="http://" className ="Header_nav--item">Vender</a>
            <a href="http://" className ="Header_nav--item">Calendario</a>
            <a href="http://" className ="Header_nav--item">Carrito</a>
            <a href="http://" className ="Header_nav--item perfil_text">Mi perfil</a>
          </ul>
      </header>
    )
}
export default header;