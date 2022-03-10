import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import './Modal.styles.scss'

function Modal(){
  return(
    <div className="modal">
      <div className="modal__content">
        <span className="modal__close">&times;</span>
        <Login />
      </div>
    </div>  
  )
}

export default Modal
