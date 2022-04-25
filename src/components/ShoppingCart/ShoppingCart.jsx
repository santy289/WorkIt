import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './ShoppingCart.styles.scss';

function ShoppingCart({
  title, cost, costType, handleClick,
}) {
  return (
    <div className="shoppingcart__card">
      <div className="shoppingcart__content">
        <p className="shoppingcart__info--title">
          {title}
        </p>
        <p className="shoppingcart__info--type">
          <strong>Forma de pago: &nbsp;</strong>
          {costType}
        </p>
        <p className="shoppingcart__total">
          {`Total: $${cost}`}
        </p>
        <div className="shoppingcart__purchase">
          <Button text="Contratar ahora" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  title: PropTypes.string,
  cost: PropTypes.number,
  costType: PropTypes.string,
  handleClick: PropTypes.func,
};

ShoppingCart.defaultProps = {
  title: '',
  cost: 0,
  costType: '',
  handleClick: null,
};

export default ShoppingCart;
