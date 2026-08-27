// Task 9: Command-Line Task Logger — Node Timers & Global Objects

// Logs a one-time reminder 5 seconds after the app starts.
setTimeout(() => {
    console.log("Reminder: review your tasks");
}, 5000);

// Prints a running count of "tasks logged" every 3 seconds.
let loggedCount = 0;
const counterId = setInterval(() => {
    loggedCount++;
    console.log(`Tasks logged so far: ${loggedCount}`);
}, 3000);

// Stops the interval after 15 seconds so the process can exit cleanly.
setTimeout(() => {
    clearInterval(counterId);
    console.log("Counter stopped.");
}, 15000);

// Expected console output (approximate timing):
// Tasks logged so far: 1        (at ~3s)
// Tasks logged so far: 2        (at ~6s)
// Reminder: review your tasks   (at ~5s, may interleave with above)
// Tasks logged so far: 3        (at ~9s)
// Tasks logged so far: 4        (at ~12s)
// Counter stopped.              (at ~15s)
