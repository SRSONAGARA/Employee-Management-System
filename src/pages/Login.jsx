import React from "react";
import LoginLeftContent from "../components/Auth/LoginLeftContent";
import LoginRightContent from "../components/Auth/LoginRightContent";

const Login = ({setAuth}) => {
  return (
    <div
      className=" min-h-screen w-full
        flex items-center justify-center
        bg-[url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8311.jpg')]
        bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-[#f1f4fa] h-100 w-180 rounded-lg shadow-[0_0_10px_#ffffff] flex">
        <LoginLeftContent />
        <LoginRightContent  setAuth= {setAuth}/>
      </div>
    </div>
  );
};

export default Login;
