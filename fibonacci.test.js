const { fibs, fibsRec } = require("./fibonacci");

test("Gets first value of fibonacci", () => {
  expect(fibsRec(1)).toEqual(1);
});

test("Gets second value of fibonacci", () => {
  expect(fibsRec(2)).toEqual(1);
});

test("Gets third value of fibonacci", () => {
  expect(fibsRec(3)).toEqual(2);
});

test("Gets sixth value of fibonacci", () => {
  expect(fibsRec(6)).toEqual(8);
});
