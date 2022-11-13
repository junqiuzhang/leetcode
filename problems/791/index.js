/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
export const customSortString = (order, s) => {
  const charOrderMap = new Map();
  for (let i = 0; i < order.length; i++) {
    const c = order[i];
    charOrderMap.set(c, i);
  }
  const orderedChars = [];
  const unOrderedChars = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (charOrderMap.has(c)) {
      orderedChars.push(c);
    } else {
      unOrderedChars.push(c);
    }
  }
  orderedChars.sort((a, b) => {
    if (charOrderMap.get(a) < charOrderMap.get(b)) {
      return -1;
    }
    return 1;
  });
  return orderedChars.concat(unOrderedChars).join('');
};
