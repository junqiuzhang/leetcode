/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
    var maxNums = [-Infinity, -Infinity, -Infinity];
    const changeMaxNums = (n) => {
        if (n > maxNums[0]) {
            maxNums[2] = maxNums[1];
            maxNums[1] = maxNums[0];
            maxNums[0] = n;
        } else if (n > maxNums[1] && n < maxNums[0]) {
            maxNums[2] = maxNums[1];
            maxNums[1] = n;
        } else if (n > maxNums[2] && n < maxNums[1]) {
            maxNums[2] = n;
        }
    }
    for (var i = 0; i < nums.length; i++) {
        changeMaxNums(nums[i]);
    }
    if (maxNums[1] === -Infinity || maxNums[2] === -Infinity) {
        return maxNums[0];
    }
    return Math.min(maxNums[1], maxNums[2])
};