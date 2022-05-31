/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = (numBottles, numExchange) => {
  let total = 0;
  let wines = numBottles;
  let bottles = 0;
  const drink = () => {
    total += wines;
    bottles += wines;
    wines = 0;
  };
  const exchange = () => {
    wines = Math.floor(bottles / numExchange);
    bottles = bottles % numExchange;
  };
  while (wines > 0 || bottles > numExchange) {
    drink();
    exchange();
  }
  return total;
};
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = (numBottles, numExchange) => {
  return numBottles >= numExchange
    ? (numBottles - numExchange) / (numExchange - 1) + 1 + numBottles
    : numBottles;
};
