import Layouthome from '../../components/LayoutHome/LayoutHome';
import HomeBrand from '../../components/HomeBrand/HomeBrand';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import servicesList from '../../assets/categoriesinfo.json';
import './Home.styles.scss';

function Home() {
  return (
    <div className="Home">
      <SearchBar />
      <HomeBrand />

      <h1 className="containerTitle">Servicios destacados</h1>
      <div className="containerCard">
        {servicesList.map((service) => <CategoriesCard key={service.id} service={service} />)}
      </div>
      <Layouthome />
    </div>
  );
}

export default Home;
