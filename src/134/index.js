/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] - cost[i] >= 0) {
      let sum = 0;
      let flag = true;
      for (let j = 0; j < gas.length; j++) {
        let k = (i + j) % gas.length;
        sum += gas[k] - cost[k];
        if (sum < 0) {
          flag = false;
          break;
        }
      }
      if (flag) {
        return i;
      }
    }
  }
  return -1;
};
