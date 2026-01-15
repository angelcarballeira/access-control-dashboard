import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded ${
      location.pathname === path
        ? 'bg-blue-500 text-white'
        : 'text-gray-700 hover:bg-gray-200'
    }`;

  return (
    <aside className='w-60 bg-white shadow'>
      <div className='p-4 font-bold text-lg border-b'>Access Control</div>

      <nav className='p-4 space-y-2'>
        <Link to='/dashboard' className={linkClass('/dashboard')}>
          Dashboard
        </Link>

        {user?.role === 'admin' && (
          <Link to='/admin' className={linkClass('/admin')}>
            Admin
          </Link>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
