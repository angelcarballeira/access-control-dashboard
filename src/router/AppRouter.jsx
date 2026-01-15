import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import AppDashboard from '../pages/AppDashboard';

import Admin from '../pages/Admin';
import Unauthorized from '../pages/Unauthorized';
import ProtectedRoute from '../auth/ProtectedRoute';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace />} />

      <Route path='/login' element={<Login />} />

      <Route
        path='/dashboard'
        element={
          <ProtectedRoute>
            <AppDashboard />
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
