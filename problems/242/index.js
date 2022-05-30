/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length != t.length) {
        return false;
    }
    var temp = [];
    for (var i = 0; i < s.length; i++) {
        if (typeof temp[s[i].charCodeAt() - 97] == 'number') {
            temp[s[i].charCodeAt() - 97]++;
        } else {
            temp[s[i].charCodeAt() - 97] = 1;
        }
    }
    for (var i = 0; i < t.length; i++) {
        if (typeof temp[s[i].charCodeAt() - 97] == 'number') {
            temp[t[i].charCodeAt() - 97]--;
        } else {
            temp[t[i].charCodeAt() - 97] = -1;
        }
    }
    for (var i = 0; i < temp.length; i++) {
        if (typeof temp[i] == 'number' && temp[i] != 0) {
          return false
        }
    }
    return true;
};
