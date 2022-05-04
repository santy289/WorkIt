/* eslint-disable */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import './editService.scss';
import { updateService, getServiceById } from '../../services';
import { useEffect, useState } from 'react';

function EditService() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const handleChange = (evt) => {
    setImage(evt.target.files[0]);
  };

  const handleUploaImage = async () => {
    const formData = new FormData();

    formData.append('file', image);
    try {
      await updateService(id, formData);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const [service, setService] = useState({});
  const showService = async () => {
    const data = await getServiceById(id);
    setService(data);
  };
  useEffect(() => {
    showService();
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Formik
        initialValues={{
          id,
          userId: localStorage.getItem('id'),
          title: '',
          tags: '',
          cost: 0,
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
          const editService = async () => {
            const response = await updateService(values);
            if (!response) {
              alert('Error al crear el servicio');
            } else {
              navigate('/sales');
            }
          };
          editService();
        }}
      >
        {({ errors }) => (
          <div className="editservice__card">
            <div className="containerUser">
              <img
                className="containerUser_imageContainer--userImage"
                src={service.image}
                alt="profile"
              />
              <div className="updateimage">
                <input
                  className="choose"
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  onChange={handleChange}
                />
                <button className="updateimage__button" type="button" onClick={handleUploaImage}>
                  Actualizar Imagen
                </button>
              </div>
            </div>
            <Form className="editservice__form">
              <label className="" htmlFor="title">Nombre del servicio</label>
              <ErrorMessage
                name="title"
                component={() => (
                  <div className="editservice__error">
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
                  <div className="editservice__error">
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
                  <div className="editservice__error">
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
              <label className="" htmlFor="description">Descripción</label>
              <ErrorMessage
                name="description"
                component={() => (
                  <div className="editservice__error">
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
                <Button text="MODIFICAR" type="submit" />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default EditService;
