/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* este comment se arrergla asignando url a los hash en las etiquetas a */

import Button from '../Button/Button';
import './Login.styles.scss';
/* import loginService from '../../services';
import { useDispatch } from 'react-redux';
const dispatch = useDispatch();

const handleSubmit = (e) => {
  e.preventDefault();
  const loggininfo = {
    username: e.target.title.value,
    password: e.target.body.value,
  };
  dispatch(loginService(loggininfo));
};
 */
function Login() {
  return (
    <form className="login">
      <h2 className="login__title">INICIA SESIÓN</h2>
      <label className="login__text" htmlFor="username">Usuario</label>
      <input type="text" id="username" name="username" />
      <label className="login__text" htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" />
      <a className="login__link" href="#">¿Olvidaste tu contraseña?</a>
      <Button className="login__submit" type="submit" text="INICIAR SESIÓN" />
    </form>
  );
}

export default Login;
