import { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-6 rounded shadow w-80'
      >
        {/* Volver */}
        <Link
          to='/'
          className='text-sm text-gray-600 hover:underline mb-3 inline-block'
        >
          ← Volver
        </Link>

        <h1 className='text-xl font-semibold mb-4 text-gray-800'>Login</h1>

        {error && (
          <div className='mb-3 text-sm text-red-600 bg-red-100 p-2 rounded'>
            {error}
          </div>
        )}

        <input
          className='w-full mb-3 p-2 border rounded focus:outline-none focus:ring focus:ring-gray-300'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className='w-full mb-4 p-2 border rounded focus:outline-none focus:ring focus:ring-gray-300'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type='submit'
          className='w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
