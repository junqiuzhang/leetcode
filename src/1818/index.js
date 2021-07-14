const MAX_NUMBER = Math.pow(10, 9) + 7;
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minAbsoluteSumDiff(nums1, nums2) {
  const numObjects = [];
  let sum = 0;
  for (let i = 0; i < nums1.length; i++) {
    numObjects.push({
      num1: nums1[i],
      num2: nums2[i]
    })
    sum += Math.abs(nums1[i] - nums2[i]) % MAX_NUMBER;
  }
  numObjects.sort((a, b) => a.num1 - b.num1);
  let maxDiff = 0;
  for (let i = 0; i < numObjects.length; i++) {
    const numObject = numObjects[i];
    let start = 0;
    let end = 0;
    if (numObject.num1 > numObject.num2) {
      start = 2 * numObject.num2 - numObject.num1;
      end = numObject.num1;
    } else {
      start = numObject.num1;
      end = 2 * numObject.num2 - numObject.num1;
    }
    if ((end - start) / 2 < maxDiff) continue;
    let curMaxDiff = 0;
    let j = i;
    while (j < numObjects.length && numObjects[j].num1 >= start && numObjects[j].num1 <= end) {
      const curDiff = Math.abs(numObject.num1 - numObject.num2) - Math.abs(numObjects[j].num1 - numObject.num2)
      if (curDiff > curMaxDiff) {
        curMaxDiff = curDiff;
      }
      j++;
    }
    let k = i;
    while (k > -1 && numObjects[k].num1 >= start && numObjects[k].num1 <= end) {
      const curDiff = Math.abs(numObject.num1 - numObject.num2) - Math.abs(numObjects[k].num1 - numObject.num2)
      if (curDiff > curMaxDiff) {
        curMaxDiff = curDiff;
      }
      k--;
    }
    if (curMaxDiff > maxDiff) {
      maxDiff = curMaxDiff;
    }
  }
  return (sum - maxDiff) % MAX_NUMBER;
}

