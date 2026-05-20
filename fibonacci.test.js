const { fibs, fibsRec } = require("./fibonacci");

test("Gets first value of the iterative fibonacci", () => {
  expect(fibs(1)).toEqual([0]);
});

test("Gets second value of the iterative fibonacci", () => {
  expect(fibs(2)).toEqual([0, 1]);
});

test("Gets third value of the iterative fibonacci", () => {
  expect(fibs(3)).toEqual([0, 1, 1]);
});

test("Gets sixth value of the iterative fibonacci", () => {
  expect(fibs(6)).toEqual([0, 1, 1, 2, 3, 5]);
});

test("Gets first value of the recurisve fibonacci", () => {
  expect(fibsRec(1)).toEqual([0]);
});

test("Gets second value of the recurisve fibonacci", () => {
  expect(fibsRec(2)).toEqual([0, 1]);
});

test("Gets third value of the recurisve fibonacci", () => {
  expect(fibsRec(3)).toEqual([0, 1, 1]);
});

test("Gets sixth value of the recurisve fibonacci", () => {
  expect(fibsRec(6)).toEqual([0, 1, 1, 2, 3, 5]);
});