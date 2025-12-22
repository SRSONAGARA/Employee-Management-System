import React, { useEffect, useState } from "react";
import { getUsersData } from "../../utils/LocalStorage";
import { addTask } from "../../utils/TaskStorage";
import { ChevronDown } from "lucide-react";

const CreateTask = ({ onTaskCreated }) => {
  const [users, setUsers] = useState([]);
  const [assignedTo, setAssignedTo] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const employees = getUsersData().filter((u) => u.role == "employee");
    setUsers(employees);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      category,
      dueDate: date,
      assignedTo: Number(assignedTo),
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    addTask(newTask);
     onTaskCreated();
     
    setTitle("");
    setDate("");
    setAssignedTo("");
    setCategory("");
    setDescription("");
  };

  return (
    <div
      className="
        w-full max-w-5xl
        bg-black/50 backdrop-blur-xl
        rounded-2xl
        p-8
        border border-white/20
        shadow-[0_25px_50px_rgba(0,0,0,0.6)]
      "
    >
      <h2 className="text-2xl font-bold mb-8 tracking-wide">Create New Task</h2>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* LEFT */}
        <div className="flex flex-col gap-5">
          {/* Task Title */}
          <div>
            <label className="text-sm text-white/70">Task Title</label>
            <input
              placeholder="Task Title"
              className="mt-1 w-full px-4 py-2 rounded-md bg-transparent border border-white/30 outline-none focus:border-green-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm text-white/70">Date</label>
            <input
              type="date"
              className="mt-1 w-full px-4 py-2 rounded-md bg-transparent border border-white/30 outline-none focus:border-green-400"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* Assign To */}
          <div className="flex items-center">
            <label className="text-sm text-white/70">Assign to:</label>

            <div className="relative">
              <select
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                required
                className="
                appearance-none
                ml-4
                px-3 py-2
                pr-10
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
                <option value="" disabled hidden>
                  Select employee
                </option>

                {users.map((user) => (
                  <option key={user.id} value={user.id} className="p-4">
                    {user.email.split("@")[0]}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="text-sm text-white/70">Category</label>
            <input
              type="text"
              placeholder="Design, Dev, etc"
              className="mt-1 w-full px-4 py-2 rounded-md bg-transparent border border-white/30 outline-none focus:border-green-400"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-between gap-5">
          {/* Description */}
          <div className="flex flex-col h-full">
            <label className="text-sm text-white/70">Description</label>
            <textarea
              placeholder="Write task description..."
              className="
                mt-1 flex-1
                px-4 py-3
                rounded-md
                bg-transparent
                border border-white/30
                outline-none
                resize-none
                focus:border-green-400
              "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            className="
              mt-4 w-full
              bg-emerald-500 hover:bg-emerald-600
              text-white font-semibold
              py-3 rounded-md
              transition-all duration-300
              shadow-[0_10px_30px_rgba(16,185,129,0.5)]
            "
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
