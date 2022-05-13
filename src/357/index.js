/**
 * @param {number} n
 * @return {number}
 */
function countNumbersWithUniqueDigits(n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 10;
  }
  let count = 9;
  let temp = 9;
  for (let i = 1; i < n; i++) {
    count = count * temp;
    temp--;
  }
  return count + countNumbersWithUniqueDigits(n - 1);
}
export { countNumbersWithUniqueDigits };
