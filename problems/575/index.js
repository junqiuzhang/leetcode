/**
 * @param {number[]} candyType
 * @return {number}
 */
function distributeCandies(candyType) {
  const candySet = new Set();
  for (let i = 0; i < candyType.length; i++) {
    const candy = candyType[i];
    candySet.add(candy);
  }
  return Math.min(candySet.size, candyType.length / 2);
}
