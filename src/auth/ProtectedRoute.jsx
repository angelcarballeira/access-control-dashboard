import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Loader from '../components/Loader';

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  if (!user) {
    return <Navigate to='/' replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to='/dashboard' replace />;
  }

  return children;
};

export default ProtectedRoute;
