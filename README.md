# CIA-2 Practical Submission — Node.js & Asynchronous JavaScript

**Course:** Node & Express JS | **Semester:** 5th | **Assessment:** CIA-2 (Practical)
**Institution:** Christ University | **Conducted by:** L&T EduTech

## Assigned Set
Practical Set 1 (Command-Line Task Logger)

## Attempted Tasks
Task 1, Task 2, Task 4, Task 8, Task 9, Task 10, Task 11, Task 13, Task 14, Task 15
(10 of 15, 2 marks each — 20 marks total)

## Structure
Each attempted task is implemented as its own self-contained file under `Set1/`,
runnable independently with `node Set1/TaskN.js`:

- `Task1.js` — Node.js setup, entry file
- `Task2.js` — V8/libuv explanation, non-blocking fs.readFile demo
- `Task4.js` — REPL Date snippet moved into a timestamp logger
- `Task8.js` — saveTaskCallback using fs.appendFile error-first callback
- `Task9.js` — setTimeout reminder + setInterval counter with clearInterval
- `Task10.js` — saveTaskPromise, Promise-based rewrite of Task 8
- `Task11.js` — saveTaskAsync using async/await + try/catch, with a deliberate failure case
- `Task13.js` — sync log / Promise / setTimeout event loop ordering demo
- `Task14.js` — EventEmitter (`taskEmitter`) emitting a `taskAdded` event
- `Task15.js` — local module (`taskModule.js`) exporting save functions, imported here
- `taskModule.js` — the local module used by Task15.js

## Running
Each file can be run on its own:
```bash
node Set1/Task1.js
node Set1/Task2.js
# ...etc
```
`Task9.js` runs for ~15 seconds (timers) before completing.
`Task15.js` requires `taskModule.js` to be present in the same folder.

## Notes
Expected console output is included as a comment at the bottom of each task file.
