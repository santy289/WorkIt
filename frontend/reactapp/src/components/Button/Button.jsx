import PropTypes from 'prop-types';
import './Button.styles.scss';

function Button({ text }) {
  return (
    <button className="button" type="button">{ text }</button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: 'Click',
};

export default Button;
