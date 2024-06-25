import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ role }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role === 'employer') {
    return <Navigate to="/dashboard/employer" />;
  }

  if (user.role === 'freelancer') {
    return <Navigate to="/dashboard/freelancer" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
