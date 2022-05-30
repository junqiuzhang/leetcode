import { calculate } from '../227/index.js';
const OperateArray = ['*', '/', '+', '-'];
/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function (N) {
  let str = '';
  for (let i = 0; i < N; i++) {
    str += N - i;
    str += OperateArray[i % 4];
  }
  str = str.slice(0, str.length - 1);
  return calculate(str)
};