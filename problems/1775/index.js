export const findIntersection = (range1, range2) => {
  if (range1[0] >= range2[0] && range1[0] <= range2[1]) {
    return [range1[0], range2[1]];
  }
  if (range2[0] >= range1[0] && range2[0] <= range1[1]) {
    return [range2[0], range1[1]];
  }
};
export const map2arr = (map) => {
  const arr = [];
  map.forEach((val, key) => {
    arr.push([key, val]);
  });
  return arr;
};
export const arr2map = (arr) => {
  return new Map(arr);
};
export const getNumCountMap = (nums) => {
  const map = new Map();
  nums.forEach((val) => {
    map.set(val, map.has(val) ? map.get(val) + 1 : 1);
  });
  return map;
};
export const getNumCountArr = (nums) => {
  const map = getNumCountMap(nums);
  return map2arr(map);
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const minOperations = (nums1, nums2) => {
  const range1 = [nums1.length, nums1.length * 6];
  const range2 = [nums2.length, nums2.length * 6];
  const intersection = findIntersection(range1, range2);
  if (!intersection) {
    return -1;
  }
  let sumDiff = 0;
  for (let i = 0; i < nums1.length; i++) {
    sumDiff += nums1[i];
  }
  for (let i = 0; i < nums2.length; i++) {
    sumDiff -= nums2[i];
  }
  let numDiffs = [];
  if (sumDiff === 0) {
    return 0;
  } else if (sumDiff > 0) {
    for (let i = 0; i < nums1.length; i++) {
      numDiffs.push(nums1[i] - 1);
    }
    for (let i = 0; i < nums2.length; i++) {
      numDiffs.push(6 - nums2[i]);
    }
  } else {
    sumDiff = -sumDiff;
    for (let i = 0; i < nums1.length; i++) {
      numDiffs.push(6 - nums1[i]);
    }
    for (let i = 0; i < nums2.length; i++) {
      numDiffs.push(nums2[i] - 1);
    }
  }
  const numCounts = getNumCountArr(numDiffs);
  numCounts.sort((a, b) => b[0] - a[0]);
  let ans = 0;
  for (let i = 0; i < numCounts.length; i++) {
    const numCount = numCounts[i];
    const sum = numCount[0] * numCount[1];
    if (sum >= sumDiff) {
      return ans + Math.ceil(sumDiff / numCount[0]);
    }
    sumDiff -= sum;
    ans += numCount[1];
  }
  return ans;
};
