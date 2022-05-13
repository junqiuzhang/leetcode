/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let c = 0;
  let ans = '';
  while (i >= 0 || j >= 0) {
    const numA = a[i] ? Number(a[i]) : 0;
    const numB = b[j] ? Number(b[j]) : 0;
    switch (numA + numB + c) {
      case 0:
        c = 0;
        ans = '0' + ans;
        break;
      case 1:
        c = 0;
        ans = '1' + ans;
        break;
      case 2:
        c = 1;
        ans = '0' + ans;
        break;
      default:
        c = 1;
        ans = '1' + ans;
        break;
    }
    i--;
    j--;
  }
  if (c) {
    ans = c + ans;
  }
  return ans;
}
