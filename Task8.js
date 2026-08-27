// Task 8: Command-Line Task Logger — Asynchronous Programming & Callback Functions

const fs = require('fs');

// Appends a task to tasks.txt using an error-first callback.
function saveTaskCallback(task, callback) {
    fs.appendFile('tasks.txt', task + '\n', (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}

saveTaskCallback('Review pull request comments', (err) => {
    if (err) {
        console.log("Task not saved — error:", err.message);
    } else {
        console.log("Task saved successfully via callback.");
    }
});

// Expected console output:
// Task saved successfully via callback.
