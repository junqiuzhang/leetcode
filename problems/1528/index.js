/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
  const restoreS = [];
  for (let i = 0; i < s.length; i++) {
    restoreS[indices[i]] = s[i];
  }
  return restoreS.join("");
};
