/**
 * @param {string} str
 * @param {string} trimStr
 * @return {string}
 */
export const trimStartRecursion = (str, trimStr = ' ') => {
  const recursion = (i) =>
    str.indexOf(trimStr, i) === 0 ? recursion(i + trimStr.length) : i;
  return str.substring(recursion(0));
};
/**
 * @param {string} str
 * @param {string} trimStr
 * @return {string}
 */
export const trimStartLoop = (str, trimStr = ' ') => {
  let i = 0;
  while (str.indexOf(trimStr, i) === i) {
    i += trimStr.length;
  }
  return str.substring(i);
};
/**
 * @param {string} word
 * @return {number}
 */
export const numDifferentIntegers = (word) => {
  return word
    .split(/[^\d]/)
    .filter((s) => s)
    .map((s) => trimStartLoop(s, '0'))
    .reduce((set, n) => set.add(n), new Set()).size;
};
