import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className='h-14 bg-gray-800 text-white flex items-center justify-between px-6'>
      <h1 className='font-semibold text-base'>Access Control Dashboard</h1>

      <div className='flex items-center gap-4'>
        <span className='text-sm text-gray-300'>
          {user.username} ({user.role})
        </span>

        <button
          onClick={handleLogout}
          className='bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm'
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
