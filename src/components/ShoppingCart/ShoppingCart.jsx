import PropTypes from 'prop-types';
import './ShoppingCart.styles.scss';

function ShoppingCart({
  title, cost, children,
}) {
  return (
    <div className="shoppingcart__card">
      <div className="shoppingcart__content">
        <p className="shoppingcart__info--title">
          {title}
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
  children: PropTypes.element,
};

ShoppingCart.defaultProps = {
  title: '',
  cost: 0,
  children: null,
};

export default ShoppingCart;
