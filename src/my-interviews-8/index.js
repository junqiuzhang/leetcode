function add(x, y) {
  let ans = '';
  let c = 0;
  let i;
  const len = Math.max(x.length, y.length);
  x = new Array(len - x.length).fill('0').join('') + x;
  y = new Array(len - y.length).fill('0').join('') + y;
  for (i = 0; i < len; i++) {
    const cur = Number(x[x.length - i - 1]) + Number(y[y.length - i - 1]) + c;
    ans = (cur % 10) + ans;
    c = Math.floor(cur / 10);
  }
  if (c > 0) {
    ans = c + ans;
  }
  return ans;
}
function multiOneBit(x, y) {
  let ans = '';
  let c = 0;
  for (let i = x.length - 1; i >= 0; i--) {
    const cur = Number(x[i]) * Number(y) + c;
    ans = (cur % 10) + ans;
    c = Math.floor(cur / 10);
  }
  if (c > 0) {
    ans += c;
  }g
  return ans;
}
function multi(x, y) {
  let ans = '0';
  for (let i = y.length - 1; i >= 0; i--) {
    ans = add(ans, multiOneBit(x, y[i]));
  }
  return ans;
}
