/**
 * @param {number} N
 * @return {number}
 */
export const clumsy = (N) => {
  let ans = 0;
  let pre = N;
  for (let i = 1; i < N; i++) {
    const n = N - i;
    switch (i % 4) {
      case 1:
        pre *= n;
        break;
      case 2:
        pre = parseInt(pre / n);
        break;
      case 3:
        ans += pre;
        pre = n;
        break;
      default:
        ans += pre;
        pre = -n;
        break;
    }
  }
  ans += pre;
  return ans;
};
