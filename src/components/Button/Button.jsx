import PropTypes from 'prop-types';
import './Button.styles.scss';

function Button({ text, type, handleClick }) {
  return (
    <button className="button" type={type ? 'submit' : 'button'} onClick={handleClick}>
      { text }
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  text: 'Click',
  type: null,
  handleClick: null,
};

export default Button;
