/**
 * @param {string} s
 * @return {number}
 */
function minInsertions(s) {
  const cache = new Map();
  /**
   * @param {string} s
   * @return {number}
   */
  function minInsertRecursion(i, j) {
    if (i >= j) return 0;
    const key = `${i}-${j}`;
    if (typeof cache.get(key) === "number") return cache.get(key);
    if (s[i] !== s[j]) {
      const min1 = minInsertRecursion(i + 1, j);
      const min2 = minInsertRecursion(i, j - 1);
      cache.set(key, Math.min(min1, min2) + 1);
      return cache.get(key);
    }
    cache.set(key, minInsertRecursion(i + 1, j - 1));
    return cache.get(key);
  }
  return minInsertRecursion(0, s.length - 1);
}
