/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
  /**
   * a_1 + a_2 + ... + a_n >= 0
   * => 存在 i 使得 a_i >= 0, a_i + a_i+1 >= 0, ..., a_i + a_i+1 + a_i+2 + ... + a_n + a_1 + ... + a_i-1 >= 0
   * 证明：逆否命题显然
   * 任意 i 使得 a_i < 0, a_i + a_i+1 < 0, ..., a_i + a_i+1 + a_i+2 + ... + a_n + a_1 + ... + a_i-1 < 0
   * => a_1 + a_2 + ... + a_n < 0
   */
  let curTotal = 0;
  let total = 0;
  let res = 0;
  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];
    total += diff;
    if (curTotal < 0) {
      curTotal = diff;
      res = i;
    } else {
      curTotal += diff;
    }
  }
  if (total >= 0) {
    return res;
  }
  return -1;
};