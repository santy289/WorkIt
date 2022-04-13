import { useState } from 'react';
import Header from '../../components/Header/Header';
import HomeBrand from '../../components/HomeBrand/HomeBrand';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import Modal from '../../components/Modal/Modal';
import Login from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';
import servicesList from '../../assets/categoriesinfo.json';
import './Home.styles.scss';

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleLogin = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  const toggleSignUp = (e) => {
    e.preventDefault();
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      <Header toggleLogin={toggleLogin} toggleSignUp={toggleSignUp} />
      <div className="Home">
        <Modal handleClick={toggleLogin} show={showLogin}>
          <Login />
        </Modal>
        <Modal handleClick={toggleSignUp} show={showSignUp}>
          <SignUp />
        </Modal>
        <SearchBar />
        <HomeBrand />
        <h1 className="containerTitle">Servicios destacados</h1>
        <div className="containerCard">
          {servicesList.map((service) => <CategoriesCard key={service.id} service={service} />)}
        </div>
      </div>
    </>
  );
}
export default Home;
