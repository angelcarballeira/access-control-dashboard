import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const goTo = (path) => {
    navigate(path);
    setOpen(false);
  };

  const isDashboard = location.pathname === '/dashboard';
  const isAdmin = location.pathname === '/admin';

  return (
    <header className='h-14 bg-gray-800 text-white flex items-center justify-between px-6'>
      {/* Left */}
      <div className='flex items-center gap-6'>
        <span className='font-semibold'>Access Control</span>

        <nav className='hidden md:flex gap-4 text-sm'>
          <Link to='/dashboard' className='hover:underline'>
            Dashboard
          </Link>

          {user.role === 'admin' && (
            <Link to='/admin' className='hover:underline'>
              Admin
            </Link>
          )}
        </nav>
      </div>

      {/* Right */}
      <div className='relative'>
        <button
          onClick={() => setOpen(!open)}
          className='text-sm flex items-center gap-2'
        >
          {user.username}
          <span className='text-xs'>▼</span>
        </button>

        {open && (
          <div className='absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded shadow'>
            <div className='px-4 py-2 text-xs text-gray-500 border-b'>
              Rol: {user.role}
            </div>

            {/* Dashboard link */}
            {!isDashboard && (
              <button
                onClick={() => goTo('/dashboard')}
                className='w-full text-left px-4 py-2 hover:bg-gray-100 text-sm'
              >
                Dashboard
              </button>
            )}

            {/* Admin link */}
            {user.role === 'admin' && !isAdmin && (
              <button
                onClick={() => goTo('/admin')}
                className='w-full text-left px-4 py-2 hover:bg-gray-100 text-sm'
              >
                Admin panel
              </button>
            )}

            <button
              onClick={handleLogout}
              className='w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600'
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
