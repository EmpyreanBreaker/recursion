const mergeSort = (arr) => {
  // Base case
  if (arr.length <= 1) {
    return arr;
  }

  // Divide into halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively divide and merge the two halves
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  // Sorted array
  const sorted = [];

  // Iterate and sort
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  // Put in remainders if dealing with arrays of different sizes
  // Return sorted array
  return sorted.concat(left.slice(i)).concat(right.slice(j));
};
module.exports = { mergeSort, merge };
