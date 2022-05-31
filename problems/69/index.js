/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  if (x <= 1) {
    return x;
  }
  let min = 1;
  let max = x;
  let ans = 1;
  while (min < max - 1) {
    ans = min + Math.floor((max - min) / 2);
    if (ans * ans < x) {
      min = ans;
    } else if (ans * ans > x) {
      max = ans;
    } else {
      return ans;
    }
  }
  return min;
};
