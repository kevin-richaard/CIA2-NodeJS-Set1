// Task 10: Command-Line Task Logger — JavaScript Promises — Introduction, Detail & Revisited

const fsPromises = require('fs').promises;

// Promise-based rewrite of Task 8's saveTaskCallback.
function saveTaskPromise(task) {
    return fsPromises.appendFile('tasks.txt', task + '\n');
}

saveTaskPromise('Update project README')
    .then(() => {
        console.log("Task saved successfully via Promise.");
    })
    .catch((err) => {
        console.log("Task not saved — error:", err.message);
    });

// Expected console output:
// Task saved successfully via Promise.
