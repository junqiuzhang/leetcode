/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (nums1.length == 0) {
        return nums2;
    }
    if (nums2.length == 0) {
        return [];
    }
    var i = 0;
    var j = 0;
    var swap = 0;
    for (var k = 0; k < m; k++) {
        if (nums1[i] <= nums2[j]) {
            i++;
            continue;
        }
        swap = nums1[i];
        nums1[i] = nums2[j];
        nums2[j] = swap;
        i++;
        j++;
        if (j >= n) {
            break;
        }
    }
    console.log(nums1, nums2, i, j)
    i2 = 0;
    j2 = j;
    for (var k = m; k < m + n; k++) {
        console.log(nums1, nums2, i2, j2)
        if (nums2[i2] <= nums2[j2] && i2 < j || j2 >= n) {
            nums1[k] = nums2[i2];
            i2++;
            continue;
        }
        nums1[k] = nums2[j2];
        j2++;
    }
    return nums1;
};
// var a = [1,2,3,0,0,0];
// var b = [2,5,6];
// var a = [4,5,6,0,0,0]
// var b = [1,2,3]
// var m = 3;
// var n = 3;
// var a = [4,0,0,0,0,0]
// var m = 1
// var b = [1,2,3,5,6]
// var n = 5
// var a = [2,0]
// var m = 1
// var b = [1]
// var n = 1
var a = [1,2,4,5,6,0]
var m = 5
var b = [3]
var n = 1
console.log(merge(a, m, b, n))