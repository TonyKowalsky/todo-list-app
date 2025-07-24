/**
 * Escapes special HTML characters in a string to prevent HTML injection (XSS).
 *
 * Replaces &, <, >, ", and ' characters with their corresponding HTML entities.
 * If the input is falsy (e.g., null, undefined, empty string), returns an empty string.
 *
 * @param {string} text - The input string to escape.
 * @returns {string} The escaped string safe for inserting into innerHTML.
 */
export function escapeHTML(text) {
  if (!text) return '';
  return text.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

/**
 * Creates a new task object.
 *
 * Generates a task with a unique `id` based on the current timestamp,
 * sets the task name, and marks it as not completed by default.
 *
 * @param {string} taskName - The name/text of the task.
 * @returns {Object} A new task object with properties:
 *   - `id` {number} Unique identifier for the task.
 *   - `taskName` {string} The name of the task.
 *   - `completed` {boolean} Completion status of the task, default is false.
 */
export function createTask(taskName) {
  return {
    id: Date.now(),
    taskName,
    completed: false,
  };
};