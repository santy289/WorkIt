import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import './LoginPage.styles.scss';

function LoginPage() {
  return (
    <>
      <Header />
      <div className="loginpage">
        <Login />
      </div>
    </>
  );
}

export default LoginPage;
