/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || !strs.length) {
        return '';
    }
    var longestCommonPrefixStr = function(str1, str2) {
        var len = Math.min(str1.length, str2.length);
        for (var i = 0; i < len; i++) {
            if (str1[i] !== str2[i]) {
                return i;
            }
        }
        return i;
    }
    var comStr = strs[0];
    var comNum = strs[0].length;
    for (var i = 1; i < strs.length; i++) {
        comNum = longestCommonPrefixStr(comStr, strs[i]);
        if (comNum === 0) {
            return '';
        }
        comStr = comStr.slice(0, comNum);
    }
    return comStr;
};