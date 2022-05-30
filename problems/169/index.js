/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    var map = {};
    var len = nums.length;
    var tempNum = 0;
    for (var i = 0; i < len; i++) {
        tempNum = nums[i];
        if (!map[tempNum]) {
            map[tempNum] = 1;
        } else {
            map[tempNum]++;
        }
        if (map[tempNum] > len / 2) {
            return tempNum;
        }
    }
};