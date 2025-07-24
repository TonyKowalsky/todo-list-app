# YeaPlanner

A simple, lightweight TODO list web application YeaPlanner built with plain JavaScript, HTML, and CSS.
YeaPlanner is available at https://tonykowalsky.github.io/todo-list-app/

## Description

This app allows you to keep track of your tasks easily:
- Add new tasks
- Mark tasks as completed or not
- Delete tasks
- Filter tasks by status: all, completed, or in progress
- Tasks are saved in your browser's localStorage — so your list stays even after refreshing the page!

The app includes input validation and safe rendering to prevent HTML injection.

## Features

- Add tasks with a name
- Toggle tasks complete/incomplete
- Delete tasks from the list
- Filter to view all tasks, only completed, or only tasks in progress
- Displays counts of total and completed tasks
- Shows a "no tasks" message when the list is empty
- Data persistence via localStorage

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Browser LocalStorage API

## Installation and Running

1. Clone this repository:
https://github.com/TonyKowalsky/todo-list-app.git

2. Open the `index.html` file in your web browser by double-clicking it.

3. Alternatively, use a local server for better ES6 modules support:
- With VS Code: use the Live Server extension.
- Or from terminal (if Node.js installed):
  ```
  npx http-server
  ```
- Then open `http://localhost:8080` in your browser.

## Usage

- Type a task name in the input field.
- Press Enter or click "Add" to create a new task.
- Click a task's checkbox to mark it complete or incomplete.
- Click the trash icon to delete a specific task.
- Use the dropdown filter to view tasks by their status.
- The counts of total and completed tasks update automatically.

## Future Improvements

- Add task editing feature.
- Add dark and bright themes.
- Add drag-and-drop feature fo task list.

## License

This project is licensed under the MIT License.

---

Author: Anton Kovalev 
Email: antonkovalev@mail.ru 
GitHub: [TonyKowalsky](https://github.com/TonyKowalsky)
