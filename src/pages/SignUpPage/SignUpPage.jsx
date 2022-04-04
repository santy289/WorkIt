import Header from '../../components/Header/Header';
import SignUp from '../../components/SignUp/SignUp';
import './SignUpPage.styles.scss';

function SignUpPage() {
  return (
    <>
      <Header />
      <div className="signuppage">
        <SignUp />
      </div>
    </>
  );
}

export default SignUpPage;
