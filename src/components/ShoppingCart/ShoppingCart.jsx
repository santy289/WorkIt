import PropTypes from 'prop-types';
import './ShoppingCart.styles.scss';

function ShoppingCart({
  title, cost, costType, children,
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
          {children}
        </div>
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  title: PropTypes.string,
  cost: PropTypes.number,
  costType: PropTypes.string,
  children: PropTypes.element,
};

ShoppingCart.defaultProps = {
  title: '',
  cost: 0,
  costType: '',
  children: null,
};

export default ShoppingCart;
