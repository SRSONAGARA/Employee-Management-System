import React from "react";

const LoginLeftContent = () => {
  return (
    <div className="relative h-100 w-90 p-0.5 text-white ">
      <img
        src="https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8311.jpg"
        className="h-full w-full rounded-lg object-cover block"
      />
      <div className="absolute inset-0 px-16 py-10 flex flex-col justify-between">
        <div className="flex gap-2">
          <div className="rounded-full h-10 w-10 bg-white"></div>
          <div>
            <h1 className="text-xl font-bold leading-none">YOUR </h1>
            <h1 className="font-normal italic leading-none">LOGO</h1>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-semibold">Hello,</h1>
          <h1 className="text-3xl font-bold pb-2">Welcome!</h1>

          <h4 className="text-[12px] font-semibold py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nesciunt?
          </h4>
          <button className="bg-white text-[#081469] text-[10px] font-semibold px-8 pt-2 rounded-full pb-2 leading-none block">
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginLeftContent;
