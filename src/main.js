/**
 * main.js
 *
 * A simple main program that imports the mylib module and runs
 * every function in it. The output is printed to the console so
 * the user can check that the library works.
 *
 * Run with: npm start   (or: node src/main.js)
 */

// Import the four functions from the library.
const { add, subtract, multiply, divide } = require("./mylib");

console.log("mylib demo");
console.log("add(12, 1)      =", add(12, 1));
console.log("subtract(7, 3) =", subtract(7, 3));
console.log("multiply(5, 2) =", multiply(5, 2));
console.log("divide(12, 4)   =", divide(12, 4));

// Division by zero throws an error, so it is wrapped in try...catch.
// Without try...catch the program would stop here.
try {
  divide(6, 0);
} catch (error) {
  console.log("divide(6, 0)   -> error:", error.message);
}
