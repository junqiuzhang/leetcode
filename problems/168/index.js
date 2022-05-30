/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = (n) => {
    var res = '';
    var temp = n;
    var code = 0;
    var Map = ['Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y'];
    while (temp > 0) {
        code = temp % 26;
        res = Map[code] + res;
        temp = code === 0 ? Math.floor(temp / 26) - 1 : Math.floor(temp / 26);
    }
    return res;
};