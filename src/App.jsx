import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import AdminDashbaord from "./pages/AdminDashbaord";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import { getLogin, getUsersData, setUsersData } from "./utils/LocalStorage";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

// localStorage.clear();
// sessionStorage.clear();

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      setUsersData();
    }
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminDashbaord />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee"
            element={
              <ProtectedRoute role="employee">
                <EmployeeDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
