/**
 * 性质1：
 * 101 + 010 + 1 = 1000
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  let dig = Math.floor(Math.log2(num));
  let exp = Math.pow(2, dig + 1);
  return exp - num - 1;
};
/**
 * 性质2：
 * 101 = ^010
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  let n = 1;
  while(n < num){
    n = (n << 1) + 1;
  }
  return n ^ num;
};