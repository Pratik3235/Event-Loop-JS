const delayLog = (msg, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(msg);
            resolve("done")
        }, delay)
    })
};

const delayejectedLog = (msg, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(msg);
            reject("You have to complete homework");
        }, delay)
    })
};

async function displayLogs() {
   try {
        console.log("Script started");
        await delayLog("Waking up...", 2000);

       Promise.resolve().then(() => {
           console.log("Microtask: Checking calendar");
       })
       
       await delayLog("Ate breakfast", 2000);
       await delayLog("Went to work", 3000);
       await delayLog("Came home", 1000);
       await delayejectedLog("sleep", 1000);

       console.log("scipt ended");
    } catch (error) {
        console.log("⚠️ Error caught:", error);
        console.log("⛱️ Stayed home and relaxed.");
    };
}

displayLogs();