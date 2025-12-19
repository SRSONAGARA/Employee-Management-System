import React from "react";

const tasks = [
  {
    id: 1,
    title: "Design login page",
    description: "Create modern UI for login screen",
    status: "new",
    date: "2025-01-18",
  },
  {
    id: 2,
    title: "Fix API bug",
    description: "Resolve 500 error in task endpoint",
    status: "in_progress",
    date: "2025-01-17",
  },
  {
    id: 3,
    title: "Deploy dashboard",
    description: "Push employee dashboard to production",
    status: "completed",
    date: "2025-01-15",
  },
  {
    id: 4,
    title: "Update user permissions",
    description: "Adjust role-based access control",
    status: "in_progress",
    date: "2025-01-19",
  },
  {
    id: 5,
    title: "Write unit tests",
    description: "Cover task service with unit tests",
    status: "new",
    date: "2025-01-20",
  },
  {
    id: 6,
    title: "Fix UI alignment issues",
    description: "Resolve spacing issues on mobile",
    status: "overdue",
    date: "2025-01-14",
  },
  {
    id: 7,
    title: "Optimize database queries",
    description: "Improve performance of reports module",
    status: "in_progress",
    date: "2025-01-21",
  },
  {
    id: 8,
    title: "Prepare release notes",
    description: "Document changes for version 1.2",
    status: "completed",
    date: "2025-01-13",
  },
  {
    id: 9,
    title: "Client feedback review",
    description: "Analyze feedback from last demo",
    status: "new",
    date: "2025-01-22",
  },
  {
    id: 10,
    title: "Security audit",
    description: "Run vulnerability scan and fixes",
    status: "overdue",
    date: "2025-01-12",
  },
];

const statusStyles = {
  new: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
  in_progress: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
  completed: "bg-green-500/20 text-green-300 border-green-400/30",
  overdue: "bg-red-500/20 text-red-300 border-red-400/30",
};

const statusDot = {
  new: "bg-yellow-400",
  in_progress: "bg-cyan-400",
  completed: "bg-green-400",
  overdue: "bg-red-500",
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const formatStatus = (status) =>
  status
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const TaskList = () => {
  return (
    <div className="w-full max-w-5xl bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <h2 className="text-2xl font-bold mb-6 tracking-wide">Your Tasks</h2>

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
                  Due: {formatDate(task.date)}
                </p>
              </div>
            </div>

            {/* Status Badge */}
            <span className={`px-4 py-1 rounded-full text-sm font-medium border ${statusStyles[task.status]}`}>
              {formatStatus(task.status)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
