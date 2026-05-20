const fibs = (n) => {};
const fibsRec = (n) => {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibsRec(n - 2) + fibsRec(n - 1);
};

module.exports = {
  fibs,
  fibsRec,
};
