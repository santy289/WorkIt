/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* este comment se arrergla asignando url a los hash en las etiquetas a */
import { useState } from 'react';
import Button from '../Button/Button';
import './Login.styles.scss';

function Login() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2 className="login__title">INICIA SESIÓN</h2>
      <label className="login__text" htmlFor="username">Usuario</label>
      <input type="text" id="username" name="username" onChange={handleChange} />
      <label className="login__text" htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" onChange={handleChange} />
      <a className="login__link" href="#">¿Olvidaste tu contraseña?</a>
      <Button className="login__submit" type="submit" text="INICIAR SESIÓN" />
    </form>
  );
}

export default Login;
