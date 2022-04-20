/* eslint-disable no-alert */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* este comment se arrergla asignando url a los hash en las etiquetas a */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import Button from '../Button/Button';
import './Login.styles.scss';
import { loginService } from '../../services';

function Login() {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Campo requerido';
        }
        if (!values.password) {
          errors.password = 'Campo requerido';
        }
        return errors;
      }}
      onSubmit={(values) => {
        const login = async () => {
          const response = await loginService(values);
          const data = await response;
          if (data.status === 200) {
            navigate('/');
          } else {
            alert('Usuario o contraseña incorrectos');
          }
        };
        login();
      }}
    >
      {({ errors }) => (
        <Form className="login">
          <h2 className="login__title">INICIA SESIÓN</h2>
          <label className="login__text" htmlFor="username">Usuario</label>
          <ErrorMessage
            name="username"
            component={() => (
              <div className="login__error">
                {errors.username}
              </div>
            )}
          />
          <Field type="text" id="username" name="username" />
          <label className="login__text" htmlFor="password">Contraseña</label>
          <ErrorMessage
            name="password"
            component={() => (
              <div className="login__error">
                {errors.password}
              </div>
            )}
          />
          <Field type="password" id="password" name="password" />
          <a className="login__link" href="#">¿Olvidaste tu contraseña?</a>
          <Button className="login__submit" type="submit" text="INICIAR SESIÓN" />
        </Form>
      )}

    </Formik>
  );
}

export default Login;
