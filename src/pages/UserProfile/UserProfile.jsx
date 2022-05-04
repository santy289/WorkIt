import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getUserById, updateUser } from '../../services/index';
import './UserProfile.styles.scss';

function UserProfile() {
  const id = localStorage.getItem('id');
  const [image, setImage] = useState(null);
  const handleChange = (evt) => {
    setImage(evt.target.files[0]);
  };

  const handleUploaImage = async () => {
    const formData = new FormData();

    formData.append('file', image);
    try {
      await updateUser(id, formData);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const [user, setUser] = useState({});
  const showUser = async () => {
    const data = await getUserById(id);
    setUser(data);
  };
  useEffect(() => {
    showUser();
  }, []);
  return (
    <>
      <Header />
      <div className="userProfile">
        <div className="containerUser">
          <div className="containerUser_imageContainer">
            <img
              className="containerUser_imageContainer--userImage"
              src={user.imageprofile}
              alt="profile"
            />
          </div>
          <div className="updateimage">
            <p className="updateimage__text">Selecciona tu foto de perfil:</p>
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
          <div className="containerUser_buttonsProfile">
            <button type="button" className="userProfileButton">Datos personales</button>
            <button type="button" className="userProfileButton">Historial de ventas</button>
            <button type="button" className="userProfileButton">Historial de compras</button>
          </div>
        </div>
        <div className="contentProfile">
          <table className="contentProfile_userProfileTable">
            <tr>
              <td>Nombre de Usuario:</td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td>Nombres:</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Apellidos:</td>
              <td>{user.last}</td>
            </tr>
            <tr>
              <td>Correo:</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>País:</td>
              <td>{user.country}</td>
            </tr>
            <tr>
              <td>Ciudad:</td>
              <td>{user.city}</td>
            </tr>
            <tr>
              <td>Dirección:</td>
              <td>{user.address}</td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default UserProfile;
