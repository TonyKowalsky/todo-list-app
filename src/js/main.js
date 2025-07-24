import { renderTasks } from "./render.js";
import { tasksListHandler, selectorHandler, formHandler } from "./handlers.js";

const form = document.querySelector('.todo-form');
const tasksList = document.querySelector('.task-list');
const selector = document.querySelector('select');

tasksList.addEventListener('click', tasksListHandler);

selector.addEventListener('change', selectorHandler);

form.addEventListener('submit', formHandler);

renderTasks();