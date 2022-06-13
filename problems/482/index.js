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
  let ans = '';
  for (let i = str.length; i > 0; i -= K) {
    ans = str.substring(i - K, i) + '-' + ans;
  }
  return ans.substring(0, ans.length - 1).toUpperCase();
};
