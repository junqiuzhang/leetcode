/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  const hLength = haystack.length;
  const nLength = needle.length;
  if (nLength === 0) return 0;
  const next = new Array(nLength).fill(0);
  for (let i = 1, j = 0; i < nLength; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (needle[i] === needle[j]) {
      j++;
    }
    next[i] = j;
  }
  for (let i = 0, j = 0; i < hLength; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === nLength) {
      return i - nLength + 1;
    }
  }
  return -1;
};
