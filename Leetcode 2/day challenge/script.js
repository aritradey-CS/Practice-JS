function createHelloWorld() {
    return () => "Hello World!";
}

// Creating a new function that always returns "Hello world"
const sayHello = createHelloWorld();

// Calling the new function
console.log(sayHello());    // Output: "Hello word"

//-------------------------------------------------------------------------------------------------
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function createCounter(n) {
    return () => n++;
}

//Create a counter starting from 5
const myCounter = createCounter(5);

// Call the counter function multiple times to see the values increment
console.log(myCounter());   //Output: 5
console.log(myCounter());   //Output: 6
console.log(myCounter());   //Output: 7
