import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

function Activate() {
  const { hash } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const activate = async () => {
      const response = await fetch(`http://localhost:8080/auth/local/verify-account/${hash}`);
      const data = await response.json();
      if (data.token) {
        navigate('/');
        localStorage.setItem('token', data.token);
      }
    };
    activate();
  }, [hash]);
  return (
    <div>
      <Header />
      Te has registrado correctamente.
    </div>
  );
}

export default Activate;
