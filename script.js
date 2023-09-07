// Declare a variable
var greeting ="Hello, Everyone!";

// Define a function
function sayHello() {
    console.log(greeting);
}

// Call a function
sayHello();


// ________________________________________________________________
// create an array
var fruits = ["apple", "orange", "Banana"];

// Access elements in the array
console.log(fruits[0]);

// Add an element to the end of the array
fruits.push("cherry");
console.log(fruits);

// Loop through the array
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// ________________________________________________________________
// Declare a variable
var age = 28;

// Use an if statement
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// ________________________________________________________________
// Use a for loop to print numbers from 1 to 10
for (var i = 1; i <=10; i++) {
    console.log(i);
}

// Use a while loop to count from 10 to 1
var count = 10;
while (count > 0) {
    console.log(count);
    count--;
}

// ________________________________________________________________
// Define a function with parameters
function addNumber(a,b) {
    return a+b;
}

// Call the function with arguments
var result = addNumber(5,3);
console.log("Sum:", result); // Output

// ________________________________________________________________
// Create an object
var person = {
    firstName : "Aritra",
    lastName: "Dey",
age: 24,
};


// Access object properties
console.log("Name:", person.firstName, person.lastName);
console.log("age:", person.age);

// ________________________________________________________________
// Use setTimeout to delay execution
console.log("Start");
setTimeout(function() {
    console.log("Delayed message");
},2000); //Delay for 2 second
console.log("End");

// ________________________________________________________________
// Using forEach in JavaScript

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

numbers.forEach((number) => {
    console.log(number);
});