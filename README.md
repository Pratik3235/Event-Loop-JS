# 🌀 Understanding the JavaScript Event Loop

JavaScript is single-threaded, yet it's capable of handling asynchronous operations without blocking the main thread. This is possible due to the **Event Loop**, one of the most powerful and fundamental concepts in JavaScript.

---

## 📚 What is the Event Loop?

The Event Loop is a mechanism that allows JavaScript to perform **non-blocking I/O operations**, despite being single-threaded. It works with:
- **Call Stack**
- **Web APIs**
- **Callback (Macrotask) Queue**
- **Microtask Queue**

---

## 🔄 How it Works

1. JavaScript starts by executing code in the **call stack**.
2. If an asynchronous task (like `setTimeout` or `fetch`) is encountered, it's delegated to **Web APIs**.
3. Once the task is completed, its callback is placed in the appropriate **queue**:
   - **Microtask Queue** (higher priority)
   - **Callback Queue** (macrotasks)

4. The Event Loop:
   - Checks if the call stack is empty.
   - If yes, runs **all microtasks**.
   - Then runs **one macrotask**.
   - Repeats the process.

---

## 🧵 Microtask Queue vs Callback Queue

| Feature               | Microtask Queue                         | Callback Queue (Macrotask)            |
|----------------------|------------------------------------------|---------------------------------------|
| Priority             | Higher                                   | Lower                                 |
| Runs When            | Immediately after current task           | After microtasks are complete         |
| Examples             | `Promise.then`                           | `setTimeout`, `setInterval`,          |

---

## 📦 Example Code

```js
console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then");
});

console.log("End");

output:
Start
End
Microtask: Promise.then
Macrotask: setTimeout
