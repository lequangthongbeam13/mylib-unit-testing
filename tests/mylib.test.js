/**
 * mylib.test.js
 *
 * Unit tests for the mylib module, written with Mocha (test runner)
 * and Chai (assertion library, "expect" style).
 *
 * The tests import only mylib.js, never main.js, so they can be run
 * on their own with: npm test
 */

const { expect } = require("chai");
const { add, subtract, multiply, divide } = require("../src/mylib");

describe("mylib", () => {
  // Counts how many tests have finished. Used in the after() hook.
  let testsRun = 0;
  let startTime;

  // before() runs ONCE, before the first test in this describe block.
  before(() => {
    startTime = Date.now();
    console.log("    [before] Starting mylib test suite");
  });

  // afterEach() runs after every single test and updates the counter.
  afterEach(() => {
    testsRun++;
  });

  // after() runs ONCE, after the last test in this describe block.
  after(() => {
    const duration = Date.now() - startTime;
    console.log(`    [after] Finished ${testsRun} tests in ${duration} ms`);
  });

  describe("add()", () => {
    it("adds two positive numbers", () => {
      expect(add(2, 3)).to.equal(5);
    });

    it("adds a negative number", () => {
      expect(add(-2, 3)).to.equal(1);
    });

    it("adds decimal numbers (floating point)", () => {
      // 0.1 + 0.2 is 0.30000000000000004 in JavaScript,
      // so closeTo() is used instead of equal().
      expect(add(0.1, 0.2)).to.be.closeTo(0.3, 1e-10);
    });
  });

  describe("subtract()", () => {
    it("subtracts two positive numbers", () => {
      expect(subtract(5, 3)).to.equal(2);
    });

    it("returns a negative result when b is larger than a", () => {
      expect(subtract(3, 5)).to.equal(-2);
    });
  });

  describe("multiply()", () => {
    it("multiplies two positive numbers", () => {
      expect(multiply(4, 3)).to.equal(12);
    });

    it("returns 0 when one of the numbers is 0", () => {
      expect(multiply(4, 0)).to.equal(0);
    });

    it("multiplies two negative numbers into a positive result", () => {
      expect(multiply(-4, -3)).to.equal(12);
    });
  });

  describe("divide()", () => {
    it("divides two numbers", () => {
      expect(divide(6, 3)).to.equal(2);
    });

    it("returns a decimal result", () => {
      expect(divide(1, 4)).to.equal(0.25);
    });

    it("throws an error when dividing by zero", () => {
      // The function is wrapped in an arrow function. If divide(6, 0)
      // were called directly, the error would be thrown before
      // expect() could catch it, and the test would crash.
      expect(() => divide(6, 0)).to.throw("ZeroDivision");
    });
  });
});
