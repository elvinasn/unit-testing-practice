import CaeserCipher from "./caeserCipher";

test("abc should become wxy", () => {
  expect(CaeserCipher("abc")).toBe("wxy");
});

test("A, bc should become W, xy", () => {
  expect(CaeserCipher("A, bc")).toBe("W, xy");
});

test("should return a message if number is given", () => {
  expect(CaeserCipher(12)).toBe("not a string!");
});

test("AB, CD, AB should become WX, YZ, WX", () => {
  expect(CaeserCipher("AB, CD, AB")).toBe("WX, YZ, WX");
});
