// import React from "react";

// const EmployeeHeader = () => {
//   return (
//     <div className="w-full flex justify-between items-center border-2 border-b-red-500 m-4 p-4">
//       <div>
//         <h1 className="text-3xl font-semibold">Hello,</h1>
//         <h1 className="text-4xl font-bold pb-2">Sagar 👋</h1>
//       </div>
//       <button
//         className="bg-red-600 leading-none  rounded
//             px-3 py-2
           
//             text-sm
//             font-bold"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default EmployeeHeader;


import React from "react";

const Header = () => {
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
          Sagar <span className="inline-block animate-wave">👋</span>
        </h1>
      </div>

      {/* Right Section */}
      <button
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
