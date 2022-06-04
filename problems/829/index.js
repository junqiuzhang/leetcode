/**
 * @param {number} n
 * @return {number}
 */
export const consecutiveNumbersSum = (n) => {
  let count = 1;
  let max = (-1 + Math.sqrt(1 + 8 * n)) / 2;
  for (let i = 2; i <= max; i++) {
    if (i % 2 === 0) {
      if (((2 * n) / i) % 2 === 1) {
        count++;
      }
    } else {
      if (n % i === 0) {
        count++;
      }
    }
  }
  return count;
};
