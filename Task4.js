// Task 4: Command-Line Task Logger — NodeJS REPL Introduction

// Snippet tested in the Node.js REPL first:
//   > new Date().toISOString()
//   '2026-08-27T10:15:32.123Z'
// The working snippet is moved here so every logged task carries a timestamp.

function logTaskWithTimestamp(taskName) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Task logged: ${taskName}`);
}

logTaskWithTimestamp("Finish CIA-2 practical submission");

// Expected console output (timestamp value will vary by run time):
// [2026-08-27T10:15:32.123Z] Task logged: Finish CIA-2 practical submission
