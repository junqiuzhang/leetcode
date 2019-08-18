/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var len = numbers.length;
    var res = [1, len];
    var diff = 0;
    for (var i = 0; i < len; i++) {
        diff = numbers[res[0] - 1] + numbers[res[1] - 1] - target;
        if (diff === 0) {
            return res;
        } else if (diff < 0) {
            res[0]++;
        } else if (diff > 0) {
            res[1]--;
        }
    }
    return res;
};