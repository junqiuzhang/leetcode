/**
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  let temp = 0;
  let t0 = 0;
  let t1 = 1;
  let t2 = 1;
  for (let i = 2; i < n; i++) {
    temp = t0 + t1 + t2;
    t0 = t1;
    t1 = t2;
    t2 = temp;
  }
  return t2;
}
