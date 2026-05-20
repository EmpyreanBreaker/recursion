const fibs = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
};

const fibsRec = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1);
  const next = prev[prev.length - 1] + prev[prev.length - 2];

  return [...prev, next];
};

module.exports = {
  fibs,
  fibsRec,
};
