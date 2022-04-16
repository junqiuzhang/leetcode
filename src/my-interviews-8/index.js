const NUMBER_REGEXP = /\d+/;
/**
 * @param {string} n 
 * @param {number} i 
 */
function getNumber(n, i) {
  if (typeof n[i] === 'string') {
    return Number(n[i]);
  }
  return 0;
}
/**
 * @param {string} n 
 */
function checkNumber(n) {
  if (!NUMBER_REGEXP.test(n)) {
    throw new Error(`Error: ${n} is not a number`)
  }
}
/**
 * @param {string} x 
 * @param {string} y 
 * @returns {string}
 */
function add(x, y) {
  checkNumber(x);
  checkNumber(y);
  let ans = '';
  let car = 0;
  const len = Math.max(x.length, y.length);
  for (let i = 0; i < len; i++) {
    const cur = getNumber(x, x.length - i - 1) + getNumber(y, y.length - i - 1) + car;
    ans = (cur % 10) + ans;
    car = Math.floor(cur / 10);
  }
  if (car > 0) {
    ans = car + ans;
  }
  return ans;
}
/**
 * @param {string} x 
 * @param {string} y 
 * @returns {string}
 */
function multi(x, y) {
  checkNumber(x);
  checkNumber(y);
  let ans = '';
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
}
/**
 * @param {string} x 
 * @param {string} y 
 * @returns {string}
 */
function multiply(x, y) {
  checkNumber(x);
  checkNumber(y);
  let ans = '0';
  for (let i = 0; i < y.length; i++) {
    const pro = multi(x, y[y.length - i - 1]);
    const tmp = pro + new Array(i).fill(0).join('');
    ans = add(ans, tmp);
  }
  return ans;
}
export {
  add,
  multi,
  multiply,
}