/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i, j;
    var length = nums.length;
    var Map = {};
    var temp;
    for (i = 0; i < length; i++) {
        Map[`${nums[i]}`] = i;
    }
    for (j = 0; j < length; j++) {
        temp = Map[`${target - nums[j]}`];
        if (temp && j !== temp) {
            return [j, temp];
        }
    }
    return [];
};