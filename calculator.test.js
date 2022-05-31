import Calculator from "./calculator";

// SUM TESTS
test("should add two integers 2+2=4", () => {
  expect(Calculator.add(2, 2)).toBe(4);
});

test("should add two negative integers -2+-5 = -7", () => {
  expect(Calculator.add(-2, -5)).toBe(-7);
});
test("should add one integer and one floating 2+2.3=4.3", () => {
  expect(Calculator.add(2, 2.3)).toBeCloseTo(4.3);
});

test("should add two floating numbers 0.2+0.3", () => {
  expect(Calculator.add(0.2, 0.3)).toBeCloseTo(0.5);
});

test("should return message if one of args is not a number", () => {
  expect(Calculator.add("a", 0.3)).toBe("Args are in wrong format!");
});
test("should return message if both of args is not a number", () => {
  expect(Calculator.add("a", "b")).toBe("Args are in wrong format!");
});

// SUBTRACT TESTS
test("should subtract two integers 4-2 = 2", () => {
  expect(Calculator.subtract(4, 2)).toBe(2);
});
test("should subtract one integer and one floating number 4-2.5 = 1.5", () => {
  expect(Calculator.subtract(4, 2.5)).toBeCloseTo(1.5);
});

test("should subtract two negative numbers (-2 - (-3.2) = 1.2", () => {
  expect(Calculator.subtract(-2, -3.2)).toBeCloseTo(1.2);
});
test("should subtract two floating numbers 4.2-2.5 = 1.7", () => {
  expect(Calculator.subtract(4.2, 2.5)).toBeCloseTo(1.7);
});
test("should return message if one of args is not a number", () => {
  expect(Calculator.subtract("a", 0.3)).toBe("Args are in wrong format!");
});
test("should return message if both of args is not a number", () => {
  expect(Calculator.subtract("a", "b")).toBe("Args are in wrong format!");
});

// DIVIDE TESTS

test("should divide two integers 9/3 = 3", () => {
  expect(Calculator.divide(9, 3)).toBe(3);
});
test("should divide one integer and one floating number 5 / 2.5 = 2", () => {
  expect(Calculator.divide(5, 2.5)).toBeCloseTo(2);
});

test("should divide two negative numbers -2 / -1 = 2", () => {
  expect(Calculator.divide(-2, -1)).toBeCloseTo(2);
});
test("should divide two floating numbers 7.5 / 2.5 = 3", () => {
  expect(Calculator.divide(7.5, 2.5)).toBeCloseTo(3);
});
test("if trying to divide by 0, should return the message", () => {
  expect(Calculator.divide(2, 0)).toBe("Can't divide by 0!");
});
test("should return message if one of args is not a number", () => {
  expect(Calculator.divide("a", 0.3)).toBe("Args are in wrong format!");
});
test("should return message if both of args is not a number", () => {
  expect(Calculator.divide("a", "b")).toBe("Args are in wrong format!");
});

// MULTIPLY TESTS
test("should multiply two integers 9*3 = 27", () => {
  expect(Calculator.multiply(9, 3)).toBe(27);
});
test("should multiply one integer and one floating number 5 * 2.5 = 12.5", () => {
  expect(Calculator.multiply(5, 2.5)).toBeCloseTo(12.5);
});

test("should multiply two negative numbers -2 * -1 = 2", () => {
  expect(Calculator.multiply(-2, -1)).toBeCloseTo(2);
});
test("should multiply two floating numbers 7.5 * 2.5 = 18.75", () => {
  expect(Calculator.multiply(7.5, 2.5)).toBeCloseTo(18.75);
});
test("if trying to multiply by 0, should be 0", () => {
  expect(Calculator.multiply(2, 0)).toBe(0);
});
test("should return message if one of args is not a number", () => {
  expect(Calculator.multiply("a", 0.3)).toBe("Args are in wrong format!");
});
test("should return message if both of args is not a number", () => {
  expect(Calculator.multiply("a", "b")).toBe("Args are in wrong format!");
});
