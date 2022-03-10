import './Login.styles.scss'

function Login(){
  return(
    <form className="form">
      <label htmlFor="username">Usuario</label>
      <input className="form__text" type="text" id="username" name="username" />
      <label htmlFor="password">Contraseña</label>
      <input className="form__text" type="password" id="password" name="password" />
      <a className="form__link" href="#">¿Olvidaste tu contraseña?</a>
      <input className="form__submit" type="submit" value="INICIAR SESIÓN" />
      <a className="form__link" href="#">Regístrate</a>
    </form>
  )
}

export default Login
