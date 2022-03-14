import Head from './components/Header/Header.jsx';
import Layouthome from './components/LayoutHome/Layouthome.jsx';
import HomeBrand from './components/HomeBrand/Homebrand.jsx'
import Categoriescard from './components/CategoriesCard/Categoriescard.jsx'
import servicesList from './assets/categoriesinfo.json'
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
     <Head/>
     <SearchBar/>
     <HomeBrand/>
     
     <h1 className='containerTitle'>Servicios destacados</h1>
     <div className='containerCard'>
       {servicesList.map((service, idx) => 
       <Categoriescard key={idx} service = {service}/>)}
      </div>
     <Layouthome/>     
    </div>
  );
}

export default App;
