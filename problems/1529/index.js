/**
 * @param {string} target
 * @return {number}
 */
const minFlips = (target) => {
  let flips = 0;
  let pre = "0";
  let cur = "0";
  for (let i = 0; i < target.length; i++) {
    cur = target[i];
    if (pre !== cur) {
      flips++;
    }
    pre = target[i];
  }
  return flips;
};
