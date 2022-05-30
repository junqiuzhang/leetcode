/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    var res = 0;
    var len = nums.length;
    for (let i = 0; i < len; i++) {
        res = res ^ nums[i];
    }
    return res;
};