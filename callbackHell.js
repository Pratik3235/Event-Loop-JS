function wakeUp(callback,delay) {
    console.log("Wakeup in morining 5 o'clock");
    setTimeout(() => {
        callback();
    },delay)
};

function breakfast(callback,delay) {
    console.log("Eat early breakfast at 8 in morning")
     setTimeout(() => {
        callback();
    },delay)
}

function work(callback,delay) {
    console.log("wrok from 9 to 7 till evening");
     setTimeout(() => {
        callback();
    },delay)
}

function sleep() {
    console.log("sleep at 10 night");
}

setTimeout(() => {
    wakeUp(() => {
        breakfast(() => {
            work(() => {
                sleep();
            }, 1000)
        }, 3000)
    }, 2000)
}, 3000);

// This is an example of callback hell, also known as the "pyramid of doom".
// It occurs when asynchronous tasks are nested inside each other as callbacks,
// making the code deeply indented, hard to read, and difficult to manage.
//
// Callback hell happens when we perform multiple async operations
// one after another, each depending on the previous one.
// To solve this problem, JavaScript introduced Promises.
// Promises allow us to write asynchronous code in a cleaner, more readable way,
// often avoiding nested callbacks and making the flow easier to follow.
//
// Even better, with async/await (introduced in ES2017), we can write asynchronous
// code that looks like synchronous, line-by-line code.
