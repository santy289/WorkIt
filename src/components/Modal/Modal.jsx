/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import './Modal.styles.scss';

function Modal({ show, handleClick, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <button type="button" className="modal__close" onClick={handleClick}>&times;</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
