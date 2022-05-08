/* eslint-disable */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import './editUser.scss';
import { updateUser, getUserById } from '../../services';
import { useEffect, useState } from 'react';

function EditUser() {

  const { id } = useParams();
  const [imageprofile, setImageprofile] = useState(null);
  const [name, setName] = useState(null);
  const [last, setLast] = useState(null);
  const [email, setEmail] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [address, setAddress] = useState(null);
  const [stateImage, setStateImage] = useState(false);

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
  
  const handleUploaImage = async () => {
    const formData = new FormData();
    
    formData.append('file', imageprofile);
    if(name){
      formData.append('name', name);
    }
    if(last){
      formData.append('last', last);
    }
    if(email){
      formData.append('email', email);
    }
    if(country){
      formData.append('country', country);
    }
    if(city){
      formData.append('city', city);
    }
    if(address){
      formData.append('address', address);
    }
    try {
      await updateUser(id, formData);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const [user, setUser] = useState({});
  const showUser= async () => {
    const data = await getUserById(id);
    setUser(data);
  };
 
  useEffect(() => {
    showUser();
  }, []);
  return (
    <div>
      <Header />
      <div className="containerEdit">
      <h1 className="titleEdit">Editar datos personales</h1>
      <div className="containerUser">
            <img
              className="imageContainer"
              src={stateImage ? URL.createObjectURL(imageprofile):user.imageprofile}
              alt="profile"
            />
          </div>
          <h2> Foto de perfil</h2>
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
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' defaultValue={user.name} onChange={handleChangeName} />
            <label for="name" className="form__label">Nombre</label>
          </div>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' defaultValue={user.last} onChange={handleChangeLast} />
            <label for="name" className="form__label">Apellido</label>
          </div>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' defaultValue={user.email} onChange={handleChangeEmail} />
            <label for="name" className="form__label">Email</label>
          </div>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' defaultValue={user.country} onChange={handleChangeCountry} />
            <label for="name" className="form__label">Pais</label>
          </div>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' defaultValue={user.city} onChange={handleChangeCity} />
            <label for="name" className="form__label">Ciudad</label>
          </div>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' defaultValue={user.address} onChange={handleChangeAddress} />
            <label for="name" className="form__label">Direccion</label>
          </div>
          <Button text="Actualizar" type="button" handleClick={handleUploaImage} />
              
    </div>
    <Footer />
    </div>
  );
}

export default EditUser;
