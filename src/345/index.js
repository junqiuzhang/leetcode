/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var map = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
        'A': true,
        'E': true,
        'I': true,
        'O': true,
        'U': true,
    }
    var allArr = s.split('');
    var vowelsArr = [];
    var i = 0;
    var len = allArr.length;
    while (i < allArr.length) {
        if (map[allArr[i]]) {
            vowelsArr.push({ key: i, value: allArr[i] })
        }
        i++;
    }
    i = 0;
    len = vowelsArr.length;
    while (i < len) {
        allArr[vowelsArr[i].key] = vowelsArr[len - i - 1].value;
        i++;
    }
    return allArr.join('');
};
