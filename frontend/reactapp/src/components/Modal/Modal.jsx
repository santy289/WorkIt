import './Modal.styles.scss'

function Modal(props){
  return(
    <div className="modal">
      <div className="modal__content">
        <span className="modal__close">&times;</span>
        {props.children}
      </div>
    </div>  
  )
}

export default Modal
