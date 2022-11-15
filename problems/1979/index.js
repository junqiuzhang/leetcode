export const getGCD = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  if (num2 === 0) {
    return num1;
  }
  if (num1 > num2) {
    return getGCD(num2, num1 % num2);
  }
  return getGCD(num1, num2 % num1);
};
/**
 * @param {number[]} nums
 * @return {number}
 */
export const findGCD = (nums) => {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return getGCD(min, max);
};
