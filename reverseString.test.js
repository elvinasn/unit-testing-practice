import ReverseString from "./reverseString";

test("raba should become abar", () => {
  expect(ReverseString("raba")).toBe("abar");
});
test("empty string should return empty string", () => {
  expect(ReverseString("")).toBe("");
});
test("one letter length string should return the same", () => {
  expect(ReverseString("a")).toBe("a");
});
test("two letter length string should return the same", () => {
  expect(ReverseString("aa")).toBe("aa");
});
test("helLo should become oLleh", () => {
  expect(ReverseString("helLo")).toBe("oLleh");
});
test("1234 returns not a string", () => {
  expect(ReverseString(1234)).toBe("not a string!");
});
