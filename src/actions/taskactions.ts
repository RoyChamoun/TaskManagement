// actions/taskActions.ts
import { createAction } from '@reduxjs/toolkit';

export interface Task {
    id: number;
    text: string;
    completed: boolean; // Add the completed property to match Task interface in Completed component
  }
export const addTask = createAction<string>('ADD_TASK');
export const toggleTask = createAction<number>('TOGGLE_TASK');
export const deleteTask = createAction<number>('DELETE_TASK');
