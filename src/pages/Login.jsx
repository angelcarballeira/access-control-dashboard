import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login('angel', role);
    navigate('/dashboard');
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-white p-6 rounded shadow w-80 space-y-4'>
        <h2 className='text-xl font-bold text-center'>Login</h2>

        <button
          onClick={() => handleLogin('user')}
          className='w-full bg-blue-500 text-white py-2 rounded'
        >
          Login como User
        </button>

        <button
          onClick={() => handleLogin('admin')}
          className='w-full bg-red-500 text-white py-2 rounded'
        >
          Login como Admin
        </button>
      </div>
    </div>
  );
};

export default Login;
