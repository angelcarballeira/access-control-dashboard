import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <nav className='bg-gray-800 text-white px-6 py-3 flex justify-between items-center'>
      <div className='space-x-4'>
        <Link to='/dashboard' className='hover:underline'>
          Dashboard
        </Link>

        {user.role === 'admin' && (
          <Link to='/admin' className='hover:underline'>
            Admin
          </Link>
        )}
      </div>

      <div className='flex items-center space-x-4'>
        <span className='text-sm'>
          {user.username} ({user.role})
        </span>

        <button onClick={handleLogout} className='bg-red-500 px-3 py-1 rounded'>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
