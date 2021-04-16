/**
 * 思路1：
 * 若两字符在s1与s2中都相邻，则称两字符为不变字符
 * 当且仅当s1与s2中不变字符数为0时，s1与s2不是扰乱字符串
 * 问题：无法保证s1与s2中字符各不相同
 *
 * 思路2：
 * 由扰乱字符串算法可得
 * 当且仅当存在分割s1 = x1 + y1，s2 = x2 + y2
 * 使得x1可由x2或y2扰乱字符串算法可得，y1可由x2或y2扰乱字符串算法可得
 * 由此递归可得
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  const isScrambleMap = new Map();
  function getScrambleMap(i1, j1, i2, j2) {
    return isScrambleMap.get(`${i1},${j1},${i2},${j2}`)
  }
  function setScrambleMap(i1, j1, i2, j2, bool) {
    isScrambleMap.set(`${i1},${j1},${i2},${j2}`, bool)
  }
  /**
   * @param {number} i1
   * @param {number} j1
   * @param {number} i2
   * @param {number} j2
   * @return {boolean}
   */
  function loopScramble(i1, j1, i2, j2) {
    if (typeof getScrambleMap(i1, j1, i2, j2) === 'boolean') {
      return getScrambleMap(i1, j1, i2, j2);
    }
    const tempS1 = s1.slice(i1, j1);
    const tempS2 = s2.slice(i2, j2);
    if (tempS1 === tempS2) {
      setScrambleMap(i1, j1, i2, j2, true);
      return true;
    }
    if (tempS1 === tempS2.split("").reverse().join("")) {
      setScrambleMap(i1, j1, i2, j2, true);
      return true;
    }
    for (let index = 1; index < (j1 - i1); index++) {
      if (loopScramble(i1, i1 + index, i2, i2 + index) && loopScramble(i1 + index, j1, i2 + index, j2)) {
        setScrambleMap(i1, j1, i2, j2, true);
        return true;
      }
      if (loopScramble(i1, i1 + index, j2 - index, j2) && loopScramble(i1 + index, j1, i2, j2 - index)) {
        setScrambleMap(i1, j1, i2, j2, true);
        return true;
      }
    }
    setScrambleMap(i1, j1, i2, j2, false);
    return false;
  }
  return loopScramble(0, s1.length, 0, s2.length);
};