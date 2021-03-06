/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unstable-nested-components */
import { useNavigate } from 'react-router-dom';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import Button from '../Button/Button';

import './Login.styles.scss';
import { loginService } from '../../services/index';

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
          const { token, userId, userName } = response;
          console.log(response);
          if (typeof token !== 'string') {
            alert('Usuario o contraseña incorrectos');
          } else {
            navigate('/purchases');
            localStorage.setItem('token', token);
            localStorage.setItem('id', userId);
            localStorage.setItem('userName', userName);
          }
        };
        login();
      }}
    >
      {({ errors }) => (
        <Form className="login">
          <h2 className="login__title">INICIAR SESIÓN</h2>
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
          <div className="login__button">
            <Button type="submit" text="INGRESAR" />
          </div>
        </Form>
      )}

    </Formik>
  );
}

export default Login;
