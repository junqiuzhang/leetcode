/**
 * 数据结构：数字
 * 算法：循环
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }
    let res = [[1], [1, 1]];
    for (let i = 2; i < numRows; i++) {
        res.push(new Array(i + 1));
        res[i][0] = 1;
        for (let j = 1; j < (i + 1) / 2; j++) {
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
            res[i][i - j] = res[i][j];
        }
        res[i][i] = 1;
    }
    return res;
};