import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import AdminDashbaord from "./pages/AdminDashbaord";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import { getLogin, getUsersData, setUsersData } from "./utils/LocalStorage";

const App = () => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    currentUser: null,
  });
  useEffect(() => {
    const loginData = getLogin();
    setAuth(loginData);
  }, []);

  if (!auth.isLoggedIn) return <Login setAuth={setAuth} />;
  if (auth.currentUser.role === "admin") return <AdminDashbaord />;
  return <EmployeeDashboard />;
};

export default App;
