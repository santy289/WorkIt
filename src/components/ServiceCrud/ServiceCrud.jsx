/* eslint-disable no-alert */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './ServiceCrud.styles.scss';
import { createService } from '../../services';

function ServiceCrud() {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        userId: localStorage.getItem('id'),
        title: '',
        tags: '',
        cost: 0,
        costType: '',
        description: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Campo requerido';
        }
        if (!values.tags) {
          errors.tags = 'Se requiere almenos un tag';
        }
        if (values.cost <= 0) {
          errors.cost = 'Costo debe ser mayor a 0';
        }
        if (!values.description) {
          errors.description = 'Campo requerido';
        }
        if (values.description.length > 500) {
          errors.description = 'Este campo no puede tener mas de 500 caracteres';
        }
        return errors;
      }}
      onSubmit={(values) => {
        const newService = async () => {
          const response = await createService(values);
          if (!response) {
            alert('Error al crear el servicio');
          } else {
            navigate('/sales');
          }
        };
        newService();
      }}
    >
      {({ errors }) => (
        <div className="servicecrud__card">
          <Form className="servicecrud__form">
            <label className="" htmlFor="title">Nombre del servicio</label>
            <ErrorMessage
              name="title"
              component={() => (
                <div className="servicecrud__error">
                  {errors.title}
                </div>
              )}
            />
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Indique el nombre del servicio"
            />
            <label className="" htmlFor="tags">Tags</label>
            <ErrorMessage
              name="tags"
              component={() => (
                <div className="servicecrud__error">
                  {errors.tags}
                </div>
              )}
            />
            <Field
              type="text"
              id="tags"
              name="tags"
              placeholder="Escriba los tags separados por comas"
            />
            <label className="" htmlFor="cost">Costo (USD)</label>
            <ErrorMessage
              name="cost"
              component={() => (
                <div className="servicecrud__error">
                  {errors.cost}
                </div>
              )}
            />
            <Field
              type="number"
              id="cost"
              name="cost"
              placeholder="Escriba el costo del servicio"
            />
            <label className="" htmlFor="costType">Forma de cobro</label>
            <select
              id="costType"
              name="costType"
            >
              <option value="done">Completado el servicio</option>
              <option value="hours">Por horas</option>
            </select>
            <label className="" htmlFor="description">Descripción</label>
            <ErrorMessage
              name="description"
              component={() => (
                <div className="servicecrud__error">
                  {errors.description}
                </div>
              )}
            />
            <Field
              placeholder="Descripción de tu servicio..."
              id="description"
              name="description"
            />
            <div className="signup__button">
              <Button text="REGÍSTRATE" type="submit" />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default ServiceCrud;
