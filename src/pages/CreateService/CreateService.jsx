import Header from '../../components/Header/Header';
import ServiceCrud from '../../components/ServiceCrud/ServiceCrud';
import './CreateService.styles.scss';

function CreateService() {
  return (
    <div className="create-service">
      <Header />
      <ServiceCrud />
    </div>
  );
}

export default CreateService;
