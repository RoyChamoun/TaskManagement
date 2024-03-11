import Navbar from "../components/Navbar";
import TaskList from "@/components/TaskList";
import TaskManager from "@/components/TaskManager";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


interface Task {
  id: number;
  text: string;
}

const Active = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);


  const handleAddTask = (task: string) => {
    const newTask = {
      id: tasks.length + 1,
      text: task,
    };
    setTasks([...tasks, newTask]);
  };

  const handleTaskChecked = (taskId: number, fromCompleted: boolean) => {
    if (fromCompleted) {
      const updatedTask = completedTasks.find((task) => task.id === taskId);
      if (updatedTask) {
        setTasks([...tasks, updatedTask]);
        setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
      }
    } else {
      const updatedTask = tasks.find((task) => task.id === taskId);
      if (updatedTask) {
        setCompletedTasks([...completedTasks, updatedTask]);
        setTasks(tasks.filter((task) => task.id !== taskId));
      }
    }
  };

  const handleDeleteTask = (taskId: number) => {
    // Remove task from tasks or completedTasks based on the current activeTa
    toast.success("Task deleted successfully!");
  };

  return (
    <div className="flex">
      <Navbar />
      <div className="w-11/12">
        <h1 className="text-2xl font-bold mb-4">Active Tasks</h1>
        <TaskManager onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onTaskChecked={(taskId) => handleTaskChecked(taskId, false)}
          onDeleteTask={handleDeleteTask} // Pass onDeleteTask prop
        />
      </div>
    </div>
  );
};

export default Active;
