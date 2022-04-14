/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import Button from '../Button/Button';
import './SignUp.styles.scss';

function SignUp() {
  const [form, setForm] = useState({
    name: '',
    last: '',
    username: '',
    mail: '',
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
    <form className="signup" onSubmit={handleSubmit}>
      <h2 className="signup__title">CREA TU CUENTA</h2>
      <label className="signup__text" htmlFor="name">Nombre</label>
      <input type="text" id="name" name="name" onChange={handleChange} />
      <label className="signup__text" htmlFor="last">Apellido</label>
      <input type="text" id="last" name="last" onChange={handleChange} />
      <label className="signup__text" htmlFor="username">Usuario</label>
      <input type="text" id="username" name="username" onChange={handleChange} />
      <label className="signup__text" htmlFor="mail">Correo electrónico</label>
      <input type="mail" id="mail" name="mail" onChange={handleChange} />
      <label className="signup__text" htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" onChange={handleChange} />
      <Button text="REGÍSTRATE" type="submit" />
    </form>
  );
}

export default SignUp;
