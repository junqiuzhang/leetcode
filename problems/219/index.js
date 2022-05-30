/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
    var len = nums.length;
    var numberMap = {};
    var temp;
    for (i = 0; i < len; i++) {
        temp = nums[i];
        if (typeof numberMap[`${temp}`] == 'number' && Math.abs(numberMap[`${temp}`] - i) <= k) {
            return true;
        } else {
            numberMap[`${temp}`] = i;
        }
    }
    return false;
};