// 本问题等价于新问题：
// 取区间，使得区间的和为goal
// 可分为两种情况：
// 1. goal === 0
// 此时只能在全为0的区间中取子区间
// 2. goal !== 0
// 此时只能在相隔goal个区间的两个全为0的区间中各取一个点作为端点组成新区间
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
const numSubarraysWithSum = (nums, goal) => {
  const indexArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      indexArray.push(i);
    }
  }
  if (indexArray.length < goal) {
    return 0;
  }
  if (goal === 0) {
    indexArray.push(nums.length);
    let res = 0;
    let left = 0;
    for (let i = 0; i < indexArray.length; i++) {
      let right = indexArray[i];
      let sum = right - left;
      for (let j = 0; j < sum; j++) {
        res += j + 1;
      }
      left = right + 1;
    }
    return res;
  }
  let res = 0;
  for (let i = 0; i < indexArray.length; i++) {
    let leftIndex1 = indexArray[i - 1];
    const leftIndex2 = indexArray[i];
    const rightIndex1 = indexArray[i + goal - 1];
    let rightIndex2 = indexArray[i + goal];
    if (typeof leftIndex2 !== 'number' || typeof rightIndex1 !== 'number') {
      break;
    }
    if (typeof leftIndex1 !== 'number') {
      leftIndex1 = -1;
    }
    if (typeof rightIndex2 !== 'number') {
      rightIndex2 = nums.length;
    }
    res += (leftIndex2 - leftIndex1) * (rightIndex2 - rightIndex1);
  }
  return res;
};
