/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxUncrossedLines = (nums1, nums2) => {
  const matrix = new Array(nums1.length)
    .fill(0)
    .map((i) => new Array(nums2.length));
  for (let i = 0; i < nums1.length; i++) {
    nums1[i][0] = 0;
  }
  for (let j = 0; j < nums2.length; j++) {
    nums2[0][j] = 0;
  }
  const calcUncrossedLines = (i, j) => {
    if (i < 0 || j < 0) {
      return 0;
    }
    if (typeof matrix[i][j] === "number") {
      return matrix[i][j];
    }
    if (nums1[i] === nums2[j]) {
      const res = calcUncrossedLines(i - 1, j - 1);
      matrix[i][j] = res + 1;
      return matrix[i][j];
    }
    const res1 = calcUncrossedLines(i - 1, j);
    const res2 = calcUncrossedLines(i, j - 1);
    const res = Math.max(res1, res2);
    matrix[i][j] = res;
    return matrix[i][j];
  };
  return calcUncrossedLines(nums1.length - 1, nums2.length - 1);
};
