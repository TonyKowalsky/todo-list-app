import { state } from "./state.js";
import { saveTasks } from "./storage.js";
import { renderTasks } from "./render.js";
import { createTask } from "./utils.js";

const input = document.querySelector('.todo-input');

/**
 * Handles click events on the tasks list, managing task completion toggling and deletion.
 *
 * This function uses event delegation to:
 * - Detect when a checkbox (`<input>`) within a task item is clicked, toggling the task's completed status.
 * - Detect when the trash-bin icon is clicked, removing the corresponding task from the state.
 *
 * After updates, it saves the modified tasks array to localStorage and re-renders the task list.
 *
 * @param {Event} e - The click event object.
 */
export function tasksListHandler(e) {
    const li = e.target.closest('li');
    if (!li) return;
    const taskId = Number(li.dataset.id);
    const task = state.tasks.find(({ id }) => id === taskId);
    if (e.target.tagName === 'INPUT') {
        task.completed = !task.completed;
        saveTasks(state.tasks);
        renderTasks();
    }
    if (e.target.classList.contains('trash-bin')) {
        state.tasks = state.tasks.filter(({ id }) => id !== task.id);
        saveTasks(state.tasks);
        renderTasks();
    }
};

/**
 * Handles form input and submit events:
 * - Prevents default form submission behavior.
 * - Checks validity of the input text; if empty or only whitespace, shows an alert and clears the input.
 * - If valid, creates a new task object, adds it to the application state,
 *   saves the updated tasks list to localStorage, and re-renders the task list.
 * - Clears the input field and sets focus back on it for user convenience.
 * 
 * @param {Event} e - The submit event object.
 */
export function formHandler(e) {
    e.preventDefault();
    if (!input.value.trim().length) {
        alert ('Empty tasks are not allowed!');
        input.value='';
        return;
    }
    const newTask = createTask(input.value);
    state.tasks.push(newTask);
    saveTasks(state.tasks);
    renderTasks();
    input.value='';
    input.focus();
};


/**
 * Handles changes in the task filter selector.
 *
 * Updates the application's state to reflect the selected filter option
 * (e.g., 'All tasks', 'Completed tasks', 'Tasks in progress'), then re-renders 
 * the task list according to the new filter.
 *
 * @param {Event} e - The change event object triggered by selecting a filter option.
 */
export function selectorHandler(e) {
    state.showState = e.target.value;
    renderTasks();
};