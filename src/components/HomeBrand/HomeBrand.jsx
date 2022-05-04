import './HomeBrand.styles.scss';
import logo from '../../assets/Logo.png';

function HomeBrand() {
  return (
    <section className="brand">
      <img className="logo" src={logo} alt="logo" />
    </section>
  );
}

export default HomeBrand;
