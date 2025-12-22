const isPastDate = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = new Date(date);
  due.setHours(0, 0, 0, 0);

  return due < today;
};

export const getTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  let hasChanges = false;

  const updatedTasks = tasks.map((task) => {
    // Only auto-overdue unfinished tasks
    if (
      task.status !== "completed" &&
      task.status !== "overdue" &&
      isPastDate(task.dueDate)
    ) {
      hasChanges = true;
      return { ...task, status: "overdue" };
    }
    return task;
  });

  // Persist only if something changed
  if (hasChanges) {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return updatedTasks;
};


export const addTask = (task) => {
  const tasks = getTasks();
  localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
};

export const updateTaskStatus = (taskId, newStatus) => {
  const tasks = getTasks().map((task) => (task.id === taskId ? { ...task, status: newStatus } : task));

  localStorage.setItem("tasks", JSON.stringify(tasks));
};
