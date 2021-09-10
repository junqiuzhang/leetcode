/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
function chalkReplacer(chalk, k) {
  const len = chalk.length;
  const sum = chalk.reduce((p, c) => p + c);
  let r = k % sum;
  let i = 0;
  while (r >= 0) {
    r -= chalk[i];
    i = (i + 1) % len;
  }
  return (i + len - 1) % len;
}
