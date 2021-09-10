/**
 * @param {string} s
 * @return {number}
 */
function minInsertions(s) {
  const cache = new Array(s.length).fill(0).map(() => new Array(s.length));
  /**
   * @param {string} s
   * @return {number}
   */
  function minInsertRecursion(i, j) {
    if (i >= j) return 0;
    if (typeof cache[i][j] === "number") return cache[i][j];
    if (s[i] !== s[j]) {
      const min1 = minInsertRecursion(i + 1, j);
      const min2 = minInsertRecursion(i, j - 1);
      cache[i][j] = Math.min(min1, min2) + 1;
      return cache[i][j];
    }
    cache[i][j] = minInsertRecursion(i + 1, j - 1);
    return cache[i][j];
  }
  return minInsertRecursion(0, s.length - 1);
}
