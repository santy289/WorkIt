/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services';
import Button from '../Button/Button';
import './SignUp.styles.scss';

function SignUp() {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: '',
        last: '',
        username: '',
        email: '',
        country: '',
        city: '',
        address: '',
        password: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Campo requerido';
        } else if (/^[a-zA-Z' ']*$/.test(values.name) === false) {
          errors.name = 'Este campo solo acepta letras';
        }
        if (!values.last) {
          errors.last = 'Campo requerido';
        } else if (/^[a-zA-Z' ']+$/.test(values.last) === false) {
          errors.last = 'Este campo solo acepta letras';
        }
        if (!values.username) {
          errors.username = 'Campo requerido';
        } else if (values.username.length > 15) {
          errors.username = 'Este campo no puede tener mas de 15 caracteres';
        }
        if (!values.email) {
          errors.email = 'Campo requerido';
        } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) === false) {
          errors.email = 'Correo no valido';
        }
        if (!values.password) {
          errors.password = 'Campo requerido';
        } else if (values.password.length < 6) {
          errors.password = 'La contraseña debe tener al menos 6 caracteres';
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = 'Campo requerido';
        } else if (values.confirmPassword !== values.password) {
          errors.confirmPassword = 'Las contraseñas no coinciden';
        }
        return errors;
      }}
      onSubmit={(values) => {
        const newUser = async () => {
          const response = await createUser(values);
          console.log(response);
          if (!response) {
            alert('fail');
          } else {
            navigate('/purchases');
          }
        };
        newUser();
      }}
    >
      {({ errors }) => (
        <Form className="signup">
          <h2 className="signup__title">CREA TU CUENTA</h2>
          <label className="signup__text" htmlFor="name">Nombre</label>
          <ErrorMessage
            name="name"
            component={() => (
              <div className="signup__error">
                {errors.name}
              </div>
            )}
          />
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Escriba su nombre"
          />
          <label className="signup__text" htmlFor="last">Apellido</label>
          <ErrorMessage
            name="last"
            component={() => (
              <div className="signup__error">
                {errors.last}
              </div>
            )}
          />
          <Field
            type="text"
            id="last"
            name="last"
            placeholder="Escriba su apellido"
          />
          <label className="signup__text" htmlFor="username">Usuario</label>
          <ErrorMessage
            name="username"
            component={() => (
              <div className="signup__error">
                {errors.username}
              </div>
            )}
          />
          <Field
            type="text"
            id="username"
            name="username"
            placeholder="Escriba su usuario"
          />
          <label className="signup__text" htmlFor="email">Correo electrónico</label>
          <ErrorMessage
            name="email"
            component={() => (
              <div className="signup__error">
                {errors.email}
              </div>
            )}
          />
          <Field
            type="email"
            id="mail"
            name="email"
            placeholder="Correo@electronico.com"
          />
          <label className="signup__text" htmlFor="country">País</label>
          <ErrorMessage
            name="country"
            component={() => (
              <div className="signup__error">
                {errors.country}
              </div>
            )}
          />
          <Field
            type="country"
            id="country"
            name="country"
            placeholder="Escriba su país"
          />
          <label className="signup__text" htmlFor="city">Ciudad</label>
          <ErrorMessage
            name="city"
            component={() => (
              <div className="signup__error">
                {errors.city}
              </div>
            )}
          />
          <Field
            type="city"
            id="city"
            name="city"
            placeholder="Escriba su ciudad"
          />
          <label className="signup__text" htmlFor="address">Dirección</label>
          <ErrorMessage
            name="address"
            component={() => (
              <div className="signup__error">
                {errors.address}
              </div>
            )}
          />
          <Field
            type="address"
            id="address"
            name="address"
            placeholder="Escriba su dirección"
          />
          <label className="signup__text" htmlFor="password">Contraseña</label>
          <ErrorMessage
            name="password"
            component={() => (
              <div className="signup__error">
                {errors.password}
              </div>
            )}
          />
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
          />
          <label className="signup__text" htmlFor="confirmPassword">Confirmar contraseña</label>
          <ErrorMessage
            name="confirmPassword"
            component={() => (
              <div className="signup__error">
                {errors.confirmPassword}
              </div>
            )}
          />
          <Field
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Repita su contraseña"
          />
          <Button text="REGÍSTRATE" type="submit" />
        </Form>
      )}
    </Formik>
  );
}

export default SignUp;
