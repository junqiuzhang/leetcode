/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations) => {
  const sortedCitations = citations.sort((a, b) => a - b);
  const len = sortedCitations.length;
  let min = 0;
  let max = len;
  let h = 0;
  while (true) {
    h = Math.ceil((min + max) / 2);
    if (sortedCitations[len - h] >= h) {
      min = h;
    } else {
      max = h;
    }
    if (min >= max - 1) {
      break;
    }
  }
  if (sortedCitations[len - max] >= max) {
    return max;
  }
  return min;
};
