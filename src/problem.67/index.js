/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 函数式方法
    // return nums.filter(n => n != 0).concat(nums.filter(n => n == 0));

    // 过程式方法
    // posArr: nums中0的位置
    var posArr = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            posArr.push(i);
        }
    }
    var pos = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i > posArr[pos + 1]) {
            pos++;
        }
        if (nums[i] != 0 && i > posArr[pos]) {
            nums[i - pos - 1] = nums[i];
        }
    }
    for (var i = nums.length - posArr.length; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};