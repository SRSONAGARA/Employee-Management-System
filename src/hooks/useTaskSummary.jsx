import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getTasks } from "../utils/TaskStorage";

const useTaskSummary = (refreshKey) => {
  const { auth } = useAuth();
  const [summary, setSummary] = useState({
    pending: 0,
    in_progress: 0,
    completed: 0,
    overdue: 0,
  });
  useEffect(() => {
    if (!auth.currentUser) return;
    const myTasks = getTasks().filter((task) => task.assignedTo === auth.currentUser.id);

    const counts = {
      pending: 0,
      in_progress: 0,
      completed: 0,
      overdue: 0,
    };

    myTasks.forEach((task) => {
      if (counts[task.status] !== undefined) {
        counts[task.status]++;
      }
    });
    setSummary(counts);
  }, [auth.currentUser, refreshKey]);

  return summary;
};

export default useTaskSummary;