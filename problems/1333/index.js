/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
const filterRestaurants = (
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance
) => {
  return restaurants
    .filter((rest) => {
      return !veganFriendly || rest[2] === veganFriendly;
    })
    .filter((rest) => {
      return rest[3] <= maxPrice;
    })
    .filter((rest) => {
      return rest[4] <= maxDistance;
    })
    .sort((a, b) => {
      const c = b[1] - a[1];
      const d = b[0] - a[0];
      return c === 0 ? d : c;
    })
    .map((rest) => {
      return rest[0];
    });
};
