/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  const res = [];
  const quinaryMap = [2, 4, 3, 1];
  for (let i = 1; i <= A.length; i++) {
    let sum = 0;
    let subA = A.slice(0, i).reverse();
    sum += subA[0];
    for (let i = 1; i < subA.length; i++) {
      if (subA[i]) {
        sum = (sum + quinaryMap[(i - 1) % 4]) % 5;
      }
    }
    if (sum === 0) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
};
