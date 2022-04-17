/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* este comment se arrergla asignando url a los hash en las etiquetas a */
import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import Button from '../Button/Button';
import './Login.styles.scss';

function Login() {
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
        console.log(values);
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
