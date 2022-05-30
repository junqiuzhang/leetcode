/**
 * 数据结构：字符串
 * 算法：数学 遍历
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => {
  if (s.length <= 1) {
    return false;
  }
  const len = s.length;
  const max = Math.sqrt(len);
  let nums = [];
  for (let i = 1; i <= max; i ++) {
    if (len % i === 0) {
      nums.push(i);
      if (len / i !== len && len / i !== i) {
        nums.push(len / i);
      }
    }
  }
  for (let i = 0; i < nums.length; i++) {
    let res = true;
    for (let j = 0; j + nums[i] < s.length; j+=nums[i]) {
      if (s.slice(j, j + nums[i]) !== s.slice(j + nums[i], j + 2 * nums[i])) {
        res = false;
        break;
      }
    }
    if (res) {
      return true;
    }
  }
  return false;
};
