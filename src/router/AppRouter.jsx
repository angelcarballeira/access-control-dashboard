import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin';
import Unauthorized from '../pages/Unauthorized';
import ProtectedRoute from '../auth/ProtectedRoute';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />

      <Route
        path='/dashboard'
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path='/admin'
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <Admin />
          </ProtectedRoute>
        }
      />

      <Route path='/unauthorized' element={<Unauthorized />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
