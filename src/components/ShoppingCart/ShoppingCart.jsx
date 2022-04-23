import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './ShoppingCart.styles.scss';

function ShoppingCart({ cost, costType }) {
  return (
    <div className="shoppingcart__card">
      <div className="shoppingcart__content">
        <p className="shoppingcart__info--title">
          TU COMPRA
        </p>
        <p className="shoppingcart__info--type">
          <strong>Forma de pago: &nbsp;</strong>
          {costType}
        </p>
        <p className="shoppingcart__total">
          {`Total: $${cost}`}
        </p>
        <div className="shoppingcart__purchase">
          <Button text="Contratar ahora" />
        </div>
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  cost: PropTypes.number,
  costType: PropTypes.string,
};

ShoppingCart.defaultProps = {
  cost: 0,
  costType: '',
};

export default ShoppingCart;
