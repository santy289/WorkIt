import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { getUserById } from '../../services/index';
import './UserProfile.styles.scss';

function UserProfile() {
  const [user, setUser] = useState({});
  const showUser = async () => {
    const data = await getUserById(1);
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
              src={user.picprofile}
              alt="profile"
            />
          </div>
          <div className="containerUser_buttonsProfile">
            <button type="button" className="userProfileButton">Historial de ventas</button>
            <button type="button" className="userProfileButton">Historial de compras</button>
            <button type="button" className="userProfileButton">Cerrar sesión</button>
          </div>
        </div>
        <div className="contentProfile">
          <table className="contentProfile_userProfileTable">
            <tr>
              <td>Nombre de Usuario:</td>
              <td>{user.user}</td>
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
    </>
  );
}
export default UserProfile;
