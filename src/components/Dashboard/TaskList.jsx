import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getTasks, updateTaskStatus } from "../../utils/TaskStorage";

export const statusStyles = {
  pending: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
  in_progress: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
  completed: "bg-green-500/20 text-green-300 border-green-400/30",
  overdue: "bg-red-500/20 text-red-300 border-red-400/30",
};

export const statusDot = {
  pending: "bg-yellow-400",
  in_progress: "bg-cyan-400",
  completed: "bg-green-400",
  overdue: "bg-red-500",
};

export const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export const formatStatus = (status) =>
  status
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const TaskList = ({ onTaskUpdate }) => {
  const { auth } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!auth.currentUser) return;

    const allTasks = getTasks();

    const myTasks = allTasks.filter((task) => task.assignedTo === auth.currentUser.id);
    setTasks(myTasks);
  }, [auth.currentUser]);

  const handleStart = (taskId) => {
    updateTaskStatus(taskId, "in_progress");
    refreshTasks();
    onTaskUpdate();
  };
  const handleComplete = (taskId) => {
    updateTaskStatus(taskId, "completed");
    refreshTasks();
    onTaskUpdate();
  };

  const refreshTasks = () => {
    const allTasks = getTasks();
    const myTasks = allTasks.filter((task) => task.assignedTo === auth.currentUser.id);
    setTasks(myTasks);
  };
  return (
    <div className="w-full max-w-5xl bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <h2 className="text-2xl font-bold mb-6 tracking-wide">Your Tasks</h2>

      {tasks.length === 0 && <p className="text-white/70 text-sm">No tasks assigned yet.</p>}

      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="
              flex items-center justify-between
              bg-white/10 rounded-xl p-4
              border border-white/10
              hover:bg-white/20
              transition-all duration-300
            "
          >
            {/* Left */}
            <div className="flex items-start gap-4">
              {/* Status Dot */}
              <span className={`w-3 h-3 mt-2 rounded-full ${statusDot[task.status]}`} />

              <div>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-white/90 text-sm">{task.description}</p>

                <p
                  className={`mt-1 text-xs font-medium ${task.status === "overdue" ? "text-red-300" : "text-white/80"}`}
                >
                  Due: {formatDate(task.dueDate)}
                </p>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Pending → Start */}
              {task.status === "pending" && (
                <button
                  onClick={() => handleStart(task.id)}
                  className="
                    px-4 py-1.5
                    rounded-full
                    text-sm font-semibold
                    flex items-center gap-1
                    bg-cyan-500/20 text-white
                    border-4 border-cyan-400
                    hover:bg-cyan-500/30
                    hover:scale-105
                    transition-all duration-300
                    active:scale-95
                  "
                >
                  Start Task
                </button>
              )}

              {/* In Progress → Complete */}
              {task.status === "in_progress" && (
                <button
                  onClick={() => handleComplete(task.id)}
                  className="
                    px-4 py-1.5
                    rounded-full
                    text-sm font-semibold
                    flex items-center gap-1
                    bg-green-500/20 text-white
                    border-4 border-green-400
                    hover:bg-green-500/30
                    hover:scale-105
                    transition-all duration-300
                    active:scale-95
                  "
                >
                  Complete Task
                </button>
              )}

              {/* Completed → Badge */}
              {task.status === "completed" && (
                <span className={`px-4 py-1 rounded-full text-sm font-medium border ${statusStyles.completed}`}>
                  Completed
                </span>
              )}
              {task.status === "overdue" && (
                <span
                  className="
                  px-4 py-1
                  rounded-full
                  text-sm font-medium
                  border
                  bg-red-500/20 text-red-300 border-red-400/30
                "
                >
                  Overdue
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
