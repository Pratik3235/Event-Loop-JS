let uri = "https://jsonplaceholder.typicode.com/todos";
// fetch() is a method which internally returns a promise
console.log("Fetching data...")
fetch(uri)
    .then((data) => (data.json()))
    .then((el) => { el.map((items) => (console.log(items.title))) })
    .then(() => (console.log("data fetched succesfully")))
    .catch((err) => {
        console.log(err);
    });

// This is prmise chaiining which helps us to perform work
// but looking at this it is Still looking very much painful and little bit un understandable
// To solve this we problame where code is un understandable we have a new solution i.e. async await