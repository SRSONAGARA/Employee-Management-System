import React, { useEffect, useState } from "react";
import { getTasks } from "../../utils/TaskStorage";
import { formatDate, statusStyles, formatStatus } from "./TaskList";
import { ChevronDown } from "lucide-react";

const AdminTaskList = ({ refreshKey }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");

  useEffect(() => {
    const allTasks = getTasks();
    setTasks(allTasks);
  }, [refreshKey]);

  const filteredTasks = selectedStatus === "all" ? tasks : tasks.filter((task) => task.status === selectedStatus);

  return (
    <div className="w-full px-20 ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-6 tracking-wide">All Tasks</h2>

        <div className="relative">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="
                px-4 py-2
                pr-10
                appearance-none
                rounded-md
                bg-black/40
                border border-white/30
                text-white
                cursor-pointer
                outline-none
                transition-all duration-300
                focus:border-green-400

                hover:border-white/30
          
          "
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="overdue">Overdue</option>
          </select>

          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>
      {tasks.length === 0 && <p className="text-white/70 text-sm">No tasks assigned yet.</p>}

      <div>
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="
              mb-4
              flex items-center justify-between
              bg-white/10 rounded-xl p-4
              border border-white/10
              hover:bg-white/20
              transition-all duration-300
            "
          >
            {" "}
            <div className="flex items-start gap-4">
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

export default AdminTaskList;
