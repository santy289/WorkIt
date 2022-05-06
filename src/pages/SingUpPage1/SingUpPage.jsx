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
import Header from '../../components/Header/Header';
import ButtonCreate from '../../components/ButtonCreate/ButtonCreate';
import Footer from '../../components/Footer/Footer';
import './SingUpPage.styles.scss';
import { createUser } from '../../services';
import { useEffect, useState } from 'react';

function CreateUser() {

  const [imageprofile, setImageprofile] = useState(null);
  const [stateImage, setStateImage] =useState(false);
  const [name, setName] = useState(null);
  const [last, setLast] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [country, setCountry] = useState("Colombia");
  const [city, setCity] = useState(null);
  const [address, setAddress] = useState(null);
  const [password, setPassword] = useState(null);
  const [confpassword, setConfpassword] = useState(null);
  const handleChange = (evt) => {
    setImageprofile(evt.target.files[0]);
    setStateImage(true);
  };
  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };
  const handleChangeLast = (evt) => {
    setLast(evt.target.value);
  };
  const handleChangeUsername = (evt) => {
    setUsername(evt.target.value);
  };
  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
  };
  const handleChangeCountry = (evt) => {
    setCountry(evt.target.value);
  };
  const handleChangeCity = (evt) => {
    setCity(evt.target.value);
  };
  const handleChangeAddress = (evt) => {
    setAddress(evt.target.value);
  };
  const handleChangePassword = (evt) => {
    setPassword(evt.target.value);
    
  };
  const handleChangeConfpassword = (evt) => {
    setConfpassword(evt.target.value);
    
  };

  const handleUploaImage = async () => {
    const formData = new FormData();
    formData.append('file', imageprofile);
    if(name&&last&&username&&email&&country&&city&&address&&password){
      formData.append('name', name);
      formData.append('last', last);
      formData.append('username', username);
      formData.append('email', email);
      formData.append('country', country);
      formData.append('city', city);
      formData.append('address', address);
      formData.append('password', password);
    }
    try {
      await createUser(formData);
      window.location.href='/'
    } catch (error) {
      console.log(error);
    }
  };
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return (
    <div>
      <Header />
      <div className="containerEdit">
      <h1 className="titleEdit">Registrate</h1>
      <div className="containerUser">
      
        <img
              className="imageContainer"
              src={stateImage ? URL.createObjectURL(imageprofile):'https://res.cloudinary.com/dbsumvu1d/image/upload/v1650855803/Imagen-destacada-post-VN-1_ssfest.png'}
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
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' onChange={handleChangeName} />
            <label for="name" className="form__label">Nombre</label>
          </div>
          <h2>{!name? "Campo requerido":""}</h2>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name'  onChange={handleChangeLast} />
            <label for="name" className="form__label">Apellido</label>
          </div>
          <h2>{!last? "Campo requerido":""}</h2>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name'  onChange={handleChangeUsername} />
            <label for="name" className="form__label">Nombre de usuario</label>
          </div>
          <h2>{!username? "Campo requerido":""}</h2>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name'  onChange={handleChangeEmail} />
            <label for="name" className="form__label">Email</label>
          </div>
          <h2>{!email?"/ Campo requerido  /":""}{!regex.test(email)? "/  Email no valido /":""}</h2>
          <div className="form__group field">
          <select className='form__field' placeholder="Name" name="name" id='name' defaultValue="Colombia" onChange={handleChangeCountry}>
            <option value="Colombia">Colombia</option>
            <option value="Argentina">Argentina</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Chile">Chile</option>
            <option value="Estados Unidos">Estados Unidos</option>
            <option value="Canada">Canada</option>
            <option value="Peru">Peru</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Mexico">Mexico</option>
          </select>
          <h2>{!country? "Campo requerido":""}</h2>

            <label for="name" className="form__label">Pais</label>
          </div>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' onChange={handleChangeCity} />
            <label for="name" className="form__label">Ciudad</label>
          </div>
          <h2>{!city? "Campo requerido":""}</h2>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' onChange={handleChangeAddress} />
            <label for="name" className="form__label">Direccion</label>
          </div>
          <h2>{!address? "Campo requerido":""}</h2>
          <div className="form__group field">
            <input type="password" className="form__field" placeholder="Name" name="name" id='name' onChange={handleChangePassword} />
            <label for="name" className="form__label">Contrasena</label>
          </div>
          <h2>{!password? "Campo requerido":""}</h2>
          <div className="form__group field">
            <input type="password" className="form__field" placeholder="Name" name="name" id='name' onChange={handleChangeConfpassword} />
            <label for="name" className="form__label">Confirmar Contrasena</label>
          </div>
          <h2>{password!=confpassword||!password||!confpassword? "Contrasena no coincide":""}</h2>
          <ButtonCreate text="Registrar" type="button" handleClick={handleUploaImage} able={ name&&last&&username&&email&&city&&address&&password==confpassword&&password&&confpassword&&regex.test(email)? true: false } />
              
    </div>
    <Footer />
    </div>
  );
}

export default CreateUser;
