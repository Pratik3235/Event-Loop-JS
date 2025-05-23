// in javascript we have macrotasks such as timers examples as setTimeout setIntervals

console.log("Execution start")

setTimeout(() => {
    console.log("This task will take 2 seconds to execute")
}, 2000)

console.log("Execution ends");

// here timers are executed after the execution of synchronous code that is how javascript works