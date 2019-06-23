/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var len = 0;
    var nex = 1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            if (nex == 1) {
                nex = i + 1;
            }
            for (var j = nex; j < nums.length; j++) {
                if (nums[j] != val) {
                    nums[i] = nums[j];
                    nums[j] = val;
                    nex = j + 1;
                    break;
                }
            }
            if (j == nums.length) {
                break;
            }
        }
        if (nums[i] != val) {
            len++;
        }
    }
    nums.length = len;
    return len;
};
var a = [0,1,2,2,3,0,4,2];
var b = 2;
// var a = [3,2,2,3];
// var b = 3;
// var a = [1];
// var b = 1;
var len = removeElement(a, b);
console.log(a, len);