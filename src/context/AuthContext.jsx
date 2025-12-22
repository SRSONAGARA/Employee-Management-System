import React, { createContext, useContext, useEffect, useState } from "react";
import { clearLogin, getLogin, setLogin } from "../utils/LocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    currentUser: null,
  });

  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const data = getLogin();
    setAuth(data);
    setIsAuthReady(true);
  }, []);

  const login = ({ user, remember }) => {
    setLogin(user, remember);
    setAuth({
      isLoggedIn: true,
      currentUser: user,
    });
  };

  const logout = () => {
    clearLogin();
    setAuth({
      isLoggedIn: false,
      currentUser: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, isAuthReady }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);