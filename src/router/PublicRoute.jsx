import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import Loader from '../components/Loader';

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  if (user) {
    return <Navigate to='/dashboard' replace />;
  }

  return children;
};

export default PublicRoute;
