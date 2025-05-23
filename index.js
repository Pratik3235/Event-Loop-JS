// As we all Know javascript is a synchronous high level language which works line by line .
// but javascript is also able to handle asynchonous tasks
// today we will learn how javascript handle asynchroous operations and how it is done using event loops in both browser and node.js environment


// first what are the asynchronous tasks in javascript
// in javascript we have operations such as
// 1) promices 2)async await 3)timers such as setTimeout setInterval those are the time taking tasks present in javascript

// now let's start with timers first with a simple example

console.log("execttion order")
console.log("execute first ");

setTimeout(() => {
    console.log("executes second")
},2000);

console.log("executes third"); 

let interver = setInterval(() => {
    console.log("executes forth")
},2000);

setTimeout(() => {
    clearInterval(interver);
}, 2000);


console.log("executes fifth");


// output
// execttion order
// execute first 
// executes third
// executes fifth
// executes second
// executes forth

// timers such as setTimeout and setInteval ae the time taking tasks with a cetain time delay povided to timers so it will execute after that delay
// and it will be determined by the event loop when those tasks are going to be executed .
// it will take to execute our line of code but there are certain tasks we don't know how much time it will take to execute those tasks .