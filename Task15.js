// Task 15: Command-Line Task Logger — Node Modules — Types, Core/Local Modules & Import-Export
//
// This task is split across two files as required: a local module and the file
// that imports it. Both are included below since the task must be self-contained.
//
// ---- File: taskModule.js (the local module) ----
//
// const fs = require('fs');
// const fsPromises = fs.promises;
//
// function saveTaskCallback(task, callback) {
//     fs.appendFile('tasks.txt', task + '\n', callback);
// }
//
// function saveTaskPromise(task) {
//     return fsPromises.appendFile('tasks.txt', task + '\n');
// }
//
// module.exports = { saveTaskCallback, saveTaskPromise };
//
// ---- File: Task15.js (this file — imports and uses the local module) ----

const taskModule = require('./taskModule');

taskModule.saveTaskCallback('Task saved via local module (callback)', (err) => {
    if (err) {
        console.log("Error:", err.message);
    } else {
        console.log("Saved using local module's callback function.");
    }
});

taskModule.saveTaskPromise('Task saved via local module (Promise)')
    .then(() => console.log("Saved using local module's Promise function."))
    .catch((err) => console.log("Error:", err.message));

// Core module example for contrast: 'fs' (built into Node, no install needed).
// Local module example: './taskModule' (written for this project, imported by path).
// Third-party module example: 'express' (installed via npm, would appear in node_modules).

// Expected console output:
// Saved using local module's callback function.
// Saved using local module's Promise function.
