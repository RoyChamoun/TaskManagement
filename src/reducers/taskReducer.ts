// // reducers/taskReducer.ts
// import { createReducer } from '@reduxjs/toolkit';
// import { addTask, toggleTask, deleteTask } from '../actions/taskactions';

// export interface Task {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// interface TaskState {
//   tasks: Task[];
// }

// const initialState: TaskState = {
//   tasks: [],
// };

// const taskReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addTask, (state, action) => {
//       state.tasks.push({
//         id: state.tasks.length + 1,
//         text: action.payload,
//         completed: false,
//       });
//     })
//     .addCase(toggleTask, (state, action) => {
//       const task = state.tasks.find((task) => task.id === action.payload);
//       if (task) {
//         task.completed = !task.completed;
//       }
//     })
//     .addCase(deleteTask, (state, action) => {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     });
// });

// export default taskReducer;


import { createReducer } from '@reduxjs/toolkit';
import { addTask, toggleTask, deleteTask } from '../actions/taskactions';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.tasks.push({
        id: state.tasks.length + 1,
        text: action.payload,
        completed: false,
      });
    })
    .addCase(toggleTask, (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    })
    .addCase(deleteTask, (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    });
});

export default taskReducer;
