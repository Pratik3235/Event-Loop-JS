console.log("executing...")

const interval=setInterval(() => {
    console.log("executes after every 2000 miliseconds or 2 seconds")
    clearInterval(interval);
}, 2000);

console.log("done...");