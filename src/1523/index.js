/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function countOdds(low, high) {
  return Math.floor((high - low + (low % 2) + (high % 2)) / 2);
}
