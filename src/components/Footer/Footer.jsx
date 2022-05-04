import creators from '../../assets/data/creators';
import mirlogo from '../../assets/mirlogo.png';
import './Footer.styles.scss';

function Footer() {
  const usuario = (name, linkedin, github, email) => (
    <ul className="footer__list">
      <li className="footer__item--name">{name}</li>
      <li className="footer__item"><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
      <li className="footer__item"><a href={github} target="_blank" rel="noreferrer">GitHub</a></li>
      <li className="footer__item"><a href={email} target="_blank" rel="noreferrer">Email</a></li>
    </ul>
  );

  return (
    <section className="footer">
      <div className="footer__content">
        <div className="footer__mir">
          <p>Un proyecto para:</p>
          <a href="https://www.makeitreal.camp/" target="_blank" rel="noreferrer">
            <img height={35} width={150} src={mirlogo} alt="make it real" />
          </a>
        </div>
        <div className="footer__creators">
          <p>Desarrollado por:</p>
          {
            creators.map((creator) => (
              usuario(creator.name, creator.linkedin, creator.github, creator.email)))
          }
        </div>
      </div>
    </section>
  );
}

export default Footer;
