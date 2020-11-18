/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const diff = [];
  let total = 0;
  for (let i = 0; i < gas.length; i++) {
    diff[i] = gas[i] - cost[i];
    total += diff[i];
  }
  if (total < 0) {
    return -1;
  }
  for (let i = 0; i < diff.length; i++) {
    if (diff[i] >= 0) {
      let sum = 0;
      let flag = true;
      for (let j = 0; j < diff.length; j++) {
        let k = (i + j) % diff.length;
        sum += diff[k];
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
