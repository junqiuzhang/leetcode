/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var map = {};
    var n1, n2;
    var res = [];
    for (var i = 0; i < nums1.length; i++) {
        n1 = nums1[i];
        if (typeof map[n1] === 'undefined') {
            map[n1] = 1;
        } else {
            map[n1]++;
        }
    }
    for (var i = 0; i < nums2.length; i++) {
        n2 = nums2[i];
        if (typeof map[n2] === 'number' && map[n2] > 0) {
            map[n2]--;
            res.push(n2);
        }
    }
    return res;
};