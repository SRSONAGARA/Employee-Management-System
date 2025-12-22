const users = [
  {
    id: 1,
    email: "admin@test.com",
    password: "123",
    role: "admin",
  },
  {
    id: 2,
    email: "emp1@test.com",
    password: "123",
    role: "employee",
  },
  {
    id: 3,
    email: "emp2@test.com",
    password: "123",
    role: "employee",
  },
  {
    id: 4,
    email: "emp3@test.com",
    password: "123",
    role: "employee",
  },
  {
    id: 5,
    email: "emp4@test.com",
    password: "123",
    role: "employee",
  },
];

export const setUsersData = () => {
  localStorage.setItem("users", JSON.stringify(users));
  console.log("setUsersData called");
};

export const getUsersData = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

export const setLogin = (user, remember) => {
  console.log(`====> remember in setLogin: ${remember}`);

  const storage = remember ? localStorage : sessionStorage;

  storage.setItem("isLoggedIn", JSON.stringify(true));
  storage.setItem("currentUser", JSON.stringify(user));
};

export const getLogin = () => {
  if (localStorage.getItem("isLoggedIn")) {
    return {
      isLoggedIn: true,
      currentUser: JSON.parse(localStorage.getItem("currentUser")),
    };
  }

  if (sessionStorage.getItem("isLoggedIn")) {
    return {
      isLoggedIn: true,
      currentUser: JSON.parse(sessionStorage.getItem("currentUser")),
    };
  }

  return {
    isLoggedIn: false,
    currentUser: null,
  };
};

export const clearLogin = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("isLoggedIn");
  sessionStorage.removeItem("currentUser");
};
