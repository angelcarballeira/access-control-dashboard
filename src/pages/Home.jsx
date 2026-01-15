import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded shadow text-center'>
        <h1 className='text-2xl font-semibold mb-4'>
          Access Control Dashboard
        </h1>

        <p className='text-gray-600 mb-6'>
          Demo de login, roles y rutas protegidas
        </p>

        <Link
          to='/login'
          className='bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900'
        >
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
};

export default Home;
