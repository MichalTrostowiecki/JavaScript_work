/*jshint esversion: 8 */

const calculator = require("./calculator");

test("Testing calculator function", () => {
  const newCalculator = calculator();
  expect(newCalculator.add(3, 3)).toBe(6);
});

test("Testing calculator function", () => {
  const newCalculator = calculator();
  expect(newCalculator.subtract(3, 3)).toBe(0);
});

test("Testing calculator function", () => {
  const newCalculator = calculator();
  expect(newCalculator.divide(6, 3)).toBe(2);
});

test("Testing calculator function", () => {
  const newCalculator = calculator();
  expect(newCalculator.multiply(3, 3)).toBe(9);
});
