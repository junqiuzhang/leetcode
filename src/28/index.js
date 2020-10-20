/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle.length) {
        return 0;
    }
    if (!haystack.length) {
        return -1;
    }
    var num = needle.length;
    for (var i = 0; i < haystack.length - needle.length + 1; i++) {
        for (var j = 0; j < needle.length; j++) {
            if (haystack[i + j] != needle[j]) {
                break;
            }
            num--;
        }
        if (num == 0) {
            return i;
        } else {
            num = needle.length;
        }
    }
    return -1;
};
