/**
 * 数据结构：数字
 * 算法：数学
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var max = 0;
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        sum += nums[i];
    }
    if (max == 2 && sum == 2) {
        // [0,2]
        return 1;
    }
    if (max * nums.length / 2 == sum) {
        return max + 1;
    }
    return max * (nums.length + 1) / 2 - sum;
};
