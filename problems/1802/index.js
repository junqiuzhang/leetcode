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
  return (count - count * count) / 2 + num * count;
};
/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
export const maxValue = (n, index, maxSum) => {
  let left = 1;
  let right = maxSum - n + 1;
  let mid = 0;
  const leftCount = index + 1;
  const rightCount = n - index - 1;
  while (left < right) {
    mid = Math.ceil((left + right) / 2);
    const sum = getSum(mid, leftCount) + getSum(mid - 1, rightCount);
    if (sum > maxSum) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};
