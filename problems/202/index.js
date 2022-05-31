/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
    let map = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
    let cantMap = [true,,true,,true,true,,,true];
    let temp = n;
    let num = 0;
    let sum = 0;
    while (!cantMap[temp]) {
        sum = 0;
        while (temp >= 1) {
            num = temp % 10;
            sum = sum + map[num];
            temp = Math.floor(temp / 10);
        }
        if (sum == 1) {
            return true;
        }
        temp = sum;
    }
    return false;
};
