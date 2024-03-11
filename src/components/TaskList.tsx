import React from "react";

interface Task {
  id: number;
  text: string;
}

interface TaskListProps {
  tasks: Task[];
  onTaskChecked: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onTaskChecked,
  onDeleteTask,
}) => {
  const handleCheckboxChange = (taskId: number) => {
    onTaskChecked(taskId);
  };

  const handleDeleteTask = (taskId: number) => {
    onDeleteTask(taskId);
  };

  return (
    <div className="task-list-container">
      <h2 className="text-lg font-semibold mb-4">Task List</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center p-2 border border-gray-300 rounded-md overflow-hidden"
            style={{ wordWrap: "break-word" }}
          >
            <input
              type="checkbox"
              className="mr-2"
              onChange={() => handleCheckboxChange(task.id)}
            />
            <span>{task.text}</span>
            <button
              className="ml-auto bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
