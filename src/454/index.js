/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  function getSumMap(A, B) {
    const ABSumMap = new Map();
    let a;
    let b;
    for (let i = 0; i < A.length; i++) {
      a = A[i];
      for (let j = 0; j < B.length; j++) {
        b = B[j];
        if (!ABSumMap.get(a + b)) {
          ABSumMap.set(a + b, 1);
        } else {
          ABSumMap.set(a + b, ABSumMap.get(a + b) + 1);
        }
      }
    }
    return ABSumMap;
  }
  const ABSumMap = getSumMap(A, B);
  const CDSumMap = getSumMap(C, D);
  let res = 0;
  ABSumMap.forEach((val, key) => {
    if (CDSumMap.get(-key)) {
      res += val * CDSumMap.get(-key);
    }
  })
  return res;
};