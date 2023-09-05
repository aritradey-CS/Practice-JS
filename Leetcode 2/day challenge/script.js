function createHelloWorld() {
    return () => "Hello World!";
}

// Creating a new function that always returns "Hello world"
const sayHello = createHelloWorld();

// Calling the new function
console.log(sayHello());    // Output: "Hello word"