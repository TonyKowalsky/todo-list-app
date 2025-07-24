/**
 * Saves the array of tasks to localStorage as a JSON string.
 *
 * @param {Array<Object>} tasks - Array of task objects to be saved.
 * Each task object includes properties `id`, `taskName`, and `completed`.
 *
 * @throws Will show an alert if saving to localStorage fails (e.g., storage quota exceeded).
 */
export function saveTasks(tasks) {
    try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch(error) {
        alert(`Saving tasks error:  ${error.name}`);
    }
};

/**
 * Loads the array of tasks from localStorage.
 *
 * Attempts to retrieve the 'tasks' item from localStorage and parse it from JSON.
 * Returns the parsed array of tasks if available, or an empty array if no tasks are stored.
 * If an error occurs during retrieval or parsing, shows an alert and returns undefined.
 *
 * @returns {Array<Object>|undefined} The array of task objects loaded from localStorage,
 * or an empty array if no tasks exist. Returns undefined if loading fails due to an error.
 *
 * @throws Will show an alert if loading from localStorage or JSON parsing fails.
 */
export function loadTasks() {
    try {
        const tasksJSON = localStorage.getItem('tasks');
        return tasksJSON ? JSON.parse(tasksJSON) : [];
    } catch(error) {
        alert(`Loading tasks error: ${error.name}`);
    }
};