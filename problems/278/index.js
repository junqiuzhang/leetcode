/**
 * 数据结构：数字
 * 算法：二分查找
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return (n) => {
        if (isBadVersion(1)) return 1;
        var min = 1;
        var max = n;
        var mid = 0;
        while (max - min > 1) {
            mid = Math.floor((min + max) / 2);
            if (isBadVersion(mid)) {
                max = mid;
            } else {
                min = mid;
            }
        }
        return max;
    };
};