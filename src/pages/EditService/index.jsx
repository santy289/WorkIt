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
  const [description, setDescription] = useState(null);
  const [title, setTitle] = useState(null);
  const [cost, setCost] = useState(null);
  const [tags, setTags] = useState(null);

  const handleChange = (evt) => {
    setImage(evt.target.files[0]);
  };
  const handleChangeDescription = (evt) => {
    setDescription(evt.target.value);
  };
  const handleChangeTitle = (evt) => {
    setTitle(evt.target.value);
  };
  const handleChangeCost = (evt) => {
    setCost(evt.target.value);
  };
  const handleChangeTags = (evt) => {
    setTags(evt.target.value);
  };
  
  const handleUploaImage = async () => {
    const formData = new FormData();
    
    formData.append('file', image);
    if(title){
      formData.append('title', title);
    }
    if(description){
      formData.append('description', description);
    }
    if(cost){
      formData.append('cost', cost);
    }
    if(tags){
      formData.append('tags', tags);
    }
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
  return (
    <div>
      <Header />
      <div className="containerEdit">
      <h1 className="titleEdit">Actualizar Servicio</h1>
      <div className="containerUser">
            <img
              className="imageContainer"
              src={service.image}
              alt="profile"
            />
          </div>
          <h2> Imagen</h2>
          <div className="updateimage">
          
            <input
              className="choose"
              type="file"
              name="file"
              id="file"
              accept="image/*"
              onChange={handleChange}
            />
            
          </div>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' defaultValue={service.title} onChange={handleChangeTitle} />
            <label for="name" className="form__label">Titulo</label>
          </div>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' defaultValue={service.description} onChange={handleChangeDescription} />
            <label for="name" className="form__label">Descripcion</label>
          </div>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' defaultValue={service.cost} onChange={handleChangeCost} />
            <label for="name" className="form__label">Costo</label>
          </div>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' defaultValue={service.tags} onChange={handleChangeTags} />
            <label for="name" className="form__label">Tags</label>
          </div>
          <Button text="Actualizar" type="button" handleClick={handleUploaImage} />
              
    </div>
    </div>
  );
}

export default EditService;
