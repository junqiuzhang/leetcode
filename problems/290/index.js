/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = (pattern, str) => {
    var map = {};
    var revMap = {};
    var patArr = pattern.split('');
    var strArr = str.split(' ');
    if (patArr.length != strArr.length) return false;
    for (var i = 0; i < patArr.length; i++) {
        if (!map[patArr[i]] && !revMap[strArr[i]]) {
            map[patArr[i]] = strArr[i];
            revMap[strArr[i]] = patArr[i];
        } else {
            if (map[patArr[i]] != strArr[i]) {
                return false;
            }
        }
    }
    return true;
};