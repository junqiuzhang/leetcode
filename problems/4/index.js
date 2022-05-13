/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
function getKthElement(nums1, nums2, k) {
  const length1 = nums1.length;
  const length2 = nums2.length;
  let index1 = 0;
  let index2 = 0;
  while (true) {
    // 边界情况
    if (index1 === length1) {
      return nums2[index2 + k - 1];
    }
    if (index2 === length2) {
      return nums1[index1 + k - 1];
    }
    if (k === 1) {
      return Math.min(nums1[index1], nums2[index2]);
    }
    // 正常情况
    let half = Math.floor(k / 2);
    let newIndex1 = Math.min(index1 + half, length1) - 1;
    let newIndex2 = Math.min(index2 + half, length2) - 1;
    let pivot1 = nums1[newIndex1];
    let pivot2 = nums2[newIndex2];
    if (pivot1 <= pivot2) {
      k -= newIndex1 - index1 + 1;
      index1 = newIndex1 + 1;
    } else {
      k -= newIndex2 - index2 + 1;
      index2 = newIndex2 + 1;
    }
  }
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  if (totalLength % 2 === 1) {
    const midIndex = Math.floor(totalLength / 2);
    const median = getKthElement(nums1, nums2, midIndex + 1);
    return median;
  } else {
    const midIndex = Math.floor(totalLength / 2);
    const median =
      (getKthElement(nums1, nums2, midIndex) +
        getKthElement(nums1, nums2, midIndex + 1)) /
      2;
    return median;
  }
}
