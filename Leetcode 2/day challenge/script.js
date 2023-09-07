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



//-------------------------------------------------------------------------------------------------
//Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
//toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

function expect(value) {
    return {
        toBe: function (expected){
            if (value === expected) {
                return { value: true };
            }else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected){
            if (value !== expected) {
                return value !== expected;

            }
        }
    };
}

// Example usage:

const result1 = expect(5).toBe(5);      //true because 5 === 5
const result2 = expect("hello").notToBe("world");   //true because "hello" !== "world"
const result3 = expect(5).toBe(null);      //true because 5 === 5

console.log(result1);
console.log(result2);
console.log(result3);
