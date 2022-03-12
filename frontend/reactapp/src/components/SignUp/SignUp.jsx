import './SignUp.styles.scss'

function SignUp(){
  return(
    <form className="form">
      <h2 className="form__title">CREA TU CUENTA</h2>
      <label htmlFor="nombre">Nombre</label>
      <input className="form__text" type="text" id="nombre" name="nombre" />
      <label htmlFor="apellido">Apellido</label>
      <input className="form__text" type="text" id="apellido" name="apellido" />
      <label htmlFor="username">Usuario</label>
      <input className="form__text" type="text" id="username" name="username" />
      <label htmlFor="mail">Correo electrónico</label>
      <input className="form__text" type="mail" id="mail" name="mail" />
      <label htmlFor="password">Contraseña</label>
      <input className="form__text" type="password" id="password" name="password" />
      <input className="form__submit" type="submit" value="REGÍSTRATE" />
      <a className="form__link" href="login.html">¿Ya tienes una cuenta? Ingresa</a>
    </form>
  )
}

export default SignUp
