import React from "react";

const TasksCountSection = ({ count = 2, label = "New Tasks", color = "from-amber-400 to-amber-600" }) => {
  return (
    <div
      className={`
    w-56
    bg-linear-to-l ${color}
    backdrop-blur-md
    rounded-xl
    px-6 py-4
    shadow-[0_15px_35px_rgba(0,0,0,0.4)]
    hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)]
    hover:scale-105
    transition-all duration-300
    cursor-pointer
  `}
    >
      <h1 className={`text-5xl text-white font-extrabold`}>{count}</h1>

      <p className="mt-2 text-white/80 font-medium text-xl tracking-wide">{label}</p>
    </div>
  );
};

export default TasksCountSection;
