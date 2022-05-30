/**
 * @param {number} n
 * @return {number[]}
 */
const printNumbers = (n) => {
  // let res = [];
  // let max = Math.pow(10, n);
  // for (let i = 1; i < max; i++) {
  //     res[i - 1] = i;
  // }
  // return res;
  return new Array(Math.pow(10, n) - 1).fill(0).map((v, i) => i + 1);
};