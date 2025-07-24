import { state } from "./state.js";
import { escapeHTML } from "./utils.js";


/**
 * Renders the count of total and completed tasks in the DOM.
 *
 * Updates the inner HTML of elements with class 'total' and 'completed' 
 * to display the respective counts based on the provided tasks array.
 *
 * @param {Array<Object>} tasks - Array of task objects. Each task should have a boolean `completed` property.
 */
export function renderTasksCount(tasks) {
    const totalTasksCountElement = document.querySelector('span.total');
    const completedTasksCountElement = document.querySelector('span.completed');
    const totalTasksCount = tasks.length;
    const completedTasksCount = tasks.filter(({ completed }) => completed).length;
    totalTasksCountElement.innerHTML = `<span>Total tasks: ${totalTasksCount}</span>`;
    completedTasksCountElement.innerHTML = `<span>Completed tasks: ${completedTasksCount} of ${totalTasksCount}</span>`;
};


/**
 * Shows or hides the "no tasks" sign based on the number of tasks.
 *
 * If the tasks array is empty, removes the 'invisible' class from the element 
 * with the class '.no-tasks' to make it visible. Otherwise, adds the 'invisible' 
 * class to hide the sign.
 *
 * @param {Array<Object>} tasks - Array of task objects.
 */
export function renderNoTasksSign(tasks) {
    const noTasksSign = document.querySelector('.no-tasks');
    if (tasks.length === 0) {
        noTasksSign.classList.remove('invisible');
    } else {
        noTasksSign.classList.add('invisible');
    }
};

/**
 * Generates an HTML string for a single task item.
 *
 * The task item includes a checkbox indicating completion status, 
 * the escaped task name to prevent XSS, and a trash-bin icon for deletion.
 *
 * @param {Object} task - Task object to render.
 * @param {number|string} task.id - Unique identifier of the task.
 * @param {string} task.taskName - The name/text of the task.
 * @param {boolean} task.completed - Completion status of the task.
 * @returns {string} HTML markup string representing the task item.
 */
export function renderTask(task) {
    return `
    <li data-id="${task.id}" class="task-item ${task.completed ? "completed" : ""}">
        <div>
            <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}>
            <span class="task-name">${escapeHTML(task.taskName)}</span>
        </div>
        <img class="trash-bin" src="src/images/delete.svg" alt="Delete">
    </li>
    `;
};

/**
 * Renders the list of tasks based on the current filter state and updates the UI accordingly.
 *
 * This function:
 * - Filters tasks from the global `state.tasks` array according to the current `state.showState` value:
 *   'Completed tasks', 'Tasks in progress', or 'All tasks' (default).
 * - Updates the visibility of the "no tasks" sign depending on whether there are tasks to show.
 * - Updates the count of total and completed tasks.
 * - Renders the filtered tasks into the task list container as HTML.
 * - Sets the focus back to the task input field to improve user experience.
 *
 * @example
 * // Assuming `state.showState = 'Completed tasks'` and `state.tasks` contains tasks,
 * // this will render only completed tasks in the UI.
 * renderTasks();
 */
export function renderTasks() {
    const input = document.querySelector('.todo-input');
    const tasksList = document.querySelector('.task-list');
    let tasksToRender;
    switch (state.showState) {
        case 'Completed tasks':
            tasksToRender = state.tasks.filter(({ completed }) => completed);
            break;
        case 'Tasks in progress':
            tasksToRender = state.tasks.filter(({ completed }) => !completed);
            break;
        default:
            tasksToRender = state.tasks;
    }
    renderNoTasksSign(tasksToRender);
    renderTasksCount(tasksToRender);
    tasksList.innerHTML = tasksToRender.map(renderTask).join('');
    input.focus();
};