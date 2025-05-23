
console.log("start");

Promise.resolve("Issue in resolving").then(() => { console.log("resolvd") }).catch((err) => { console.log(err) });

console.log("end")