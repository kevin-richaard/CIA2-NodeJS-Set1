// Task 2: Command-Line Task Logger — Understanding How Node.js Works & Node.js Architecture

/*
 * How V8 and libuv work together:
 * V8 is the JavaScript engine — it parses and runs synchronous code directly on the
 * main thread, one line at a time. When a line of code triggers something that
 * cannot finish instantly (reading a file, a timer, a network call), V8 hands that
 * operation off to libuv instead of waiting on it. Libuv runs the operation in the
 * background (using its own thread pool or the OS's async I/O), while V8 keeps
 * executing the rest of the synchronous code. Once libuv's background work finishes,
 * it does not interrupt V8 directly — it places the associated callback into a queue.
 * The event loop constantly checks whether the main call stack is empty, and only
 * then moves the next callback from that queue onto the stack for V8 to run. This
 * handoff is what lets Node stay single-threaded for JS execution while still
 * handling many I/O operations concurrently.
 */

const fs = require('fs');

fs.writeFileSync('dummy.txt', 'Sample file content for Task 2.');

// Non-blocking demonstration: this read is scheduled via libuv and its callback
// only runs once the current synchronous block below has finished.
fs.readFile('dummy.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("File contents:", data);
});

console.log("This line prints immediately — before the file contents above, " +
    "proving readFile did not block execution.");

// Expected console output (order matters):
// This line prints immediately — before the file contents above, proving readFile did not block execution.
// File contents: Sample file content for Task 2.
