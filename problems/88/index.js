/**
 * 数据结构：数组
 * 算法：排序
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  /**
   * 方案1(失败):
   * 归并排序：
   * 将nums1和nums2按照归并排序的方法排列到nums1中，用nums1的富余空间存替换出的nums1元素
   * 交换比较数字的位置
   * 方案2:
   * 归并排序：
   * 用新nums存归并排序的元素
   */
  if (nums1.length == 0) {
    return nums2;
  }
  if (nums2.length == 0) {
    return nums1;
  }
  let nums3 = [];
  let i = 0;
  let j = 0;
  for (let k = 0; k < m + n; k++) {
    if (i >= m || nums1[i] > nums2[j]) {
      nums3[k] = nums2[j];
      j++;
      continue;
    }
    nums3[k] = nums1[i];
    i++;
  }
  for (let k = 0; k < m + n; k++) {
    nums1[k] = nums3[k];
  }
  return nums3;
};
