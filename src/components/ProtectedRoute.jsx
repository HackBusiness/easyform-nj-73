import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const ProtectedRoute = ({ children, permission }) => {
  const { hasPermission } = useUser();

  if (!hasPermission(permission)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;