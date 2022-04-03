import Button from '../Button/Button';
import cart from '../../assets/shopping-cart.svg';
import './ShoppingCart.styles.scss';

function ShoppingCart() {
  return (
    <div className="shoppingcart__card">
      <div className="shoppingcart__content">
        <div className="shoppingcart__title">
          <h2>Carrito de compras</h2>
          <span><img src={cart} alt="cart" className="icon" /></span>
        </div>
        <div className="shoppingcart__list">
          <p className="shoppingcart__item">Item 1</p>
          <p className="shoppingcart__item">Item 2</p>
          <p className="shoppingcart__item">Item 3</p>
        </div>
        <div className="shoppingcart__total">
          <h4>Total: </h4>
          <h3>$$$</h3>
        </div>
        <div className="shoppingcart__purchase">
          <Button text="Comprar" />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
