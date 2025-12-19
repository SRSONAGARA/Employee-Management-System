import React, { useState } from "react";
import { getUsersData, setLogin } from "../../utils/LocalStorage";

const inputClasses = `
  w-full
  bg-white
  rounded-lg
  px-4 py-3
  my-2
  text-sm
  shadow-[0_2px_8px_rgba(0,0,0,0.15)]
  placeholder-gray-400
  outline-none
  focus:ring-2
  focus:shadow-[0_4px_12px_rgba(59,130,246,0.35)]
`;

const LoginRightContent = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const users = getUsersData();

    const user = users.find((u) => u.email === email && u.password === password);
    console.log(email, password);

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    const loggedUser = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    setLogin(loggedUser);
    setAuth({
      isLoggedIn: true,
      currentUser: loggedUser,
    });
    
    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className="text-[#0e2dae] relative h-100 w-90 p-10 flex flex-col justify-center"
    >
      <h3 className="font-semibold text-[14px] ">Email address</h3>
      <input
        required
        type="email"
        placeholder="Enter your email"
        className={inputClasses}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <h3 className="font-semibold text-[14px] ">Password</h3>
      <input
        required
        type="password"
        placeholder="Enter your password"
        className={inputClasses}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <div className="flex justify-between px-4">
        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember" className="h-3 w-3 accent-[#0e2dae] cursor-pointer" />
          <label htmlFor="remember" className="font-semibold text-[10px] cursor-pointer select-none">
            Remember me
          </label>
        </div>

        <h3 className="font-semibold text-[10px]">Forgot password?</h3>
      </div>

      <button
        className=" w-full
            bg-white
            rounded-lg
            px-4 py-3
            my-8
            text-sm
            font-bold
            shadow-[0_2px_8px_rgba(0,0,0,0.15)]
            placeholder-gray-400
            outline-none
            transition-all duration-300

            hover:bg-[#0e2dae]
            hover:text-white
            hover:shadow-[0_6px_16px_rgba(14,45,174,0.45)]

            active:scale-95
            "
      >
        Login
      </button>
    </form>
  );
};

export default LoginRightContent;
