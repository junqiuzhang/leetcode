// 异或的性质：
// 1. 满足交换律和结合律
// 2. a ^ a = 0, a ^ 0 = a
// 
// 设nums有n个数，a1, a2, ... , an
// 
// 情况1：如果 a1 ^ a2 ^ ... ^ an = 0
// 则按照规则先手获胜
// 
// 情况2：如果 a1 ^ a2 ^ ... ^ an != 0，且nums.length为偶数
// 因为擦除一个元素相当于等式两边同时异或这个元素
// 最优策略为：擦除 ai != 当前元素异或和（相当于等式两边同时异或 ai，必不为0）
// 所以，先手必胜
// 情况3：如果 a1 ^ a2 ^ ... ^ an != 0，且nums.length为奇数
// 同理，后手必胜

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const xorGame = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum ^= nums[i];
  }
  if (sum === 0 || (sum && nums.length % 2 === 0)) {
    return true;
  }
  return false;
}
