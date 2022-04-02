/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import './Modal.styles.scss';

function Modal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <button type="button" className="modal__close" onClick={props.handleClick}>&times;</button>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
