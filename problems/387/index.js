/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    let temp = {};
    let len = s.length;
    for (let i = 0; i < len; i++) {
        if (typeof temp[s[i]] == 'number') {
            temp[s[i]]++;
        } else {
            temp[s[i]] = 1;
        }
    }
    for (let j = 0; j < len; j++) {
        if (temp[s[j]] === 1) { 
            return j;
        }
    }
    return -1;
};