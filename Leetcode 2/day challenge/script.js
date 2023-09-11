// function createHelloWorld() {
//     return () => "Hello World!";
// }

// // Creating a new function that always returns "Hello world"
// const sayHello = createHelloWorld();

// // Calling the new function
// console.log(sayHello());    // Output: "Hello word"

// //-------------------------------------------------------------------------------------------------
// // Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// // function createCounter(n) {
// //     return () => n++;
// // }

// // //Create a counter starting from 5
// // const myCounter = createCounter(5);

// // // Call the counter function multiple times to see the values increment
// // console.log(myCounter());   //Output: 5
// // console.log(myCounter());   //Output: 6
// // console.log(myCounter());   //Output: 7



// //-------------------------------------------------------------------------------------------------
// //Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// //toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// //notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// function expect(val) {
//     return {
//         toBe: function (expected) {
//             if (val === expected) {
//                 return (true);
//             } else {
//                 throw new Error("Not Equal");
//             }
//         },
//         notToBe: function (expected) {
//             if (val !== expected) {
//                 return (true);
//             } else {
//                 throw new Error("Equal");
//             }
//         },
//     };
// }

// // Example usage:
// const result1 = expect(5).toBe(5);         // {"value":true}
// const result2 = expect("hello").notToBe("world"); // {"value":true}




// //-------------------------------------------------------------------------------------------------
// //Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// //The three functions are:
// //increment() increases the current value by 1 and then returns it.
// //decrement() reduces the current value by 1 and then returns it.
// //reset() sets the current value to init and then returns it.

// function createCounter(init) {
//     let count = init;

//     return {
//         increment(){
//             return ++count;
//         },
//         decrement(){
//             return --count;
//         },
//         reset(){
//             count = init;
//             return count;
//         }
//     };
// }
// // Example usage:
// const counter = createCounter(0);

// console.log(counter.increment());   // Output: 1
// console.log(counter.increment());   // Output: 2
// console.log(counter.increment());   // Output: 3
// console.log(counter.decrement());   // Output: 2
// console.log(counter.reset());       // Output: 0



// //-------------------------------------------------------------------------------------------------
// // Write a function argumentsLength that returns the count of arguments passed to it.

// function argumentsLength() {
//     return arguments.length;
//   }
  
//   // Example usage:
//   console.log(argumentsLength(5)); // Output: 1
//   console.log(argumentsLength(1, 2, 3, 'a', 'b')); // Output: 5

  

// //-------------------------------------------------------------------------------------------------
// //Given an object or an array, return if it is empty.
// // An empty object contains no key-value pairs.
// // An empty array contains no elements.
// // You may assume the object or array is the output of JSON.parse.

// function isEmpty(obj) {
//     if (Array.isArray(obj)) {
//       return obj.length === 0;
//     } else if (typeof obj === 'object' && obj !== null) {
//       return Object.keys(obj).length === 0;
//     }
//     return false;
//   }
  
//   // Example usage:
//   console.log(isEmpty({"x": 5, "y": 42})); // Output: false
//   console.log(isEmpty({})); // Output: true
//   console.log(isEmpty([null, false, 0])); // Output: false
  


// //-------------------------------------------------------------------------------------------------
// // Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
// // You may assume the array is the output of JSON.parse.

// // Define the last method on Array.prototype

// Array.prototype.last = function() {
//     if (this.length === 0) {
//       return -1; // Return -1 for an empty array
//     } else {
//       return this[this.length - 1]; // Return the last element for non-empty arrays
//     }
//   };
  
//   // Example usage:
//   const nums1 = [null, {}, 3];
//   console.log(nums1.last()); // Output: 3
  
//   const nums2 = [];
//   console.log(nums2.last()); // Output: -1
  



// //-------------------------------------------------------------------------------------------------
// // Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
// // When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// // When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

// class ArrayWrapper {
//     constructor(arr) {
//       this.arr = arr;
//     }
  
//     // Define the addition operator for two ArrayWrapper instances
//     add(other) {
//       if (other instanceof ArrayWrapper) {
//         const combinedArray = this.arr.concat(other.arr);
//         return combinedArray.reduce((sum, num) => sum + num, 0);
//       } else {
//         throw new Error("Unsupported operation");
//       }
//     }
  
//     // Define the String() function to return a formatted string
//     toString() {
//       return "[" + this.arr.join(",") + "]";
//     }
//   }
  
//   // Example usage:
//   const nums1 = new ArrayWrapper[[1, 2]];
//   const nums2 = new ArrayWrapper[[3, 4]];
  
//   const operation = "Add"; // or "String"
  
//   if (operation === "Add") {
//     const result = nums1.add(nums2);
//     console.log(result); // Output: 10
//   } else if (operation === "String") {
//     const result = String(nums1);
//     console.log(result); // Output: "[1,2]"
//   }
  





// //-------------------------------------------------------------------------------------------------
// // Sign of the Product of an Array
// // There is a function signFunc(x) that returns:
// // 1 if x is positive.
// // -1 if x is negative.
// // 0 if x is equal to 0.
// // You are given an integer array nums. Let product be the product of all values in the array nums.
// // Return signFunc(product).

 

//   // Define the signFunc function
// function signFunc(x) {
//     if (x > 0) {
//       return 1;
//     } else if (x < 0) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }
  
//   // Define the function that returns the sign of the product of an array
//   function arraySign(nums) {
//     // Initialize the product to 1
//     let product = 1;
//     // Loop through the array and multiply the product by each element
//     for (let num of nums) {
//       product *= num;
//     }
//     // Return the sign of the product
//     return signFunc(product);
//   }
  



//-------------------------------------------------------------------------------------------------
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

// function map(arr, fn) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(fn(arr[i], i));
//   }
//   return result;
// }

// // Example 1:
// const arr1 = [1, 2, 3];
// function plusOne(n) {
//   return n + 1;
// }
// const output1 = map(arr1, plusOne);
// console.log(output1); // Output: [2, 3, 4]

// // Example 2:
// const arr2 = [1, 2, 3];
// function plusI(n, i) {
//   return n + i;
// }
// const output2 = map(arr2, plusI);
// console.log(output2); // Output: [1, 3, 5]

// // Example 3:
// const arr3 = [10, 20, 30];
// function constant() {
//   return 42;
// }
// const output3 = map(arr3, constant);
// console.log(output3); // Output: [42, 42, 42]

// // ------------------------------------------------------------------------------
// function map(arr, fn) {
//   const result = new Array(arr.length);
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = fn(arr[i], i);
//   }
//   return result;
// }

// // Example 1:
// const arr1 = [1, 2, 3];
// function plusOne(n) {
//   return n + 1;
// }
// const output1 = map(arr1, plusOne);
// console.log(output1); // Output: [2, 3, 4]

// // Example 2:
// const arr2 = [1, 2, 3];
// function plusI(n, i) {
//   return n + i;
// }
// const output2 = map(arr2, plusI);
// console.log(output2); // Output: [1, 3, 5]

// // Example 3:
// const arr3 = [10, 20, 30];
// function constant() {
//   return 42;
// }
// const output3 = map(arr3, constant);
// console.log(output3); // Output: [42, 42, 42]


// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.



function customFilter(arr, fn) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

// Example:
const arr = [1, 2, 3, 4, 5];

// Define a filtering function
function filterFn(element, index) {
  // Filter out even numbers or elements at even indices
  return element % 2 !== 0 && index % 2 === 0;
}

// Use the custom filter function
const filteredArr = customFilter(arr, filterFn);
console.log(filteredArr); // Output: [1, 3, 5]
