import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import AppDashboard from '../pages/AppDashboard';
import Admin from '../pages/Admin';

import ProtectedRoute from '../auth/ProtectedRoute';

const AppRouter = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />

      {/* Protected */}
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
          <ProtectedRoute role='admin'>
            <Admin />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRouter;
