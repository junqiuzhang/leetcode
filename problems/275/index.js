/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations) => {
  const len = citations.length;
  let min = 0;
  let max = len;
  let h = 0;
  while (true) {
    h = Math.ceil((min + max) / 2);
    if (citations[len - h] >= h) {
      min = h;
    } else {
      max = h;
    }
    if (min >= max - 1) {
      break;
    }
  }
  if (citations[len - max] >= max) {
    return max;
  }
  return min;
};
