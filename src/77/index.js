/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  if (k === 0) {
    return [];
  }
  if (k > n) {
    return [];
  }
  if (k === 1) {
    return new Array(n).fill(0).map((o, i) => [i + 1]);
  }
  if (k === n) {
    return [new Array(k).fill(0).map((o, i) => i + 1)];
  }
  return [
    ...combine(n - 1, k),
    ...combine(n - 1, k - 1).map((c) => c.concat([n])),
  ];
}
