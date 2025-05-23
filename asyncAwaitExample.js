let uri = "https://jsonplaceholder.typicode.com/todos";
async function fetchData() {
    console.log("execution starts")
    let data = await fetch(uri);
    let result = await data.json();
    result.map((el) => (console.log(el.title)));
    console.log("complete execution")
}
fetchData();

// now this is looking grate and understandable compare to promise chaining 
// this helps us to understand the lines which are execution and how it will execute  