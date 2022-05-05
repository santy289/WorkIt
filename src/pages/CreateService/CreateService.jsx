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
import ButtonCreate from '../../components/ButtonCreate/ButtonCreate';
import Footer from '../../components/Footer/Footer';
import './CreateService.styles.scss';
import { createService } from '../../services';
import { useEffect, useState } from 'react';

function CreateService() {

  const [image, setImage] = useState(null);
  const [stateImage, setStateImage] =useState(false);
  const [stateForm, setStateForm] =useState(false);
  const [description, setDescription] = useState(null);
  const [title, setTitle] = useState(null);
  const [cost, setCost] = useState(null);
  const [tags, setTags] = useState(null);

  const handleChange = (evt) => {
    setImage(evt.target.files[0]);
    setStateImage(true);
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
    if(title && description && cost && tags){
      formData.append('title', title);
      formData.append('description', description);
      formData.append('cost', cost);
      formData.append('tags', tags);
    }
    try {
      await createService(formData);
      window.location.href='/sales'
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div>
      <Header />
      <div className="containerEdit">
      <h1 className="titleEdit">Crear Servicio</h1>
      <div className="containerUser">
        <img
              className="imageContainer"
              src={stateImage ? URL.createObjectURL(image):'https://gigacon.com.co/web/images/joomlart/demo/default.jpg'}
              alt="profile"
            />
          </div>
          <h2>Imagen</h2>
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
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' onChange={handleChangeTitle} />
            <label for="name" className="form__label">Titulo</label>
          </div>
          <h2>{!title? "Campo requerido":""}</h2>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name'  onChange={handleChangeDescription} />
            <label for="name" className="form__label">Descripcion</label>
          </div>
          <h2>{!description? "Campo requerido":""}</h2>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name'  onChange={handleChangeCost} />
            <label for="name" className="form__label">Costo</label>
          </div>
          <h2>{!cost? "Campo requerido":""}</h2>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' onChange={handleChangeTags} />
            <label for="name" className="form__label">Tags</label>
          </div>
          <h2>{!tags? "Campo requerido":""}</h2>
          <ButtonCreate text="Crear" type="button" handleClick={handleUploaImage} able={title&&description&&cost&&tags? true: false } />
              
    </div>
    <Footer />
    </div>
  );
}

export default CreateService;
