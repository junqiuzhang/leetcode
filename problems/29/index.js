const MAX_NUMBER = Math.pow(2, 31) - 1;
const MIN_NUMBER = -Math.pow(2, 31);
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
  let res = Math.exp(
    Math.log(Math.abs(dividend)) - Math.log(Math.abs(divisor))
  );
  let signRes =
    Math.sign(dividend) === Math.sign(divisor)
      ? Math.floor(res)
      : -Math.floor(res);
  if (signRes > MAX_NUMBER || signRes < MIN_NUMBER) {
    signRes = MAX_NUMBER;
  }
  return signRes;
}
