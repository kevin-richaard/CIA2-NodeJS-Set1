// Local module used by Task15.js
const fs = require('fs');
const fsPromises = fs.promises;

function saveTaskCallback(task, callback) {
    fs.appendFile('tasks.txt', task + '\n', callback);
}

function saveTaskPromise(task) {
    return fsPromises.appendFile('tasks.txt', task + '\n');
}

module.exports = { saveTaskCallback, saveTaskPromise };
