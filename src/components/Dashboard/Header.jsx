import React from "react";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { auth, logout } = useAuth();
  const rawName = auth.currentUser?.email?.split("@")[0] || "";
  const name = rawName.charAt(0).toUpperCase() + rawName.slice(1);

  return (
    <div
      className="
        w-full max-w-6xl
        flex justify-between items-center
        px-8 py-5
        rounded-xl
        bg-white/10 backdrop-blur-md
        border border-white/20
        shadow-lg
      "
    >
      {/* Left Section */}
      <div>
        <h1 className="text-lg text-white/70">Welcome back,</h1>
        <h1 className="text-4xl font-extrabold tracking-wide">
          {name} <span className="inline-block animate-wave">👋</span>
        </h1>
      </div>

      {/* Right Section */}
      <button
        onClick={logout}
        className="
          flex items-center
          bg-linear-to-r from-red-500 to-red-700
          hover:from-red-600 hover:to-red-800
          transition-all duration-300
          px-5 py-2.5
          rounded-full
          text-sm font-semibold
          shadow-md hover:shadow-xl
          active:scale-95
        "
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
