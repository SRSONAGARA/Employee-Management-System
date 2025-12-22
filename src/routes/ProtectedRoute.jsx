import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const { auth, isAuthReady } = useAuth();

  // ⏳ wait until auth state is restored
  if (!isAuthReady) return <div>Loading...</div>;

  if (!auth.isLoggedIn) return <Navigate to="/" />;

  if (role && auth.currentUser?.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
