/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  let map = {};
  let i;
  let len1 = nums1.length;
  let len2 = nums2.length;
  let res = [];
  for (i = 0; i < len1; i++) {
    map[nums1[i]] = 1;
  }
  for (i = 0; i < len2; i++) {
    if (map[nums2[i]]) {
      map[nums2[i]] = 2;
    }
  }
  for (i in map) {
    if (map[i] == 2) {
      res.push(i);
    }
  }
  return res;
};
