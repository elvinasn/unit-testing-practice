import analyzeArray from "./analyzeArray";

test("one number array", () => {
  expect(analyzeArray([1])).toStrictEqual({
    min: 1,
    max: 1,
    average: 1,
    length: 1,
  });
});

test("normal numbers array", () => {
  expect(analyzeArray([1, 2, 5, 6, 3, 2, 0, 1, 0, 0])).toStrictEqual({
    min: 0,
    max: 6,
    average: 2,
    length: 10,
  });
});
