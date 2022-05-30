/**
 * 数据结构：数字
 * 算法：循环
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
    if (rowIndex === 0) {
        return [1];
    }
    var temp1 = 1;
    var temp2 = 1;
    var res = new Array(rowIndex + 1)
    res[0] = 1;
    res[1] = 1;
    for (var i = 2; i <= rowIndex; i++) {
        temp1 = 1;
        for (var j = 1; j < (i + 1) / 2; j++) {
            temp2 = res[j];
            res[j] = temp1 + res[j];
            res[i - j] = res[j];
            temp1 = temp2
        }
        res[i] = 1;
    }
    return res;
};