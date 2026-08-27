// Task 13: Command-Line Task Logger — Callback Examples & the Event Loop, Job Queue

/*
 * Predicted order (written before running):
 *   1. "Start" — runs synchronously on the call stack first.
 *   2. "Promise resolved" — Promise callbacks go into the microtask queue,
 *      which the event loop always drains completely before touching the
 *      macrotask queue.
 *   3. "Timeout fired" — setTimeout callbacks go into the macrotask queue,
 *      so this runs last even with a 0ms delay.
 */

console.log("Start");

setTimeout(() => {
    console.log("Timeout fired");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise resolved");
});

/*
 * Confirmation after running:
 * The predicted order was correct — Start, then Promise resolved, then
 * Timeout fired. The synchronous log runs immediately; once the call
 * stack empties, the event loop fully drains the microtask queue (the
 * Promise callback) before it ever looks at the macrotask/timer queue.
 */

// Expected console output:
// Start
// Promise resolved
// Timeout fired
