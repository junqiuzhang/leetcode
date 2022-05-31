/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    let res = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        res = res ^ nums[i];
    }
    return res;
};