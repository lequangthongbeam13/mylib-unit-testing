/**
 * mylib.js
 *
 * A small library with the four basic arithmetic operations.
 * Each function takes two numbers and returns the result.
 * The functions are exported with module.exports (CommonJS), so both
 * the main program and the unit tests can import them with require().
 */

/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first number.
 * @param {number} a - The number to subtract from.
 * @param {number} b - The number to subtract.
 * @returns {number} The difference a - b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second number.
 * JavaScript does not stop on division by zero. It returns Infinity
 * (or NaN for 0 / 0) instead. To make the error visible, this function
 * throws an Error when the divisor is 0.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient a / b.
 * @throws {Error} If b is 0 ("ZeroDivision").
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("ZeroDivision: cannot divide by zero");
  }
  return a / b;
}

// Export the functions so other files can use them.
module.exports = { add, subtract, multiply, divide };
