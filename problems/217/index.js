/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    let len = nums.length;
    let numberMap = {};
    let temp;
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