import React from "react";
import Header from "../components/Dashboard/Header";
import TasksCountSection from "../components/Dashboard/TasksCountSection";
import TaskList from "../components/Tasks/TaskList";

const EmployeeDashboard = () => {
  return (
    <div
      className="text-white min-h-screen w-full
        flex  flex-col items-center justify-start
        gap-10
        p-10
        // bg-[#0e2dae]
        bg-[url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8311.jpg')]
        bg-cover bg-center bg-no-repeat
        "
    >
      <Header />
      <div className="flex gap-8 flex-wrap justify-center">
        <TasksCountSection count={2} label="New Tasks" color="from-yellow-400 to-orange-600" />
        <TasksCountSection count={5} label="In Progress" color="from-cyan-300 to-teal-500" />
        <TasksCountSection count={3} label="Completed" color="from-emerald-400 to-green-600" />
        <TasksCountSection count={1} label="Overdue" color="from-rose-500 to-red-700" />
      </div>

      <TaskList/>
    </div>
  );
};

export default EmployeeDashboard;
