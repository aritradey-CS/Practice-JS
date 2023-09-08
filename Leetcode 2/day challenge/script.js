function createHelloWorld() {
    return () => "Hello World!";
}

// Creating a new function that always returns "Hello world"
const sayHello = createHelloWorld();

// Calling the new function
console.log(sayHello());    // Output: "Hello word"

//-------------------------------------------------------------------------------------------------
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// function createCounter(n) {
//     return () => n++;
// }

// //Create a counter starting from 5
// const myCounter = createCounter(5);

// // Call the counter function multiple times to see the values increment
// console.log(myCounter());   //Output: 5
// console.log(myCounter());   //Output: 6
// console.log(myCounter());   //Output: 7



//-------------------------------------------------------------------------------------------------
//Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
//toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

function expect(val) {
    return {
        toBe: function (expected) {
            if (val === expected) {
                return (true);
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (expected) {
            if (val !== expected) {
                return (true);
            } else {
                throw new Error("Equal");
            }
        },
    };
}

// Example usage:
const result1 = expect(5).toBe(5);         // {"value":true}
const result2 = expect("hello").notToBe("world"); // {"value":true}




//-------------------------------------------------------------------------------------------------
//Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
//The three functions are:
//increment() increases the current value by 1 and then returns it.
//decrement() reduces the current value by 1 and then returns it.
//reset() sets the current value to init and then returns it.

function createCounter(init) {
    let count = init;

    return {
        increment(){
            return ++count;
        },
        decrement(){
            return --count;
        },
        reset(){
            count = init;
            return count;
        }
    };
}
// Example usage:
const counter = createCounter(0);

console.log(counter.increment());   // Output: 1
console.log(counter.increment());   // Output: 2
console.log(counter.increment());   // Output: 3
console.log(counter.decrement());   // Output: 2
console.log(counter.reset());       // Output: 0



//-------------------------------------------------------------------------------------------------
// Write a function argumentsLength that returns the count of arguments passed to it.

function argumentsLength() {
    return arguments.length;
  }
  
  // Example usage:
  console.log(argumentsLength(5)); // Output: 1
  console.log(argumentsLength(1, 2, 3, 'a', 'b')); // Output: 5
  