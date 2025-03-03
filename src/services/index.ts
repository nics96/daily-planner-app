import { Task } from '../types';

let tasks: Task[] = [];

export const addTask = (task: Task): void => {
    tasks.push(task);
};

export const removeTask = (taskId: string): void => {
    tasks = tasks.filter(task => task.id !== taskId);
};

export const fetchTasks = (): Task[] => {
    return tasks;
};