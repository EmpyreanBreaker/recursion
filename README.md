# Recursion Project

This project explores fundamental recursion concepts by implementing two classic algorithmic problems: the **Fibonacci sequence** and **Merge Sort**.

## Overview

Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem. This project demonstrates how recursion can elegantly solve problems that are naturally recursive in nature.

## Projects

### 1. Fibonacci Sequence

The Fibonacci Sequence is a numerical sequence where each number is the sum of the two numbers before it: 0, 1, 1, 2, 3, 5, 8, 13, ...

**Implementation:**

- **`fibs(n)`** - Iterative approach
  - Builds an array by starting with `[0, 1]` and iteratively adding the sum of the last two elements
  - Handles edge cases: returns `[]` for n ≤ 0, returns `[0]` for n = 1
  - Time Complexity: O(n), Space Complexity: O(n)

- **`fibsRec(n)`** - Recursive approach
  - Recursively builds the sequence by getting the previous array and calculating the next number
  - Adds the sum of the last two elements of the previous array to create the next element
  - Handles base cases: returns `[]` for n ≤ 0, returns `[0]` for n = 1, returns `[0, 1]` for n = 2

**Example:**

- `fibs(8)` → `[0, 1, 1, 2, 3, 5, 8, 13]`
- `fibsRec(8)` → `[0, 1, 1, 2, 3, 5, 8, 13]`

**Key Concept:** The recursive implementation demonstrates how to solve the problem by breaking it down into smaller instances, while the iterative version shows a more efficient alternative approach.

### 2. Merge Sort

Merge Sort is a recursive divide-and-conquer sorting algorithm implemented with two functions:

**Implementation:**

- **`mergeSort(arr)`** - Recursive division function
  - **Base case:** Returns the array as-is if it has 0 or 1 elements (already sorted)
  - **Divide:** Splits the array into left and right halves at the midpoint
  - **Conquer:** Recursively calls `mergeSort()` on both halves
  - **Delegate:** Passes the sorted halves to the `merge()` function

- **`merge(left, right)`** - Helper function that merges two sorted arrays
  - Uses two pointers (i and j) to traverse both arrays simultaneously
  - Compares elements from each array and adds the smaller one to the result
  - Appends any remaining elements from either array
  - Returns a single sorted array

**Algorithm Flow:**

1. Recursively divide the array in half until each sub-array is size 0 or 1
2. Merge pairs of sorted sub-arrays back together in correct order
3. Continue merging until the entire array is sorted

**Test Cases:**

- `mergeSort([])` → `[]`
- `mergeSort([73])` → `[73]`
- `mergeSort([1, 2, 3, 4, 5])` → `[1, 2, 3, 4, 5]`
- `mergeSort([3, 2, 1, 13, 8, 5, 0, 1])` → `[0, 1, 1, 2, 3, 5, 8, 13]`
- `mergeSort([105, 79, 100, 110])` → `[79, 100, 105, 110]`

**Complexity:**

- Time: O(n log n) - significantly faster than bubble sort on large datasets
- Space: O(n) - requires extra space for merging

## Running the Project

### Prerequisites

- Node.js installed on your system

### Running Tests

```bash
npm test
```

This will run the test files for both fibonacci and merge sort implementations.

## File Structure

- `fibonacci.js` - Fibonacci sequence implementations
- `fibonacci.test.js` - Tests for Fibonacci functions
- `merge.js` - Merge sort implementation
- `merge.test.js` - Tests for merge sort function
- `index.html` - Browser interface (optional)
- `package.json` - Project dependencies and scripts

## Learning Resources

- [Khan Academy - Recursive Fibonacci Video](https://www.youtube.com/watch?v=zg-ddPbzcKM)
- [Harvard CS50x - Merge Sort Introduction](https://youtu.be/Ns7tGNbtvV4)
- [Merge Sort Visualizer](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/)

## Key Recursion Concepts

1. **Base Case**: The condition that stops the recursion
2. **Recursive Case**: The function calling itself with a simpler input
3. **Trust**: Assume the recursive call works correctly and focus on handling one step

---

Based on [The Odin Project - Recursion Lesson](https://www.theodinproject.com/lessons/javascript-recursion)
