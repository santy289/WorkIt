import Header from '../../components/Header/Header';
import HomeBrand from '../../components/HomeBrand/HomeBrand';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import servicesList from '../../assets/categoriesinfo.json';
import './Home.styles.scss';

function Home() {
  return (
    <div>
      <Header />
      <div className="Home">
        <SearchBar />
        <HomeBrand />
        <h1 className="containerTitle">Servicios destacados</h1>
        <div className="containerCard">
          {servicesList.map((service) => <CategoriesCard key={service.id} service={service} />)}
        </div>
      </div>
    </div>
  );
}
export default Home;
