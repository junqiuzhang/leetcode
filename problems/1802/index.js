/**
 * @param {number} num
 * @param {number} count
 */
export const getSum = (num, count) => {
  if (count > num) {
    // return ((num + 1) * num) / 2 + count - num;
    return (num * num - num) / 2 + count;
  }
  // return ((num + num - count + 1) * count) / 2;
  return num * count + (count - count * count) / 2;
};
/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
export const maxValue = (n, index, maxSum) => {
  let left = 1;
  let right = maxSum;
  let mid = 0;
  const leftCount = index + 1;
  const rightCount = n - index;
  while (left < right) {
    mid = Math.ceil((left + right) / 2);
    const sum = getSum(mid, leftCount) + getSum(mid, rightCount) - mid;
    if (sum > maxSum) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};
