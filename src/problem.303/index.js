/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.len = nums.length;
    this.map = { '-1': 0 };
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        this.map[i] = sum;
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.map[Math.min(j, this.len - 1)] - this.map[Math.max(i - 1, -1)];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */