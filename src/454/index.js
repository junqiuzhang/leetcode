/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  let ABSumMap = new Map();
  let CDSumMap = new Map();
  let a;
  let b;
  let c;
  let d;
  let sumAB;
  let sumCD;
  let countAB;
  let countCD;
  for (let i = 0; i < A.length; i++) {
    a = A[i];
    for (let j = 0; j < B.length; j++) {
      b = B[j];
      sumAB = a + b;
      countAB = ABSumMap.get(sumAB);
      if (!countAB) {
        ABSumMap.set(sumAB, 1);
      } else {
        ABSumMap.set(sumAB, countAB + 1);
      }
    }
  }
  for (let i = 0; i < C.length; i++) {
    c = C[i];
    for (let j = 0; j < D.length; j++) {
      d = D[j];
      sumCD = c + d;
      countCD = CDSumMap.get(sumCD);
      if (!countCD) {
        CDSumMap.set(sumCD, 1);
      } else {
        CDSumMap.set(sumCD, countCD + 1);
      }
    }
  }
  let res = 0;
  ABSumMap.forEach((val, key) => {
    if (CDSumMap.get(-key)) {
      res += val * CDSumMap.get(-key)
    }
  })
  return res;
};