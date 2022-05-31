/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {string} s
 * @return {number}
 */
const countSegments = (s) => {
    if (s.trim().length === 0) {
        return 0;
    }
    let splitByComma = s.trim().split(',');
    return splitByComma.reduce((t, cur, i) => {
        let splitBySpace = cur.trim().split(' ');
        if (i === splitByComma.length - 1) {
            if (!cur.trim()) {
                return t;
            }
        }
        return t + splitBySpace.length;
    }, 0);
};