import './UserProfile.styles.scss';

function UserProfile() {
  return (
    <div className="userProfile">
      <div className="containerUser">
        <div className="containerUser_imageContainer">
          <img
            className="containerUser_imageContainer--userImage"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
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
            <td>userTest1</td>
          </tr>
          <tr>
            <td>Nombres:</td>
            <td>Darwin</td>
          </tr>
          <tr>
            <td>Apellidos:</td>
            <td>Pedraza Carvajal</td>
          </tr>
          <tr>
            <td>Correo:</td>
            <td>usertest1@workit.com</td>
          </tr>
          <tr>
            <td>País:</td>
            <td>España</td>
          </tr>
          <tr>
            <td>Ciudad:</td>
            <td>Málaga</td>
          </tr>
          <tr>
            <td>Dirección:</td>
            <td>Avenida siempre viva # 123</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default UserProfile;
