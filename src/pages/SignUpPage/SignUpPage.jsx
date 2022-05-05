import Header from '../../components/Header/Header';
import SignUp from '../../components/SignUp/SignUp';
import Footer from '../../components/Footer/Footer';
import './SignUpPage.styles.scss';

function SignUpPage() {
  return (
    <>
      <Header />
      <div className="signuppage">
        <SignUp />
      </div>
      <Footer />
    </>
  );
}

export default SignUpPage;
