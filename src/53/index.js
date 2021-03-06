/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length == 1) {
        return nums[0];
    }
    if (nums.length == 2) {
        return Math.max(nums[0], nums[1], nums[0] + nums[1]);
    }
    if (nums.length == 3) {
        return Math.max(nums[0], nums[1], nums[2], nums[0] + nums[1], nums[1] + nums[2], nums[0] + nums[1] + nums[2]);
    }
    var i = 0;
    var j = nums.length - 1;
    var left = nums[i];
    var right = nums[j];
    while (i < j) {
        if (left < 0 || right < 0) {
            if (left <= right) {
                left = 0;
                i++;
                left += nums[i];
            } else {
                right = 0;
                j--;
                right += nums[j];
            }
        } else {
            if (left <= right) {
                i++;
                left += nums[i];
            } else {
                j--;
                right += nums[j];
            }
        }
        if (i == j - 1) {
            return Math.max(left, right, left + right)
        }
    }
};