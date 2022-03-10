import Head from './components/Header.jsx';
import Layouthome from './components/Layouthome.jsx';
import HomeBrand from './components/Homebrand.jsx'
import Categoriescard from './components/Categoriescard.jsx'
import servicesList from './assets/categoriesinfo.json'
import './App.css';

function App() {
  return (
    <div className="App">
     <Head/>
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
