const MAX_NUMBER = Math.pow(10, 9);
/**
 * @param {number} n
 * @return {string}
 */
function getTrait(n) {
  return n
    .toString()
    .split("")
    .map((i) => Number(i))
    .sort((a, b) => a - b)
    .join("");
}
/**
 * @param {number} n
 * @return {boolean}
 */
function reorderedPowerOf2(n) {
  let p = 1;
  let traitN = getTrait(n);
  while (p <= MAX_NUMBER) {
    if (getTrait(p) === traitN) {
      return true;
    }
    p *= 2;
  }
  return false;
}
