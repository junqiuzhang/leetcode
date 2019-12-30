/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xXORy = x ^ y;
  let temp;
  let res = 0;
  for (let i = 0; i < 32; i++){
    temp = xXORy >> i;
    temp &= 1;
    res += temp;
  }
  return res;
};
