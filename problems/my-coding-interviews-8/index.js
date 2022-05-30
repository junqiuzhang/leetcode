const NUMBER_REGEXP = /^\d+$/;
/**
 * @param {string} n
 * @param {number} i
 */
const getNumber = (n, i) => {
  if (typeof n[i] === "string") {
    return Number(n[i]);
  }
  return 0;
}
const checkNumber = (func) => {
  return function (...args) {
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      if (!NUMBER_REGEXP.test(arg)) {
        throw new Error(`Error: arguments must be a positive number!`);
      }
    }
    return func(...args);
  };
}
/**
 * @param {string} x
 * @param {string} y
 * @returns {string}
 */
export const add = checkNumber((x, y) => {
  let ans = "";
  let car = 0;
  const len = Math.max(x.length, y.length);
  for (let i = 0; i < len; i++) {
    const cur =
      getNumber(x, x.length - i - 1) + getNumber(y, y.length - i - 1) + car;
    ans = (cur % 10) + ans;
    car = Math.floor(cur / 10);
  }
  if (car > 0) {
    ans = car + ans;
  }
  return ans;
});
/**
 * @param {string} x
 * @param {string} y
 * @returns {string}
 */
export const multi = checkNumber((x, y) => {
  checkNumber(x);
  checkNumber(y);
  let ans = "";
  let car = 0;
  for (let i = 0; i < x.length; i++) {
    const cur = getNumber(x, x.length - i - 1) * getNumber(y, 0) + car;
    ans = (cur % 10) + ans;
    car = Math.floor(cur / 10);
  }
  if (car > 0) {
    ans = car + ans;
  }
  return ans;
});
/**
 * @param {string} x
 * @param {string} y
 * @returns {string}
 */
export const multiply = checkNumber((x, y) => {
  checkNumber(x);
  checkNumber(y);
  let ans = "0";
  for (let i = 0; i < y.length; i++) {
    const pro = multi(x, y[y.length - i - 1]);
    const tmp = pro + new Array(i).fill(0).join("");
    ans = add(ans, tmp);
  }
  return ans;
});
