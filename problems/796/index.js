/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
  if (s.length !== goal.length) {
    return false;
  }
  const sliceIndex = [];
  const first = goal[0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === first) {
      sliceIndex.push(i);
    }
  }
  for (let i = 0; i < sliceIndex.length; i++) {
    const index = sliceIndex[i];
    if (goal.includes(s.slice(index)) && goal.includes(s.slice(0, index))) {
      return true;
    }
  }
  return false;
};
