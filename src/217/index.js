/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var len = nums.length;
    var numberMap = {};
    var temp;
    for (i = 0; i < len; i++) {
        temp = nums[i];
        if (numberMap[`${temp}`]) {
            return true;
        } else {
            numberMap[`${temp}`] = true;
        }
    }
    return false;
};