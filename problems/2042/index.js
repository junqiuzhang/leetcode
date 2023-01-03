/**
 * @param {string} s
 * @return {boolean}
 */
export const areNumbersAscending = (s) => {
  const words = s.split(' ');
  let pre = -Infinity;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const num = parseInt(word);
    if (Number.isInteger(num)) {
      if (pre >= num) {
        return false;
      }
      pre = num;
    }
  }
  return true;
};
