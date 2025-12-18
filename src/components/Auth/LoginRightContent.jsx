import React from "react";

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

const LoginRightContent = () => {
  return (
    <div className="text-[#0e2dae] relative h-100 w-90 p-10 flex flex-col justify-center">
      <h3 className="font-semibold text-[14px] ">Email address</h3>
      <input type="text" placeholder="Enter your email" className={inputClasses} />
      <h3 className="font-semibold text-[14px] ">Password</h3>
      <input type="text" placeholder="Enter your password" className={inputClasses} />

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
    </div>
  );
};

export default LoginRightContent;
