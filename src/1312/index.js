/**
 * @param {string} s
 * @return {number}
 */
function minInsertions(s) {
  const cache = {};
  /**
   * @param {string} s
   * @return {number}
   */
  function minInsertRecursion(i, j) {
    const key = `${i}-${j}`;
    if (i >= j) return 0;
    if (typeof cache[key] === "number") return cache[key];
    if (s[i] !== s[j]) {
      const min1 = minInsertRecursion(i + 1, j);
      const min2 = minInsertRecursion(i, j - 1);
      cache[key] = Math.min(min1, min2) + 1;
      return cache[key];
    }
    cache[key] = minInsertRecursion(i + 1, j - 1);
    return cache[key];
  }
  return minInsertRecursion(0, s.length - 1);
}
