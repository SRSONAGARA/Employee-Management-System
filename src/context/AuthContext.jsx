import React, { createContext, useContext, useEffect, useState } from "react";
import { clearLogin, getLogin, setLogin } from "../utils/LocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    currentUser: null,
  });

  useEffect(() => {
    const data = getLogin();
    setAuth(data);
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
  return <AuthContext.Provider value={{ auth, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

// import { createContext, useContext, useEffect, useState } from "react";
// import { getLogin, setLogin as saveLogin, clearLogin } from "../utils/LocalStorage";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     isLoggedIn: false,
//     currentUser: null,
//   });

//   useEffect(() => {
//     const data = getLogin();
//     setAuth(data);
//   }, []);

//   const login = (user, remember) => {
//     saveLogin(user, remember);
//     setAuth({
//       isLoggedIn: true,
//       currentUser: user,
//     });
//   };

//   const logout = () => {
//     clearLogin();
//     setAuth({
//       isLoggedIn: false,
//       currentUser: null,
//     });
//   };

//   return (
//     <AuthContext.Provider value={{ auth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
