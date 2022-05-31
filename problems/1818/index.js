const MAX_NUMBER = Math.pow(10, 9) + 7;
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minAbsoluteSumDiff = (nums1, nums2) => {
  const numIndex = [];
  let sum = 0;
  for (let i = 0; i < nums1.length; i++) {
    numIndex.push(i);
    sum += Math.abs(nums1[i] - nums2[i]) % MAX_NUMBER;
  }
  numIndex.sort((a, b) => {
    const aNum1 = nums1[a];
    const bNum1 = nums1[b];
    return aNum1 - bNum1;
  });
  let maxDiff = 0;
  for (let i = 0; i < numIndex.length; i++) {
    const index = numIndex[i];
    const num1 = nums1[index];
    const num2 = nums2[index];
    const diff = Math.abs(num1 - num2);
    const start = Math.min(num1, 2 * num2 - num1);
    const end = Math.max(num1, 2 * num2 - num1);
    if ((end - start) / 2 <= maxDiff) continue;
    let curMaxDiff = 0;
    let j = i;
    let numJ = nums1[numIndex[j]];
    while (j < numIndex.length && numJ >= start && numJ <= end) {
      const curDiff = diff - Math.abs(numJ - num2);
      if (curDiff > curMaxDiff) {
        curMaxDiff = curDiff;
      }
      j++;
      numJ = nums1[numIndex[j]];
    }
    let k = i;
    let numK = nums1[numIndex[k]];
    while (k > -1 && numK >= start && numK <= end) {
      const curDiff = diff - Math.abs(numK - num2);
      if (curDiff > curMaxDiff) {
        curMaxDiff = curDiff;
      }
      k--;
      numK = nums1[numIndex[k]];
    }
    if (curMaxDiff > maxDiff) {
      maxDiff = curMaxDiff;
    }
  }
  return (sum - maxDiff) % MAX_NUMBER;
};
