import Header from '../../components/Header/Header';
import HomeBrand from '../../components/HomeBrand/HomeBrand';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import Modal from '../../components/Modal/Modal';
import Login from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';
import servicesList from '../../assets/categoriesinfo.json';
import useModal from '../../hooks/useModal';
import './Home.styles.scss';

function Home() {
  const { toggle: toggleLogin, show: showLogin } = useModal();
  const { toggle: toggleSignup, show: showSignup } = useModal();

  return (
    <>
      <Modal handleClick={toggleLogin} show={showLogin}>
        <Login />
      </Modal>
      <Modal handleClick={toggleSignup} show={showSignup}>
        <SignUp />
      </Modal>
      <Header toggleLogin={toggleLogin} toggleSignUp={toggleSignup} />
      <div className="Home">
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
