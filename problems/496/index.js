/**
 * 数据结构：数组
 * 算法：哈希表
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
  const nums2Map = new Map()
  for (let i = 0; i < nums2.length; i++) {
    nums2Map.set(nums2[i], i)
  }
  const res = []
  for (let i = 0; i < nums1.length; i++) {
    let pos = nums2Map.get(nums1[i])
    for (let j = pos; j < nums2.length; j++)  {
      if (nums2[j] > nums1[i]) {
        res.push(nums2[j])
        break;
      }
    }
    if (typeof res[i] !== 'number') {
      res.push(-1)
    }
  }
  return res
};
