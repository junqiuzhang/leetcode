/**
 * 数据结构：字符串
 * 算法：字符串操作
 */
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting = (S, K) => {
  let str = S.split('-').join('');
  let res = '';
  for (let i = str.length; i > 0; i -= K) {
    res = str.substring(i - K, i) + '-' + res;
  }
  return res.substring(0, res.length - 1).toUpperCase();
};