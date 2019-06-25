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
    var left = 0;
    var right = 0;
    var leftIndex = -1;
    var rightIndex = nums.length;
    var i = 0;
    var j = nums.length - 1;
    left += nums[i];
    right += nums[nums.length - 1];
    while (i < j) {
        if (left < 0 || right < 0) {
            if (left <= right) {
                left = 0;
                leftIndex = i;
                i++;
                left += nums[i];
            } else {
                right = 0;
                rightIndex = j;
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
    }
    var res = 0;
    for (var i = leftIndex + 1; i < rightIndex; i++) {
        res += nums[i];
    }
    return res;
};
