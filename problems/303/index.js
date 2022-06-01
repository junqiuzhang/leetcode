/**
 * @param {number[]} nums
 */
class NumArray {
  constructor(nums) {
    this.len = nums.length;
    this.map = { '-1': 0 };
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      this.map[i] = sum;
    }
  }

  /**
   * @param {number} i
   * @param {number} j
   * @return {number}
   */
  sumRange(i, j) {
    return this.map[Math.min(j, this.len - 1)] - this.map[Math.max(i - 1, -1)];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * let obj = new NumArray(nums)
 * let param_1 = obj.sumRange(i,j)
 */
