/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 0) {
        return 0;
    }
    if (nums.length == 1) {
        return nums[0];
    }
    var temp = [];
    function getMax(arr) {
        var len = arr.length;
        if (len == 2) {
            if (arr[0] > arr[1]) {
                temp[2] = arr[0];
                return arr[0];
            }
            temp[2] = arr[1];
            return arr[1];
        }
        if (len == 3) {
            if (arr[0] + arr[2] > arr[1]) {
                temp[3] = arr[0] + arr[2];
                return arr[0] + arr[2];
            }
            temp[2] = arr[1];
            return arr[1];
        }
        var diff1Max = temp[len - 1];
        if (typeof diff1Max !== 'number') {
            temp[len - 1] = getMax(arr.slice(0, len - 1));
            diff1Max = temp[len - 1];
        }
        var diff2Max = temp[len - 2];
        if (typeof diff2Max !== 'number') {
            temp[len - 2] = getMax(arr.slice(0, len - 2));
            diff2Max = temp[len - 2];
        }
        if (diff1Max > diff2Max + arr[len - 1]) {
            return diff1Max;
        }
        return diff2Max + arr[len - 1];
    }
    return getMax(nums);
};