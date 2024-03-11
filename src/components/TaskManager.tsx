import React, { useState } from "react";

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

interface TaskManagerProps {
  onAddTask: (task: string) => void;
}

const TaskManager: React.FC<TaskManagerProps> = ({ onAddTask }) => {
  const [newTaskInput, setNewTaskInput] = useState("");

  const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (newTaskInput.trim() !== "") {
      onAddTask(newTaskInput.trim());
      setNewTaskInput("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row mb-4">
      <input
        type="text"
        className="border border-gray-300 px-4 py-2 w-full md:mr-2"
        placeholder="Add a new task"
        value={newTaskInput}
        onChange={handleTaskInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
};

export default TaskManager;
