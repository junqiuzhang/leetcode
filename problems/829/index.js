/**
 * @param {number} n
 * @return {number}
 */
export const consecutiveNumbersSum = (n) => {
  let count = 1;
  let i = 2;
  let max = (-1 + Math.sqrt(1 + 8 * n)) / 2;
  while (i <= max) {
    if (i % 2 === 0) {
      if (((2 * n) / i) % 2 === 1) {
        count++;
      }
    } else {
      if (n % i === 0) {
        count++;
      }
    }
    i++;
  }
  return count;
};
