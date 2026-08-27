// Task 14: Command-Line Task Logger — Recursive Functions, Event Loop Execution Flow & EventEmitter

const EventEmitter = require('events');
const fsPromises = require('fs').promises;

const taskEmitter = new EventEmitter();

taskEmitter.on('taskAdded', (task) => {
    console.log(`New task added: ${task}`);
});

async function saveTaskAsync(task) {
    try {
        await fsPromises.appendFile('tasks.txt', task + '\n');
        taskEmitter.emit('taskAdded', task);
    } catch (error) {
        console.log("Error saving task:", error.message);
    }
}

saveTaskAsync('Set up EventEmitter notifications');

// Expected console output:
// New task added: Set up EventEmitter notifications
