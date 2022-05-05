import PropTypes from 'prop-types';
import './ButtonCreate.styles.scss';

function Button({
  text, type, handleClick, able,
}) {
  return (
    <button className="button" type={type ? 'submit' : 'button'} onClick={handleClick} disabled={!able}>
      { text }
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func,
  able: PropTypes.bool,
};

Button.defaultProps = {
  text: 'Click',
  type: null,
  handleClick: null,
  able: true,
};

export default Button;
