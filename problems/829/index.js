/**
 * @param {number} n
 * @return {number}
 */
export const consecutiveNumbersSum = (n) => {
  let i = 1;
  let j = 1;
  let sum = 1;
  let count = 0;
  let max = n / 2;
  while (i <= max) {
    if (sum < n) {
      while (sum < n) {
        j++;
        sum += j;
      }
    }
    if (sum === n) {
      count++;
    }
    sum -= i;
    i++;
    sum -= j;
    j--;
  }
  return count + 1;
};
