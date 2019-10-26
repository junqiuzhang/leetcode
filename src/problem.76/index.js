/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var map = {};
    var i;
    var len1 = nums1.length;
    var len2 = nums2.length;
    var res = [];
    for (i = 0; i < len1; i++) {
        map[nums1[i]] = 1;
    }
    for (i = 0; i < len2; i++) {
        if (map[nums2[i]]) {
            map[nums2[i]] = 2;
        }
    }
    for (i in map) {
        if (map[i] == 2) {
            res.push(i);
        }
    }
    return res;
};
