/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    var len = 1;
    var nex = 1;
    var pre = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] == pre) {
            nums[i] = undefined;
            if (nex == 1) {
                nex = i + 1;
            }
            continue;
        }
        pre = nums[i];
        len++;
    }
    for (var i = 1; i < len; i++) {
        if (typeof nums[i] == 'undefined') {
            for (var j = nex; j < nums.length; j++) {
                if (typeof nums[j] != 'undefined') {
                    nums[i] = nums[j];
                    nums[j] = undefined;
                    nex = j + 1;
                    break;
                }
            }
            if (j == nums.length) {
                break;
            }
        }
    }
    return len;
};