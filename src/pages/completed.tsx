// import Navbar from "@/components/Navbar";
// import TaskList from "@/components/TaskList";
// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";


// interface Task {
//   id: number;
//   text: string;
// }
// const Completed = () => {
//   const [activeTab, setActiveTab] = useState("Home"); // Set "Home" as default tab
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

//   const handleTabClick = (tabName: string) => {
//     setActiveTab(tabName);
//   };

//   const handleAddTask = (task: string) => {
//     const newTask = {
//       id: tasks.length + 1,
//       text: task,
//     };
//     setTasks([...tasks, newTask]);
//   };

//   const handleTaskChecked = (taskId: number, fromCompleted: boolean) => {
//     if (fromCompleted) {
//       const updatedTask = completedTasks.find((task) => task.id === taskId);
//       if (updatedTask) {
//         setTasks([...tasks, updatedTask]);
//         setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
//       }
//     } else {
//       const updatedTask = tasks.find((task) => task.id === taskId);
//       if (updatedTask) {
//         setCompletedTasks([...completedTasks, updatedTask]);
//         setTasks(tasks.filter((task) => task.id !== taskId));
//       }
//     }
//   };

//   const handleDeleteTask = (taskId: number) => {
//     // Remove task from tasks or completedTasks based on the current activeTab
//     if (activeTab === "Active") {
//       setTasks(tasks.filter((task) => task.id !== taskId));
//     } else if (activeTab === "Completed") {
//       setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
//     }
//     // Show toast notification
//     toast.success("Task deleted successfully!");
//   };
//   return (
//     <div className="flex">
//       <Navbar />
//       <div className="w-11/12">
//         <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
//         <TaskList
//           tasks={completedTasks}
//           onTaskChecked={(taskId) => handleTaskChecked(taskId, true)}
//           onDeleteTask={handleDeleteTask} // Pass onDeleteTask prop
//         />
//       </div>
//     </div>
//   );
// };

// export default Completed;




import Navbar from "@/components/Navbar";
import TaskList from "@/components/TaskList";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


interface Task {
  id: number;
  text: string;
}
const Completed = () => {
  const [activeTab, setActiveTab] = useState("Home"); // Set "Home" as default tab
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

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
    // Remove task from tasks or completedTasks based on the current activeTab
    if (activeTab === "Active") {
      setTasks(tasks.filter((task) => task.id !== taskId));
    } else if (activeTab === "Completed") {
      setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
    }
    // Show toast notification
    toast.success("Task deleted successfully!");
  };
  
  // Update this line to use completedTasks instead of tasks
  return (
    <div className="flex">
      <Navbar />
      <div className="w-11/12">
        <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
        <TaskList
          tasks={completedTasks} // Change this line
          onTaskChecked={(taskId) => handleTaskChecked(taskId, true)}
          onDeleteTask={handleDeleteTask} // Pass onDeleteTask prop
        />
      </div>
    </div>
  );
};

export default Completed;



