// Task 11: Command-Line Task Logger — Try/Catch Error Handling & Async-Await Concepts

const fsPromises = require('fs').promises;

// Promise-based helper (same shape as Task 10), with an optional file path
// so the failure case below can point it somewhere invalid.
function saveTaskPromise(task, filePath = 'tasks.txt') {
    return fsPromises.appendFile(filePath, task + '\n');
}

async function saveTaskAsync(task) {
    try {
        await saveTaskPromise(task);
        console.log("Task saved successfully via async/await.");
    } catch (error) {
        console.log("Caught error in saveTaskAsync:", error.message);
    }
}

saveTaskAsync('Prepare CIA-2 GitHub link');

// Deliberately points to a folder that does not exist, to prove the catch block fires.
async function triggerSaveError() {
    try {
        await saveTaskPromise('This save is expected to fail', './missing_folder/tasks.txt');
    } catch (error) {
        console.log("Expected failure — catch block fired correctly:", error.message);
    }
}

triggerSaveError();

// Expected console output (the failing write resolves first — appendFile on a
// missing directory fails immediately, while the valid write briefly touches disk):
// Expected failure — catch block fired correctly: ENOENT: no such file or directory, open './missing_folder/tasks.txt'
// Task saved successfully via async/await.
