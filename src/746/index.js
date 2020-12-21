/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const costMap = new Map();
  function minCost(cost) {
    if (cost.length <= 1) {
      return 0;
    }
    if (cost.length === 2) {
      const ret = Math.min(cost[0], cost[1]);
      return ret;
    }
    let cost1 = costMap.get(cost.length - 1) || minCost(cost.slice(0, cost.length - 1));;
    let cost2 = costMap.get(cost.length - 2) || minCost(cost.slice(0, cost.length - 2));
    let ret = Math.min(cost1 + cost[cost.length - 1], cost2 + cost[cost.length - 2]);
    costMap.set(cost.length, ret);
    return ret;
  }
  return minCost(cost);;
};