import Capitalize from "./capitalize";

test("ababa should become Ababa", () => {
  expect(Capitalize("ababa")).toBe("Ababa");
});

test("Ababa should be Ababa", () => {
  expect(Capitalize("Ababa")).toBe("Ababa");
});

test("AB AB AB should be the same", () => {
  expect(Capitalize("AB AB AB")).toBe("AB AB AB");
});

test("unit testing should become Unit testing", () => {
  expect(Capitalize("unit testing")).toBe("Unit testing");
});
test("1234 should be 1234", () => {
  expect(Capitalize("1234")).toBe("1234");
});
test("ABABA shoulbe be ABABA", () => {
  expect(Capitalize("ABABA")).toBe("ABABA");
});

test("number should be the same", () => {
  expect(Capitalize(1234)).toBe(1234);
});
test("not letter characters should return the same", () => {
  expect(Capitalize("#$#@!aaa")).toBe("#$#@!aaa");
});
