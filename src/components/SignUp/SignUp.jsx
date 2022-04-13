/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from '../Button/Button';
import './SignUp.styles.scss';

function SignUp() {
  return (
    <form className="signup">
      <h2 className="signup__title">CREA TU CUENTA</h2>
      <label className="signup__text" htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" />
      <label className="signup__text" htmlFor="apellido">Apellido</label>
      <input type="text" id="apellido" name="apellido" />
      <label className="signup__text" htmlFor="username">Usuario</label>
      <input type="text" id="username" name="username" />
      <label className="signup__text" htmlFor="mail">Correo electrónico</label>
      <input type="mail" id="mail" name="mail" />
      <label className="signup__text" htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" />
      <Button text="REGÍSTRATE" type="submit" />
    </form>
  );
}

export default SignUp;
