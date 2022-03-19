/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* este comment se arrergla asignando url a los hash en las etiquetas a */
import './Login.styles.scss';

function Login() {
  return (
    <form className="form">
      <h2 className="form__title">INICIA SESIÓN</h2>
      <label htmlFor="username">Usuario</label>
      <input className="form__text" type="text" id="username" name="username" />
      <label htmlFor="password">Contraseña</label>
      <input className="form__text" type="password" id="password" name="password" />
      <a className="form__link" href="#">¿Olvidaste tu contraseña?</a>
      <input className="form__submit" type="submit" value="INICIAR SESIÓN" />
      <a className="form__link" href="#">Regístrate</a>
    </form>
  );
}

export default Login;
