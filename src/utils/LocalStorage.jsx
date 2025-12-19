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

export const setLogin = (user) => {
  localStorage.setItem("isLoggedIn", JSON.stringify(true));
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getLogin = () => {
  return {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    currentUser: JSON.parse(localStorage.getItem("currentUser")),
  };
};

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
};
