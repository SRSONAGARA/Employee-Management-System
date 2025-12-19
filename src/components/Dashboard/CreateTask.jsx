import React from "react";

const CreateTask = () => {
    
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="
        w-full max-w-6xl
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
              type="text"
              placeholder="Make a UI design"
              className="mt-1 w-full px-4 py-2 rounded-md bg-transparent border border-white/30 outline-none focus:border-green-400"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm text-white/70">Date</label>
            <input
              type="date"
              className="mt-1 w-full px-4 py-2 rounded-md bg-transparent border border-white/30 outline-none focus:border-green-400"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="text-sm text-white/70">Assign to</label>
            <input
              type="text"
              placeholder="Employee name"
              className="mt-1 w-full px-4 py-2 rounded-md bg-transparent border border-white/30 outline-none focus:border-green-400"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm text-white/70">Category</label>
            <input
              type="text"
              placeholder="Design, Dev, etc"
              className="mt-1 w-full px-4 py-2 rounded-md bg-transparent border border-white/30 outline-none focus:border-green-400"
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
