/**
 * 数据结构：数组
 * 算法：循环
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    var len = nums.length;
    var i = len;
    var first = len;
    var count = 0;
    var temp = 0;
    var tempI = len;
    do {
        first = --i;
        temp = nums[i];
        do {
            tempI = (i - k + k * len) % len;
            nums[i] = nums[tempI];
            i = tempI;
            count++;
            if (count >= len) {
                break;
            }
        } while (i != first)
        nums[(i + k) % len] = temp;
    } while (count < len)
};