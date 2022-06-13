/**
 * @param {number[]} heights
 * @return {number}
 */
export const heightChecker = (heights) => {
  const sortedHeights = [...heights].sort((a, b) => a - b);
  return sortedHeights.filter((h, i) => heights[i] !== h).length;
};
