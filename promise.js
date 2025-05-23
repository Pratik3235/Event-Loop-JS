
console.log("executes first");

let newPromise = new Promise((res, rej) => {
    let check = true;
    if (check) {
        console.log("resloving the promice");
        res("Resolved");
    } else {
        console.log("Rejected");
        rej("Error in resolving...");
    }
});

console.log("done...")