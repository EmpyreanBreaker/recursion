const { mergeSort } = require("./merge.js");

describe("mergeSort", () => {
  test("should sort an unsorted array", () => {
    const input = [5, 3, 8, 1, 2];
    const expected = [1, 2, 3, 5, 8];
    expect(mergeSort(input)).toEqual(expected);
  });

  test("should handle an already sorted array", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(mergeSort(input)).toEqual(expected);
  });

  test("should sort a reverse sorted array", () => {
    const input = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    expect(mergeSort(input)).toEqual(expected);
  });

  test("should handle an empty array", () => {
    const input = [];
    const expected = [];
    expect(mergeSort(input)).toEqual(expected);
  });

  test("should handle a single element array", () => {
    const input = [42];
    const expected = [42];
    expect(mergeSort(input)).toEqual(expected);
  });

  test("should handle an array with two elements", () => {
    const input = [2, 1];
    const expected = [1, 2];
    expect(mergeSort(input)).toEqual(expected);
  });

  test("should handle an array with duplicate values", () => {
    const input = [3, 1, 3, 2, 1, 3];
    const expected = [1, 1, 2, 3, 3, 3];
    expect(mergeSort(input)).toEqual(expected);
  });

  test("should sort an array with negative numbers", () => {
    const input = [3, -1, -5, 0, 2];
    const expected = [-5, -1, 0, 2, 3];
    expect(mergeSort(input)).toEqual(expected);
  });

  test("should sort an array with all identical elements", () => {
    const input = [5, 5, 5, 5];
    const expected = [5, 5, 5, 5];
    expect(mergeSort(input)).toEqual(expected);
  });

  test("should sort a large array", () => {
    const input = [64, 34, 25, 12, 22, 11, 90, 88, 45, 50];
    const expected = [11, 12, 22, 25, 34, 45, 50, 64, 88, 90];
    expect(mergeSort(input)).toEqual(expected);
  });

  test("should sort an array with mixed positive and negative numbers", () => {
    const input = [-10, 5, -3, 0, -20, 15];
    const expected = [-20, -10, -3, 0, 5, 15];
    expect(mergeSort(input)).toEqual(expected);
  });
});
