import { loadTasks } from "./storage.js";

/**
 * Application state object that holds the current list of tasks and the active filter state.
 *
 * @property {Array<Object>} tasks - Array of task objects loaded from localStorage.
 *    Each task object has properties `id`, `taskName`, and `completed`.
 * @property {string} showState - Current filter applied to the task list; possible values include:
 *    'All tasks', 'Completed tasks', 'Tasks in progress'.
 */
export const state = {
    tasks: loadTasks(),
    showState: 'All tasks',
};