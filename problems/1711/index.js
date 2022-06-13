import { C } from '../../libs/common/index.js';
const MAX_NUMBER = Math.pow(10, 9) + 7;
/**
 * @param {number[]} deliciousness
 * @return {number}
 */
const countPairs = (deliciousness) => {
  const hashMap = {};
  for (let i = 0; i < deliciousness.length; i++) {
    const num = deliciousness[i];
    let arr = hashMap[num];
    if (!arr) {
      arr = [];
    }
    arr.push(i);
    hashMap[num] = arr;
  }
  const nums = Object.keys(hashMap)
    .map((n) => parseInt(n))
    .sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i <= 21; i++) {
    const sum = Math.pow(2, i);
    for (let j = 0; j < nums.length; j++) {
      const num1 = nums[j];
      const num2 = sum - num1;
      if (num1 > num2) break;
      if (hashMap[num2]) {
        if (num1 === num2 && hashMap[num2].length >= 2) {
          ans += C(2, hashMap[num2].length) % MAX_NUMBER;
        } else if (num1 < num2) {
          ans += (hashMap[num1].length * hashMap[num2].length) % MAX_NUMBER;
        }
      }
    }
  }
  return ans % MAX_NUMBER;
};
